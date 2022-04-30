import React from "react";
import contact from "../img/contact.png";
import styled from "styled-components";

const Cntc = styled.div`
  img {
    position: absolute;
    top: 2600px;
    left: 400px;
  }

  .bt1,
  .bt2,
  .bt3,
  .bt4 {
    font-size: 15px;
    padding-left: 15px;
    width: 1100px;
    height: 45px;
    border: 0;
    border-bottom: 1px solid #bbb;
  }

  .bt1 {
    position: absolute;
    top: 2850px;
    left: 410px;
  }

  .bt2 {
    position: absolute;
    top: 2920px;
    left: 410px;
  }

  .bt3 {
    position: absolute;
    top: 2990px;
    left: 410px;
  }

  .bt4 {
    position: absolute;
    top: 3060px;
    left: 410px;
  }

  .bt5 {
    font-size: 15px;
    line-height: 40px;
    border: 0px;
    width: 130px;
    position: absolute;
    top: 3150px;
    left: 410px;
  }
`;

const Contact = () => {
  return (
    <Cntc>
      <img src={contact} alt="contact" />
      <input className="bt1" type="text" placeholder="Name" />
      <input className="bt2" type="text" placeholder="How many people" />
      <input className="bt3" type="datetime-local" />
      <input className="bt4" type="text" placeholder="Message \ Special requirements" />
      <input className="bt5" type="submit" value="SEND MESSAGE" />
    </Cntc>
  );
};

export default Contact;
