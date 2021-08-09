import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducer from '../reducers/loginReducer';
import tweetsReducer from '../reducers/tweetsReducer';
import notificationsReducer from '../reducers/notificationsReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const combineReducer = combineReducers({ tweets: tweetsReducer, user: loginReducer, notifications: notificationsReducer });

const store = createStore(combineReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;