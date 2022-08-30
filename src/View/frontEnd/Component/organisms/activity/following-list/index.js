import React from "react";
import FollowingItem from "../../../molecules/following-item";

function ActivityList(props) {
  const followedOrganizationList = props.followedOrganizationList
  const followToOrganization = props.followToOrganization
  const removeFollowedOrganization = props.removeFollowedOrganization


  return (
    <ul className="cd__cart__list list-unstyled mb-0">
      {
        followedOrganizationList.length > 0 &&
        followedOrganizationList.map((val, k) => {
          return (
            <FollowingItem
              data={val}
              followToOrganization={followToOrganization}
              removeFollowedOrganization={removeFollowedOrganization}
            />
          )

        })

      }
      {/* <FollowingItem />
      <FollowingItem />
      <FollowingItem />
      <FollowingItem />
      <FollowingItem /> */}
    </ul>
  );
}

export default ActivityList;
