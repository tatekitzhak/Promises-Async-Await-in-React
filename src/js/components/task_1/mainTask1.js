import React, {useContext} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {SidebarProvider, PageProvider} from './dataContext';
import {ContentProvider, ContentContext} from './data_management/contentContext';


import NavigationBar from './navBarTask1';
import Item from './pages/item';
import Content from './pages/content';



function MainTask1(props) {


  return(
    <Router>
      <div className="row">
        {console.log("MainTask1:",props.match.path)}
        <div className="col-md-3 pull-md-right">
          <SidebarProvider>
            <NavigationBar {...props}/>
          </SidebarProvider>
        </div>

        <div className="col-md-8 pull-md-right border">
          <Switch>
            <PageProvider>
              <ContentProvider>

                <Route exact path="/side-bar-1/:a"
                             render={(props) => <Item {...props} title={`Props through render (PropsPage)`}  name={'Ran'}/>} />

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
