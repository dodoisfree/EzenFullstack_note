import React, { useState } from "react";

const EventPractice = () => {
  /** onChange라는 함수가 input 태그 두개에 동시에 걸려 있고, name을 다르게 주어서,
   *  어떤 input 태그에서 값이 변경되냐에 따라 어떤 상태값을 적용할지 바뀌게 코드를 짬.
   */
  
  //  상태값이 JSON 형태로 구성되어 있기에, 하나의 form 값에 여러 하위 값 포함가능.
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;   // 상태값을 비구조 문법으로 분리
  const onChange = (e) => {
    const nextForm = {
      ...form,                          // 기존의 form 내용을 이 자리에 복사
      [e.target.name]: e.target.value,  // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);                  // 변경된 내용을 setter에 전달
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
