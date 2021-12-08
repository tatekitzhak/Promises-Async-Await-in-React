import React, { useEffect, useReducer, useState } from "react";
import { pathTo } from "./utils";
import Menu from "./menus/menu";



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

  function toggleReducer(action) {

    //console.log('toggleReducer:', action)
    switch (action.typeId) {
      case 1:{
        return console.log('pageId NestedMenu:', route.routes)
      }
      break;
      case 2:{
        return (<Menu key={action.index} homePage={action.rt.homePage} level={action.index} {...props}>
                  <h1>Menu</h1>
                </Menu>)
        }
        break;
      case typeId: {
        return console.log('footerId NestedMenu:',typeId)
        // return (<Menu key={action.index} footer={action.rt.footer} level={action.index} {...props}>
        //           <h1>Menu</h1>
        //         </Menu>)
        }
        break;
      default: {
        throw new Error(`Unhandled type:`)
      }
    }
  }

  return (
    <>
      {
        (typeId == 'pageId') ? (pathTo(route)
                                .filter(rt => rt.routes)
                                .map(function (rt, index) {
                                  { console.log('rt:', index, rt) }
                                  if (index == 1 && rt.id == "topics") {
                                    return (
                                      <div key={index} className="drawer">
                                        <button type="button" className="drawer-toggle drawer-hamburger">
                                          <span className="sr-only">toggle navigation</span>
                                          <span className="drawer-hamburger-icon"></span>
                                        </button>
                                        <Menu key={index} routes={rt.routes} level={index} {...props}>

                                        </Menu>
                                      </div>
                                    )
                                  }
                                  return (
                                    <Menu key={index} routes={rt.routes} level={index} {...props}>

                                    </Menu>
                                  )
                                })) :
          (typeId == 'homeId') ? (pathTo(route)
                                  .filter(rt => rt.homePage)
                                  .map(function (rt, index) {
                                    return ( 
                                      //toggleReducer({typeId, index, rt})
                                      <Menu key={index} homePage={rt.homePage} level={index} {...props}>
                                        <h1>Menu</h1>
                                      </Menu>
                                    )
                                  })) :
          (typeId == 'footerId') ? (pathTo(route)
                                    .filter(rt => rt.footer)
                                    .map(function (rt, index) {
                                      return ( 
                                        <Menu key={index} footer={rt.footer} level={index} {...props}>

                                        </Menu>
                                      )
                                    })) : <h1>NestedMenu: Page Not Found (null) </h1>
      }

    </>
  );
}

export default NestedMenu;
