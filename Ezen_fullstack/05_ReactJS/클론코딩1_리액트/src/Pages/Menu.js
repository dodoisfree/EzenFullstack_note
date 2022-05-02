import React from "react";
import styled from "styled-components";
import tablesetting from "../img/tablesetting.jpg";
import line from "../img/line.png";

const Mn = styled.div`
  .tablesetting {
    width: 500px;
    height: 750px;
    border-radius: 4px;
    position: absolute;
    top: 1660px;
    right: 415px;
    opacity: 0.7;
  }
  h1,
  .pp {
    font-family: "Playfair Display";
  }
  h1 {
    font-size: 37px;
    position: absolute;
    top: 1680px;
    left: 560px;
    letter-spacing: 4px;
  }
  .pp {
    font-size: 20px;
    position: absolute;
    top: 1730px;
    left: 410px;
    line-height: 120px;
    letter-spacing: 5px;
  }

  .ppp {
    font-size: 13px;
    position: absolute;
    top: 1780px;
    left: 410px;
    line-height: 120px;
    color: #666;
  }

  .line {
    position: absolute;
    top: 2500px;
    left: 350px;
  }
`;

const Menu = () => {
  return (
    <Mn>
      <img className="tablesetting" src={tablesetting} alt="요리2" />
      <h1>Our Menu</h1>
      <p className="pp">
        Bread Basket
        <br />
        Honey Almond Granola with Fruits
        <br />
        Belgian Waffle
        <br />
        Scrambled eggs
        <br />
        Blueberry Pancakes
        <br />
      </p>
      <p className="ppp">
        Assortment of fresh baked fruit breads and muffins 5.50
        <br />
        Natural cereal of honey toasted oats, raisins, almonds and dates 7.00
        <br />
        Vanilla flavored batter with malted flour 7.50
        <br />
        Scrambled eggs, roasted red pepper and garlic, with green onions 7.50
        <br />
        With syrup, butter and lots of berries 8.50
        <br />
      </p>
      <img className="line" src={line} alt="구분선" />
    </Mn>
  );
};

export default Menu;
