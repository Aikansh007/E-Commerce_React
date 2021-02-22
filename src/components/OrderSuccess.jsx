import React from 'react';
import { Link } from 'react-router-dom';
import AddressInfo from './SharedContainer/AddressInfo';
import CartDetails from './SharedContainer/CartDetails';
import PaymentInfo from './SharedContainer/PaymentInfo';

const OrderSuccess = () => {
    return ( 
        <div>
             <div className="container" style={{textAlign:'center',marginTop:"8rem"}}>
                <div className="m-3" color="info">
                    <div style={{backgroundColor: "#4fd69c"}}>
                        <strong>Success!</strong> Your Order Placed Successfully
        </div>
                    <h1 className="display-3 text-center">Order Details</h1>
                    <p className="lead">Here is Your Order Details including your Items and Payment Details</p>
                    <hr className="my-2" />
                   
                    <div className="col-sm-12">
                        <h4>Items</h4>
                        <CartDetails showIncDec="false" />
                    </div>
                    <div className="col-sm-12">
                        <PaymentInfo />
                        <AddressInfo />
                      
                    </div>
                    <p className="lead text-center">
                       <Link to="/home"> <button className="btn btn-primary" style={{margin:"10px"}}>Shop More</button></Link>
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default OrderSuccess;