import React from 'react';
import CartItem from '../../../molecules/cart-item';

function CartList(props) {
  return (
    <ul className="cd__cart__list list-unstyled mb-0">
      {props.cartItem?.length > 0 &&
        props.cartItem.map((item, i) => {
          return (
            <CartItem
              cartItem={item}
              key={i}
              removeCartItem={props.removeCartItem}
              updateCartItem={props.updateCartItem}
              CalculatePrice={props.CalculatePrice}
              currencySymbol={props.currencySymbol}
            />
          );
        })}
    </ul>
  );
}

export default CartList;
