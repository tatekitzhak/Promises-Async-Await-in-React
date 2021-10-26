import React, {useState, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {SidebarNavigationMenuContext} from '../state_management/sidebar_navigation_menu'

function NavigationBar(props){
  const [topics, setTopics] = useContext(SidebarNavigationMenuContext);

  const dispatcher = (event) =>{
     //event.preventDefault();
      //console.log("SideBar:", event.target.dataset.txt);
  }

  return (
    <>
      <div id="sidebar-wrapper">
          <div className="border-end bg-white">
              <div className="sidebar-heading border-bottom bg-light">
                <h1>Navigation Bar Task 1</h1>
              </div>
              <div className="list-group list-group-flush">
                {
                  topics.map((value, index)=>{
                      return (
                          <Link className="list-group-item list-group-item-action list-group-item-light p-3"
                                data-txt={`${value.categorie}`}
                                onClick={dispatcher}
                                key={index}
                                to={{
                                      pathname:`${props.match.path}/${value.categorie}`,
                                      state: { fromNotifications: true,
                                               name: "Ran"
                                             }
                                      }}>
                          {value.categorie}
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
