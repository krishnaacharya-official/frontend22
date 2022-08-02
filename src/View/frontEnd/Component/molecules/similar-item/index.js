import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
// import IconButton from "@components/molecules/icon-button";
// import ListItemImg from "@components/atoms/list-item-img";
import IconButton from "../icon-button";
import ListItemImg from "../../atoms/list-item-img";
import helper, { getCalculatedPrice } from "../../../../../Common/Helper"
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import "./style.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIsUpdateCart } from "../../../../../user/user.action"
import moment from "moment";
// import ProjectDetail from "src/View/frontEnd/project-detail";

function SimilarItem(props) {
  let product = props.product
  // console.log(product)
  const getCalc = getCalculatedPrice()
  const [addedToCart, setAddedToCart] = useState(false)
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
  let currencySymbol = getCalc.currencySymbol()


  useEffect(() => {
    (async () => {
      if (!CampaignAdminAuthToken) {
        const checkItem = await props.checkItemInCart(product._id)
        if (checkItem === true) {
          setAddedToCart(true)
        } else {
          setAddedToCart(false)

        }
      }

    })()

  }, [!user.isUpdateCart])



  const cart_btn = addedToCart ? (
    <Button
      variant="success"
      /*size="sm"*/
      /* NOTE: Add product category color to button -> style={{ backgroundColor: theme_color }}*/
      className="icon icon__pro"
      onClick={() => {props.removeCartItem(product._id)
        dispatch(setIsUpdateCart(!user.isUpdateCart))
      }}
    >
      <FontAwesomeIcon icon={solid("cart-shopping")} />
    </Button>
  ) : (
    <Button
      variant="primary"
      /*size="sm"*/
      className="icon icon__pro"
      onClick={() => {props.addToCart(product._id)
        dispatch(setIsUpdateCart(!user.isUpdateCart))
        
      }}
    >
      <FontAwesomeIcon icon={regular("cart-shopping")} />
    </Button>
  );

  const btn =
  product.soldout === product.quantity ? (
    <span className="btn btn-outline-danger btn-sm btn__sold">Sold</span>
  ) : (
    cart_btn
  );
  return (
    <li className="similar__item__item pt-12p pb-12p d-flex align-items-center">
      <div className="d-flex align-items-center flex-grow-1">
        <a href="/" className="d-block">
          <ListItemImg imgSrc={helper.CampaignProductImagePath + product.image} />
        </a>
        <div className="similar__item__main pl-12p flex-grow-1">
          <div className="similar__item__title pr-12p">
            <Link
              to={"/item/" + product.slug}
              className="similar__item__name mb-3p text-dark d-inline-block"
            >
              {product.headline}
            </Link>
            <div className="similar__item__location mb-6p">{moment(product.created_at).fromNow()}</div>
          </div>
          <div className="similar__item__price">{currencySymbol}{getCalc.getData(product.price)}</div>
        </div>

        {!CampaignAdminAuthToken &&<div className="qty__tag ms-auto me-5">1</div>}
      </div>
      <div className="similar__item__remove ms-auto">
        {/* <IconButton
          size="md"
          className="px-3"
          variant="info"
          href="/cart"
          icon={<FontAwesomeIcon icon={regular("cart-shopping")} />}
          target="_blank"
        ></IconButton> */}
        {!CampaignAdminAuthToken && btn}
      </div>
    </li>
  );
}

export default SimilarItem;
