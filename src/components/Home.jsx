import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addProductToCart } from "../redux/cart/cartAction";
import { useToasts } from "react-toast-notifications";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch(addProductToCart(item)),
  };
};

const Home = (props) => {
  //hooks to change and set state
  const [products, setProducts] = useState([]);

  //hooks to set notification
  const { addToast } = useToasts();

  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products?limit=18").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const addItem = (item) => {
    props.addItemToCart(item);
    // console.log(item);
    addToast("Product Added Successfully", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  //mapping products one by one to productList

  const productList = products.map((pro) => {
    return (
      <>
        <div className="card col-lg-4 col-md-6 col-sm-12" key={pro.id}>
          <img
            style={{ textAlign: "center" }}
            className="card-img-top"
            src={pro.image}
            alt="Cardimg1"
          ></img>
          <div className="card-body">
            <h5 className="card-title">{pro.title}</h5>
            <h6 className="card-subtitle">
              {pro.category}{" "}
              <span className="price">
                <b>${pro.price}</b>
              </span>
            </h6>
          </div>
          <div className="card-footer">
            <Link to={`/product/${pro.id}`}>
              <button className="btn btn-primary" style={{ width: "40%" }}>
                View
              </button>
            </Link>
            <button
              className="btn btn-primary price"
              // arrow function to add item
              onClick={() => addItem(pro)}
            >
              <AddShoppingCartIcon /> Add To Cart
            </button>
          </div>
        </div>
      </>
    );
  });

  return (
    <div>
      <div className="container" style={{ marginBottom: "20px" }}>
        <div className="row">
          <div className="col">
            <h2
              className="text-center m-3"
              style={{ fontFamily: "cursive", marginTop: "8rem" }}
            >
              Products For You
            </h2>
            {/* Now the whole productList is here */}
            <div className="row">{productList}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
