import React from "react";
import styled from "styled-components";

const Lower = styled.div`
  width: 100%;
  height: 80px;
  line-height: 80px;
  background-color: black;
  margin: 0 auto;
  font-size: 15px;
  text-align: center;
  color: white;
  a {
    color: white;
  }
`;

const Footer = () => {
  return (
    <Lower>Powered by <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a></Lower>
  );
};

export default Footer;
