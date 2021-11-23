import React, {useState, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory, useParams } from 'react-router-dom'

import {TaskComponentsContext} from '../../../global_state_management/task2ComponentsProvider';
import NavigationBar from './navBarTask2';

import Home from './pages/home';
import About from './pages/about';
import Users from './pages/users';
import Login from './pages/login';


function MainTask2(props) {
  // const [value] = useContext(TaskComponentsContext);
  const [routes, setRoutes] = useContext(TaskComponentsContext);
  const { id } = useParams()
  return (
    <>
      <Router>
        <div className="main_task_2">
          <section className="border-end bg-white nav_bar_2">
              <div className="sidebar-heading border-bottom bg-light text-center">
                <NavigationBar {...props}/>
              </div>
          </section>
            
          <section className="main_task_2_container">
            {console.log('MainTask2:', props)}
            <Switch>
            
              {
                 <Route path={`${props.match.url}/:id`} 
                    render={(props)=><About {...props} sectionTask2={'From MainTask2'}/>} />
                
                
                /* routes.map((route, index) => {
                  console.log('index:', index);
                  <Home {...props} sectionTask2={'From MainTask2'}/>
                  return (
                     <Route key={index}
                        path={`${props.match.path}/:link`} 
                        exact={route.exact} >
                      <route.component.type  {...props} sectionTask2={route.component.props}/>
                      {console.log(`MainTask2:${props.match.url}${route.path}`)}
                    </Route> 
                    
                    <Route key={index} path={`${props.match.url}/:${index}`} 
                    render={(props)=><Home {...props} sectionTask2={'From MainTask2'}/>} /> 
                    
                  )}) */
            }
            </Switch>
          </section>
        </div>
      </Router>
    </>
  );
};


export default MainTask2;