import React, {useState, useReducer, useEffect} from 'react';
import ReactDOM from 'react-dom';


const initialState = {
  counter: 0
};
const reducer = (state, action)=>{
      switch (action.type) {
        case 'Inc':
          return { counter: state.counter + action.value};
        case 'Dec':
          return {counter: state.counter - action.value};
        case 'Reset':
          return initialState;
        default:
          return state;

      }
}
function Fetch2() {
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    async function fetchDataAndCategories(url1, url2) {
      try{
        const [dataResponse, categoriesResponse] = await Promise.all([
          fetch(url1),
          fetch(url2)
        ]);

        const data = await dataResponse.text();
        const categories = await categoriesResponse.json();
        console.log('data: ', data)
        return [data, categories];

      }catch(error) {
        console.log('Fetch error: ', error);
        
      }
      
    }

    fetchDataAndCategories('https://jsonplaceholder.typicode.com/posts/1','https://jsonplaceholder.typicode.com/posts/2').then(function ([data, categories]) {
      console.log('data: ', data)
    }).catch(error=>{
      console.log("error fetchDataAndCategories:", error)
    })

  },[])

  return(
    <>
      <h1>  {data.counter} </h1>
      <button onClick={()=>dispatch({type: 'Inc', value: 2})}> Inc: </button>
      <button onClick={()=>dispatch({type: 'Dec', value: 2})}> Decr: </button>
      <button onClick={()=>dispatch({type: 'Reset'})}> Reset: </button>
    </>
  )

}
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Fetch2 />, wrapper) : false;
export default Fetch2;
