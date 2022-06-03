import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInfo } from "../slices/Covid19Slice";
import { useParams } from "react-router-dom";
import { useQueryString } from "../hooks/useQueryString";
// import styled from "styled-components";
import dayjs from "dayjs";

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import LineChartView from "../components/LineChartView";
import useMounterdRef from "../hooks/useMounterdRef";

const covid19 = memo(() => {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.covid19);
  const { date_gte, date_lte } = useQueryString();
  const [srtDate, setSrtDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const { option } = useParams();
  const mountedRef = useMounterdRef();
  const [chartData, setChartData] = React.useState();

  React.useEffect(() => {
    setSrtDate(String(dayjs(date_gte).format("YYYY-MM-DD") + "T00:00:00Z"));
    setEndDate(String(dayjs(date_lte).add(+1, 'd').format("YYYY-MM-DD") + "T00:00Z"));
    dispatch(
      getInfo({
        date: `date_gte=${srtDate}&date_lte=${endDate}`,
        option: option,
      })
    );
  }, [date_gte, date_lte, dispatch, endDate, option, srtDate]);


  React.useEffect(() => {
    if (mountedRef.current) {
      const newData = {
        confirmed: ['confirmed'],
        confirmed_acc: ['confirmed_acc'],
        active: ['active'],
        released: ['released'],
        released_acc: ['released_acc'],
        death: ['death'],
        death_acc: ['death_acc'],
      };

      data.forEach((v, i) => {
        newData.confirmed.push(v.confirmed);
        newData.confirmed_acc.push(v.confirmed_acc);
        newData.active.push(v.active);
        newData.released.push(v.released);
        newData.released_acc.push(v.released_acc);
        newData.death.push(v.death);
        newData.death_acc.push(v.death_acc);
      });
      setChartData(newData);
    }
  }, [data, mountedRef]);

  return (
    <div>
      <Spinner visible={loading} />

      {error ? (
        <ErrorView error={error} />
      ) : (
        data && (
          <div>
            <LineChartView option={option} chartData={chartData} />
          </div>
        )
      )}
    </div>
  );
});

export default covid19;
