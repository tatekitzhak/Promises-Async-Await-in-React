import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { pathTo } from "./utils";


function Menu({ routes, level }) {
  const [data, setData] = useState();

  useEffect(() => {
    const ele_id_1 = document.querySelector('#menu-id-1');

    if (level == 1) {
      setData(ele_id_1);
    }

  }, [level, setData]);
  return (
    <>
      <nav id={`menu-id-${level}`} className={`menu menu-level-${level} `}>
        {console.log('Menu:', data)}
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
