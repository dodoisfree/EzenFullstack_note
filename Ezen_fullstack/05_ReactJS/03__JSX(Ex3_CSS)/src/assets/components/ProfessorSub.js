import React from 'react';
import tableModule from '../css/table.module.css';

const ProfessorSub = ({id, name, userid, position, sal, hiredate, comm, deptno}) => {

  
    return (
    <tr className='profTr2'>
      <td>{id}</td>
      <td>{name}</td>
      <td>{userid}</td>
      <td>{position}</td>
      <td>{sal}</td>
      <td>{hiredate.substring(0, 10)}</td>
      <td>{comm}</td>
      <td>{deptno}</td>
    </tr>
    );
};

export default ProfessorSub;