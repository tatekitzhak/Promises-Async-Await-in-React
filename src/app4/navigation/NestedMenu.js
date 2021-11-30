import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { pathTo } from "./utils";


function Menu({ routes, level }) {
  const [data, setData] = useState();

  useEffect(() => {
    if (level == 1) {
      setData(level);
    }

  }, [level, setData]);
  return (
    <>
      <nav className={`menu menu-level-${level} `}>
        {console.log('Menu:', data)}
        <ul>
          {
            routes.map((route, index) => (
              <li>
                <NavLink key={index} to={route.path}>
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
  return (
    <>
      <div className="drawer drawer--left">
        {
          pathTo(route)
            .filter(r => r.routes)
            .map((r, index) => (
              <Menu key={index} routes={r.routes} level={index} />
            ))
        }
      </div>
    </>
  );
}

export default NestedMenu;
