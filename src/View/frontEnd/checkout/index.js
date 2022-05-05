import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Container, Button, Form } from "react-bootstrap";

// import { Logo, Avatar } from "@components/atoms";
import Logo from "../Component/atoms/logo";
import Avatar from "../Component/atoms/avatar";
import SummaryContent from "../Component/organisms/summary-content";
import useWindowSize from "../../../hooks/device-check";

import "./style.scss";
import { Link } from "react-router-dom";

const Checkout = (props) => {
  let cartItem = props.cartItem
  const [summary, showSummary] = useState(false);
  const isTab = useWindowSize() <= 991;
  const summaryElementRef = useRef(null);
  let stateData = props.stateData

  // console.log(summaryElementRef.current?.clientHeight);


  return (
    <div className="checkout__page">
      {isTab ? (
        <>
          <div className="logo__wrap pb-lg-3 p-20p border-bottom">
            <Logo />
          </div>
          <div
            className="order-summary d-flex d-lg-none p-20p border-bottom"
            onClick={() => showSummary(!summary)}
          >
            <div className="d-flex align-items-center flex__1">
              <FontAwesomeIcon
                icon={regular("cart-shopping")}
                className="me-2"
              />
              <span>{summary ? "Hide" : "Show"} order summary</span>
              <span
                className={`d-block rotate__icon ms-2 ${summary ? "rotate-180" : ""
                  }`}
              >
                <FontAwesomeIcon icon={regular("chevron-down")} />
              </span>
            </div>

            <span className="fw-bold text-success fs-4">$319</span>
          </div>

          <div
            className="mobile__summary"
            style={{
              height: summary
                ? summaryElementRef.current?.clientHeight + "px"
                : "0",
            }}
          >
            <div ref={summaryElementRef} className="summary__section pe-4 pt-0">
              <SummaryContent currencySymbol={props.currencySymbol} cartItem={cartItem} total={props.total} removeCartItem={props.removeCartItem} CalculatedPrice={props.CalculatedPrice} />
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      <Container fluid className="d-flex flex-column flex-lg-row mw-1280">
        <div className="checkout__section py-lg-5">
          <header className="pt-sm-5">
            <div className="logo__wrap pb-sm-3 d-none d-lg-block">
              <Logo />
            </div>
            <div className="cart__steps fs-7 pt-3 pt-sm-0">

              <Link
                to="/cart"
                variant="link"
                className="p-0 me-1 fw-normal fs-7 text-decoration-none"
              >
                Cart
                <FontAwesomeIcon
                  icon={regular("chevron-right")}
                  className="ms-1"
                />
              </Link>
              <span className="active me-1">
                Checkout
                <FontAwesomeIcon
                  icon={regular("chevron-right")}
                  className="ms-1"
                />
              </span>
              <Button
                variant="link"
                className="p-0 me-1 fw-normal fs-7 text-decoration-none"
              >
                Order
                <FontAwesomeIcon
                  icon={regular("chevron-right")}
                  className="ms-1"
                />
              </Button>
            </div>
          </header>
          <div className="pt-5 mt-1 mb-3">
            <Button
              variant=""
              className="btn__signout d-flex align-items-center p-1 rounded-pill"
            >
              <Avatar
                size={36}
                avatarUrl="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5d3f994a03c3fe76a42633a6_1.jpg"
                border={0}
                shadow={false}
              />
              <span className="ml-12p fs-7 fw-semibold">David Abbott</span>
              <span className="ml-12p fs-7 fw-normal pe-1">signout</span>
            </Button>
          </div>

          <div className="py-20p">
            <div className="mb-20p pt-1">
              <div className="ex__checkout d-flex align-items-center flex-column flex-md-row gap-2 p-2 position-relative border rounded-3">
                <div className="group__label fw-bold">Express Checkout</div>
                <Button className="btn__checkout rounded-2 flex__1">
                  <img
                    className="img-fluid"
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620f26f3e730132dbfc7763e_stripe-seeklogo.com.svg"
                    alt=""
                  />
                </Button>
                <Button className="btn__checkout rounded-2 google flex__1">
                  <img
                    className="img-fluid"
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620f2753b937a23e5603f877_Google_Pay_(GPay)_Logo_(2018-2020).svg"
                    alt=""
                  />
                </Button>
                <Button className="btn__checkout rounded-2 paypal flex__1">
                  <img
                    className="img-fluid"
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620f25f58e8ffe7b1df84772_PayPal.svg"
                    alt=""
                  />
                </Button>
              </div>
            </div>

            <div className="or__divider text-light fs-7 py-1 mb-2">
              <span className="or__divider-text">OR</span>
            </div>

            <div className="pt-1 mb-20p">
              <div className="crypto__section d-flex  align-items-center flex-column flex-md-row justify-content-between position-relative gap-2 p-2 border rounded-3">
                <div className="group__label fw-bold">Cryptocurrency</div>
                <label className="btn__crypto d-flex align-items-center">
                  <Form.Check type="checkbox" className="fs-7" />
                  <img
                    className="crypto__icon ms-1"
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620e5ca7ee8035585abb93b9_usd-coin-usdc-logo.svg"
                    alt=""
                  />
                  <span>USD Coin</span>
                </label>
                <label className="btn__crypto d-flex align-items-center">
                  <Form.Check type="checkbox" className="fs-7" />
                  <img
                    className="crypto__icon ms-1"
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620e5d4c36e4c982f37e9894_Bitcoin.svg"
                    alt=""
                  />
                  <span>Bitcoin</span>
                </label>
                <label className="btn__crypto d-flex align-items-center">
                  <Form.Check type="checkbox" className="fs-7" />
                  <img
                    className="crypto__icon ms-1"
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620e5d6c9582b74e722c3122_ethereum-eth.svg"
                    alt=""
                  />
                  <span>Ethereum</span>
                </label>
              </div>
            </div>

            <div className="or__divider text-light fs-7 py-1 mb-20p">
              <span className="or__divider-text">OR</span>
            </div>

            <div className="checkout__block border rounded-3 mb-20p">
              <div className="checkout__block-hd d-sm-flex align-items-center">
                <div className="flex__1 fw-boler fs-5 fw-bold mb-2 mb-sm-0">
                  Credit card
                </div>
                <div className="checkout__cards d-flex align-items-center rounded-bottom-start-3 rounded-bottom-end-3">
                  <img
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/610adf19a8c7f2d46c613d2e_Payment%20Method-2.svg"
                    alt=""
                    className="checkout__svg"
                  />
                  <img
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/610adf19cbf75e9888c657c2_Payment%20Method.svg"
                    alt=""
                    className="checkout__svg"
                  />
                  <img
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/610adf1910aac41bd62ef626_Payment%20Method-3.svg"
                    alt=""
                    className="checkout__svg"
                  />
                  <img
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/610adf19526b6e515ee2200d_Payment%20Method-1.svg"
                    alt=""
                    className="checkout__svg"
                  />
                  <span className="fs-7 text-light">and more...</span>
                </div>
              </div>
              <div className="checkout__block-bd">
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold text-darkfs-7">
                    Card Number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    size="lg"
                    placeholder="•••• •••• •••• ••••"
                    value={stateData.cardNumber}
                    name="cardNumber"
                    onChange={(e)=>props.changevalue(e)}
                  />
                    {stateData.error && stateData.error.cardNumber && <p className="error">{stateData.error ? stateData.error.cardNumber ? stateData.error.cardNumber : "" : ""}</p>}
                </Form.Group>

                <div className="d-sm-flex gap-3 align-items-center">
                  <Form.Group className="mb-3 flex__1">
                    <Form.Label className="fw-bold text-dark fs-7">
                      Expiration Month
                    </Form.Label>
                    <Form.Control type="text" size="lg" placeholder="•••" value={stateData.cardExpMonth} name="cardExpMonth"  onChange={(e)=>props.changevalue(e)} />
                    {stateData.error && stateData.error.cardExpMonth && <p className="error">{stateData.error ? stateData.error.cardExpMonth ? stateData.error.cardExpMonth : "" : ""}</p>}
                  </Form.Group>
                  <Form.Group className="mb-3 flex__1">
                    <Form.Label className="fw-bold text-dark fs-7">
                      Expiration Year
                    </Form.Label>
                    <Form.Control type="text" size="lg" placeholder="•••" value={stateData.cardExpYear} name="cardExpYear"  onChange={(e)=>props.changevalue(e)} />
                    {stateData.error && stateData.error.cardExpYear && <p className="error">{stateData.error ? stateData.error.cardExpYear ? stateData.error.cardExpYear : "" : ""}</p>}
                  </Form.Group>
                  <Form.Group className="mb-3 flex__1">
                    <Form.Label className="fw-bold text-dark fs-7">
                      CVC/CVV
                    </Form.Label>
                    <Form.Control type="text" size="lg" placeholder="•••" value={stateData.cardCVC} name="cardCVC"  onChange={(e)=>props.changevalue(e)} />
                    {stateData.error && stateData.error.cardCVC && <p className="error">{stateData.error ? stateData.error.cardCVC ? stateData.error.cardCVC : "" : ""}</p>}
                  </Form.Group>
                </div>

                <div className="d-flex aling-items-center py-8">
                  <Form.Check type="checkbox" className="fs-4 lh-1" />
                  <span className="fs-7 text-subtext d-flex align-items-center lh-1 h-auto ms-1">
                    Pay with this card
                  </span>
                </div>
              </div>
            </div>
            <div className="note note--info mb-3">
              Your payment will be processed when you click Complete
              Transaction. By clicking Complete Transaction you agree to
              Donorport's{" "}
              <a href="#">
                <span className="text-subtext">Terms and Conditions.</span>
              </a>
              .
            </div>

            <div className="d-flex align-items-center pb-20p">
              <Button variant="success" size="lg" className="fs-6 fw-bold" onClick={()=>props.pay()}>
                Complete Transaction
              </Button>
              <Link
                variant="link"
                size="lg"
                className="fs-6 text-light fw-normal px-0 ms-3"
                to='/cart'
              >
                Return to cart
              </Link>
            </div>
          </div>

          <footer className="py-3 py-sm-2 border-top">
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
        </div>
        {isTab ? (
          ""
        ) : (
          <div className="summary__section">
            <SummaryContent currencySymbol={props.currencySymbol} cartItem={cartItem} total={props.total} removeCartItem={props.removeCartItem} CalculatedPrice={props.CalculatedPrice}  />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Checkout;
