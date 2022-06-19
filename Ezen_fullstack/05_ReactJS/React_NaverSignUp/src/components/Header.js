import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";

const HeaderCss = styled.div`
  width: 100%;
  height: 124px;
  h1 {
    display: block;
    width: 768px;
    margin: 0 auto;
    padding: 60px 0px 20px;
    overflow: hidden;
  }
  a {
    display: block;
    background: url(${logo}) no-repeat;
    background-size: cover;
    width: 240px;
    height: 44px;
    margin: 0 auto;
    text-indent: -9999px;
  }
`;

const Header = () => {
  return (
    <HeaderCss>
      <h1>
        <a href="https://www.naver.com/">네이버 홈</a>
      </h1>
    </HeaderCss>
  );
};

export default Header;
