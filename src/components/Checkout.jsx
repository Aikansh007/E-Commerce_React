import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AddressInfo from "./SharedContainer/AddressInfo";
import CartDetails from "./SharedContainer/CartDetails";
import PaymentInfo from "./SharedContainer/PaymentInfo";

const mapStateToProps = (state) => {
  return {
   
    currentUser: state.userReducer.user,
  };
};

const Checkout = (props) => {
 // logic to check if user logged in then forward to checkout otherwise to Login
 let forwardTo = props?.currentUser?.username ? "/ordersuccess" : "/login";


  return (
    <>
      <div className="container">
        <h2 className="text-center " style={{ marginTop: "8rem" }}>
          Checkout
        </h2>

        <div className="col-12 ">
          <h3 style={{ textAlign: "center" }}>Products</h3>
          <br />
          <CartDetails showQty="true" />
        </div>
        <div className="col-12">
          <PaymentInfo />
          <AddressInfo edit="true" />
        </div>
        <div className="col-sm-12 text-center m-3">
          <Link to="/cart">
            <button className="btn btn-primary" style={{ margin: "10px" }}>
              Go Back to Cart
            </button>
          </Link>
          <Link to={forwardTo}>
            <button className="btn btn-success" style={{ margin: "10px" }}>
              Place Order
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps) (Checkout);
