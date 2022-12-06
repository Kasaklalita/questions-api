import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bulma/css/bulma.min.css";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
