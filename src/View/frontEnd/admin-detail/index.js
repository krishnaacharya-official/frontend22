import React, { useState } from "react";
import { Tab, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// import {
//   AdminDashboard,
//   AdminTabs,
//   AdminPosts,
//   UserXp,
//   UserTax,
//   UserHistory,
//   UserSettingsTab,
// } from "@components/organisms";

import AdminDashboard from "../Component/organisms/admin-dashboard";
import AdminTabs from "../Component/organisms/admin-tabs";
import AdminPosts from "../Component/organisms/admin-posts";
import UserXp from "../Component/organisms/user-history";
import UserTax from "../Component/organisms/user-tax";
// import UserXp from "../Component/organisms/user-history";
import UserSettingsTab from "../Component/organisms/user-settings-tab";

// import useWindowSize from "@hooks/device-check";
import useWindowSize from "../../../hooks/device-check";
import {
  DashboardIcon,
  PostsIcon,
  ActivityIcon,
  TaxIcon,
  ProjectIcon,
  SettingsIcon,
} from "../Component/organisms/admin-tabs/tab-icons";

import DefaultLayout from "../Component/templates/default-layout";

import "./style.scss";

function AdminDetail(props) {
  const [selectedTabKey, setSelectedTabKey] = useState("posts");
  const [dropdown, setDropdown] = useState(false);
  const isMobile = useWindowSize() <= 575;

  return (
    <DefaultLayout>
      <Container fluid>
        <Tab.Container
          defaultActiveKey={selectedTabKey}
          onSelect={(key) => setSelectedTabKey(key)}
        >
          <div className="user__detail-wrap d-sm-flex">
            <div className="user__detail d-sm-flex px-sm-1">
              <div className="tab__menu d-sm-flex flex-column align-items-center">
                <div className="user__img-wrap mt-4 mb-5 w-100 d-none d-sm-block">
                  <div className="user__img-content">
                    <div
                      className="user__img"
                      style={{
                        backgroundImage:
                          "url(https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5d379d1d11c09e5a51bdeb78_image-250nw-1124572691.jpg)",
                      }}
                    ></div>
                  </div>
                </div>

                {/* for mobile */}
                {isMobile ? (
                  <div className="mobile-tab">
                    <Button
                      variant="link"
                      onClick={() => setDropdown(!dropdown)}
                      className="toggle__btn d-flex align-items-center text-dark"
                    >
                      <span className="tab__icon">
                        {selectedTabKey === "dashboard" ? (
                          <DashboardIcon active={true} />
                        ) : (
                          ""
                        )}
                        {selectedTabKey === "posts" ? (
                          <PostsIcon active={true} />
                        ) : (
                          ""
                        )}
                        {selectedTabKey === "xp" ? (
                          <ActivityIcon active={true} />
                        ) : (
                          ""
                        )}
                        {selectedTabKey === "tax" ? (
                          <TaxIcon active={true} />
                        ) : (
                          ""
                        )}
                        {selectedTabKey === "history" ? (
                          <ProjectIcon active={true} />
                        ) : (
                          ""
                        )}
                        {selectedTabKey === "settings" ? (
                          <SettingsIcon active={true} />
                        ) : (
                          ""
                        )}
                      </span>
                      <span className="tab__text text-capitalize">
                        {selectedTabKey}
                      </span>
                      <span className="d-flex align-items-center ms-auto">
                        {selectedTabKey === "items" ? (
                          <span className="item__total-wrap d-flex ms-3">
                            <FontAwesomeIcon
                              icon={solid("money-bills-simple")}
                              className="text-dark mr-12p fs-4"
                            />
                            USD $1,309.00
                          </span>
                        ) : (
                          ""
                        )}

                        <FontAwesomeIcon
                          icon={solid("caret-down")}
                          className="ms-auto"
                        />
                      </span>
                    </Button>

                    {dropdown ? (
                      <div className="tab__dropdown w-100">
                        <AdminTabs
                          _onClick={() => setDropdown(false)}
                          activeKey={selectedTabKey}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <div className="desktop__tab">
                    <AdminTabs activeKey={selectedTabKey} />
                  </div>
                )}
              </div>
            </div>
            <Tab.Content className="flex-grow-1">
              <Tab.Pane eventKey="dashboard">
                <AdminDashboard />
              </Tab.Pane>
              <Tab.Pane eventKey="posts">
                <AdminPosts />
              </Tab.Pane>
              <Tab.Pane eventKey="activity">
                <UserXp />
              </Tab.Pane>
              <Tab.Pane eventKey="tax">
                <UserTax />
              </Tab.Pane>
              <Tab.Pane eventKey="project">
                <UserXp />
              </Tab.Pane>
              <Tab.Pane eventKey="settings">
                <UserSettingsTab organizationDetails={props.organizationDetails} />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </Container>
    </DefaultLayout>
  );
}

export default AdminDetail;
