import { useState } from "react";
import { Tab } from "react-bootstrap";

// import {
//   SettingsTabsAdmin,
//   PaymentMethod,
//   CompanySettings,
//   AdminBilling,
//   AdminControl,
//   AdminAdmin,
// } from "@components/organisms";

import SettingsTabsAdmin from "../settings-tabs-admin";
import PaymentMethod from "../payment-method";
import CompanySettings from "../company-settings";
import AdminBilling from "../admin-billing";
import AdminControl from "../admin-control";
import AdminAdmin from "../admin-admin";
import { Outlet, Link, useLocation,useOutletContext } from "react-router-dom";


import "./style.scss";

const AdminSettingsTab = () => {
  const [data, setData] = useOutletContext();
  // console.log(data)

  const [selectedTabKey, setSelectedTabKey] = useState("");
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
          <SettingsTabsAdmin activeKey={selectedTabKey} data={data} />
          <div className="user__settings-content flex-grow-1">
            <Outlet context={[data, setData]}  />
          </div>
          {/* <Tab.Content className="user__settings-content flex-grow-1">
            <Tab.Pane eventKey="company">
              <CompanySettings />
            </Tab.Pane>
            <Tab.Pane eventKey="paymentMethod">
              <PaymentMethod />
            </Tab.Pane>
            <Tab.Pane eventKey="administrators">
              <AdminAdmin />
            </Tab.Pane>
            <Tab.Pane eventKey="billing">
              <AdminBilling />
            </Tab.Pane>
            <Tab.Pane eventKey="controls">
              <AdminControl />
            </Tab.Pane>
          </Tab.Content> */}
        </div>
      </Tab.Container>
    </>
  );
};

export default AdminSettingsTab;
