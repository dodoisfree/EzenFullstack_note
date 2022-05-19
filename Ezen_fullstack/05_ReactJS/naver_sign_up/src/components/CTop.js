import React from 'react';

const CTop = () => {
  return (
    <div className="privGroup">
      <div className="inputArea">
        <label htmlFor="id">
          <h3>아이디</h3>
        </label>
        <span className="inputBox">
          <input id="id" className="input" type="text" />
          <span>@naver.com</span>
        </span>
        <span className="alert">필수 정보입니다.</span>
      </div>
      <div className="inputArea">
        <label htmlFor="pw">
          <h3>비밀번호</h3>
        </label>
        <span className="inputBox">
          <input id="pw" className="input" type="text" />
          <span className="risk">안전</span>
        </span>
        <span className="alert">필수 정보입니다.</span>
        <label htmlFor="pw">
          <h3>비밀번호</h3>
        </label>
        <span className="inputBox">
          <input id="pwCFM" className="input" type="text" />
        </span>
        <span className="alert">필수 정보입니다.</span>
      </div>
    </div>
  );
};

export default CTop;