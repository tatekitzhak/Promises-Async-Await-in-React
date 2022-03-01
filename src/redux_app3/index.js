import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './component/app';

const initState = {
    playerName: '',
    Scores: 0
}

function reducer(state = initState, action) {
    switch (action.type) {
        case 'INC':
            return state.playerName = action.payload;        
    }
    return state;
}

const store =  createStore(reducer)

store.subscribe(()=>{
    console.log('subscribe:',store.getState())
});

const todoAction = {type: 'INC', payload: 'Ran'};

const result = store.dispatch(todoAction);

console.log('store:', result);


const rootDOM = document.getElementById("app");

rootDOM ? ReactDOM.render(
        <App />
    , rootDOM) : <div>{false}</div>;

