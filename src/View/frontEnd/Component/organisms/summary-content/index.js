import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

// import { ListItemImg } from "@components/atoms";
import ListItemImg from '../../atoms/list-item-img';
import helper, { priceFormat } from '../../../../../Common/Helper';

const SummaryContent = (props) => {
  let cartItem = props.cartItem;
  // let total = props.CalculatedPrice.getData(props.total)
  let total = props.total;
  let salesTax = props.salesTax;
  let subtotal = props.subtotal;
  let salesTaxPer = props.salesTaxPer;
  let transectionFee = props.transectionFee;

  // let transectionFee = props.pricingFees?.transectionFee
  // let platformFee = props.pricingFees?.platformFee
  // let totalCharge = Number(transectionFee) + Number(platformFee)

  return (
    <div className="summary__content">
      <div className="pt-20p pb-12p">
        <ul className="list-unstyled pb-1 border-bottom mb-0">
          {cartItem &&
            cartItem.length > 0 &&
            cartItem.map((item, i) => {
              // let price = Math.round(item.productDetails?.price + (totalCharge / 100) * item.productDetails?.price)
              // let price = props.CalculatedPrice(item.productDetails?.price)

              return (
                <li className="d-flex align-items-center py-2" key={i}>
                  <div className="d-flex align-items-center mb-2 mb-sm-0 flex__1">
                    <div className="position-relative">
                      <ListItemImg
                        size={75}
                        imgSrc={helper.CampaignProductImagePath + item?.productDetails?.image}
                        className="avatar__checkout border"
                      />
                      <span className="badge item__img-badge fw-bold fs-8">{item.quantity}</span>
                    </div>

                    <div className="ms-2">
                      <Button variant="link" className="text-dark fw-bolder p-0 mb-3p fs-4">
                        {item?.productDetails?.headline}
                      </Button>
                      <div className="text-light mb-1">{item?.productDetails?.brand} ®</div>
                      <Button
                        variant="link"
                        className="btn__remove p-0 fs-7 text-decoration-none"
                        onClick={() => props.removeCartItem(item._id)}
                      >
                        remove
                      </Button>
                    </div>
                  </div>
                  <span className="fs-5 fw-bold text-success ms-3">
                    {props.currencySymbol +
                      // priceFormat(
                      //   props.CalculatedPrice.getData(item.productDetails?.price) * item.quantity

                      // )

                      priceFormat(
                        (item.productDetails?.displayPrice
                          ? item.productDetails?.displayPrice
                          : item.productDetails?.price) * item.quantity
                      )}
                  </span>
                </li>
              );
            })}
        </ul>

        <div className=" py-3 border-bottom">
          <div className="d-flex align-items-center pb-20p">
            <span className="fw-bolder flex__1">Subtotal:</span>
            <span className="fw-bold text-success fs-5">
              {props.currencySymbol + priceFormat(subtotal)}
            </span>
          </div>
          {/*} <div className="d-flex align-items-center pb-20p">

            <span className="fw-bolder flex__1">
              <img
                className="img-stripe"
                src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/62f58f1ce7a1c54afeefc883_Authorize.Net_.svg"
                alt=""
                style={{ width: "44px" }}
              />
            </span>
            <span className="fw-semibold fs-7 text-light">
              {props.currencySymbol + props.stripeTax}
            </span>
          </div> */}
          <div className="d-flex align-items-center">
            <span className="fw-bolder flex__1">XP</span>
            <span className="fw-bold text-info">{props.xp} xp</span>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center pt-1 pb-4">
        <span className="fw-bolder flex__1">Total:</span>
        {/* <span className="text-subtext me-2 fs-7">USD</span> */}
        <span className="fw-bold text-success fs-4">
          {/* {props.currencySymbol + priceFormat(total ? total : 0)} */}
          {props.currencySymbol + (total ? total : 0)}

        </span>
      </div>

      <div className="note note--info px-0 text-start">
        All prices include sales tax. The organization(s) will receive the exact amount required to
        purchase each unit including regional sales tax and payment processing fees. The funds
        provided for these goods is a transfer of funds and not a gift-in-kind transaction, no
        physical goods are ordered or delivered to the organization upon the completion of the sale.{' '}
        <br />
        {/* </br> */}
        <br />
        {/* </br> */}
        Your funds are sent to the organization to purchase the goods on your behalf at their local
        stores.&nbsp;
        <a href="/about-us" className="text-subtext">
          Click here
        </a>{' '}
        to learn more.
      </div>
    </div>
  );
};

export default SummaryContent;
