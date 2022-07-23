import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import ProfessorList from './pages/ProfessorList';
import ProfessorAdd from './pages/ProfessorAdd';
import ProfessorEdit from './pages/ProfessorEdit';

const App = memo(() => {
    return (
        <div>
            <h1>Redux-CRUD</h1>

            <hr/>

            <Routes>
                <Route path='/' exapt element={<ProfessorList />} />
                <Route path='/professorAdd' element={<ProfessorAdd />} />
                <Route path='/ProfessorEdit/:profno' exapt element={<ProfessorEdit />} />
            </Routes>
        </div>
    );
});

export default App;