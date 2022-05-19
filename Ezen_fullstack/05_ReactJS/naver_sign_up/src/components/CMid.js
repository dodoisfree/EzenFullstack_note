import React from "react";

const CMid = () => {
  return (
    <div className="privGroup">
      <div className="inputArea">
        <label htmlFor="name">
          <h3>이름</h3>
        </label>
        <span className="inputBox">
          <input id="name" className="input" type="text" />
        </span>
        <span className="alert">필수 정보입니다.</span>
      </div>
      <div className="inputArea">
        <label htmlFor="birhday">
          <h3>생년월일</h3>
        </label>
        <div className="bdayIptBox">
          <span className="inputBox">
            <input id="birhday" className="input" type="text" placeholder="년(4자)" />
          </span>
          <span className="inputBox">
            <select className="input">
              <option value="">월</option>
              {[...new Array(0 + 12)].map((v, i) => <option option key={i} value={1 + i}>{1 + i}</option>)}
            </select>
          </span>
          <span className="inputBox">
            <input id="birhday" className="input" type="text" placeholder="일" />
          </span>
        </div>
        <span className="alert">필수 정보입니다.</span>
      </div>
      <div className="inputArea">
        <label htmlFor="sex">
          <h3>성별</h3>
        </label>
        <span className="inputBox">
          <select id="sex" className="input" type="text">
            <option value="">성별</option>
            <option value="male">남자</option>
            <option value="female">여자</option>
            <option value="unchecked">선택안함</option>
          </select>
        </span>
        <span className="alert">필수 정보입니다.</span>
      </div>
      <div className="inputArea">
        <label htmlFor="email">
          <h3>
            본인 확인 이메일<span>(선택)</span>
          </h3>
        </label>
        <span className="inputBox">
          <input id="email" className="input" type="text" />
        </span>
        <span className="alert">필수 정보입니다.</span>
      </div>
    </div>
  );
};

export default CMid;
