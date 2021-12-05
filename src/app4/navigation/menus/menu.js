import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

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

  export default Menu;