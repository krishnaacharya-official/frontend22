import React from "react";
import CartItem from "../../../molecules/cart-item";

function CartList() {
  return (
    <ul className="cd__cart__list list-unstyled mb-0">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </ul>
  );
}

export default CartList;
