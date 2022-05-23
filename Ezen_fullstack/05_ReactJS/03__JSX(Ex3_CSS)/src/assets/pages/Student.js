import React from "react";
import Myschool from "../../Myschool";
import StudentSub from "../components/StudentSub";

import '../css/table.css';
import tableModule from '../css/table.module.css';

const Student = () => {
  const { student } = Myschool;

  return (
    <div>
      <table className="table3" border="1">
        <thead>
          <tr className={tableModule.studTr}>
            <th>학생번호</th>
            <th>학생이름</th>
            <th>학년</th>
            <th>아이디</th>
            <th>주민번호</th>
            <th>생년월일</th>
            <th>연락처</th>
            <th>키</th>
            <th>몸무게</th>
            <th>소속학과번호</th>
            <th>담당교수번호</th>
          </tr>
        </thead>
        <tbody>
          {student.map((v, i) => {
            return (
              <StudentSub
                key={i}
                id={v.id}
                name={v.name}
                userid={v.userid}
                grade={v.grade}
                idnum={v.idnum}
                birthdate={v.birthdate}
                tel={v.tel}
                height={v.height}
                weight={v.weight}
                deptno={v.deptno}
                profno={v.profno}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
