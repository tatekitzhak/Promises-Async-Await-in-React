import React, { useContext, useReducer } from 'react';
import { useLocation, useParams } from "react-router-dom";


function Content(props) {

  const location = useLocation();
  const { id } = useParams();

  return (
    <>
      <div>

        <h3>Content:   {console.log('Content:', props)} </h3>
        <div>
          <ul>

            <li >
              Content
            </li>

          </ul>
        </div>
      </div>
    </>
  )
};

export default Content;
