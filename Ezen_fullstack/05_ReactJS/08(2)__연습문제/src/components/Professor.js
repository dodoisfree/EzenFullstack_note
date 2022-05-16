import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const Professor = ({ deptno }) => {
  const [professor, setProfessor] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        setLoading(true);

        try {
          const response = await axios.get(
            `http://localhost:3001/professor?deptno=${deptno}`
          );
          setProfessor(response.data);
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      })();
    }, 500);
  }, [deptno]);

  return (
    <div>
      <Spinner visible={loading} />
      <h2>교수 목록</h2>
      <table border="1">
        <thead>
          <tr>
            <th>교수번호</th>
            <th>이름</th>
            <th>아이디</th>
            <th>직급</th>
            <th>급여</th>
            <th>입사일</th>
            <th>보직수당</th>
            <th>소속학과번호</th>
          </tr>
        </thead>
        <tbody>
          {professor.map((v, i) => (
            <tr key={i} align="center">
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.userid}</td>
              <td>{v.position}</td>
              <td>{v.sal}</td>
              <td>{v.hiredate.substring(0, 10)}</td>
              <td>{v.comm}</td>
              <td>{v.deptno}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(Professor);
