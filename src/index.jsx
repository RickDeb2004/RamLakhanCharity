import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component (adjust the path as needed)
// import './index.css'; // Import your CSS (adjust the path as needed)

const root = document.getElementById('root');
const rootInstance = ReactDOM.createRoot(root);

rootInstance.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
