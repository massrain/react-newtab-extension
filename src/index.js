import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import "./index.css";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);