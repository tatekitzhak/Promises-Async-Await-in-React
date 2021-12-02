import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page from "./navigation/Page";

function App4({ routes }, props) {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {console.log('App4',routes)}
      <Switch>
        {
          routes.map(function (route, index) {
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
