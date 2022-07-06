import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import Weather from './Weather';

const App = () => {
  return (
    <div>
      <h1>주간날씨</h1>
      <hr />

      <nav>
        <Link to="/waether/mon">월</Link>&nbsp;|&nbsp;
        <Link to="/waether/tue">화</Link>&nbsp;|&nbsp;
        <Link to="/waether/wed">수</Link>&nbsp;|&nbsp;
        <Link to="/waether/thu">목</Link>&nbsp;|&nbsp;
        <Link to="/waether/fri">금</Link>&nbsp;|&nbsp;
        <Link to="/waether/sat">토</Link>&nbsp;|&nbsp;
        <Link to="/waether/sun">일</Link>&nbsp;|&nbsp;
      </nav>

      <Routes>
        <Route path='/waether/:day' element={<Weather/>} />
      </Routes>
    </div>
  );
};

export default App;
