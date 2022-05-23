import React from "react";
import tableModule from '../css/table.module.css';

const DepartmentSub = ({ id, dname, loc }) => {
  return (
    <tr className="departTr2">
      <td>{id}</td>
      <td>{dname}</td>
      <td>{loc}</td>
    </tr>
  );
};

export default DepartmentSub;
