import store from './store';

store.subscribe(function(v){
  let a = "subscribe"
  store.getState()
});

store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
  type: "ADD",
  payload: 10
});

store.dispatch({
  type: "SUBTRACT",
  payload: 5
});

store.dispatch({
  type: "SET_USER",
  username: 'Ran',
  age: 38,
  weight: 70
});

store.dispatch({
  type: "SET_ADDRESS",
  username: 'Ran',
  address: 'NY',
  number: 2419
});

 console.log("store:",store)





/* import React, {useState, useReducer, useEffect} from 'react';
import ReactDOM from 'react-dom';



function App() {

  useEffect(()=>{

   
  },[])

  return(
    <>
      <h1>  Redux app </h1>
    </>
  )

}
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false; */

