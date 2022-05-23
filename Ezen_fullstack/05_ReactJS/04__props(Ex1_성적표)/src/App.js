import React from "react";
import GradeItem from "./components/GradeItem";
import GradeData from "./GradeData";

function App() {
  return (
    <div>
      <h1>성적표</h1>
      <hr />
      <table border="1">
        <thead>
          <tr>
            <th>이름</th>
            <th>학년</th>
            <th>성별</th>
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
            <th>과학</th>
            <th>총점</th>
            <th>평균</th>
          </tr>
        </thead>
        <tbody>
          {GradeData.map((v, i) => {
            return (
              <GradeItem key={i} name={v.name} grade={v.grade} sex={v.sex} kor={v.kor} eng={v.eng} math={v.math} sci={v.sci} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
