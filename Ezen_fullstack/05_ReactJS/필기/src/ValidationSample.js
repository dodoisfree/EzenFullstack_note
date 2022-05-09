import React, { useState } from "react";
import "./ValidationSample.css";

const ValidationSample = () => {
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);
  const [validated, setValidated] = useState(false);
  const input = React.useRef();

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleButtonClick = () => {
    setClicked(true);
    setValidated(password === "0000");
    input.current.focus();
  };

  return (
    <div>
      {/* 2. 해당 변수를 ref를 달고자 하는 요소에 ref props로 넣어 주면 ref 설정 완료. */}
      <input type="password" value={password} onChange={handleChange} ref={input} 
      className={clicked ? (validated ? 'success' : 'failure') : ''} />
      <button onClick={handleButtonClick}>검증하기</button>
    </div>
  );
};

export default ValidationSample;
