import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home(props) {

  return (
    <>
      <div id="sidebar-wrapper">
        <div className="border-end bg-white">
          <div className="sidebar-heading border-bottom bg-light">
            <h1>Home</h1>
          </div>
          <div className="list-group list-group-flush">
            {console.log("Home:", props)}
          </div>
        </div>
      </div>

      {/* <div>
        <h1>React Router Example</h1>
        <Link to="/client">Client Side</Link>
        <Link to="/server">Server Side</Link>

        <section>
          <Route path='/client' component={Client} />
          <Route path='/server' component={Server} />
        </section>
      </div> */}
    </>
  );
};


export default Home;
