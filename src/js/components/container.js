import React, {useContext, Component } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderNavigationMenuProvider from './state_management/header_navigation_menu';
import FrontPagesComponentsProvider from './state_management/front_pages_components';
import {FrontPagesComponentsContext} from './state_management/front_pages_components';

import Header from "./header";
import Footer from "./footer";

 function Container(props) {
   const [frontPagesComponents, setFrontPagesComponents] = useContext(FrontPagesComponentsContext);

    return (
      <>
        <HeaderNavigationMenuProvider>
          <Header linkData={"value"}/>
        </HeaderNavigationMenuProvider>
        <div className="navbar container-fluid"> </div>
        <div className="contentWrapper container-fluid">
            <div className="content border ">
              <Switch>
                  {
                      frontPagesComponents.map(({Path,Component},key) => {
                        return(
                            <Route exact path={Path} component={Component} key={key} />
                            // <Route exact key={key} path={Path} render={(props) => <Component {...props} />} />
                            
                        )
                      })
                    }
              </Switch>
            </div>
        </div>
        <Footer/>
      </>
    );
}


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(
  <BrowserRouter>
    <FrontPagesComponentsProvider>
      <Container />
    </FrontPagesComponentsProvider>
  </BrowserRouter>

, wrapper) : false;
