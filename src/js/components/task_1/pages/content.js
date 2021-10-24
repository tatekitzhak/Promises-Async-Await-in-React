import React, {useContext, useReducer} from 'react';



function Content({match}) {


  return(
    <>
      <div>
        {console.log("Content:")}
        <h3>Content: {match.url} </h3>
        
      </div>
    </>
  )
};

export default Content;
