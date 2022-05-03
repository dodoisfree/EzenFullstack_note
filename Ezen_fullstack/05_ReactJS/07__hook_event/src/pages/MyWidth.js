import React from "react";
import useMyWidth from "../hooks/MyHook";

const MyWidth = () => {
  // 컴포넌트 렌더링시 콘솔에 출력된 내역 삭제하기
  React.useEffect(() => console.clear(), []);

  const myWidth = useMyWidth();

  return (
    <div>
      <h2>MyState</h2>
      <h3>windowWidth: {myWidth}</h3>
    </div>
  );
};

export default MyWidth;
