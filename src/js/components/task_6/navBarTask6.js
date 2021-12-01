import React, {useState, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/*
* Flexible drawer menu using jQuery, iScroll and CSS.
* http://git.blivesta.com/drawer/
*https://codepen.io/golfer19881/pen/mAQLmB
*/
import 'iscroll';
import $ from 'jquery';
import 'jquery-drawer';


function NavigationBar(props){
    $(document).ready(function() {

        $('.drawer').drawer();
        $('.drawer').drawer('close');

        $('.drawer').on('drawer.opened', function(){
          console.log("drawer.opened");
        });
        
        $('.drawer').on('drawer.closed', function(){
         
          console.log("drawer.closed");
        });
    });

  const dispatcher = (event) =>{
     //event.preventDefault();
      //console.log("SideBar:", event.target.dataset.txt);
  }

  return (
    <>
      <div id="sidebar-wrapper">
          <div className="border-end bg-white">
              <div className="sidebar-heading border-bottom bg-light">
                <h1>Navigation Bar Task 6</h1>
              </div>
              <div className="list-group list-group-flush">
                {
                  /* topics.map((value, index)=>{
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
                      }) */
                }
              </div>
          </div>
      </div>
      <div>
          <div className="drawer drawer--left">
              <header className="drawer-navbar" role="banner">
                <div className="drawer-container">
                    <div className="drawer-navbar-header">
                        <a className="drawer-brand" href="./index.html">TOPICS</a>
                        <button type="button" className="drawer-toggle drawer-hamburger">
                            <span className="sr-only">toggle navigation</span>
                            <span className="drawer-hamburger-icon"></span>
                        </button>
                    </div>
                    <nav className="drawer-nav menu_topics" role="navigation">
                        <ul className="drawer-menu drawer-menu--left">
                            <li><a className="drawer-menu-item" href="./top.html">Top</a></li>
                            <li><a className="drawer-menu-item" href="./index.html">Left</a></li>
                            <li><a className="drawer-menu-item" href="./right.html">Right</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main role="main">
                <section className="item">
                    <h1>Drawer Right with Navbar</h1>
                </section>
            </main>
          </div>
      </div>
    </>
  );
};


export default NavigationBar;
