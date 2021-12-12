import React, { useEffect, useReducer, useState } from "react";
import { pathTo } from "./utils";
import Menu from "./menus/menu";
import 'iscroll';
import $ from 'jquery';
import 'jquery-drawer';


function NestedMenu(props) {
  const route = props.route;
  const typeId = props.pid;

  /* if (typeId == 'pageId' && route.routes) {
    console.log('pageId NestedMenu:', route.routes)
  } else if (typeId == 'homeId' && route.homePage) {
    console.log('homeId NestedMenu:', route.homePage)
  } else if (typeId == 'footerId' && route.footer) {
    console.log('footerId NestedMenu:', route.footer)
  } */

  function menuReducer(action) {
    switch (action.typeId) {
      case 'pageId': {
        return (
          <Menu key={action.index} routes={action.rt.routes} level={action.index} {...props}>
          </Menu>)
      }
      case 'homeId': {
        return (
          <Menu key={action.index} homePage={action.rt.homePage} level={action.index} {...props}>
          </Menu>)
      }
      case 'footerId': {
        return (
          <Menu key={action.index} footer={action.rt.footer} level={action.index} {...props}>
          </Menu>)
      }
      default: {
        throw new Error(`Unhandled type:${action}`)
      }
    }
  }
  useEffect(() => {
    $(document).ready(function () {
      
      try {
        const ele = $('.drawer');
        /* console.log('.drawer1',ele)
        ele.drawer();
        console.log('.drawer2',ele[0])

        ele.on('drawer.opened', function(){
          console.log("drawer.opened");
        });
    
        ele.on('drawer.closed', function(){
    
          console.log("drawer.closed");
        }); */
      }
      catch(err) {
        console.log("An error occured in jQuery:",err);
      }
    });
   
  }, [route])
  return (
    <>
      {
        (typeId == 'pageId') ? (pathTo(route)
                                .filter(rt => rt.routes)
                                .map(function (rt, index) {
                                  if (index == 1 && rt.id == "topics") {
                                    return (
                                      <div key={index} className={`section-nav-${index} drawer drawer--left`}>
                                        <h1>Navigation Bar - Topic</h1>
                                        <header className="drawer-navbar" role="banner">
                                          <div className="drawer-container">
                                            <div className="drawer-navbar-header">
                                              <p className="drawer-brand" >Topic</p>
                                              <button type="button" className="drawer-toggle drawer-hamburger">
                                                <span className="sr-only">toggle navigation</span>
                                                <span className="drawer-hamburger-icon"></span>
                                              </button>
                                            </div >
                                            { menuReducer({ typeId, rt, index })}
                                            </div>
                                          </header>
                                        </div>
                                    )
                                  }
                                  return (
                                    <div key={index} className={`section-nav-${index}`}>
                                    { menuReducer({ typeId, rt, index }) }
                                    </div> );
                                })) :
        (typeId == 'homeId') ? (pathTo(route)
                                .filter(rt => rt.homePage)
                                .map(function (rt, index) {
                                  return ( menuReducer({ typeId, rt, index }));
                                })) :
        (typeId == 'footerId') ? (pathTo(route)
                                  .filter(rt => rt.footer)
                                  .map(function (rt, index) {
                                    return (menuReducer({ typeId, rt, index }) );
                                  })) : <h1>NestedMenu: Page Not Found (null) </h1>
      }

    </>
  );
}

export default NestedMenu;
