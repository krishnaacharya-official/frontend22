import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { Button } from "react-bootstrap";
import ListItemImg from "../../atoms/list-item-img";

function ActivityItem() {
  const [active, setActive] = useState(0);

  return (
    <li
      style={{ background: !active ? "#f8fafd" : "#fff" }}
      className="ad__activity__item px-1 py-2 d-flex align-items-center border-bottom"
    >
      <div className="d-flex align-items-center">
        <ListItemImg imgSrc="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c2478bda7359714d93fec_image%20(2).png" />
        <div className="ad__activity__main px-12p">
          <div className="ad__activity__title">
            <div className="ad__activity__name">Backpacks</div>
            <div className="ad__activity__sub-name">Harambe's Construction</div>
            <div className="ad__activity__title fs-7">100% Funded</div>
            <div className="ad__activity__sub-name">1h ago</div>
          </div>
        </div>
        <div className="ad__activity__right d-flex align-items-center">
          <Button
            variant="link"
            className="text-decoration-none"
            onClick={() => setActive(!active)}
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
        <Button variant="link" className="btn__link-light text-decoration-none">
          <FontAwesomeIcon icon={solid("xmark")} />
        </Button>
      </div>
    </li>
  );
}

export default ActivityItem;
