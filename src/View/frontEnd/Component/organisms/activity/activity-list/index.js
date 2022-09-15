import ActivityItem from "../../../molecules/activity-item";
import React, { useState, useEffect } from "react";

function ActivityList(props) {
  const [allNotificationList, setAllNotificationList] = useState([])
  let notificationList = props.notificationList


  useEffect(() => {

    if (notificationList.length > 0) {
      let temp = []
      notificationList.map((notification, i) => {
        let isRemoved = notification?.userNotificationDetails?.removed ? notification?.userNotificationDetails?.removed : false
        if (!isRemoved) {
          temp.push(notification)
        }
      })
      setAllNotificationList(temp)
    } else {
      setAllNotificationList([])
    }

    }, [notificationList])




  // console.log(notificationList)
  return (

    allNotificationList.length > 0 ?

      <ul className="cd__cart__list list-unstyled mb-0">
        {
          allNotificationList.length > 0 &&
          allNotificationList.map((notification, i) => {
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
              src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ebb02894add114eeaa5681e_mute.svg"
              alt=""
              width='90%'
            />
          </div>
          <div className="no__items-found fw-bold">You have no notifications.</div>
        </div>
      </>
  );
}


export default ActivityList;
