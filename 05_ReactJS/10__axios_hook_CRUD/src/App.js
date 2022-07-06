import React from 'react';
import { Routes, Route } from "react-router-dom";
import GradeAdd from './pages/GradeAdd';
import GradeEdit from './pages/GradeEdit';
import GradeList from './pages/GradeList';

const App = () => {
  return (
    <div>
      <h1>10-Axios_Hooks_CRUD</h1>

      <Routes>
        <Route path="/" exact element={<GradeList />} />
        <Route path="/add" element={<GradeAdd />} />
        <Route path="/edit/:id" element={<GradeEdit />} />
      </Routes>
    </div>
  );
};

export default App;