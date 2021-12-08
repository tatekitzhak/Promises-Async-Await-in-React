import React, { useEffect, useReducer, useState } from "react";
import { pathTo } from "./utils";
import Menu from "./menus/menu";



function NestedMenu(props) {
  const route = props.route;
  const typeId = props.pid;

  useEffect(() => {
    console.log('NestedMenu1:', route.routes,typeId)
    console.log('NestedMenu2:', route.homePage, typeId)
    console.log('NestedMenu3:', route.footer, typeId)
    if(typeId == 'pageId' && route.routes)
    {
      console.log('NestedMenu:', route)
    }else if(typeId == 'homeId' && route.homePage){
      console.log('NestedMenu:', route.homePage)
    }
  }, [route])

  
  return (
    <>
    {console.log('NestedMenu:', route)}
      {
        (typeId == 'pageId') ? (pathTo(route)
                                .filter(rt => rt.routes)
                                .map(function (rt, index) {
                                  { console.log('rt:', index, rt) }
                                  if (index == 1 && rt.id == "task1") {
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
                                      <Menu key={index} homePage={rt.homePage} level={index} {...props}>

                                      </Menu>
                                    )
                                  })) : <h1>NestedMenu: Page Not Found (null) </h1>
      }

    </>
  );
}

export default NestedMenu;
