import React from "react";
import tablesetting2 from "../img/tablesetting2.jpg";
import line from "../img/line.png";
import styled from "styled-components";

const Ab = styled.div`
  h1 {
    display: block;
    position: absolute;
    top: 890px;
    right: 520px;
    font-size: 37px;
    letter-spacing: 4px;
  }
  h2 {
    display: block;
    position: absolute;
    top: 980px;
    right: 560px;
    letter-spacing: 4px;
    font-size: 18px;
    font-weight: 400;
  }

  p {
    font-size: 18px;
    font-family: "Times New Roman", Georgia, Serif;
    line-height: 27px;
  }

  .p1 {
    display: block;
    position: absolute;
    top: 1020px;
    right: 425px;
  }

  .p2 {
    display: block;
    position: absolute;
    top: 1230px;
    right: 425px;
    color: #888;
  }

  .tablesetting2 {
    width: 500px;
    height: 600px;
    border-radius: 4px;
    position: absolute;
    top: 860px;
    left: 400px;
    opacity: 0.7;
  }
  .line {
    position: absolute;
    top: 1550px;
    left: 350px;
  }
`;

const About = () => {
  return (
    <Ab>
      <h1>About Catering</h1>
      <h2>Tradition since 1899</h2>
      <p className="p1">
        The Catering was founded in blabla by Mr. Smith in lorem ipsum
        <br />
        dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit,
        <br />
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        <br />
        nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in
        <br />
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        <br />
        pariatur.We only use `seasonal ingredients.
      </p>
      <p className="p2">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        <br />
        officia deserunt mollit anim id est laborum consectetur adipiscing
        <br />
        elit, sed do eiusmod temporincididunt ut labore et dolore magna
        <br />
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        <br />
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <img className="tablesetting2" src={tablesetting2} alt="빵 사진" />
      <img className="line" src={line} alt="구분선" />
    </Ab>
  );
};

export default About;
