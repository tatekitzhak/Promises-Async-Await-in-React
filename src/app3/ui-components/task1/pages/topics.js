import React from 'react';
import { useHistory, useParams } from 'react-router-dom'


function Topics({ match }) {

  const fetchData = () => {
    switch (match.params.link) {
      case 'Topics-1':
        return (`${match.params.link}`);
      case 'Topics-2':
        return (`${match.params.link}`);
      case 'Topics-3':
        return (`${match.params.link}`);
      case 'Topics-4':
        return (`${match.params.link}`);
      case 'Topics-5':
        return (`${match.params.link}`);
      case 'Topics-6':
        return (`${match.params.link}`);
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
            {console.log("Topics:", match)}
          </div>
        </div>
      </div>
    </>
  );
};


export default Topics;
