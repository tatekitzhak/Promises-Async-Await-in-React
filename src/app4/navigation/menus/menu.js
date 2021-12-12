import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

function Menu(props) {
    const level = props.level;
    const typeId = props.pid;

    const routes = props.routes;
    const homePage = props.homePage;
    const topics = props.topics;
    const footer = props.footer;
    

    console.log('Menu:', topics)
    const [classNameAtt, setClassNameAtt] = useState("");
    const [roleAtt, setRoleAtt] = useState("");

    useEffect(() => {
        if(props.level== 1 && props.route.id == 'topics'){
            console.log('Menu 1:', props.route.id, props.level )
            setClassNameAtt('drawer-nav topics_menu');
            setRoleAtt('navigation');
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
                (typeId == 'pageId') ? (<nav id={`menu-id-${level}`} className={`${classNameAtt} menu menu-level-${level}`} role={`${roleAtt}`}>
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
                (typeId == 'topicsId') ? (<nav id={`${typeId} menu-id-${level}`} className={`menu menu-level-${level} `}>
                                        <ul>
                                            {
                                                topics.map((route, index) => (
                                                    <li key={index}>
                                                        <NavLink key={index} to={route.path} className={`${route.className}`}>
                                                            {route.label}
                                                        </NavLink>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </nav>) :
                 (typeId == 'footerId') ? (<nav id={`${typeId} menu-id-${level}`} className={`menu menu-level-${level} `}>
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
                                            </nav>):<h1>Menu: Page Not Found (null) </h1>
            }
            
        </>
    );
}

export default Menu;