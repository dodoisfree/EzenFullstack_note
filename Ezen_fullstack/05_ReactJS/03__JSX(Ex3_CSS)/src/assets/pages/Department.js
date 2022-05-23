import React from "react";
import Myschool from "../../Myschool";
import DepartmentSub from "../components/DepartmentSub";
import '../css/table.css';
import tableModule from '../css/table.module.css';

const Department = () => {
    const {department} = Myschool;
  return (
    <div>
      <table className="table" border="1">
        <thead>
          <tr className={tableModule.departTr}>
            <th>학과번호</th>
            <th>학과이름</th>
            <th>위치</th>
          </tr>
        </thead>
        <tbody>
            {department.map((v, i) => {
                return (
                    <DepartmentSub key={i} id={v.id} dname={v.dname} loc={v.loc} />
                );  
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Department;
