import React from 'react';

function Home(props) {

  return (
    <>
      <div id="sidebar-wrapper">
          <div className="border-end bg-white">
              <div className="sidebar-heading border-bottom bg-light">
                <h1>{props.match.url}</h1>
              </div>
              <div className="list-group list-group-flush">
                {console.log('Home: ', props)}
              </div>
          </div>
      </div>
    </>
  );
};


export default Home;
