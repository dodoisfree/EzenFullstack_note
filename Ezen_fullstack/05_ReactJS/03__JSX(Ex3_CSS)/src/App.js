import React from "react";

import { Link, Routes, Route } from "react-router-dom";

import Department from "./assets/pages/Department";
import Professor from "./assets/pages/Professor";
import Student from "./assets/pages/Student";

import './assets/css/link.css';

function App() {
  const h1 = {
    fontSize: "50px",
    fontWeight: "bold",
    color: "violet",
    textAlign: "center",
  };

  return (
    <div className="screen">
      <h1 style={h1} className="title">Exam03</h1>
      <nav className="linkAll">
        <Link className="link" to="/department">학과목록</Link>
        <Link className="link" to="/professor">교수목록</Link>
        <Link className="link" to="/student">학생목록</Link>
      </nav>

      <Routes>
        <Route path="/department" element={<Department />}></Route>
        <Route path="/professor" element={<Professor />}></Route>
        <Route path="/student" element={<Student />}></Route>
      </Routes>
    </div>
  );
}

export default App;
