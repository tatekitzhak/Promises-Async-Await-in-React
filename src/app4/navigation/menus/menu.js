import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

function Menu(props) {
    const level = props.level;
    const routes = props.routes;
    const homePage = props.homePage;
    const footer = props.footer;
    const typeId = props.pid;
    const [classNameAtt, setClassNameAtt] = useState("");
    useEffect(() => {
        if(props.level ){
            console.log('Menu 1:', props.route.id, props.level )
            setClassNameAtt('drawer-nav topics_menu');
          }
    }, [routes]);
    return (
        <>
            {
                (typeId == 'homeId') ? (<nav id={`menu-id-${level}`} className={`menu menu-level-${level}`} >
                                            <ul>
                                                {
                                                    homePage.map((route, index) => (
                                                        <li key={index}>
                                                            <NavLink key={index} to={route.path} className={`${route.className}`}>
                                                                {route.label}
                                                            </NavLink>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </nav>) :
                (typeId == 'pageId') ? (<nav id={`menu-id-${level}`} className={`${classNameAtt} menu menu-level-${level}`} role="navigation">
                                            <ul className="navbar-nav ml-auto">
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
                                        </nav>) :
                (typeId == 'footerId') ? (<nav id={`menu-id-${level}`} className={`menu menu-level-${level} `}>
                                        <ul>
                                            {
                                                footer.map((route, index) => (
                                                    <li key={index}>
                                                        <NavLink key={index} to={route.path} className={`${route.className}`}>
                                                            {route.label}
                                                        </NavLink>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </nav>) :<h1>Menu: Page Not Found (null) </h1>
            }
            
        </>
    );
}

export default Menu;