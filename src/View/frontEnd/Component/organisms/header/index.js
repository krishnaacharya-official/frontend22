import React from "react";
import { Container } from "react-bootstrap";

// import AvatarImg from "../../../../assets/images/avatar.jpeg";
// import Avatar from '../avatar/index'
import Logo from "../../atoms/logo";

import GeoLocation from "../geo-location";
import ShoppingCart from "../shopping-cart";
import Activity from "../activity";
import UserSettings from "../user-settings";

import "./style.scss";


const Header = (props) => {
  return (
    <header className="frontend_pages main-header">
      <Container className="d-flex align-items-center" fluid>
        <Logo />
        <div className="ms-auto header__right d-flex">
          <GeoLocation />

                
          <ShoppingCart cartItem={props.cartItem} removeCartItem={props.removeCartItem}  updateCartItem={props.updateCartItem}   />

          <Activity />

          <UserSettings />
        </div>
      </Container>
    </header>
  );

}

export default Header;
