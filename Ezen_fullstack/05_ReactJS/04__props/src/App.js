import React from 'react';
import { Link, Routes, Route } from "react-router-dom"

import MyProps from './pages/MyProps';
import MyPropTypes from './pages/MyPropTypes';
import MyChildren from './pages/MyChildren';

import Meta from './components/Meta';

function App() {
  return (
    <div>
      {/* Route 처리를 수행하는 페이지에서 이 컴포넌트 사용시, 이 내용이 모든 페이지에 공통 적용된다. */}
      <Meta />

      <h1>04__props</h1>
      <nav>
        <Link to="/myprops">[Myprops]</Link>
        <Link to="/myproptypes">[MyPropTypes]</Link>
        <Link to="/mychildren">[MyChildren]</Link>
      </nav>
      <hr/>

      {/* Route 처리할 컴포넌트 정의 */}
      <Routes>
        <Route path='/myprops' element={<MyProps/>} />
        <Route path='/myproptypes' element={<MyPropTypes/>} />
        <Route path='/mychildren' element={<MyChildren/>} />
      </Routes>
    </div>
  );
};

export default App;
