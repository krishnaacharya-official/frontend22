import React from "react";
import { Container } from "react-bootstrap";

import AvatarImg from "../../../../assets/images/avatar.jpeg";
import Avatar from '../avatar/index'
import Logo from "../logo";

import GeoLocation from "../../Component/geo-location/index";
import ShoppingCart from "../../Component/shopping-cart/index";
import Activity from "../../Component/activity/index";
import UserSettings from "../../Component/user-settings/index";

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
