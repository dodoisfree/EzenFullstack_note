import React from "react";
import Data from "../Data";
import styled from "styled-components";

const Project = styled.div`
  width: 80%;
  height: auto;
  margin: 44px auto;
  overflow: hidden;

  p {
    font-size: 24px;
    height: 30px;
    padding: 16px 0px;
    margin: 10px 0px;
    font-family: "Segoe UI", Arial, sans-serif;
    border-bottom: 1px solid #eee;
  }
  .photo {
    width: 100%;
    height: auto;
    margin-top: 13px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    span {
      font-family: Verdana, sans-serif;
      font-size: 15px;
      background-color: black;
      color: white;
      display: block;
      width: 150px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      z-index: 99;
      position: relative;
      top: 35px;
    }
    img {
      width: 363px;
      height: 241px;
    }
  }
`;

const Projects = () => {
  const { project } = Data;

  return (
    <Project>
      <p>Projects</p>

      <div className="photo">
        {project.map((v, i) => {
          return (
            <div key={i}>
              <span>{v.subject}</span>
              <img src={v.img} alt="집 사진들" />
            </div>
          );
        })}
      </div>
    </Project>
  );
};

export default Projects;
