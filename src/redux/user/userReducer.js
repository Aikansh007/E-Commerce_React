import { LOGOUT_USER, LOGIN_USER } from "./userType";

import {USERS} from '../../AuthenticationFile/userData';

const initialState = {
    user: {}
}

const userReducer = (state = initialState, Action) => {
    switch (Action.type) {
       
        case LOGOUT_USER:
            return { ...state, user: {} }
        case LOGIN_USER:
              //assign the input credential to usercredential
          
            const userCredential= Action.crendential;
            console.log('reducer received input');
            console.log(userCredential);

             //now validate usercredentials with the stored user details in USERS
            const currentUser= USERS.filter((item)=>{
                return(item.username === userCredential.username && 
                    item.password === userCredential.password)
            })
            console.log('filtered Data');
            console.log(currentUser[0]);
            console.log(currentUser.length);

             //check whether it returned the user if yes then return that user
            if(currentUser.length === 0){
                return state
            }else{  

                return  {user: currentUser[0]}
            }

           
        default:
             return {...state}
    }
}

export default userReducer;