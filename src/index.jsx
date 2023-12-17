import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = document.getElementById("root");
const rootInstance = ReactDOM.createRoot(root);

rootInstance.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
