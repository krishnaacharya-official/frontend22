import React from "react";

function EmptyCart() {
  return (
    <div className="empty__block pt-5">
      <div className="empty__cart mb-2">
        <img
          src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5e4d8fc5df03488c18d500b6_bag.svg"
          alt=""
        />
      </div>
      <div className="no__items-found fw-bold">No items in cart.</div>
    </div>
  );
}

export default EmptyCart;
