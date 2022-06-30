import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { Button } from "react-bootstrap";
import ListItemImg from "../../atoms/list-item-img";
import helper from "../../../../../Common/Helper";
import moment from "moment";

function ActivityItem(props) {

  const countProjectProcess = (data) => {
    // console.log(data)
    let totalQArray = []
    let soldOutQArray = []
    let per = 0

    if (data.length > 0) {
      data.map((p, i) => {
        // console.log(p.itemDetails)
        totalQArray.push(Number(p.itemDetails.quantity))
        soldOutQArray.push(Number(p.itemDetails.soldout))
      })

      const total = totalQArray.reduce((partialSum, a) => partialSum + a, 0);
      const soldout = soldOutQArray.reduce((partialSum, a) => partialSum + a, 0);


      per = soldout / total * 100
    } else {
      per = 0;

    }
    return Math.round(per);

  }


  const [active, setActive] = useState(false);
  let notification = props.notification
  // console.log(notification)
  let name = notification.type === 'PRODUCT' ? notification?.productDetails?.headline : notification?.projectDetails?.name
  let image = notification.type === 'PRODUCT' ? helper.CampaignProductImagePath + notification?.productDetails?.image : helper.CampaignAdminLogoPath + notification?.campaignadminDetails?.logo
  let organizationName = notification?.campaignadminDetails?.name

  // let watched = notification.watched
  let watched = notification?.userNotificationDetails?.watched ? notification?.userNotificationDetails?.watched : false

  let date = notification.type === 'PRODUCT' ? notification?.productDetails?.created_at : notification?.projectDetails?.created_at




  useEffect(() => {
    // if(notification?.userNotificationDetails){

    // }else{

    // }
    setActive(watched)

  }, [watched])




  return (
    <li
      style={{ background: !active ? "#f8fafd" : "#fff" }}
      className="ad__activity__item px-1 py-2 d-flex align-items-center border-bottom"
    >
      <div className="d-flex align-items-center">
        <ListItemImg imgSrc={image} />
        <div className="ad__activity__main px-12p">
          <div className="ad__activity__title">
            <div className="ad__activity__name">{name}</div>
            <div className="ad__activity__sub-name">{organizationName}</div>
            {
              notification.type === 'PROJECT' &&
              <div className="ad__activity__title fs-7">{countProjectProcess(notification.productDetails)}% Funded</div>

            }
            <div className="ad__activity__sub-name">{moment(date).fromNow()}</div>
          </div>
        </div>
        <div className="ad__activity__right d-flex align-items-center">
          <Button
            variant="link"
            className="text-decoration-none"
            onClick={() => props.setWatchNotification(!active, notification._id)}
          >
            {active ? (
              <FontAwesomeIcon icon={solid("circle")} />
            ) : (
              <FontAwesomeIcon icon={regular("circle")} />
            )}
          </Button>
        </div>
      </div>
      <div className="ad__activity__remove ms-auto">
        <Button variant="link" className="btn__link-light text-decoration-none" onClick={()=>props.removeNotification(notification._id)}>
          <FontAwesomeIcon icon={solid("xmark")} />
        </Button>
      </div>
    </li>
  );
}

export default ActivityItem;
