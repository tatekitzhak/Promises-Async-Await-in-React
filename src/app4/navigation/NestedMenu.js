import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { pathTo } from "./utils";


function Menu({ routes, level }) {
  const [data, setData] = useState();

  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);


  useEffect(() => {
  /*   const ele_id_1 = document.querySelector('#menu-id-1');

    const drawerDiv = document.createElement("div");
    drawerDiv.classList.add("drawer--left");



    if (level == 1) {
      setData(ele_id_1);
      //  drawerDiv.appendChild(ele_id_1);
      { console.log('Menu::', drawerDiv) }

    }
 */
  }, [level, setData]);
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

function NestedMenu({ route }) {
  let menusWrapperElement = useRef(null);
  console.log('NestedMenu:', menusWrapperElement.current)

  const [parentElement, setParentElement] = useState("");
  
  const [childrenElement, setChildrenElement] = useState("");

  useEffect(() => {

    const drawerDiv = document.createElement("div");
    drawerDiv.classList.add("drawer--left");
    console.log('useEffect:', menusWrapperElement.current.children)
    
    setParentElement(menusWrapperElement.current)
    //childNodes
    //children
  }, [route]);
  return (
    <>
      <div id="menus-wrapper" ref={menusWrapperElement} >
        {
          pathTo(route)
            .filter(r => r.routes)
            .map((r, index) => (
              <Menu key={index} routes={r.routes} level={index}>
                {console.log('Menu component:', parentElement.children)}
              </Menu>
            ))
        }
      </div>
    </>
  );
}

export default NestedMenu;
