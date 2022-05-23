import React from "react";
import { Routes, Route } from 'react-router-dom';

import MenuLink from "./components/MenuLink";
import News from "./pages/News";

const App = () => {
  return (
    <div>
      <h1>11(연습문제)_리덕스_뉴스목록</h1>

      <nav>
        <MenuLink to="/news">뉴스목록</MenuLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
};

export default App;
