import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const H_cover = styled.div`
  .jumbotron {
    padding: 80px;
    text-align: center;
    background: #1abc9c;
    color: white;
  }

  .jumbotron h1 {
    font-size: 40px;
  }

  .navbar {
    overflow: hidden;
    background-color: #333;
    position: sticky;
  }

  .navbar > div {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .navbar div .link {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
  }

  .navbar .link:last-child {
    margin-left: auto;
  }

  .navbar .link:hover {
    background-color: #ddd;
    color: black;
  }

  .navbar .link.active {
    background-color: #666;
    color: white;
  }
`;

const Header = () => {
  
  return (
    <header className="header">
      <H_cover>
        <div className="jumbotron">
          <h1>My Website</h1>
          <p>A <b>responsive</b> website created by me.</p>
        </div>
        <nav className="navbar">
          <div>
            <NavLink className="link" to="/home">Home</NavLink>
            <NavLink className="link" to="/link1">Link1</NavLink>
            <NavLink className="link" to="/link2">Link2</NavLink>
            <NavLink className="link" to="/link3">Link3</NavLink>
          </div>
        </nav>
      </H_cover>
    </header>
  );
};

export default Header;
