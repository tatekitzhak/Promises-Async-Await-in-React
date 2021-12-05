import React, { useEffect } from "react";


function Header(props) {
  const index = props.index;
  const r = props.r;
  return (
    <>
      <header key={index} id={`navbar-header-${index}`}>
        <div className="navbar navbar-expand-lg fixed-top py-3">
          <img src={''} width="105" alt="CONVERT AUDIO TO TEXT" className="logo-icon d-inline-block align-middle mr-2" />
          <a href="#" className="headline-introduce navbar-brand text-uppercase font-weight-bold"> Convert audio to text</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <i className="fa fa-bars"></i>
          </button>
          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            {/* <Menu key={index} routes={r.routes} level={index}> </Menu> */}
          </div>

        </div>
      </header>
    </>
  )
};


export default Header;