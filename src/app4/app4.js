import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page from "./navigation/Page";

function App4({ routes }, props) {

  const Footer = routes[routes.length - 1].component;
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* {console.log('App4', routes[19].component)} */}
      <Switch>
        {
          routes.map(function (route, index) {
            if (routes.length == 20) {

            }
            return (
              <Route key={route.path} path={route.path}>
                <Page route={route} {...props}>
                  <Footer route={route}/>

                </Page>
              </Route>
            )
          })
        }
      </Switch>
      {/* 
      <Footer>

      </Footer> 
      */}
    </BrowserRouter>

  );
}

export default App4;
