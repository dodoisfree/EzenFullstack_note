import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Navber = styled.div`
  width: 100%;
  height: 55px;
  background-color: white;
  position: fixed;
  z-index: 999;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  display: flex;

  .link {
    font-family: "Times New Roman", Georgia, Serif;
    color: black;
    text-decoration: none;
    line-height: 55px;
    font-weight: 400;
    font-size: 15px;
    cursor: pointer;
    letter-spacing: 4px;

    &:first-child {
      margin-left: 28px;
    }
    &:hover {
      background-color: #eee;
    }
  }
  .right {
    margin-left: auto;
    margin-right: 14px;
    display: flex;
    .link {
      margin-left: 16px;
      margin-right: 16px;
    }
  }

`;

const Navbar = () => {
  return (
    <Navber>
        <Link className="link" to="/">Gourmet au Catering</Link>
        <div className="right">
        <Link className="link" to="/">About</Link>
        <Link className="link" to="/">Menu</Link>
        <Link className="link" to="/">Contact</Link>
        </div>
    </Navber>
  );
};

export default Navbar;
