import React from "react";
import styled from "styled-components";

const S_cover = styled.div`
  width: 320px;
  

  .fakeimg {
    background-color: #aaa;
    width: auto;
    padding: 20px;
    height: 60px;
  }
`;

const Side = () => {

  const fakeimg = {
    height: "200px",
  };

  const side = {
    width: "360",
    borderLeft: '1px solid #d5d5d5',
    borderRight: '1px solid #d5d5d5',
    padding: '20px',
    flex: 'none',
  };

  return (
    <div className="side" style={side}>
      <S_cover>
        <h2>About Me</h2>
        <h5>Photo of me:</h5>
        <div className="fakeimg" style={fakeimg}>Image</div>
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        <h3>More Text</h3>
        <p>Lorem ipsum dolor sit ame.</p>
        <div className="fakeimg">Image</div>
        <br />
        <div className="fakeimg">Image</div>
        <br />
        <div className="fakeimg">Image</div>
      </S_cover>
    </div>
  );
};

export default Side;
