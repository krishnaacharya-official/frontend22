import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Button } from 'react-bootstrap';
import ListItemImg from '../../atoms/list-item-img';
import helper, { priceFormat, getCalculatedPrice } from '../../../../../Common/Helper';
import { Link } from 'react-router-dom';

import './style.scss';

function CartItem(props) {
  let cartItem = props.cartItem;

  // console.log(cartItem)
  const [quantity, setQuantity] = useState(cartItem?.quantity);
  // const CalculatePrice = getCalculatedPrice()
  // console.log(cartItem)

  // let transactionFee = props.pricingFees?.transactionFee
  // let platformFee = props.pricingFees?.platformFee
  // let totalCharge = Number(transactionFee) + Number(platformFee)
  // let price = props.CalculatePrice.getData(cartItem?.productDetails?.price)
  let price = cartItem.productDetails?.displayPrice
    ? cartItem.productDetails?.displayPrice
    : cartItem.productDetails?.price;

  let currencySymbol = props.currencySymbol;

  // console.log(location)

  const minusValue = async (value) => {
    // console.log('minusValue', value)
    if (value > 1) {
      value--;
      await props.updateCartItem(value, cartItem?._id, cartItem?.productDetails?._id, 'minus');
    }
    // setQuantity(value)
  };
  const plusValue = async (value) => {
    // console.log('plusValue', value)
    value++;
    // setQuantity(value)
    await props.updateCartItem(value, cartItem?._id, cartItem?.productDetails?._id, 'plus');
  };
  // console.log(props.cartItem)

  useEffect(() => {
    setQuantity(cartItem?.quantity);
  }, [cartItem]);

  return (
    <li className="cd__cart__item px-1 py-2 d-flex align-items-center border-bottom">
      <div className="d-flex align-items-center">
        <ListItemImg
          size={62}
          imgSrc={helper.CampaignProductImagePath + cartItem?.productDetails?.image}
        />
        <div className="cd__cart__main pl-12p" style={{ width: '105px' }}>
          <div className="cd__cart__title pr-12p">
            <Link
              to={'/item/' + cartItem?.productDetails.slug}
              className="cd__cart__name text-decoration-none text-dark fs-5"
            >
              {cartItem?.productDetails?.headline}
            </Link>
            <div className="cd__cart__location fw-semibold fs-7 mb-3p mt-3p">
              {cartItem?.productDetails?.organizationDetails?.name}
            </div>
          </div>
          <div className="cd__cart__price text-light fw-bold">{currencySymbol + priceFormat(price)}</div>
        </div>
        <div className="cd__cart__right d-flex align-items-center">
          <Button variant="link" className="text-decoration-none btn__link-light p-0">
            <FontAwesomeIcon icon={regular('angle-down')} onClick={() => minusValue(quantity)} />
          </Button>
          <div className="cd__cart__count text-light">{quantity}</div>
          <Button variant="link" className="btn__link-light text-decoration-none p-0">
            <FontAwesomeIcon icon={regular('angle-up')} onClick={() => plusValue(quantity)} />
          </Button>
        </div>
      </div>
      <div className="cd__cart__remove ms-auto">
        <Button
          variant="link"
          className="btn__link-light text-decoration-none"
          style={{ fontSize: '18px' }}
          onClick={() => props.removeCartItem(cartItem._id)}
        >
          <FontAwesomeIcon icon={solid('trash')} />
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
