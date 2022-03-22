import React from "react";
import { Container } from "react-bootstrap";

import AvatarImg from "../../../../assets/images/avatar.jpeg";
import Avatar from '../avatar/index'
import Logo from "../logo";

import "./style.scss";


const Header = () =>{
  return (
    <header className="main-header">
      <Container className="d-flex align-items-center" fluid>
        <Logo />
        <div className="ms-auto header__right d-flex">
          <button className="btn p-0 icon__btn">
            <span className="icon icon__pro">
              <span></span>
            </span>
          </button>

          <button className="btn p-0 icon__btn">
            <span className="icon icon__pro">
              <span></span>
            </span>
          </button>

          <button className="btn p-0 icon__btn">
            <span className="icon icon__pro notify-icon">
              <span></span>
            </span>
          </button>

          <button className="btn p-0 d-flex">
            <Avatar avatarUrl={AvatarImg} />
          </button>
        </div>
      </Container>
    </header>
  );

}

export default Header;
