import React from 'react';
import { useHistory, useParams } from 'react-router-dom'


function Topics(props) {
  const path = props.match.url
  const fetchData = () => {
    switch (path) {
      case 'Topics-1':
        return (`${path}`);
      case 'Topics-2':
        return (`${path}`);
      case 'Topics-3':
        return (`${path}`);
      case 'Topics-4':
        return (`${path}`);
      case 'Topics-5':
        return (`${path}`);
      case 'Topics-6':
        return (`${path}`);
      default:
        return ('Default');
    }
  }


  return (
    <>
      <div id="sidebar-wrapper">
        <div className="border-end bg-white">
          <div className="sidebar-heading border-bottom bg-light">
            <h1>Topics: {fetchData()}</h1>
          </div>
          <div className="list-group list-group-flush">
            {console.log("Topics:", props)}
          </div>
        </div>
      </div>
    </>
  );
};


export default Topics;
