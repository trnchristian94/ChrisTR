// src/index.tsx
import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Banner from "Banner/Banner";
import "./styles/global.scss";

ReactDOM.render(
  <div>
    <Banner name="Christian" />
  </div>,
  document.getElementById("app"),
);