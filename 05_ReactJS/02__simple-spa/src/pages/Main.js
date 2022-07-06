import React from "react";

import { Link, Routes, Route } from "react-router-dom";

import MainSub1 from './MainSub1';
import MainSub2 from './MainSub2';

const Main = () => {
    return (
        <div>
            <h2>여기는 Main.js 파일 입니다.</h2>
            <p>SubRoute에 대한 경로 구성은 "./" 없이 상대경로만 가능합니다. (절대경로 불가)</p>

            {/* ---- 링크 구성 부분 ---- */}
            <nav>
                <Link to="sub1">[MainSub1]</Link>
                <Link to="sub2">[MainSub2]</Link>
            </nav>

            {/* ---- 페이지 역할을 할 컴포넌트 명시하기 ---- */}
            <Routes>
                {/* http://localhost:3000/main/sub1 */}
                <Route path="sub1" element={<MainSub1/>} />
                {/* http://localhost:3000/main/sub2 */}
                <Route path="sub2" element={<MainSub2/>} />
            </Routes>
        </div>
    );
};


export default Main;