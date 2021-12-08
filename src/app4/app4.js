import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page from "./navigation/Page";

function App4(props) {
  const routes = props.routes;
  const Footer = routes[routes.length - 1].component;
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {
          routes.map(function (route, index) {
            if (routes.length == 20) {

            }
            return (
              <Route key={route.path} path={route.path}>
                <Page route={route} {...props}>
                  
                </Page>
              </Route>
            )
          })
        }
      </Switch>
    </BrowserRouter>

  );
}

export default App4;
