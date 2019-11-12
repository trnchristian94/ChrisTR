// src/index.tsx
import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import './styles/index.scss';
import App from './App';
import Banner from "Banner/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <App />,
  document.getElementById("app"),
);