import React from 'react';
import {Link} from 'react-router-dom';
import CartDetails from './SharedContainer/CartDetails';
import PaymentInfo from './SharedContainer/PaymentInfo';


const Checkout=()=>{

    return(
      <>
      

      <div className="container">
                <h2 className="text-center m-5">Checkout</h2>
                <div className="row">
                    <div className="col-sm-6">
                        <h3 style={{textAlign:"center"}}>Products</h3>
                        <br/>
                        <CartDetails showQty="true" />
                    </div>
                    <div className="col-sm-6">
                        <PaymentInfo />
                        
                    </div>
                    <div className="col-sm-12 text-center m-3">
                        <Link to="/cart"><button className="btn btn-primary" style={{margin:"10px"}}>Go Back to Cart</button></Link>
                        <Link to="/ordersuccess"><button className="btn btn-success" style={{margin:"10px"}} >Place Order</button></Link>
                    </div>
                </div>
            </div>


      </>
    )
  }
  
  export default Checkout;