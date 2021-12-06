import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { pathTo } from "./utils";
import Menu from "./menus/menu";

function NestedMenu(props) {
  const route = props.route;
  console.log('NestedMenu:',route)
  useEffect(() => {
    

  }, [route]);
  return (
    <>
        {
          pathTo(route)
            .filter(r => r.linkRoutes)
            .map(function (r, index){
              {console.log('r:',r)}
              if (index == 1 && r.id == "task1") {
                return (
                  <div key={index} className="drawer">
                      <button type="button" className="drawer-toggle drawer-hamburger">
                          <span className="sr-only">toggle navigation</span>
                          <span className="drawer-hamburger-icon"></span>
                        </button>
                      <Menu key={index} linkRoutes={r.linkRoutes} level={index} {...props}>
                        
                        
                      </Menu>
                  </div>
                  )
              }
              return (

                <Menu key={index} linkRoutes={r.linkRoutes} level={index} {...props}>

                  <h1>From menus-wrapper</h1>
                </Menu>
              )
            })
        }
    </>
  );
}

export default NestedMenu;
