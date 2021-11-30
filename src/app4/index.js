import React from "react";
import ReactDOM from "react-dom";

import App4 from "./app4";
/* import "./index.css";
import { routes } from "./routes";
import { generateAppRoutes } from "./navigation/utils";

const appRoutes = generateAppRoutes(routes); */

ReactDOM.render(<App4 routes={'appRoutes'} />, document.getElementById("app"));

