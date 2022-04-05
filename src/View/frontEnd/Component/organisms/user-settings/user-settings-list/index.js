import { Logout } from "@mui/icons-material";
import React from "react";
import UserSettingsItem from "../../../molecules/user-settings-item";
import { NavLink as RouterLink, matchPath, useLocation,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { light, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function UserSettingsList(props) {
  const navigate = useNavigate();

  const  logout = () =>{
    localStorage.clear()
    navigate('/')
  }

  return (
    <ul className="user__settings__list list-unstyled mb-0">
      <UserSettingsItem
        icon={  <FontAwesomeIcon icon={solid("circle-user")} />}
        // icon={<i className="fa-solid fa-circle-user"></i>}
        label="Profile"
        itemClass="border-bottom"
      />
      <UserSettingsItem
        // icon={<i className="fa-solid fa-heart"></i>}
        icon={<FontAwesomeIcon icon={solid("heart")} />}

        nextIcon={<FontAwesomeIcon icon={solid("chevron-right")} />}
        label="Wishlist"
        onClick={props.onWishlistClick}
      />
      <UserSettingsItem
        icon={<FontAwesomeIcon icon={solid("signature")} />}
        nextIcon={<FontAwesomeIcon icon={solid("chevron-right")} />}
        label="Linked Organisations"
        onClick={props.onOrgClick}
      />
      <UserSettingsItem
        icon={<FontAwesomeIcon icon={solid("trophy-star")} />}
        label="Leaderboard"
        itemClass="border-bottom"
      />
      <UserSettingsItem
        icon={<FontAwesomeIcon icon={solid("right-from-bracket")} />}
        label="Sign out"
        onClick={()=>logout()}
      />
    </ul>
  );
}

export default UserSettingsList;
