import React, { memo } from "react";
import { useQueryString } from "../hooks/useQueryString";
import styled from 'styled-components';
import dayjs from "dayjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartCss = styled.div`
  width: 80%;
  height: 60%;


`;


const LineChartView = memo(({ option, chartData }) => {
  const { date_gte, date_lte } = useQueryString();
  const [period, setPeriod] = React.useState([]);
  const { confirmed,  confirmed_acc, active, released, released_acc, death, death_acc } = chartData;
  
  React.useEffect(() => {
    const srtDate = new Date(date_gte);
    let result = [];
    while (srtDate <= new Date(date_lte)) {
      let fmDate = new dayjs(srtDate).add(-1, "d").format("MM/DD");
      result.push(fmDate);
      srtDate.setDate(srtDate.getDate() + 1);
    }
    setPeriod(result);
  }, [date_gte, date_lte]);

  // console.log(chartData);

  const options = {
    indexAxis: "x",
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  const [optionV, setOptionV] = React.useState({});

  React.useEffect(() => {
    setOptionV({
      a: option === confirmed[0],
      b: option === confirmed_acc[0],
      c: option === active[0],
      d: option === released[0],
      e: option === released_acc[0],
      f: option === death[0],
      g: option === death_acc[0],
    });
  }, [active, confirmed, confirmed_acc, death, death_acc, option, released, released_acc]);
  const data1 = {
    labels: period,
    datasets: [
      {
        label: "명",
        backgroundColor: "#0066ff44",
        borderColor: "#0066ff",
        data: optionV.a ? confirmed : optionV.b ? confirmed_acc : optionV.c ? active : 
        optionV.d ? released : optionV.e ? released_acc : optionV.f ? death : optionV.g ? death_acc : null,
      },
    ],
  };

  return (
    <ChartCss>
       <Line data={data1} options={options}></Line>;
    </ChartCss>
  );
});

LineChartView.defaultProps = {
  chartData: {
    confirmed: [],
    confirmed_acc: [],
    active: [],
    released: [],
    released_acc: [],
    death: [],
    death_acc: [],
  },
};

export default LineChartView;
