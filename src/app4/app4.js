import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page from "./navigation/Page";

function App4(props) {
  const routes = props.routes;
  const topics = props.topics_path
  //const topics1 = [routes,topics]
  console.log('App4:', props)
  return (
    <BrowserRouter>
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
