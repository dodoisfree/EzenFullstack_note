import React, { useEffect } from "react";

const App = () => {
  const [rowNum, setRowNum] = React.useState(0);
  //useRef
  const Result = React.useRef();

  //useState
  const onRownumChange = (e) => {
    setRowNum(e.currentTarget.value);
  };

  //useEffect
  useEffect(() => {
    let star = "";

    for (let i = 0; i < rowNum; i++) {
      for (let j = 0; j <= i; j++) {
        star += "*";
      }
      star += "<br/>";
      Result.current.innerHTML = star;
    }
  }, [rowNum]);

  return (
    <div>
      <h1>Eaxm07</h1>
      <p>useState, useEffect, useRef를 사용한 별찍기 구현</p>
      <hr />
      <label htmlFor="rowNum">rowNum : </label>
      <input id="rowNum" type="text" value={rowNum} onChange={onRownumChange} />
      <hr />
      <div ref={Result}></div>
    </div>
  );
};

export default App;