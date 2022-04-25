import React from 'react';
import { Link, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Main from './pages/Main';
import DepartmentGet from './pages/DepartmentGet';
import DepartmentPath from './pages/DepartmentPath';
import Error404 from './pages/Error404';

function App() {
  return (
    <div>
      <h1>02-simple-spa</h1>
      <hr />

      {/* --- 링크 구성 부분 --- */}
      <nav>
        <Link to="/">[Home]</Link>
        <Link to="/about">[About]</Link>
        <Link to="/Main">[Main]</Link>

        {/* HTTP GET 파라미터를 포함하는 링크 구성 */}
        <Link to="/department_get?id=101&msg=hello">[컴퓨터공학과]</Link>
        <Link to="/department_get?id=102&msg=world">[멀티미디어학과]</Link>

        {/* PATH 파라미터를 포함하는 링크 구성 */}
        <Link to="/department_path/201/hello">[전자공학과]</Link>
        <Link to="/department_path/202/world">[기계공학과]</Link>
      </nav>

      <a href='/about'>일반 링크</a>

      {/* 페이지 역할을 할 컴포넌트를 명시하기 */}
      <Routes>
        {/* 첫 페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시해야 한다. */}
        {/* 첫 페이지로 사용되는 컴포넌트는 path에 "/"를 권장 */}
        <Route path='/' element={<Home/>} exact={true} />
        <Route path='/about' element={<About/>} />

        {/* 서브라우팅 사용 */}
        <Route path='/main/*' element={<Main/>} />

        {/* GET 파라미터 사용 */}
        <Route path='/department_get' element={<DepartmentGet/>} />

        {/* Path 파라미터는 URL 형식에 변수의 위치와 이름을 정해줘야 한다. */}
        <Route path='/department_path/:id/:msg' element={<DepartmentPath/>} />

        {/* Path 속성 없이 Route 지정 -> 지정되지 않은 모든 요청에 반응. 단 Routes블록의 맨 마지막에 배치해야 함. */}
        <Route path='/*' element={<Error404/>} />
      </Routes>
    </div>
  );
}

export default App;
