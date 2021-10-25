import React, {useContext, Component } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderNavigationMenuProvider from './state_management/header_navigation_menu';
import FrontPagesComponentsProvider from './state_management/front_pages_components';
import {FrontPagesComponentsContext} from './state_management/front_pages_components';

import Header from "./header";
import Home from "./home" ;
import ContactUs from './contact';
import MainTask1 from './task_1/mainTask1';
import MainTask2 from './task_2/mainTask2';
import MainTask3 from './task_3/mainTask3';
import MainTask4 from "./task_4/mainTask4";
import MainTask5 from "./task_5/mainTask5";

import Footer from "./footer";

const RouteComponents = [
      {
        Path: '/',
        Component: Home,
        Title: 'Home page',
        AuthRequired: true
    },{
      Path: '/contact-us',
      Component: ContactUs,
      Title: 'Contact us page',
      AuthRequired: true
    },{
        Path: '/task-1',
        Component: MainTask1,
        Title: 'Task 1 page',
        AuthRequired: true
    },{
        Path: '/task-2',
        Component: MainTask2,
        Title: 'Task 2 page',
        AuthRequired: true
    },{
        Path: '/task-3',
        Component: MainTask3,
        Title: 'Task 3 page',
        AuthRequired: true
    },{
        Path: '/task-4',
        Component: MainTask4,
        Title: 'Task 4 page',
        AuthRequired: true
    },{
      Path: '/task-5',
      Component: MainTask5,
      Title: 'Task 5 page',
      AuthRequired: true
    }
  ];

 function Container(props) {
  //  const [categories, setCategories] = useContext(FrontPagesComponentsContext);

    return (
    <>
      <BrowserRouter >
        <HeaderNavigationMenuProvider>
          <Header linkData={"value"}/>
        </HeaderNavigationMenuProvider>
          <div className="navbar container-fluid"> </div>
          <div className="contentWrapper container-fluid">
            <div className="content border ">
              <Switch>
                  {/* 
                  <Route path="/"  exact component={Home} />
                  <Route path="/contact-us" component={ContactUs}/>

                  <Route path="/Task-1" component={MainTask1}/>
                  <Route path="/Task-2" component={MainTask2}/>
                  <Route path="/Task-3" component={MainTask3}/>
                  <Route path="/Task-4" component={MainTask4}/>
                  <Route path="/Task-5" component={MainTask5}/> */
                  }
                  {/* <FrontPagesComponentsProvider>
                  {console.log("FrontPagesComponentsProvider:",value)}
                  </FrontPagesComponentsProvider> */}
                  {
                      RouteComponents.map(({Path,Component},key) => {
                        return(
                            <Route exact path={Path} component={Component} key={key} />
                            // <Route exact key={key} path={Path} render={(props) => <Component {...props} />} />
                            
                        )
                      })
                    }
                
                  
                  {/*<Route path="/Task-2" component={()=> <Sitemap  authorized={false}/>} />*/}
              </Switch>
            </div>
          </div>
      </BrowserRouter>
      <Footer/>
    </>
    );

}


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
