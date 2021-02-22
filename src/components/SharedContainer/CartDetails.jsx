import React from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import DeleteIcon from "@material-ui/icons/Delete";

import { connect } from "react-redux";
import {
  deleteProductFromCart,
  incQty,
  decQty,
} from "../../redux/cart/cartAction";

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (productId) => dispatch(deleteProductFromCart(productId)),
    incProductQty: (productId) => dispatch(incQty(productId)),
    decProductQty: (productId) => dispatch(decQty(productId)),
  };
};

const CartDetails = (props) => {
  const cartList = props.cart.map((item) => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="imageCart">
                <img
                  style={{ maxWidth: "250px" }}
                  src={item.image}
                  alt="item Iamge"
                ></img>
              </div>
            </div>

            <div className="col-6">
              <br />
              <br />
              <div className="itemHeading">
                <h2>{item.title}</h2>
              </div>
              <div className="itemPrice">
                <h4>
                  <b>${item.price}</b>
                </h4>
              </div>
              {props.showIncDec === "true" && (
                <div className="mt-3">
                  <div
                    onClick={() => props.decProductQty(item.id)}
                    style={{
                      margin: "10px",
                      fontSize: "30px",
                      textDecoration: "none",
                      display:'inline'
                    }}
                  >
                    <IndeterminateCheckBoxIcon />
                  </div>
                  <input type="text" disabled value={item.qty} />
                  <div
                    onClick={() => props.incProductQty(item.id)}
                    href="#"
                    style={{
                      margin: "10px",
                      fontSize: "30px",
                      textDecoration: "none",
                      display:'inline'
                    }}
                  >
                    <AddBoxIcon />
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => props.deleteProduct(item.id)}
                  >
                    <DeleteIcon /> Delete
                  </button>
                </div>
              )}
              {props.showQty === "true" && (
                <span>
                  Qty : <b>{item.qty}</b>
                </span>
              )}
            </div>
          </div>
          <br />
          <b>
            {" "}
            <hr style={{ borderTop: "2px solid #0c4355" }} />{" "}
          </b>
        </div>
      </>
    );
  });

  return <>{cartList}</>;
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
