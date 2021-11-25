import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useLocation, useParams } from "react-router-dom";
import { SidebarProvider, PageProvider } from './dataContext';
import { ContentProvider, ContentContext } from './data_management/contentContext';
import Content from './content';
import SideBar from './sideBar';
import Item from './pages/item';



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
          <Link to={`${param}/Item-1`} className="nav-link">Item 1</Link>
          <Link to={`${param}/Item-2`} className="nav-link">Item 2</Link>
          <Link to={`${param}/Item-3`} className="nav-link">Item 3</Link>
          <Link to={`${param}/Item-4`} className="nav-link">Item 4</Link>
          <Link to={`${param}/Item-5`} className="nav-link">Item 5</Link>
          <Link to={`${param}/Item-6`} className="nav-link">Item 6</Link>
        </div>

        <div className="col-md-8 pull-md-right border">
          {console.log('Task1:', props.match)}
          <Switch>
            <ContentProvider>

              <Route exact path={`${param}`}
                      render={(props) => <Content {...props} msg={'From Task1 To Content'} />} />

              <Route exact path={`/:link/:link`}
                      render={(props) => <Item {...props} msg={'From Task1 To Item'} />} />

            </ContentProvider>
          </Switch>
        </div>

      </div>
    </Router>
  );

};

export default Task1;
