import React, { memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryString } from "../hooks/useQueryString";
import styled from "styled-components";
import MenuLink from "./MenuLink";
import dayjs from "dayjs";

const Form = styled.form`
  position: sticky;
  display: flex;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  margin: 0;
  margin-bottom: 20px;

  input,
  button {
    display: block;
    margin-right: 5px;
    font-size: 16px;
    padding: 0 10px;
    height: 30px;
  }

  button {
    width: 70px;
    height: auto;
    flex: none;
  }
`;

const Top = memo(() => {
  const navigate = useNavigate();

  const { date_gte, date_lte } = useQueryString();
  const [period, setPeriod] = useState();
  const [srtDate, setSrtDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  const onSearchSubmit = useCallback(
    (e) => {
      e.preventDefault();
      let date = e.target.date;
      navigate(`/covid19?date_gte=${date[0].value}&date_lte=${date[1].value}`);
    },
    [navigate]
  );

  useEffect(() => {
    setSrtDate(String(dayjs(date_gte).format("YYYY-MM-DD")));
      setEndDate(String(dayjs(date_lte).format("YYYY-MM-DD")));
      setPeriod(String(`date_gte=${srtDate}&date_lte=${endDate}`));
  }, [date_gte, date_lte, endDate, srtDate]);
  return (
    <div>
      <h1>Covid19 현황</h1>
      <Form onSubmit={onSearchSubmit}>
        <input type="date" name="date" defaultValue={date_gte} />~
        <input type="date" name="date" defaultValue={date_lte} />
        <button type="submit">검색</button>
      </Form>

      {period && (
        <nav>
          <MenuLink to={`/confirmed?${period}`}>일일확진자</MenuLink>
          <MenuLink to={`/confirmed_acc?${period}`}>누적확진자</MenuLink>
          <MenuLink to={`/active?${period}`}>격리환자</MenuLink>
          <MenuLink to={`/released?${period}`}>격리해제</MenuLink>
          <MenuLink to={`/released_acc?${period}`}>누적격리해제</MenuLink>
          <MenuLink to={`/death?${period}`}>사망자</MenuLink>
          <MenuLink to={`/death_acc?${period}`}>누적사망자</MenuLink>
        </nav>
      )}
    </div>
  );
});

export default Top;
