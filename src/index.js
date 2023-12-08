// App.js or index.js
import React from 'react';
import ReactDOM from 'react-dom';

import './tailwind.css'; // Import your tailwind.css file

import App from './App';


const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
ReactDOM.createRoot(root).render(rootElement);
