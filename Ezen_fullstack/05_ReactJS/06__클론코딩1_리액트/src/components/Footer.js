import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  width: 100%;
  height: 120px;
  line-height: 120px;
  background-color: #eee;
  position: absolute;
  top: 3280px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  a {
    color: black;
  }
`;

const Footer = () => {
  return (
    <Foot>
      Powered by&nbsp;<a href="https://www.w3schools.com/w3css/default.asp">w3.css</a>
    </Foot>
  );
};

export default Footer;
