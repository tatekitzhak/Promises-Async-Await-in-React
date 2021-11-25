import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useLocation, useParams } from "react-router-dom";

import Topics from './pages/topics';
/* import SideBar from './sideBar'; */
import TopicsList from './pages/topicsList';

function Task1(props) {
  const param = props.match.path;
  const { path } = useRouteMatch();
  return (
    <Router>
      <div className="row">

        <div className="col-md-3 pull-md-right">
          {/* <SidebarProvider>
            <SideBar {...props}>
              <h1>Side Bar </h1>
            </SideBar>
          </SidebarProvider> */}
          <h1>Side Bar Task1</h1>
          <Link to={`${param}/topic-1`} className="nav-link">Topic 1</Link>
          <Link to={`${param}/topic-2`} className="nav-link">Topic 2</Link>
          <Link to={`${param}/topic-3`} className="nav-link">Topic 3</Link>
          <Link to={`${param}/topic-4`} className="nav-link">Topic 4</Link>
          <Link to={`${param}/topic-5`} className="nav-link">Topic 5</Link>
          <Link to={`${param}/topic-6`} className="nav-link">Topic 6</Link>
        </div>

        <div className="col-md-8 pull-md-right border">
          {console.log('Task1:', props.match)}
          <Switch>
            <Route exact path={`${param}`}
              render={(props) => <TopicsList {...props} msg={'From Task1 To TopicsList'} />} />

            <Route exact path={`${param}/:link`}
              render={(props) => <Topics {...props} msg={'From Task1 To Topics'} />} />

          </Switch>
        </div>
      </div>
    </Router>
  );

};

export default Task1;
