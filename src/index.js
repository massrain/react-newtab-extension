import React, { Suspense } from "react";
import { render } from "react-dom";

import App from "./App";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "animate.css/animate.min.css";
import "izitoast/dist/css/iziToast.min.css";
import "./translations/i18n";

import "./index.css";

render(
  <Suspense
    fallback={
      <div className="svg-load">
        <img src="/assets/site/loading.svg" className="img-fluid" alt="" />
      </div>
    }
  >
    <App />
  </Suspense>,
  document.getElementById("root")
);
