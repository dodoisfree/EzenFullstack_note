/**
 * @filename: APP.js
 * @description: 화면 총 구성
 * @author: dodo (yocasd2@gmail.com)
 */


import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'; // 라우팅



const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Content/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;