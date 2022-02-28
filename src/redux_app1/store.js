import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import {calculatorReducer, userReducer} from './reducer';

const loggerMiddleware = (store) => (next) => (action) => {
    console.log("loggerMiddleware action:", action);
    next(action);
  };

const store = createStore(combineReducers({calculatorReducer, userReducer}),
                {} , 
                applyMiddleware(logger));

export default store; 