import { Logout } from "@mui/icons-material";
import React from "react";
import UserSettingsItem from "../../../molecules/user-settings-item";
import { NavLink as RouterLink, matchPath, useLocation,useNavigate } from 'react-router-dom';

function UserSettingsList(props) {
  const navigate = useNavigate();

  const  logout = () =>{
    localStorage.clear()
    navigate('/')
  }

  return (
    <ul className="user__settings__list list-unstyled mb-0">
      <UserSettingsItem
        icon={<i className="fa-solid fa-circle-user"></i>}
        label="Profile"
        itemClass="border-bottom"
      />
      <UserSettingsItem
        icon={<i className="fa-solid fa-heart"></i>}
        nextIcon={<i className="fa-solid fa-chevron-right"></i>}
        label="Wishlist"
        onClick={props.onWishlistClick}
      />
      <UserSettingsItem
        icon={<i className="fa-solid fa-signature"></i>}
        nextIcon={<i className="fa-solid fa-chevron-right"></i>}
        label="Linked Organisations"
        onClick={props.onOrgClick}
      />
      <UserSettingsItem
        icon={<i className="fa-solid fa-trophy-star"></i>}
        label="Leaderboard"
        itemClass="border-bottom"
      />
      <UserSettingsItem
        icon={<i className="fa-solid fa-right-from-bracket"></i>}
        label="Sign out"
        onClick={()=>logout()}
      />
    </ul>
  );
}

export default UserSettingsList;
