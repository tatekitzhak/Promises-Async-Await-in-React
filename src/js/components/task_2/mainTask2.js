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
            {console.log("MainTask2:",routes)}
          <section className="main_task_2_container">
            <Switch>
              {/* <Route exact path={`${props.match.path}`} component={Home} />
              <Route exact path={`${props.match.path}/about`} component={About} />
              <Route exact path={`${props.match.path}/users` }component={Users} />
              <Route exact path={`${props.match.path}/login` }component={Login} /> */}
              {routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={`${props.match.path}${route.path}`} 
                    exact={route.exact}
                    children={<route.component />}
                  />
              )}
            )}
            </Switch>
          </section>
        </div>
      </Router>
    </>
  );
};


export default MainTask2;
