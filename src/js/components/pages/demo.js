import React from 'react';

function DemoPage(props) {

  return (
    <>
      <div id="sidebar-wrapper">
          <div className="border-end bg-white">
              <div className="sidebar-heading border-bottom bg-light">
                <h1>{props.value.data}</h1>
              </div>
              <div className="list-group list-group-flush">
                    {console.log("DemoPage:",props.value.data)}
              </div>
          </div>
      </div>
    </>
  );
};


export default DemoPage;
