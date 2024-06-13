import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App01 from "./App01";
import { darkTheme, lightTheme } from "./them";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={darkTheme}>
    <App01 />
  </ThemeProvider>
);
