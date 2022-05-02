import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { light, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Avatar from "../../atoms/avatar";
import LinkedOrg from "../../molecules/linked-org";
import FollowingList from "../wishlist/index";
import UserSettingsList from "./user-settings-list";
import { Link } from "react-router-dom";
import AvatarImg from "../../../../../assets/images/avatar.jpeg";
import helper from "../../../../../Common/Helper";

import "./style.scss";


const UserSettings = () => {

  const userData = JSON.parse(localStorage.getItem('userData'));
  const CampaignAdmin = JSON.parse(localStorage.getItem('CampaignAdmin'));
  const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');


  const [state, setState] = useState({
    wishlist: false,
    linked_org: false,
  })

  const goBack = () => {
    setState({ ...state, wishlist: false, linked_org: false });
  };

  const showWishList = () => setState({ ...state, wishlist: true });

  const showOrg = () => setState({ ...state, linked_org: true });

  const UserButton = React.forwardRef(({ children, onClick }, ref) => {
    return (
      <Button
        ref={ref}
        variant="link"
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        className="p-0 d-flex text-decoration-none"
      >
        {children}
      </Button>
    );
  });

  return (
    <>
      <Dropdown className="d-flex" autoClose="outside">
        <Dropdown.Toggle as={UserButton}>
          <Avatar avatarUrl={CampaignAdminAuthToken && CampaignAdmin ? helper.CampaignAdminLogoPath + CampaignAdmin.logo : AvatarImg} />
        </Dropdown.Toggle>

        <Dropdown.Menu className="activity__dropdown w-310 dropdown-top-arrow">
          <div className="dropdown__inner">
            <div className="d-flex activity__dropdown-header">
              {state.wishlist || state.linked_org ? (
                <Button
                  variant="link"
                  className="btn__link-light px-6p text-decoration-none"
                  onClick={() => goBack()}
                >
                  {/* <i className="fa-solid fa-chevron-left"></i> */}
                  <FontAwesomeIcon icon={solid("chevron-left")} />
                </Button>
              ) : (
                ""
              )}

              {state.wishlist ? (
                <div className="fw-bold">Wishlist</div>
              ) : state.linked_org ? (
                <div className="fw-bold">Organizations</div>
              ) : (
                <div className="d-flex align-items-center w-100">
                  <Avatar avatarUrl={CampaignAdminAuthToken && CampaignAdmin ? helper.CampaignAdminLogoPath + CampaignAdmin.logo : AvatarImg} />

                  {
                    CampaignAdmin?.name ?
                      <Link
                        to={'/campaign/' + CampaignAdmin?.slug + '/dashboard'}
                        variant="link"
                        className="p-0 ms-2 btn__link-dark text-decoration-none"
                      >
                        {CampaignAdmin?.name}
                      </Link> :
                      <Button
                        href="#"
                        variant="link"
                        className="p-0 ms-2 btn__link-dark text-decoration-none"
                      >
                        {userData?.name ? userData.name : CampaignAdmin?.name}
                      </Button>
                  }

                  {
                    userData &&
                    <a
                      href="/leaderboard"
                      className="btn btn__xs rounded-pill btn__purple ms-auto"
                    >


                      <>
                        <FontAwesomeIcon className="mr-3p" icon={solid("narwhal")} />
                        <span className="text text__badge">Narwhal</span>
                      </>

                    </a>
                  }
                </div>
              )}
            </div>

            <div className="activity__dropdown-body">
              {state.wishlist ? (
                <FollowingList />
              ) : state.linked_org ? (
                <LinkedOrg />
              ) : (
                <UserSettingsList
                  onWishlistClick={() => showWishList()}
                  onOrgClick={() => showOrg()}
                  userData={userData}
                />
              )}
            </div>

            <div className="activity__dropdown-footer"></div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default UserSettings;
