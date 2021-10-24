import React, {useContext}from "react";
import { Link } from "react-router-dom";
import {HeaderNavigationMenuContext} from './state_management/main';

const nameLinks = [{
                  path: '/',
                  title: 'Home',
                }, {
                  path: '/contact-us',
                  title: 'Contact',
                }, {
                  path: '/task-1',
                  title: 'task 1',
                }, {
                  path: '/task-2',
                  title: 'task 2',
                },
                {
                  path: '/task-3',
                  title: 'task 3',
                },
                {
                  path: '/task-4',
                  title: 'task 4',
                },
                {
                  path: '/task-5',
                  title: 'task 5',
                }
              ];

function Header(props) {
  const [menus, setMenus] = useContext(HeaderNavigationMenuContext);
    return (
        <>
            <header className="header">
              {console.log("menu Header:", menus)}
              <nav className="navbar navbar-expand-lg fixed-top py-3">
                <div className="container">
                  <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </button>

                  <div id="navbarSupportedContent" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                    {
                      nameLinks.map(({path, title}, key) => {
                       
                        return (
                          
                                <li key={key}>
                                  <Link className="nav-link text-uppercase"
                                        to={{
                                              pathname:`${path}`
                                              }}>
                                    {title}
                                    {/* <span class="sr-only">(current)</span> */}
                                    {console.log("Header:",props)}
                                  </Link>
                                </li>
                              )
                        })
                    }
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
        </>
    );
}

export default Header;
