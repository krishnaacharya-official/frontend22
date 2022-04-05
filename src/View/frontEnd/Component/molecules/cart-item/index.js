import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button } from "react-bootstrap";
import ListItemImg from "../../atoms/list-item-img";
import helper from "../../../../../Common/Helper";

import "./style.scss";

function CartItem(props) {
  console.log(props.cartItem)
  let cartItem= props.cartItem
  return (
    <li className="cd__cart__item px-1 py-2 d-flex align-items-center border-bottom">
      <div className="d-flex align-items-center">
        <ListItemImg imgSrc={helper.CampaignProductImagePath+cartItem?.productDetails?.image} />
        <div className="cd__cart__main pl-12p">
          <div className="cd__cart__title pr-12p">
            <div className="cd__cart__name">{cartItem?.productDetails?.headline?.headline}</div>
            <div className="cd__cart__location">Canada</div>
          </div>
          <div className="cd__cart__price">${cartItem?.productDetails?.price}</div>
        </div>
        <div className="cd__cart__right d-flex align-items-center">
          <Button
            variant="link"
            className="text-decoration-none btn__link-light p-0"
          >
            <FontAwesomeIcon icon={regular("angle-down")} />
          </Button>
          <div className="cd__cart__count text-light">{cartItem?.quantity}</div>
          <Button
            variant="link"
            className="btn__link-light text-decoration-none p-0"
          >
            <FontAwesomeIcon icon={regular("angle-up")} />
          </Button>
        </div>
      </div>
      <div className="cd__cart__remove ms-auto">
        <Button variant="link" className="btn__link-light text-decoration-none" onClick={()=>props.removeCartItem(cartItem._id)}>
          <FontAwesomeIcon icon={solid("trash")} />
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
