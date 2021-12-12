import React from "react";
import ReactDOM from "react-dom";

import App4 from "./app4";
import { routes, routes_topics } from "./routes";
import { generateAppRoutes } from "./navigation/utils";

const appRoutes = generateAppRoutes(routes);
const topicsPath = generateAppRoutes(routes_topics);

ReactDOM.render(<App4 routes={appRoutes} topics_path={topicsPath}/>, document.getElementById("app"));

