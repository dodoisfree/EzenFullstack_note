import React from "react";
import Data from "../Data";
import styled from "styled-components";

const AB = styled.div`
  width: 80%;
  height: auto;
  margin: 60px auto;

  .ab_title {
    font-size: 24px;
    height: 30px;
    border-bottom: 1px solid #eee;
    padding: 16px 0px;
    margin: 10px 0px;
    font-family: "Segoe UI", "Arial", "sans-serif";
  }

  span {
    display: block;
    margin-top: 20px;
    font-size: 15px;
    line-height: 22px;
  }

  .about {
    width: 100%;
    height: auto;
    margin-top: 50px;
    display: flex;
    img {
      width: 360px;
      height: auto;
      filter: grayscale(0.6);
    }
    .p1 {
      font-size: 24px;
      font-family: "Segoe UI", "Arial", "sans-serif";
      margin: 15px 0;
    }
    .p2 {
      font-size: 15px;
      margin: 23px 0;
      opacity: 0.6;
    }
    .p3 {
      font-size: 15px;
      line-height: 22px;
    }
    .btn {
      width: 362px;
      height: 38px;
      border: 0px;
      font-size: 15px;
      padding: 8px 16px;
      margin: 17px 0;
      cursor: pointer;
      &:hover {
        background-color: #ccc;
      }
    }
  }
`;

const About = () => {
  const { about } = Data;
  const { member } = about;

  return (
    <AB>
      <p className="ab_title">About</p>
      <span>{about.content}</span>
      <div className="about">
        {member.map((v, i) => {
          return (
            <div key={i} className="ab_content">
              <img src={v.img} alt="인물 사진" />
              <p className="p1">{v.name}</p>
              <p className="p2">{v.position}</p>
              <p className="p3">{v.desc}</p>
              <input className="btn" type="button" value="Contact" />
            </div>
          );
        })}
      </div>
    </AB>
  );
};

export default About;
