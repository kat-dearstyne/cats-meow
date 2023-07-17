// Import necessary libraries and components
import React from 'react'; // Import the React library
import ReactDOM from 'react-dom/client'; // Import the ReactDOM library for rendering React components
import App from './App'; // Import the main App component;

// Import necessary stylesheets for the application
import "../src/styles/common.css";
import "../src/styles/navbar.css";
import "../src/styles/news.css";
import "../src/styles/cats.css";
import "./styles/dashboard.css";

// Get the root DOM node in which the React application will be attached
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root DOM node.
// React.StrictMode will highlight potential issues in the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
