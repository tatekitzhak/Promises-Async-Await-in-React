import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers/index';
import App from './component/app';

const store = createStore(allReducers)

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, wrapper) : false;

