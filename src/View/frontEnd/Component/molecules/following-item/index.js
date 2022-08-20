import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button } from "react-bootstrap";
import ListItemImg from "../../atoms/list-item-img";

import './style.scss';

function FollowingItem() {
  const [active, setActive] = useState(0);

  return (
    <li
      className="ad__activity__item p-1 d-flex align-items-center border-bottom"
    >
      <div className="d-flex align-items-center">
        <ListItemImg imgSrc="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c2478bda7359714d93fec_image%20(2).png" />
        <div className="ad__activity__main px-12p">
          <div className="ad__activity__title">
            <div className="ad__activity__name mb-0">Backpacks</div>
          </div>
        </div>
        <div className="ad__activity__right d-flex align-items-center">
          <Button
            variant="link"
            className="btn__link-light p-0 text-decoration-none btn__follow"
            onClick={() => setActive(!active)}
          >
            {active ? (
              <FontAwesomeIcon icon={regular("bell-slash")} />
            ) : (
              <FontAwesomeIcon icon={solid("bell")} />
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
