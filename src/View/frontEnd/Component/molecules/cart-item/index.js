import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button } from "react-bootstrap";
import ListItemImg from "../../atoms/list-item-img";

import "./style.scss";

function CartItem() {
  return (
    <li className="cd__cart__item px-1 py-2 d-flex align-items-center border-bottom">
      <div className="d-flex align-items-center">
        <ListItemImg imgSrc="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c2478bda7359714d93fec_image%20(2).png" />
        <div className="cd__cart__main pl-12p">
          <div className="cd__cart__title pr-12p">
            <div className="cd__cart__name">Backpacks</div>
            <div className="cd__cart__location">Canada</div>
          </div>
          <div className="cd__cart__price">$14</div>
        </div>
        <div className="cd__cart__right d-flex align-items-center">
          <Button
            variant="link"
            className="text-decoration-none btn__link-light p-0"
          >
            <FontAwesomeIcon icon={regular("angle-down")} />
          </Button>
          <div className="cd__cart__count text-light">1</div>
          <Button
            variant="link"
            className="btn__link-light text-decoration-none p-0"
          >
            <FontAwesomeIcon icon={regular("angle-up")} />
          </Button>
        </div>
      </div>
      <div className="cd__cart__remove ms-auto">
        <Button variant="link" className="btn__link-light text-decoration-none">
          <FontAwesomeIcon icon={solid("trash")} />
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
