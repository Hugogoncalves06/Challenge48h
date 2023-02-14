import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Snake from './composants/Snake';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Snake />
  </React.StrictMode>
);
