import React from "react";
import WishlistItem from "../../molecules/wishlist-item";
import './style.scss';

function WishList(props) {
  let wishListproductList = props.wishListproductList
  return (
    <ul className="wishlist list-unstyled mb-0">
      {
        wishListproductList.length > 0 &&
        wishListproductList.map((item, i) => {
          return (
            <WishlistItem item={item} addProductToWishlist={props.addProductToWishlist} />

          )
        })
      }
      {/* <WishlistItem />
      <WishlistItem />
      <WishlistItem />
      <WishlistItem />
      <WishlistItem /> */}
    </ul>
  );
}

export default WishList;
