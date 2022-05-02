import React from "react";
import styled from "styled-components";
import Main from "../components/Main";
import Side from "../components/Side";

const C_cover = styled.div`
  max-width: 1200px;
  margin: auto;
  background-color: #eee;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`;

const Content = () => {
  return (
    <section className="content">
      <C_cover>
      <Side />
      <Main />
      </C_cover>
    </section>
  );
};

export default Content;
