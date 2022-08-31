import React from "react";
import WishlistItem from "../../molecules/wishlist-item";
import './style.scss';

function WishList(props) {
  let wishListproductList = props.wishListproductList
  return (
    wishListproductList.length > 0 ?
      <ul className="wishlist list-unstyled mb-0">
        {
          wishListproductList.length > 0 &&
          wishListproductList.map((item, i) => {
            return (
              <WishlistItem item={item} addProductToWishlist={props.addProductToWishlist} />

            )
          })
        }

      </ul>
      :
      <div className="empty__block pt-5">
        <div className="empty__cart mb-2">
          <img
            src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ebad2cd043149e79df91629_text-lines.svg"
            alt=""
            width='90%'
          />
        </div>
        <div className="no__items-found fw-bold">Your Wishlist is empty.</div>
      </div>
  );
}

export default WishList;
