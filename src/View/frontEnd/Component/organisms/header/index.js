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


const Header = () => {
  return (
    <header className="main-header">
      <Container className="d-flex align-items-center" fluid>
        <Logo />
        <div className="ms-auto header__right d-flex">
          <GeoLocation />

          <ShoppingCart />

          <Activity />

          <UserSettings />
        </div>
      </Container>
    </header>
  );

}

export default Header;
