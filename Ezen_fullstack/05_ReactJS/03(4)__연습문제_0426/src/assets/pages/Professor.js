import React from "react";
import Myschool from "../../Myschool";
import ProfessorSub from "../components/ProfessorSub";
import '../css/table.css';
import tableModule from '../css/table.module.css';

const Professor = () => {
  const { professor } = Myschool;

  return (
    <div>
      <table className="table2" border="1">
        <thead>
          <tr className={tableModule.profTr}>
            <th>교수번호</th>
            <th>교수이름</th>
            <th>아이디</th>
            <th>직급</th>
            <th>급여</th>
            <th>입사일</th>
            <th>보직수당</th>
            <th>소속학과번호</th>
          </tr>
        </thead>
        <tbody>
          {professor.map((v, i) => {
            return (
              <ProfessorSub
                key={i}
                id={v.id}
                name={v.name}
                userid={v.userid}
                position={v.position}
                sal={v.sal}
                hiredate={v.hiredate}
                comm={v.comm}
                deptno={v.deptno}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Professor;
