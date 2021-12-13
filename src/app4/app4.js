import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page from "./navigation/Page";

function App4(props) {
  const routes = props.routes;
  const topics = props.topics_path;

  
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map(function (route, index) {
            // console.log('App4:', route)
            return (
              <Route key={route.path} path={route.path}>
                
                <div className={`header`}>
                  <Page route={route} {...props}>
                  
                  </Page>
                </div>

                <div className={`home`}>
                  {/* <Page route={route} {...props}>
                  
                  </Page> */}
                </div>
              
              </Route>
            )
          }) 
        }
      </Switch>
    </BrowserRouter>

  );
}

export default App4;
