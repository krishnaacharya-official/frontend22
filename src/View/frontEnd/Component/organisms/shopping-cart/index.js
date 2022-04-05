import React, { useState, useEffect } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { light, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import EmptyCart from "../../atoms/empty-cart";
import CartList from "./cart-list";

import "./style.scss";



const ShoppingCart = (props) => {
  // console.log(props.cartItem)
  const [state, setState] = useState({
    empty: false,
  })

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
      setState({
        empty: false,
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
              <Button
                href="/cart"
                variant="link"
                className="p-0 ms-auto btn__link-light text-decoration-none fw-normal fs-7"
              >
                view cart
              </Button>
            </div>
            <div className="cart_dropdown-body">
              {state.empty ? <EmptyCart /> : <CartList cartItem={props.cartItem} removeCartItem={props.removeCartItem} />}
              {!state.empty && <div className="cd__cart__controls d-flex align-items-center">
                <div className="cd__cart__value">
                  <span>Total:</span>
                  <span className="cd__cart__total ml-6p">$363.00</span>
                </div>
                <Button variant="info" href="/checkout" className="ms-auto">
                  Checkout
                </Button>
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
