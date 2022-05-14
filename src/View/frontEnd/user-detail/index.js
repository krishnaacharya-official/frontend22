import React, { useState, useEffect, useContext } from "react";
import { Tab, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import useWindowSize from "../../../hooks/device-check";
import UserTabs from "../Component/organisms/user-tabs";
import {
  DashboardIcon,
  ItemsIcon,
  XpIcon,
  TaxIcon,
  HistoryIcon,
  SettingsIcon,
} from "../Component/organisms/user-tabs/tab-icons";
import DefaultLayout from "../Component/templates/default-layout";
import userApi from "../../../Api/frontEnd/user";
import FrontLoader from "../../../Common/FrontLoader";
import helper, { ImageExist } from "../../../Common/Helper"


// import { UserContext } from '../../../App';
import noimg from "../../../assets/images/noimg.jpg"
import { useSelector, useDispatch } from "react-redux";




import "./style.scss";

function UserDetail(props) {
  // const user = useContext(UserContext)
  const user = useSelector((state) => state.user);

  const userAuthToken = localStorage.getItem('userAuthToken');
  const [selectedTabKey, setSelectedTabKey] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const isMobile = useWindowSize() <= 575;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [profileImg, setProfileImg] = useState("");


  useEffect(() => {
    (async () => {
      setLoading(true)
      const getUserDetails = await userApi.getUserDetails(userAuthToken);
      if (getUserDetails) {
        if (getUserDetails.data.success) {
          // console.log(getUserDetails.data.data)
          setProfileImg((helper.DonorImagePath + getUserDetails.data.data?.image) ? helper.DonorImagePath + getUserDetails.data.data?.image : noimg)
          setData(getUserDetails.data.data)
        } else {
          localStorage.clear()
          navigate('/')
        }
      } else {
        localStorage.clear()
        navigate('/')
      }

      setLoading(false)

    })()

  }, [user.isUpdateUserDetails])


  return (
    <DefaultLayout>
      <FrontLoader loading={loading} />
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
                          "url(" + profileImg + ")", width: "120px"
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
                        {selectedTabKey === "items" ? (
                          <ItemsIcon active={true} />
                        ) : (
                          ""
                        )}
                        {selectedTabKey === "xp" ? (
                          <XpIcon active={true} />
                        ) : (
                          ""
                        )}
                        {selectedTabKey === "tax" ? (
                          <TaxIcon active={true} />
                        ) : (
                          ""
                        )}
                        {selectedTabKey === "history" ? (
                          <HistoryIcon active={true} />
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
                        <UserTabs
                          _onClick={() => setDropdown(false)}
                          activeKey={selectedTabKey}
                          data={data}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <div className="desktop__tab">
                    <UserTabs activeKey={selectedTabKey} data={data} />
                  </div>
                )}
              </div>
            </div>

            <div className="flex-grow-1 tab-content">
              <Outlet context={[data, setData]} />
            </div>
            {/* <Tab.Content className="flex-grow-1">
              <Tab.Pane eventKey="dashboard">
                <UserDashboard />
              </Tab.Pane>
              <Tab.Pane eventKey="items">
                <UserItems />
              </Tab.Pane>
              <Tab.Pane eventKey="xp">
                <UserXp />
              </Tab.Pane>
              <Tab.Pane eventKey="tax">
                <UserTax />
              </Tab.Pane>
              <Tab.Pane eventKey="history">
                <UserHistory />
              </Tab.Pane>
              <Tab.Pane eventKey="settings">
                <UserSettingsTab />
              </Tab.Pane>
            </Tab.Content> */}
          </div>
        </Tab.Container>
      </Container>
    </DefaultLayout>
  );
}

export default UserDetail;
