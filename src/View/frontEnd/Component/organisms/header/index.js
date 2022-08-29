import React from "react";
import { Container } from "react-bootstrap";

// import AvatarImg from "../../../../assets/images/avatar.jpeg";
// import Avatar from '../avatar/index'
import Logo from "../../atoms/logo";

import GeoLocation from "../geo-location";
import ShoppingCart from "../shopping-cart";
import Activity from "../activity";
import UserSettings from "../user-settings";

import "./style.scss";


const Header = (props) => {

  const adminAuthToken = localStorage.getItem('adminAuthToken');
  const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
  const userAuthToken = localStorage.getItem('userAuthToken');



  return (
    <header className="frontend_pages main-header">
      <Container className="d-flex align-items-center" fluid>
        <Logo />
        {
          // adminAuthToken || CampaignAdminAuthToken || userAuthToken ?

          <div className="ms-auto header__right d-flex">
            <GeoLocation />
            {/* {
              userAuthToken || CampaignAdminAuthToken ?
                <GeoLocation />
                :
                <></>

            } */}
            {
              userAuthToken ?
                <>
                  {/* <GeoLocation /> */}


                  <ShoppingCart cartItem={props.cartItem} removeCartItem={props.removeCartItem} updateCartItem={props.updateCartItem} />

                  <Activity
                    notificationList={props.notificationList}
                    setWatchNotification={props.setWatchNotification}
                    removeNotification={props.removeNotification}
                    followedOrganizationList={props.followedOrganizationList}
                    notificationMarkAsRead={props.notificationMarkAsRead}
                    followToOrganization={props.followToOrganization}


                  />
                </>
                :
                <></>
            }


            <UserSettings wishListproductList={props.wishListproductList} addProductToWishlist={props.addProductToWishlist} getAuthToken={props.getAuthToken}
            />
          </div>
          //  : <></>
        }
      </Container>
    </header>
  );

}

export default Header;
