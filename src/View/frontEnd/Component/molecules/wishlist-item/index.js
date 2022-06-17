import React from "react";
import { Button } from "react-bootstrap";
// import ListItemImg from "@components/atoms/list-item-img";
import { ListItemImg } from "../../atoms";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";

function WishlistItem() {
  return (
    <li className="wishlist__item p-1 d-flex align-items-center border-bottom">
      <div className="d-flex align-items-center">
        <ListItemImg imgSrc="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c2478bda7359714d93fec_image%20(2).png" />

        <div className="wishlist__item__main pl-12p">
          <div className="wishlist__item__title pr-12p">
            <div className="wishlist__item__name">Backpacks</div>
            <div className="wishlist__item__location">Canada</div>
          </div>
          <div className="wishlist__item__price">$14</div>
        </div>
      </div>
      <div className="wishlist__item__remove ms-auto">
        <Button variant="link" className="text-decoration-none">
          <FontAwesomeIcon icon={regular('heart')} style={{ color: "#f66461" }} className="fs-4" />
        </Button>
      </div>
    </li>
  );
}

export default WishlistItem;
