import React from "react";
import styled from "styled-components";

const MainImg = styled.div`
  display: block;
  width: 1500px;
  margin: 0 auto;
  position: relative;
  background-size: cover;

  span {
    font-family: "Segoe UI", Arial, sans-serif;
    font-size: 36px;
    letter-spacing: 4px;
    color: white;
    position: absolute;
    top: 385px;
    left: 600px;
    strong {
      font-family: "Segoe UI", Arial, sans-serif;
      display: inline-block;
      width: 86px;
      height: 63px;
      background-color: #111;
      opacity: 0.8;
      line-height: 63px;
      text-align: center;
      margin-right: 13px;
    }
  }
`;

const Main = () => {
  return (
    <MainImg><img src="/img/architect.jpg" alt="메인_배경사진" />
      <span><strong>BR</strong>Architects</span>
    </MainImg>
  );
};

export default Main;
