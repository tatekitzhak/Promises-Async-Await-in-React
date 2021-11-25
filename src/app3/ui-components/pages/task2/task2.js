import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideBar from './sideBar';

import Home from './pages/home';
import About from './pages/about';
import Users from './pages/users';
import Login from './pages/login';


function Task2(props) {
  const path = props.match.path;

  return (
    <>
      <Router>
        <div className="row">
          <div className="col-md-3 pull-md-right">
            {/* 
              <SideBar {...props}>
                <h1>Side Bar Task2 </h1>
              </SideBar> 
              */}
            <div className="sidebar-heading border-bottom bg-light">
              <h1>Side Bar Task2 </h1>
            </div>
            <div className="list-group list-group-flush">
              <Link to={`${path}/home`} className="nav-link">Home</Link>
              <Link to={`${path}/about`} className="nav-link">About</Link>
              <Link to={`${path}/users`} className="nav-link">Users</Link>
              <Link to={`${path}/login`} className="nav-link">Login</Link>
            </div>
          </div>
          {
            // <Switch>
            //   <Route exact path="/side-bar-2/" component={Home} />
            //
            //   <Route exact path="/side-bar-2/:id" render={(props) => (<About {...props} post="Posts"/>)} />
            // </Switch>
          }
          <section>
            <Switch>
              <Route exact path={`${path}/home`}
                render={(props) => <Home {...props} msg={'From Task2 To Home'} />} />

              <Route exact path={`${path}/about`}
                render={(props) => <About {...props} msg={'From Task2 To Home'} />} />

              <Route exact path={`${path}/users`}
                render={(props) => <Users {...props} msg={'From Task2 To Home'} />} />

              <Route exact path={`${path}/login`}
                render={(props) => <Login {...props} msg={'From Task2 Home'} />} />
            </Switch>
          </section>

        </div>
      </Router>
    </>
  );
};


export default Task2;
