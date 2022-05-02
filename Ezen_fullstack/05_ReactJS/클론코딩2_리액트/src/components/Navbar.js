import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
    width: 100%;
    height: 55px;
    background-color: white;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    overflow: hidden;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    font-size: 15px;
    .link {
      text-decoration: none;
      color: black;
      letter-spacing: 4px;
      line-height: 55px;
      padding: 0 16px;
      &:first-child {
        margin-left: 15px;
      }
      strong {
        margin-right: 10px;
      }
      &:hover {
        background-color: #bbb;
      }
      &:active {
        background-color: #bbb;
      }
    }

    .right {
      margin-left: auto;
      display: flex;
      margin-right: 15px;
    }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink className="link" to="/home"><strong>BR</strong>Architects</NavLink>
      <div className="right">
        <NavLink className="link" to="/projects">Projects</NavLink>
        <NavLink className="link" to="/about">About</NavLink>
        <NavLink className="link" to="/contact">Contact</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
