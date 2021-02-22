import React, { useState } from "react";
import "../css/Login.css";
import { userLogin } from "../redux/user/userAction";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";


// //this will map state with the store
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

// // this will dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    login: (inputCredentials) => dispatch(userLogin(inputCredentials)),
  };
};



const Login = (props) => {
 
  //using useState hooks to assign and setsate input field
  //initially empty
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
 
    
   //to change route after logout manually : use hooks useHistory
   let history = useHistory();

   //hook to set notification
   const {addToast} = useToasts();
 
   
 // //now these credentials are passed to dispatch actions
   const loginHandler = (credentials) => {
    
      // //   console.log("passed data ");
  // //   console.log(credentials);
    //------------------------------------------- using thunk Middleware ---------------------//
     props.login(credentials).then((resp) => {
      // //     console.log(resp);
      // //     console.log("result data");
      // //     console.log(props.user);
       if (resp.username !== undefined) {
         //to change route after logout manually : use hooks useHistory
         history.push("/home");
       } else {
        if(username.length === 0){
          addToast("Enter Username",{appearance:"warning",autoDismiss:true})
        }else if(password.length === 0){
          addToast("Enter Password",{appearance:"warning",autoDismiss:true})
        }else{
          addToast("Invalid username/Password",{appearance:"error",autoDismiss:true})
        }
         setUsername("");
         setPassword("");
       }
     });
   };

  return (
    <div>
      <div className="loginContainer">
        <div className="container loginBox" id="container">
          <div className="loginform-container sign-in-container">
            <div className='loginform' >
              <h1>Sign in</h1>

              <input 
                className='loginInput'
                type="text" 
                  required 
                  placeholder="Username" 
                  value={username}
                  onChange = {(event) =>  setUsername(event.target.value)}  
                  />
             
              <input 
                className='loginInput'
                type="password"
                 required 
                 placeholder="Password"
                 value={password}
                  onChange = {(event) => setPassword(event.target.value)} 
                   />
                   
              <p className='loginLink'   onClick={(e) => e.preventDefault()}>Forgot your password?</p>
             
              <button className="loginbtn" onClick ={() => loginHandler({username:username,password:password})}>Sign In</button>
            </div>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <p> And Enjoy shopping with us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Login)