import { useState } from "react";
import { Tab } from "react-bootstrap";

// import {
//   SettingsTabs,
//   UserAccounts,
//   UserProfile,
//   UserBilling,
//   UserControl,
//   UserAdmin,
// } from "@components/organisms";

import SettingsTabs from "../settings-tabs";
import UserAccounts from "../user-accounts";
import UserProfile from "../user-profile";
import UserBilling from "../user-billing";
import UserControl from "../user-control";
import UserAdmin from "../user-admin";

import "./style.scss";

const UserSettingsTab = (props) => {
  const [selectedTabKey, setSelectedTabKey] = useState("profile");
  return (
    <>
      <header className="py-sm-2 pb-2 w-100 d-sm-flex align-items-center">
        <div className="me-sm-2 flex-grow-1 mb-3 mb-sm-0">
          <h1 className="d-none d-sm-flex page__title fs-3 fw-bolder">
            Settings
          </h1>
        </div>
      </header>
      <Tab.Container
        defaultActiveKey={selectedTabKey}
        onSelect={(key) => setSelectedTabKey(key)}
      >
        <div className="d-md-flex align-items-start">
          <SettingsTabs activeKey={selectedTabKey} />
          <Tab.Content className="user__settings-content flex-grow-1">
            <Tab.Pane eventKey="profile">
              <UserProfile organizationDetails={props.organizationDetails}  />
            </Tab.Pane>
            <Tab.Pane eventKey="accounts">
              <UserAccounts />
            </Tab.Pane>
            <Tab.Pane eventKey="billing">
              <UserBilling />
            </Tab.Pane>
            <Tab.Pane eventKey="controls">
              <UserControl />
            </Tab.Pane>
            <Tab.Pane eventKey="administrator">
              <UserAdmin />
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </>
  );
};

export default UserSettingsTab;
