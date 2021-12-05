import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { pathTo } from "./utils";


function Menu(props) {
  const level = props.level;
  const routes = props.routes;

  useEffect(() => {

  }, []);
  return (
    <>
        
        <nav id={`menu-id-${level}`} className={`menu menu-level-${level} `}>
          <ul>
            {
              routes.map((route, index) => (
                <li key={index}>
                  <NavLink key={index} to={route.path} className={`${route.className}`}>
                    {route.label}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </nav>

    </>
  );
}

function NestedMenu({ route }, props) {
  const [menusWrapper, setMenusWrapper] = useState("");
  const [childrenElement, setChildrenElement] = useState("");

  useEffect(() => {
    

  }, [route]);
  return (
    <>
      {console.log('NestedMenu:',menusWrapper)}
        {
          pathTo(route)
            .filter(r => r.routes)
            .map(function (r, index){
              if (index == 1 && r.id == "task1") {
                return (
                  <div key={index} className="drawer">
                      <button type="button" className="drawer-toggle drawer-hamburger">
                          <span className="sr-only">toggle navigation</span>
                          <span className="drawer-hamburger-icon"></span>
                        </button>
                      <Menu key={index} routes={r.routes} level={index} {...props}>
                        {console.log('r:',r.id)}
                        
                      </Menu>
                  </div>
                  )
              }
              return (

                <Menu key={index} routes={r.routes} level={index} {...props}>

                  <h1>From menus-wrapper</h1>
                </Menu>
              )
            })
        }
    </>
  );
}

export default NestedMenu;
