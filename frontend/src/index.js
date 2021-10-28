import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import ManageTasks from "./components/ManageTasks"
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <ManageTasks/>
  </React.StrictMode>,
  document.getElementById("root")
);
