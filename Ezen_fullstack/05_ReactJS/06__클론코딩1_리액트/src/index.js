/**
 * @filename: index.js
 * @description: 프로그램 시작점, 전역 스타일(GlobalStyles)과 프로그램을 시작(App)한다.
 * @author: dodo (yocasd2@gmail.com)
 */


/** 패키지 참조 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Meta from './Meta';                   // SEO 처리 및 기본 참조 리소스 명시
import GlobalStyles from './GlobalStyles';   // 전역 스타일 정의

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Meta />
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);