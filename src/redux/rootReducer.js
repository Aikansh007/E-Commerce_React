import {combineReducers} from 'redux';

import userReducer from './user/userReducer';
 import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({ userReducer: userReducer, cartReducer : cartReducer})
// with combine reducer we can call all the reducers of redux
export default rootReducer;