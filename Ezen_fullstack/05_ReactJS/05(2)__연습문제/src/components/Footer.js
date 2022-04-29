import React from "react";
import styled from "styled-components";

const F_cover = styled.div`
  padding: 20px;
  text-align: center;
  background: #ddd;
`;

const Footer = () => {
  return (
    <footer className="footer">
      <F_cover>
      <h2>Footer</h2>
      </F_cover>
    </footer>
  );
};

export default Footer;
