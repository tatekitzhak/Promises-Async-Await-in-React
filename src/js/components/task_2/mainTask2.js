import React, {useState, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavigationBar from './navBarTask2';

import Home from './pages/home';
import About from './pages/about';
import Users from './pages/users';
import Login from './pages/login';


function MainTask2(props) {


  return (
    <>
      <Router>
        <div className="main_task_2">
          <section className="border-end bg-white nav_bar_2">
              <div className="sidebar-heading border-bottom bg-light text-center">
                <NavigationBar {...props}/>
              </div>

          </section>
            {console.log("MainTask2:",props.match.path)
              // <Switch>
              //   <Route exact path="/side-bar-2/" component={Home} />
              //
              //   <Route exact path="/side-bar-2/:id" render={(props) => (<About {...props} post="Posts"/>)} />
              // </Switch>
          }
          <section className="main_task_2_container">
            <Switch>
              <Route exact path={`${props.match.path}`} component={Home} />
              <Route exact path={`${props.match.path}/about`} component={About} />
              <Route exact path={`${props.match.path}/users` }component={Users} />
              <Route exact path={`${props.match.path}/login` }component={Login} />
            </Switch>
          </section>
        </div>
      </Router>
    </>
  );
};


export default MainTask2;
