import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import DepartmentList from './pages/DepartmentList';
import DepartmentAdd from './pages/DepartmentAdd';
import DepartmentEdit from './pages/DepartmentEdit';

const App = memo(() => {
    return (
        <div>
            <h1>Redux-CRUD</h1>

            <hr/>

            <Routes>
                <Route path='/' exapt element={<DepartmentList />} />
                <Route path='/department_add' exapt element={<DepartmentAdd />} />
                <Route path='/department_edit/:deptno' exapt element={<DepartmentEdit />} />
            </Routes>
        </div>
    );
});

export default App;