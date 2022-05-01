import React from "react";
import Navbar from "./Navbar";
import hamburger from "../img/hamburger.jpg";
import styled from "styled-components";

const Burger = styled.div`
  .img1 {
    height: auto;
    width: 1550px;
    position: relative;
    left: 130px;
    overflow: hidden;
  }
  .le {
    display: block;
    position: absolute;
    top: 705px;
    left: 150px;
    font-size: 40px;
    font-weight: 300;
    color: #666;
    letter-spacing: 4px;
  }
`;

const Header = () => {
  return (
    <div>
      <Navbar />
      <Burger>
        <img className="img1" src={hamburger} alt="햄버거사진" />
        <h1 className="le">Le Catering</h1>
      </Burger>
    </div>
  );
};

export default Header;
