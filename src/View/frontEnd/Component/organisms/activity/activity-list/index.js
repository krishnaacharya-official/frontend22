import React from "react";
import ActivityItem from "../../../molecules/activity-item";

function ActivityList(props) {

  let notificationList = props.notificationList
  // console.log(notificationList)
  return (

    notificationList.length > 0 ?

      <ul className="cd__cart__list list-unstyled mb-0">
        {
          notificationList.length > 0 &&
          notificationList.map((notification, i) => {
            let isRemoved = notification?.userNotificationDetails?.removed ? notification?.userNotificationDetails?.removed : false
            return (
              !isRemoved &&
              <ActivityItem notification={notification} setWatchNotification={props.setWatchNotification} removeNotification={props.removeNotification} />

            )
          })
        }

      </ul> :
      <>
        <div className="empty__block pt-5">
          <div className="empty__cart mb-2">
            <img
              src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ebdad9db6362385218c8cc5_interface.svg"
              alt=""
              width='90%'
            />
          </div>
          <div className="no__items-found fw-bold">No notification yet.</div>
        </div>
      </>
  );
}

export default ActivityList;
