import React, { useContext, useReducer } from 'react';
import { useLocation, useParams } from "react-router-dom";


function Item(props) {

  const location = useLocation();
  const { id } = useParams();

  return (
    <>
      <div>

        <h3>Item:   {console.log('Item:', props)} </h3>
        <div>
          <ul>

            <li >
            Item
            </li>

          </ul>
        </div>
      </div>
    </>
  )
};

export default Item;
