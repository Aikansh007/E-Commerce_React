import React from 'react';
import {Link} from 'react-router-dom';
import AddressInfo from './SharedContainer/AddressInfo';
import CartDetails from './SharedContainer/CartDetails';
import PaymentInfo from './SharedContainer/PaymentInfo';


const Checkout=()=>{

    return(
      <>
      
{/* 
      <div className="container">
                <h2 className="text-center m-5">Checkout</h2>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h3 style={{textAlign:"center"}}>Products</h3>
                        <br/>
                        <CartDetails showQty="true" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <PaymentInfo />
                        
                    </div>
                    <div className="col-sm-12 text-center m-3">
                        <Link to="/cart"><button className="btn btn-primary" style={{margin:"10px"}}>Go Back to Cart</button></Link>
                        <Link to="/ordersuccess"><button className="btn btn-success" style={{margin:"10px"}} >Place Order</button></Link>
                    </div>
                </div>
            </div> */}

<div className="container">
                <h2 className="text-center m-5">Checkout</h2>
               
                    <div className="col-12 ">
                        <h3 style={{textAlign:"center"}}>Products</h3>
                        <br/>
                        <CartDetails showQty="true" />
                    </div>
                    <div className="col-12" >
                        <PaymentInfo  />
                        <AddressInfo edit="true" />
                    </div>
                    <div className="col-sm-12 text-center m-3">
                        <Link to="/cart"><button className="btn btn-primary" style={{margin:"10px"}}>Go Back to Cart</button></Link>
                        <Link to="/ordersuccess"><button className="btn btn-success" style={{margin:"10px"}} >Place Order</button></Link>
                    </div>
            
            </div>



      </>
    )
  }
  
  export default Checkout;