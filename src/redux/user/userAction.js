

import {LOGIN_USER, LOGOUT_USER} from './userType';

export const userLogin = (loginCredential) => {
    const actionObj = {
        type: LOGIN_USER,
        crendential: loginCredential
    }
    //Async operation using thunk
    return (dispatch, getState) => {
        dispatch(actionObj);
        return Promise.resolve(getState().userReducer.user);
    }
    //--------------------
}

export const userLogout = ()=>{
    return{
        type: LOGOUT_USER

    }
}

