import React from "react";
import { NavLink } from "react-router-dom";
import { pathTo } from "./utils";
function Menu({ routes, level }) {
  return (
    <>
      <nav className={`menu menu-level-${level}`}>
        {
          routes.map((route, index) => (
          <NavLink key={index} to={route.path}>
            {route.label}
          </NavLink>
        ))
        }
      </nav>
    </>
  );
}

function NestedMenu({ route }) {
  return (
    <>
      {
        pathTo(route)
        .filter(r => r.routes)
        .map((r, index) => (
          <Menu key={index} routes={r.routes} level={index} />
        ))
        }
    </>
  );
}

export default NestedMenu;
