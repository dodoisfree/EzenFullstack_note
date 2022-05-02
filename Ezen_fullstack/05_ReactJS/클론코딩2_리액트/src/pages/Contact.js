import React from "react";
import styled from "styled-components";

const Info = styled.div`
    width: 1500px;
    height: auto;
    margin: 0px auto;
    margin-bottom: 5px;
  p {
    font-size: 24px;
    border-bottom: 1px solid #eee;
    line-height: 65px;
    margin: 20px 0px;
    font-family: "Segoe UI", "Arial", "sans-serif";
   
  }
  span {
    font-size: 15px;
    margin-top: 10px;
  }
  input {
    width: 99%;
    height: 35px;
    margin-top: 18px;
    font-size: 15px;
    border: 1px solid #bbb;
    padding-left: 10px;
  }
  .send {
    margin-top: 30px;
    width: 153px;
    height: 38px;
    font-size: 15px;
    border: 0px;
    background-color: black;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #ccc;
      color: black;
    }
  }
  img {
    width: 1500px;
    height: auto;
    margin-top: 50px;
  }
`;

const Contact = () => {
  return (
    <Info>
      <p>Contact</p>
      <span>Lets get in touch and talk about your next project.</span>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Subject" />
      <input type="text" placeholder="Comment" />
      <input className="send" type="submit" value="SEND MESSAGE" />
      <img src="./img/map.jpg" alt="지도"/>
    </Info>
  );
};

export default Contact;
