import React from 'react';
import UserSettingsItem from '../../../molecules/user-settings-item';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useDispatch } from 'react-redux';
import { setLogout } from '../../../../../../user/user.action';

function UserSettingsList(props) {
  const CampaignAdmin =
    typeof window !== 'undefined' && JSON.parse(localStorage.getItem('CampaignAdmin'));
  const CampaignAdminAuthToken =
    typeof window !== 'undefined' && localStorage.getItem('CampaignAdminAuthToken');
  const userAuthToken = typeof window !== 'undefined' && localStorage.getItem('userAuthToken');
  const token = userAuthToken ? userAuthToken : CampaignAdminAuthToken;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let userData = props.userData;
  let newSlug;
  if (userData) {
    newSlug = userData.name.split(/\s/).join('');
  } else {
    newSlug = '';
  }

  const logout = () => {
    // localStorage.clear()
    dispatch(setLogout());
    navigate('/');
  };

  return (
    <ul className="user__settings__list list-unstyled mb-0">
      {userAuthToken ? (
        <>
          <Link to={'/user/' + newSlug + '/items/'}>
            <UserSettingsItem
              icon={<FontAwesomeIcon icon={solid('circle-user')} />}
              // icon={<i className="fa-solid fa-circle-user"></i>}
              label="Profile"
              itemClass="border-bottom"
            />
          </Link>
          <UserSettingsItem
            // icon={<i className="fa-solid fa-heart"></i>}
            icon={<FontAwesomeIcon icon={solid('heart')} />}
            nextIcon={<FontAwesomeIcon icon={solid('chevron-right')} />}
            label="Wishlist"
            onClick={props.onWishlistClick}
          />
          <UserSettingsItem
            icon={<FontAwesomeIcon icon={solid('signature')} />}
            nextIcon={<FontAwesomeIcon icon={solid('chevron-right')} />}
            label="Linked Organisations"
            onClick={props.onOrgClick}
          />
          <UserSettingsItem
            icon={<FontAwesomeIcon icon={solid('trophy-star')} />}
            label="Leaderboard"
            itemClass="border-bottom"
            onClick={() => props.onClickLeaderBoard()}
          />
          <UserSettingsItem
            icon={<FontAwesomeIcon icon={solid('right-from-bracket')} />}
            label="Sign out"
            onClick={() => logout()}
          />
        </>
      ) : CampaignAdminAuthToken ? (
        <>
          {/* SHOW THESE IF CHARITY IS LOGGED IN: */}
          {/*  <UserSettingsItem
                icon={<FontAwesomeIcon icon={solid("signature")} />}
                nextIcon={<FontAwesomeIcon icon={solid("chevron-right")} />}
                label="Linked Organisations"
                onClick={props.onOrgClick}
              />*/}
          <UserSettingsItem
            icon={<FontAwesomeIcon icon={solid('right-from-bracket')} />}
            label="Sign out"
            onClick={() => logout()}
          />
        </>
      ) : (
        <>
          {/* <UserSettingsItem
                icon={<FontAwesomeIcon icon={solid("signature")} />}
                nextIcon={<FontAwesomeIcon icon={solid("chevron-right")} />}
                label="Linked Organisations"
                onClick={props.onOrgClick}
              /> */}
          <UserSettingsItem
            icon={<FontAwesomeIcon icon={solid('right-from-bracket')} />}
            label="Sign In"
            onClick={() => navigate('/signIn')}
          />
        </>
      )}
    </ul>
  );
}

export default UserSettingsList;
