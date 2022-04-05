import React from "react";
import PropTypes from "prop-types";

import { Nav } from "react-bootstrap";
import {
  DashboardIcon,
  PostsIcon,
  ActivityIcon,
  TaxIcon,
  ProjectIcon,
  SettingsIcon,
} from "./tab-icons";

import "./style.scss";

const propTypes = {
  activeKey: PropTypes.string,
};

function AdminTabs({ activeKey, _onClick, ...otherProps }) {
  return (
    <>
      <Nav variant="pills" {...otherProps} onClick={_onClick}>
        <Nav.Item>
          <Nav.Link
            eventKey="dashboard"
            className="tab__btn d-flex align-items-center text-dark"
          >
            <span className="tab__icon">
              <DashboardIcon active={activeKey === "dashboard"} />
            </span>
            <span className="tab__text">Dashboard</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item onClick={_onClick}>
          <Nav.Link
            eventKey="posts"
            className="tab__btn d-flex align-items-center text-dark"
          >
            <span className="tab__icon">
              <PostsIcon active={activeKey === "posts"} />
            </span>
            <span className="tab__text">Posts</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={_onClick}>
          <Nav.Link
            eventKey="activity"
            className="tab__btn d-flex align-items-center text-dark"
          >
            <span className="tab__icon">
              <ActivityIcon active={activeKey === "activity"} />
            </span>
            <span className="tab__text">Activity</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={_onClick}>
          <Nav.Link
            eventKey="tax"
            className="tab__btn d-flex align-items-center text-dark"
          >
            <span className="tab__icon">
              <TaxIcon active={activeKey === "tax"} />
            </span>
            <span className="tab__text">Tax</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={_onClick}>
          <Nav.Link
            eventKey="project"
            className="tab__btn d-flex align-items-center text-dark"
          >
            <span className="tab__icon">
              <ProjectIcon active={activeKey === "project"} />
            </span>
            <span className="tab__text">Project</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="" onClick={_onClick}>
          <Nav.Link
            eventKey="settings"
            className="tab__btn d-flex align-items-center text-dark"
          >
            <span className="tab__icon">
              <SettingsIcon active={activeKey === "settings"} />
            </span>
            <span className="tab__text">Settings</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

AdminTabs.propTypes = propTypes;

export default AdminTabs;
