import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Container, Button } from "react-bootstrap";
// import { Logo, ListItemImg } from "@components/atoms";
import Logo from "../Component/atoms/logo"
import ListItemImg from "../Component/atoms/list-item-img"
import helper, { getCalculatedPrice } from "../../../Common/Helper";
import { Link } from "react-router-dom";

import "./style.scss";

const Cart = (props) => {
  // console.log(props.cartItem)
  let cartItem = props.cartItem
  const [total, setTotal] = useState(0)

  // let transectionFee = props.pricingFees?.transectionFee
  // let platformFee = props.pricingFees?.platformFee
  // let totalCharge = Number(transectionFee) + Number(platformFee)
  const getCalc = getCalculatedPrice()
  let currencySymbol = getCalc.currencySymbol()



  const onChange = (e) => {
    console.log(e)
  }

  useEffect(() => {
    if (props.cartItem.length > 0) {


      let tempPriceArray = []
      props.cartItem.map((item, i) => {
        // let price = Math.round(item.productDetails?.price + (totalCharge / 100) * item.productDetails?.price)
        let price = getCalc.getData(item.productDetails?.price)


        tempPriceArray.push(price * item.quantity)
      })
      // console.log(tempPriceArray)
      let sum = tempPriceArray.reduce(function (a, b) { return a + b; }, 0);
      setTotal(sum)

    }


  }, [props.cartItem])
  return (
    <Container fluid className="cart__page py-sm-5 mw-1280">
      <header className="pt-sm-5">
        <div className="logo__wrap pb-sm-3">
          <Logo />
        </div>
        <div className="cart__steps fs-7 pt-3 pt-sm-0">
          <span className="active me-1">
            Cart
            {
              cartItem.length > 0 &&
              <FontAwesomeIcon icon={regular("chevron-right")} className="ms-1" />

            }
          </span>

          {
            cartItem.length > 0 &&
            <>
              <Button
                variant="link"
                className="p-0 me-1 fw-normal fs-7 text-decoration-none"
              >
                Checkout
                <FontAwesomeIcon icon={regular("chevron-right")} className="ms-1" />
              </Button>
              <Button
                variant="link"
                className="p-0 me-1 fw-normal fs-7 text-decoration-none"
              >
                Order
                <FontAwesomeIcon icon={regular("chevron-right")} className="ms-1" />
              </Button>
            </>
          }

        </div>
      </header>
      {
        cartItem && cartItem.length > 0 ?
          <div className="pt-20p">
            <div className="pt-20p pb-12p">

              <ul className="list-unstyled pb-1 border-bottom mb-0">

                {
                  cartItem.map((item, i) => {
                    // let price = Math.round(item.productDetails?.price + (totalCharge / 100) * item.productDetails?.price)
                    // let price = getCalc.getData(item.productDetails?.price)


                    return (
                      <li className="d-flex align-items-center py-2" key={i}>
                        <div className="d-flex align-items-center mb-2 mb-sm-0 flex__1">
                          <ListItemImg
                            size={75}
                            imgSrc={helper.CampaignProductImagePath + item?.productDetails?.image}
                            className="border"
                          />
                          <div className="ms-2">
                            <Link
                              variant="link"
                              to={'/item/' + item?.productDetails?.slug}
                              className="text-dark fw-bolder p-0 mb-3p fs-4"
                            >
                              {item?.productDetails?.headline}
                            </Link>
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

                        <div className="d-flex align-items-center">
                          {
                            item.productDetails?.tax &&
                            <ListItemImg
                              size={52}
                              className="text-primary rounded-circle ms-2 d-none d-sm-flex"
                              icon={
                                <FontAwesomeIcon
                                  icon={solid("calculator-simple")}
                                  className="fs-4"
                                />
                              }
                            />
                          }
                          <Link
                            to={'/organization/' + item?.productDetails?.organizationDetails.slug}
                          >
                            <ListItemImg
                              size={52}
                              className="ms-2 d-none d-sm-flex"
                              imgSrc={helper.CampaignAdminLogoPath + item.productDetails?.organizationDetails?.logo}
                            />

                          </Link>

                          <span className="d-flex align-items-center ms-2 fw-bold text-subtext">
                            <span className="mr-6p d-none d-sm-block">Qty:</span>{" "}
                            <input type="text" className="qty__input" id={item._id} value={item?.quantity}
                            // onChange={()=>onChange(item._id)}
                            />
                          </span>
                          <span className="fs-5 fw-bold text-success ms-3">{currencySymbol + getCalc.getData(item.productDetails?.price * item.quantity)}</span>
                        </div>
                      </li>
                    )

                  })
                }



              </ul>

              <div className="d-flex align-items-center py-3 border-bottom">
                <span className="fw-bolder flex__1">Subtotal:</span>
                <span className="fw-bold text-success fs-5">{currencySymbol +total}</span>
              </div>
            </div>
            <div className="d-flex align-items-center py-1">
              <span className="fw-bolder flex__1">Total:</span>
              <span className="fw-bold text-success fs-4">{currencySymbol + total}</span>
            </div>
            <div className="pb-4 border-bottom d-grid d-sm-block">
              <Button
                variant="danger"
                size="lg"
                className="fw-bold fs-6 my-2 my-sm-0"
                onClick={() => props.clearCart()}
              >
                Clear Cart
              </Button>
              <Button size="lg" className="fw-bold fs-6 ms-0 ms-sm-2" onClick={() => props.checkout()}>
                Proceed to Checkout
              </Button>
            </div>
          </div>
          :
          <div className="pt-20p">
            <hr />
            <Link size="lg" to="/" className="fw-bold fs-6 ms-0 ms-sm-2">
              Add Product
            </Link>
            <hr />
          </div>
      }

      <footer className="py-3 py-sm-2">
        <ul className="d-flex align-items-center justify-content-between justify-content-sm-start list-unstyled fs-7">
          <li className="me-3">
            <a href="/donorport-refund-policy" className="text-subtext">
              Refund policy
            </a>
          </li>
          <li className="me-3">
            <a href="/privacy-policy" className="text-subtext">
              Privacy policy
            </a>
          </li>
          <li className="">
            <a href="/terms" className="text-subtext">
              Terms of service
            </a>
          </li>
        </ul>
      </footer>
    </Container>
  );
};

export default Cart;
