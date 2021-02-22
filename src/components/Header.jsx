import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";
import {} from "styled-components";
import {  Badge,  DropdownItem,  DropdownMenu,  DropdownToggle,  Navbar,  UncontrolledDropdown,} from "reactstrap";

import { connect } from "react-redux";
import { userLogout } from "../redux/user/userAction";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import StorefrontIcon from '@material-ui/icons/Storefront';
import LockOpenIcon from '@material-ui/icons/LockOpen';


const mapStateToProps = (state) => {
  return {
    cartCount: state.cartReducer.cart.length,
    currentUser: state.userReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(userLogout()),
  };
};

const Header = (props) => {
  return (
    <div>
      <Navbar className="navbar" style={{fontFamily:'cursive',maxHeight:"fit-content",color:'navajowhite'}}>
        <NavLink className="headLink" to="/home">
         <StorefrontIcon /> IndiaMart
        </NavLink>
        <div>
          <span className="navbar-text">
            <NavLink className="headLink" to="/cart" role="button">
             <ShoppingCartIcon/> Cart <span> </span>
              <Badge style={{backgroundColor:'cadetblue'}}> {props.cartCount}</Badge>
            </NavLink>
          </span>

          <span
            className="navbar-text"
            style={{ listStyle: "none", marginLeft: "30px" }}
          >


            {props.currentUser.username == undefined ? (
              <NavLink className="headLink right" to="/login">
               <LockOpenIcon /> Login
              </NavLink>
            ) : (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="headLink">
                 <AccountCircleIcon/> {props.currentUser.username}
                </DropdownToggle>
                <DropdownMenu className="drpDownMenu" style={{ left: "-45px" }}>
                  <DropdownItem onClick={() => props.logout()}>
                  <ExitToAppIcon />  <b>Logout</b>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
          </span>
        </div>
      </Navbar>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
