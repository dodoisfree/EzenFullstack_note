import React, { memo } from 'react';
import './App.css';
import Signup from './Signup';

const App = memo(() => {
  return (
    <div>
      <Signup />
    </div>
  );
});

export default App;