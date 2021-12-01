import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page from "./navigation/Page";

function App4({ routes }) {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {
          routes.map(function (route, index) {
            console.log('App4',index)
            return (
              <Route key={route.path} path={route.path}>
                <Page route={route} >

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
