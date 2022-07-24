/**
 * @filename    : app.js
 * @author      : 천경재 (yocasd2@gamil.com)
 * @description : 메인 페이지 (라우팅)
*/

import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import ProfessorList from './pages/ProfessorList';
import ProfessorAdd from './pages/ProfessorAdd';
import ProfessorEdit from './pages/ProfessorEdit';
import ProfessorItem from './pages/ProfessorItem';

const App = memo(() => {
    return (
        <div>
            <h1>Redux-CRUD</h1>

            <hr/>

            <Routes>
                <Route path='/' exapt element={<ProfessorList />} />
                <Route path='/professorAdd' element={<ProfessorAdd />} />
                <Route path='/ProfessorEdit/:profno' exapt element={<ProfessorEdit />} />
                <Route path='/ProfessorItem/:profno' element={<ProfessorItem />} />
            </Routes>
        </div>
    );
});

export default App;