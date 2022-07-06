import React from "react";

const DepartmentSub = ({id , dname , loc}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{dname}</td>
      <td>{loc}</td>
    </tr>
  );
};

export default DepartmentSub;
