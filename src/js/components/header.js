import React, {useContext}from "react";
import { Link } from "react-router-dom";
import {HeaderNavigationMenuContext} from './state_management/header_navigation_menu';


function Header(props) {
  const [headerMenu, setHeaderMenu] = useContext(HeaderNavigationMenuContext);
    return (
        <>
            <header className="header">
              <nav className="navbar navbar-expand-lg fixed-top py-3">
                <div className="container">
                  <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </button>

                  <div id="navbarSupportedContent" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                    {
                      headerMenu.map(({path, title}, key) => {
                       
                        return (
                          
                                <li key={key}>
                                  <Link className="nav-link text-uppercase"
                                        to={{
                                              pathname:`${path}`
                                              }}>
                                    {title}
                                    {/* <span class="sr-only">(current)</span> */}
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
