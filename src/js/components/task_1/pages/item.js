import React, {useEffect, useReducer} from 'react';
import { useHistory, useParams } from 'react-router-dom'

const initialState = {
  topic:'abc',
  contant: ''
};

function handleContant(state, action) {
  switch(action.type){
    case 'Item-1':
      return {
        topic: action.type
      };
    case 'Item-2':
      return {
        topic: action.type
      };
    case 'Item-3':
      return {
        topic: action.type
      };
    case 'Item-4':
      return {
        topic: action.type
      };
    default:
      return ( state);
    }
}

function Item({match}) {
  const [data, dispatch] = useReducer(handleContant, initialState)

  useEffect(()=>{
   
    dispatch({type:match.params.link})
  },[match, dispatch])
  


  return (
    <>
      <div id="sidebar-wrapper">
          <div className="border-end bg-white">
              <div className="sidebar-heading border-bottom bg-light">
                <h1>Item: {data.topic}</h1>
              </div>
              <div className="list-group list-group-flush">
                {console.log("Item:", data)}
              </div>
          </div>
      </div>
    </>
  );
};


export default Item;
