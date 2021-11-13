import React, {useState, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {TaskComponentsContext} from '../../../global_state_management/task2ComponentsProvider';
import NavigationBar from './navBarTask2';

import Home from './pages/home';
import About from './pages/about';
import Users from './pages/users';
import Login from './pages/login';


function MainTask2(props) {
  // const [value] = useContext(TaskComponentsContext);
  const [routes, setRoutes] = useContext(TaskComponentsContext);

  return (
    <>
      <Router>
        <div className="main_task_2">
          <section className="border-end bg-white nav_bar_2">
              <div className="sidebar-heading border-bottom bg-light text-center">
                <NavigationBar {...props}/>
              </div>

          </section>
            
          <section className="main_task_2_container">
            <Switch>
            
              {
                
                routes.map((route, index) => {
                  return (
                    <Route key={index}
                        path={`${props.match.path}${route.path}`} 
                        exact={route.exact}>
                      <route.component.type  {...props} sectionTask2={route.component.props}/>
                      {console.log(`MainTask2:${props.match.path}${route.path}`)}
                    </Route>
                  )})
            }
            </Switch>
          </section>
        </div>
      </Router>
    </>
  );
};


export default MainTask2;