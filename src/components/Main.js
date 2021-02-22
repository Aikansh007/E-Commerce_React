import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import OrderSuccess from "./OrderSuccess";
import ProductDetails from "./ProductDetails";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.user,
  };
};

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>

        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/product/:id" component={ProductDetails}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/checkout" component={Checkout}></Route>
         <Route path="/ordersuccess" component={OrderSuccess}></Route>

          {/* when there is wrong route or unknown redirect to home */}

          <Redirect to="/home"></Redirect>
        </Switch>
        <div style={{ backgroundColor: " #172b4d", color: "navajowhite" }}>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps)(Main);
