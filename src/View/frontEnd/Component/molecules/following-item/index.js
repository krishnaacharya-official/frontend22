import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button } from "react-bootstrap";
import ListItemImg from "../../atoms/list-item-img";
import helper from "../../../../../Common/Helper";

import './style.scss';

function FollowingItem(props) {
  const data = props.data
  const followToOrganization = props.followToOrganization

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(data.isFollow)
  }, [data])

  const onClickBell = async () => {
    await followToOrganization(data?.CampaignAdminDetails?._id, !active)

  }




  return (
    <li
      className="ad__activity__item p-1 d-flex align-items-center border-bottom"
    >
      <div className="d-flex align-items-center">
        <ListItemImg imgSrc={helper.CampaignAdminLogoFullPath + data?.CampaignAdminDetails?.logo} />
        <div className="ad__activity__main px-12p" style={{ width: "135px" }}>
          <div className="ad__activity__title">
            <div className="ad__activity__name mb-0">{data?.CampaignAdminDetails?.name}</div>
          </div>
        </div>
        <div className="ad__activity__right d-flex align-items-center">
          <Button
            variant="link"
            className="btn__link-light p-0 text-decoration-none btn__follow"
            // onClick={() => setActive(!active)}
            onClick={() => onClickBell()}

          >
            {active ? (
              <FontAwesomeIcon icon={solid("bell")} />
            ) : (
              <FontAwesomeIcon icon={regular("bell-slash")} />
            )}
          </Button>
        </div>
      </div>
      <div className="ad__activity__remove ms-auto">
        <Button variant="danger" className="btn__remove-follow text-decoration-none">
          <FontAwesomeIcon icon={regular("circle-minus")} />
        </Button>
      </div>
    </li>
  );
}

export default FollowingItem;
