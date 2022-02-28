import {combineReducers} from 'redux';
import UserReducer from './reducerUsers';

const allReducers = combineReducers({
    users: UserReducer
});


export default allReducers;
