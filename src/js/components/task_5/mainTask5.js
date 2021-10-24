import React, {useState, useReducer, createContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fetch1 from './fetch1';
import Fetch2 from './fetch2';
import Component1 from './component1';

function MainTask5() {
  return (
    <>
      <Router>
          <div className="text-center">
            <div className="border-end bg-white">
              <div className="sidebar-heading border-bottom bg-light text-center">
                <h1>Task 5</h1>

              </div>
            </div>
              <Fetch2/>
          </div>
      </Router>
    </>
  );
};


export default MainTask5;
