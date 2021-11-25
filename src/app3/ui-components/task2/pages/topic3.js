import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function Topic3(props) {

  return (
    <>
      <div className="border-end bg-white">
        <div className="sidebar-heading border-bottom bg-light">
          <h1>Topic3</h1>
        </div>
        {console.log("Topic3:", props)}
      </div>

      <section className="categories_wrapper">
        <div className="box a">
          <h3>A</h3>
          <ul>
            <li><Link to="/a" >A</Link></li>
            <li><Link to="/b" >b</Link></li>
            <li><Link to="/c" >C</Link></li>
            <li><Link to="/d" >D</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
};


export default Topic3;
