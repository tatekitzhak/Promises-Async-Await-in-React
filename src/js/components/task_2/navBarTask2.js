import React, {useState, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


  function NavigationBar(props) {
    const navLinks = [{
                        path: '/home',
                        name: 'Home',
                      }, {
                        path: '/about',
                        name: 'About',
                      }, {
                        path: '/users',
                        name: 'Users',
                      }, {
                        path: '/login',
                        name: 'Login',
                      }];

    return (
      <>
        <div id="sidebar-wrapper">
            <div className="border-end bg-white">
                <div className="sidebar-heading border-bottom bg-light">
                  <h1>NavBar Task 2 </h1>
                </div>
                <div className="list-group list-group-flush">

                  {
                      navLinks.map(({path, name}, key) => {
                        return (
                                <Link className="list-group-item list-group-item-action list-group-item-light p-3"
                                      key={key}
                                      
                                      to={{
                                            pathname:`${props.match.url}${'/'+key}`
                                            }}>
                                  {name}
                                </Link>
                              )
                            })
                  }
                </div>
            </div>
        </div>
      </>
    );
  };


  export default NavigationBar;
