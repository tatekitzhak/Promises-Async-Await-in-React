import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

function Menu(props) {
    const level = props.level;
    const routes = props.routes;
    const homePage = props.homePage;
    const typeId = props.pid;
    useEffect(() => {
        console.log('Menu:', typeId)
    }, []);
    return (
        <>
            {
                (typeId == 'homeId') ? (<nav id={`menu-id-${level}`} className={`menu menu-level-${level} `}>
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
                (typeId == 'pageId') ? (<nav id={`menu-id-${level}`} className={`menu menu-level-${level} `}>
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
                                        </nav>) : <h1>Menu null</h1>
            }
            
        </>
    );
}

export default Menu;