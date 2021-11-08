import React, {useContext, Component } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderNavigationMenuProvider from '../../global_state_management/header_navigation_menu';
import FrontPagesComponentsProvider from '../../global_state_management/front_pages_components';
import {FrontPagesComponentsContext} from '../../global_state_management/front_pages_components';
import TaskComponentsProvider from '../../global_state_management/task2ComponentsProvider';

import Header from "./header";
import Footer from "./footer";

function Container(props) {
   const [frontPagesComponents, setFrontPagesComponents] = useContext(FrontPagesComponentsContext);

    return (
      <>
        <HeaderNavigationMenuProvider>
          <Header value={"data"}/>
        </HeaderNavigationMenuProvider>
        <div className="navbar container-fluid"> </div>
        <div className="contentWrapper container-fluid">
            <div className="content border ">
              <TaskComponentsProvider>
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
              </TaskComponentsProvider>
              
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
