import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/styles/common.css";
import "../src/styles/navbar.css";
import "../src/styles/news.css";
import "../src/styles/cats.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
