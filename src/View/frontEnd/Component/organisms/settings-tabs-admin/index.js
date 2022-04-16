import React from "react";
import PropTypes from "prop-types";

import { Nav } from "react-bootstrap";
import {
  ProfileIcon,
  PaymentIcon,
  BillingIcon,
  ControlsIcon,
  AdministratorIcon,
} from "./tab-icons";

import "./style.scss";

const propTypes = {
  activeKey: PropTypes.string,
};

function SettingsTabsAdmin({ activeKey, _onClick, ...otherProps }) {
  return (
    <div className="settings-tabs">
      <Nav variant="link" {...otherProps} onClick={_onClick}>
        <Nav.Item>
          <Nav.Link
            eventKey="company"
            className="stab__btn d-flex align-items-center"
          >
            <span className="stab__icon">
              <ProfileIcon active={activeKey === "company"} />
            </span>
            <span className="stab__text">Company</span>
            <div className="tab__active--indicator"></div>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item onClick={_onClick}>
          <Nav.Link
            eventKey="paymentMethod"
            className="stab__btn d-flex align-items-center"
          >
            <span className="stab__icon">
              <PaymentIcon active={activeKey === "paymentMethod"} />
            </span>
            <span className="stab__text">Payment Methods</span>
            <div className="tab__active--indicator"></div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={_onClick}>
          <Nav.Link
            eventKey="administrators"
            className="stab__btn d-flex align-items-center"
          >
            <span className="stab__icon">
              <AdministratorIcon active={activeKey === "administrators"} />
            </span>
            <span className="stab__text">Administrators</span>
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
        
      </Nav>
    </div>
  );
}

SettingsTabsAdmin.propTypes = propTypes;

export default SettingsTabsAdmin;
