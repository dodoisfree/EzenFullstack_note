import React from 'react';
import ReactDOM from 'react-dom/client';
import Meta from './Meta';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Meta />
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
