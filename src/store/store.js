import { createStore, combineReducers } from 'redux';
import loginReducer from '../reducers/loginReducer';
import tweetsReducer from '../reducers/tweetsReducer';

const combineReducer = combineReducers({ tweets: tweetsReducer, user: loginReducer });

const store = createStore(combineReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;