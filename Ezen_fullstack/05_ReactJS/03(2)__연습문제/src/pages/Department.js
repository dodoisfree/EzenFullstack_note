import React from "react";
import Myschool from "../Myschool";

const Department = () => {
  const { department } = Myschool;

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>학과번호</th>
            <th>학과이름</th>
            <th>위치</th>
          </tr>
        </thead>
        <tbody>
          {department.map((v, i) => {
            return (
              <tr>
                <td>{v.id}</td>
                <td>{v.dname}</td>
                <td>{v.loc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Department;
