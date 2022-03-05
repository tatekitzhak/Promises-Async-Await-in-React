import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import App from './component/app';
import { reducer1, reducer2 } from './reducer';
import UserContainer from './component/userContainer';
import { Provider } from 'react-redux';

const initState = {
  playerName: '',
  Scores: 0
}

const allReducers = combineReducers({
  user1: reducer1,
  user2: reducer2
});


const store = createStore(allReducers)

store.subscribe(() => {
  console.log('subscribe:', store.getState())
});

const result = store.dispatch({
  type: 'INCREMENT',
  payload: 1
});

console.log('store:', store.getState());


const rootDOM = document.getElementById("app");

rootDOM ? ReactDOM.render(
  <Provider store={store}>
    <App>
      <UserContainer user />
      <UserContainer user />
    </App>
  </Provider>
  , rootDOM) : <div>{false}</div>;

