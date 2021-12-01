import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {SideNavBarProvider} from '../../../global_state_management/sideNavBarProvider';


import NavigationBar from './navBarTask1';
import Item from './pages/item';
import Content from './pages/content';



function MainTask1(props) {


  return(
    <Router>
      <div className="row">
        <div className="col-md-3 pull-md-right">
          <SideNavBarProvider>
            <NavigationBar {...props}/>
          </SideNavBarProvider>
        </div>

        <div className="col-md-8 pull-md-right border">
          <Switch>
                <Route exact path={`${props.match.path}`}
                             render={(props) => <Content {...props} title={`Props through render (PropsPage)`}  name={'Ran'}/>} />

                <Route exact path={`${props.match.path}/:link`}
                             component={(props) => <Item {...props} title={"abc"}/> }/>


          </Switch>
        </div>

      </div>
    </Router>
  );

};

export default MainTask1;
