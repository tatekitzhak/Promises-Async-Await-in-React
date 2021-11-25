import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/* import SideBar from './sideBar'; */
import TopicsList from './pages/topicsList';
import Topic1 from './pages/topic1';
import Topic2 from './pages/topic2';
import Topic3 from './pages/topic3';
import Topic4 from './pages/topic4';


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
              <Link to={`${path}/topic1`} className="nav-link">Topic1</Link>
              <Link to={`${path}/topic2`} className="nav-link">Topic2</Link>
              <Link to={`${path}/topic3`} className="nav-link">Topic3</Link>
              <Link to={`${path}/topic4`} className="nav-link">Topic4</Link>
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
              <Route exact path={`${path}`}
                render={(props) => <TopicsList {...props} msg={'From Task2 To Categories'} />} />
              <Route exact path={`${path}/topic1`}
                render={(props) => <Topic1 {...props} msg={'From Task2 To topic1'} />} />

              <Route exact path={`${path}/topic2`}
                render={(props) => <Topic2 {...props} msg={'From Task2 To topic2'} />} />

              <Route exact path={`${path}/topic3`}
                render={(props) => <Topic3 {...props} msg={'From Task2 To topic3'} />} />

              <Route exact path={`${path}/topic4`}
                render={(props) => <Topic4 {...props} msg={'From Task2 topic4'} />} />
            </Switch>
          </section>

        </div>
      </Router>
    </>
  );
};


export default Task2;
