import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";

import Home from "./home";
import ContactUs from './contact';


import Task1 from './task-1/task1';
import Task2 from './task-2/task2';
import Task3 from './task-3/task3';
import Task4 from "./task-4/task4";
import Footer from "./footer";
import PageNotFound from './pages/pageNotFound';

function App() {
  const history = useHistory()
  const location = useLocation()
  const routeMatch = useRouteMatch()
  return (
    <>
      {console.log('App history:', history)}
      {console.log('App location:', location.pathname)}
      {console.log('App routeMatch:', routeMatch.path)}
      {/* 
      <Header>
        <h1>Header NavBar</h1>
      </Header> 
      */}
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top py-3">
          <div className="container">
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div><h1>Header NavBar</h1></div>
            <div id="navbarSupportedContent" className="collapse navbar-collapse">
              <Link to="/" className="nav-link">HOME <span className="sr-only">(current)</span> </Link>
              <Link to="/contact-us" className="nav-link" >CONTACT</Link>
              <Link to="/task-1" className="nav-link text-uppercase"> Task 1</Link>
              <Link to="/task-2" className="nav-link text-uppercase">Task 2</Link>
              <Link to="/task-3" className="nav-link text-uppercase">Task 3</Link>
              <Link to="/task-4" className="nav-link text-uppercase" >Task 4</Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="navbar container-fluid"> </div>
      <div className="contentWrapper container-fluid">
        <div className="content border ">

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact-us" component={ContactUs} />

            <Route exact path="/task-1"
              render={(props) => <Task1 {...props} msg={'From App to Task1'} />} />

            <Route exact path="/task-2"
              render={(props) => <Task2 {...props} msg={'From App to Task2'} />} />

            <Route exact path="/task-3"
              render={(props) => <Task3 {...props} msg={'From App to Task3'} />} />

            <Route exact path="/task-4"
              render={(props) => <Task4 {...props} msg={'From App to Task4'} />} />
              
            <Route
              render={(props) => <PageNotFound {...props} msg={'From App to PageNotFound'} />} />
          </Switch>
        </div>
      </div>
      <Footer />
    </>
  );

}


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>, wrapper) : false;
