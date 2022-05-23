import React from "react";
import '../css/table.css';
import tableModule from '../css/table.module.css';

const StudentSub = ({ id, name, userid, grade, idnum, birthdate, tel, height, weight, deptno, profno, }) => {
  return (
    <tr className="studTr2">
      <td>{id}</td>
      <td>{name}</td>
      <td>{userid}</td>
      <td>{grade}</td>
      <td>{idnum.substring(0, 6)}-*******</td>
      <td>{birthdate.substring(0, 10)}</td>
      <td>{tel}</td>
      <td>{height}</td>
      <td>{weight}</td>
      <td>{deptno}</td>
      <td>{profno}</td>
    </tr>
  );
};

export default StudentSub;
