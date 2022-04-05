import React from "react";
import PropTypes from "prop-types";

import { Nav } from "react-bootstrap";
import {
  ProfileIcon,
  AccountsIcon,
  BillingIcon,
  ControlsIcon,
  AdministratorIcon,
} from "./tab-icons";

import "./style.scss";

const propTypes = {
  activeKey: PropTypes.string,
};

function SettingsTabs({ activeKey, _onClick, ...otherProps }) {
  return (
    <div className="settings-tabs">
      <Nav variant="link" {...otherProps} onClick={_onClick}>
        <Nav.Item>
          <Nav.Link
            eventKey="profile"
            className="stab__btn d-flex align-items-center"
          >
            <span className="stab__icon">
              <ProfileIcon active={activeKey === "[profile]"} />
            </span>
            <span className="stab__text">Profile</span>
            <div className="tab__active--indicator"></div>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item onClick={_onClick}>
          <Nav.Link
            eventKey="accounts"
            className="stab__btn d-flex align-items-center"
          >
            <span className="stab__icon">
              <AccountsIcon active={activeKey === "accounts"} />
            </span>
            <span className="stab__text">Accounts</span>
            <div className="tab__active--indicator"></div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={_onClick}>
          <Nav.Link
            eventKey="billing"
            className="stab__btn d-flex align-items-center"
          >
            <span className="stab__icon">
              <BillingIcon active={activeKey === "billing"} />
            </span>
            <span className="stab__text">Billing</span>
            <div className="tab__active--indicator"></div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={_onClick}>
          <Nav.Link
            eventKey="controls"
            className="stab__btn d-flex align-items-center"
          >
            <span className="stab__icon">
              <ControlsIcon active={activeKey === "controls"} />
            </span>
            <span className="stab__text">Controls</span>
            <div className="tab__active--indicator"></div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={_onClick}>
          <Nav.Link
            eventKey="administrator"
            className="stab__btn d-flex align-items-center"
          >
            <span className="stab__icon">
              <AdministratorIcon active={activeKey === "administrator"} />
            </span>
            <span className="stab__text">Administrator</span>
            <div className="tab__active--indicator"></div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

SettingsTabs.propTypes = propTypes;

export default SettingsTabs;
