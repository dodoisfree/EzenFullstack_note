import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Top from './components/Top';
import Covid19 from './pages/Covid19';

const App = memo(() => {
  return (
    <div>
      <Top />

      <Routes>
        <Route path='/:option' element={<Covid19 />} />
      </Routes>
    </div>
  );
});

export default App;