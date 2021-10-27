import React, {useState, useReducer, createContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavigationBar from "./navBarTask6";

function MainTask6(props) {
  return (
    <>
      <Router>
          <div className="text-center">
            <div className="border-end bg-white">
              <div className="sidebar-heading border-bottom bg-light text-center">
                <h1>Task 6</h1>
                <NavigationBar {...props}/>
              </div>
            </div>
              
          </div>
      </Router>
    </>
  );
};


export default MainTask6;
