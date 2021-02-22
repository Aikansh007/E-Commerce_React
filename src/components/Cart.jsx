import React from 'react';
import '../css/Cart.css'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import CartDetails from './SharedContainer/CartDetails';


const mapStateToProps = state => {
    return {
        LengthOfCart :state.cartReducer.cart.length,
        currentUser: state.userReducer.user
    }
}
const Cart = (props) => {

    // logic to check if user logged in then forward to checkout otherwise to Login
  let forwardTo =  props?.currentUser?.username ? '/checkout' : '/login'
   
    return ( 
        <div>
             <div className="container">
                <h2 className="text-center m-5">Cart</h2>
                <div className="row">
 
                    {props.LengthOfCart > 0 ?
                        <div className="col-sm-12">

                       
                            <CartDetails showIncDec = "true"></CartDetails>
                           
                            <div className="text-center m-3">
                                
                        <Link to={forwardTo}><button className="btn btn-primary">Checkout</button></Link>
                            </div>

                        </div>
                        :
                        <div className="col-sm-12">
                            <h3 className="text-center m-5">Your Cart Is Empty :(  ,
                     </h3>
                     </div>
                     }

                   
                </div>
            </div>
        </div>
     );
}
 
export default connect(mapStateToProps) (Cart);