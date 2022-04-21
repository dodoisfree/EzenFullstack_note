/**
 * 프로그램 시작점.
 * - 향후 Redux 라는 패키지를 사용하기 전까지는 특별한 작업은 안함.
 */

// 리액트의 기본을 구성하는 패키지 참조
import React from 'react';

// 리액트가 DOM을 구성하기 위한 기능을 참조
import ReactDOM from 'react-dom/client';

// 이 소스파일(index.js)과 동일한 위치의 App.js("./App")를 App이라는 이름으로 가져온다.
import App from './App';

/** 컴포넌트 페이지에 렌더링한다. */
// App.js에서 정의한 `App`이라는 이름의 컴포넌트를 HTML 태그처럼 사용한다.
// -> <React.StrictMode> 이 적용되어 있는 경우, 선언만 하고 사용되지 않는 변수들에 대한 경고 메시지가 브라우저 콘솔에 표시된다.
//    개발용이므로 최종 빌드시에는 제거하는 것이 좋다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
