import React from "react";
import ActivityItem from "../../../molecules/activity-item";

function ActivityList(props) {

  let notificationList = props.notificationList
  // console.log(notificationList)
  return (
    <ul className="cd__cart__list list-unstyled mb-0">
      {
        notificationList.length > 0 &&
        notificationList.map((notification, i) => {
          return (
            <ActivityItem notification={notification} setWatchNotification={props.setWatchNotification} removeNotification={props.removeNotification} />

          )
        })
      }
      {/* <ActivityItem />
      <ActivityItem />
      <ActivityItem />
      <ActivityItem />
      <ActivityItem /> */}
    </ul>
  );
}

export default ActivityList;
