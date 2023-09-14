/* eslint-disable no-unused-vars */
import React from 'react';
import { StrictMode } from 'react'; // Import StrictMode
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import App from './App'; // Import your main App component (adjust the path as needed)
import './index.css'; // Import your CSS (adjust the path as needed)

const root = document.getElementById('root');
const rootInstance = createRoot(root);

rootInstance.render(
  <StrictMode>
    <App />
  </StrictMode>
);
