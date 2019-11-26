// src/index.tsx
import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";

import "styles/index.scss";
import App from "./App";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// i18n
import "src/i18n/i18n";
// Theme
import { ThemeProvider } from "components/theme/ThemeContext";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
