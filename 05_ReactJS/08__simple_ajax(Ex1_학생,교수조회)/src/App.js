import React, { useState, useEffect, useCallback, } from "react";
import axios from "axios";

import Student from "./components/Student";
import Professor from "./components/Professor";

const App = () => {
  const [dept, setDetp] = useState([]);
  const [deptno, setDeptno] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3001/department");
        setDetp(response.data);
        console.log(dept);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const onDeptSelect = useCallback((e) => {
    setDeptno(e.currentTarget.value);
    console.log(deptno);
  }, []);

  return (
    <div>
      <h1>Exam 09</h1>

      <hr />

      <select name="dept" onChange={onDeptSelect}>
        {dept.map((v, i) => (
          <option key={i} value={v.id} >
            {v.dname}
          </option>
        ))}
      </select>

      <Professor deptno={deptno} />
      <Student deptno={deptno} />
    </div>
  );
};

export default  React.memo(App);
