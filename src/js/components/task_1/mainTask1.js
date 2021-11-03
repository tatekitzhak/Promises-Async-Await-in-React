import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {PageProvider} from './dataContext';
import {ContentProvider} from './data_management/contentContext';
import {SidebarNavigationMenuProvider} from '../state_management/sidebar_navigation_menu';


import NavigationBar from './navBarTask1';
import Item from './pages/item';
import Content from './pages/content';



function MainTask1(props) {


  return(
    <Router>
      <div className="row">
        {console.log("MainTask1:",props)}
        <div className="col-md-3 pull-md-right">
          <SidebarNavigationMenuProvider>
            <NavigationBar {...props}/>
          </SidebarNavigationMenuProvider>
        </div>

        <div className="col-md-8 pull-md-right border">
          <Switch>
            <PageProvider>
              <ContentProvider>
              {console.log("MainTask1 Switch:",props)}
                <Route exact path={`${props.match.path}`}
                             render={(props) => <Content {...props} title={`Props through render (PropsPage)`}  name={'Ran'}/>} />

                <Route exact path={`${props.match.path}/:link`}
                             component={(props) => <Item {...props} title={"abc"}/> }/>

              </ContentProvider>

            </PageProvider>
          </Switch>
        </div>

      </div>
    </Router>
  );

};

export default MainTask1;
