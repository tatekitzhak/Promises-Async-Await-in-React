import React, { useEffect, useReducer, useState } from "react";
import { pathTo } from "./utils";
import Menu from "./menus/menu";


const initialState = {
  topic:'Routes not recive exact property',
  content: ''
};

function handleContant(state, action){
  console.log('NestedMenu handleContant:',action.routeType)
  switch(action.routeType){
    case 'routesHomeContent':
      return {
        topic: action.type.routesHomeContent
      };
    case 'routes':
      return {
        topic: action.type.routes
      };
    default:
      return ( action.routeType);
  } 
}

function NestedMenu(props) {
  const [path, dispatch] = useReducer(handleContant, initialState)
  
 
  useEffect(()=>{
    const route = Object.getOwnPropertyNames(props.route)

    route.map((value, i) => {
      switch (value) {
        case 'routesHomeContent':
          dispatch({type: props.route, routeType: value})
          // console.log('NestedMenu useEffect 1:',i,value)
          break;
        case 'routes':
          dispatch({type: props.route, routeType: 'routesHomeContent'})
          // console.log('NestedMenu useEffect 2:',i,value)
          break;
        default:
          //console.log('NestedMenu useEffect 3:',i,value)
          break;
      }
    });

  },[props.route, dispatch])


  console.log('NestedMenu1:',path)
  console.log('NestedMenu2:',Object.getOwnPropertyNames(props.route))
  return (
    <>
        {
          /* pathTo(route)
            .filter(rt => rt.routesHomeContent)
            .map(function (rt, index){
              {console.log('r:',rt)}
              if (index == 1 && rt.id == "task1") {
                return (
                  <div key={index} className="drawer">
                      <button type="button" className="drawer-toggle drawer-hamburger">
                          <span className="sr-only">toggle navigation</span>
                          <span className="drawer-hamburger-icon"></span>
                        </button>
                      <Menu key={index} routesHomeContent={rt.routesHomeContent} level={index} {...props}>
                        
                        
                      </Menu>
                  </div>
                  )
              }
              return (

                <Menu key={index} routesHomeContent={rt.routesHomeContent} level={index} {...props}>

                  <h1>From menus-wrapper</h1>
                </Menu>
              )
            }) */
        }
    </>
  );
}

export default NestedMenu;
