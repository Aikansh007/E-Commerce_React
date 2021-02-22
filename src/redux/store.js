import {createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'


 //creation of store and passing rootreducer and thunk as parameter
 const store = createStore(rootReducer,applyMiddleware(logger,thunk));
 export default store;