import React, { useState, useEffect } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { light, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import helper, { getCalculatedPrice } from "../../../../../Common/Helper";
import EmptyCart from "../../atoms/empty-cart";
import CartList from "./cart-list";

import "./style.scss";



const ShoppingCart = (props) => {
  // console.log(props.cartItem)
  const [state, setState] = useState({
    empty: false,
    subTotal: ""
  })


  const CalculatePrice = getCalculatedPrice()

  const CartButton = React.forwardRef(({ children, onClick }, ref) => {
    return (
      <Button
        ref={ref}
        variant="link"
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        className="p-0 icon__btn text-decoration-none"
      >
        {children}
      </Button>
    );
  });

  useEffect(() => {
    if (props.cartItem.length === 0) {
      setState({
        empty: true,
      })
    } else {

      let tempPriceArray = []
      props.cartItem.map((item, i) => {
        let price = CalculatePrice.getData(item.productDetails?.price)
        // let price = Math.round(item.productDetails?.price + (totalCharge / 100) * item.productDetails?.price)
        tempPriceArray.push(price * item.quantity)
      })

      let sum = tempPriceArray.reduce(function (a, b) { return a + b; }, 0);

      setState({
        ...state,
        empty: false,
        subTotal: sum
      })
    }


  }, [props.cartItem])


  return (
    <>
      <Dropdown className="d-flex" autoClose="outside">
        <Dropdown.Toggle as={CartButton}>
          <div className="c__badge">
            <span className="c__badge__count">{props.cartItem?.length}</span>
          </div>
          <span className="d-flex align-items-center icon">
            <FontAwesomeIcon icon={solid("bag-shopping")} />
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="cart__dropdown w-310 dropdown-top-arrow">
          <div className="dropdown__inner">
            <div className="d-flex cart__dropdown-header">
              <div className="fw-bold">Cart</div>
              {
                !state.empty &&
                <Link
                  to="/cart"
                  variant="link"
                  className="p-0 ms-auto btn__link-light text-decoration-none fw-normal fs-7"
                >
                  view cart
                </Link>
              }

            </div>
            <div className="cart_dropdown-body">
              {state.empty ? <EmptyCart /> : <CartList cartItem={props.cartItem} removeCartItem={props.removeCartItem} updateCartItem={props.updateCartItem} CalculatePrice={CalculatePrice} />}
              {!state.empty && <div className="cd__cart__controls d-flex align-items-center">
                <div className="cd__cart__value">
                  <span>Total:</span>
                  <span className="cd__cart__total ml-6p">${state.subTotal}</span>
                </div>
                {/* <Button variant="info" href="/checkout" className="ms-auto">
                  Checkout
                </Button> */}
                <Link to='/checkout' className=" btn btn-info ms-auto">Checkout</Link>
              </div>}
            </div>

            <div className="cart__dropdown-footer"></div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );

}

export default ShoppingCart;
