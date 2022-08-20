import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button, FormControl, InputGroup } from "react-bootstrap";

// import { WidgetTitle, TagTitle, ToggleSwitch } from "../../Component";
import WidgetTitle from "../../atoms/widget-title"

import TagTitle from "../../atoms/tag-title"

import ToggleSwitch from '../../atoms/toggle-switch'

import OrganisationItem from "../../molecules/org-item";

import "./style.scss";
import helper, { getCalculatedPrice } from "../../../../../Common/Helper"

function OrganisationWidget(props) {
  const [check, setCheck] = useState(0);
  const [loadMore, setLoadMore] = useState(false)

  const [productPrice, setproductPrice] = useState({});
  const getCalc = getCalculatedPrice()

  let productDetails = props.productDetails
  let currencySymbol = getCalc.currencySymbol()
  useEffect(() => {
    (async () => {
      if (productDetails?.length > 0) {
        let obj = {}
        if (props.tagTitle === 'Project') {
          productDetails.map((product, i) => {
            // obj[product?.itemDetails?._id] = getCalc.getData(product?.itemDetails?.price)
            obj[product?.itemDetails?._id] = product?.itemDetails?.displayPrice ? product?.itemDetails?.displayPrice : product?.itemDetails?.price

          })
        } else {
          productDetails.map((product, i) => {
            // console.log(product)
            // obj[product._id] = getCalc.getData(product?.price)
            obj[product._id] = product?.displayPrice ? product?.displayPrice : product?.price
          })
        }

        setproductPrice(obj)
        setLoadMore(false)
      }
    })()
  }, [productDetails])

  // console.log(productPrice)


  return (
    <>
      <TagTitle>Organisation</TagTitle>
      <div className="mb-2">
        <WidgetTitle>Items</WidgetTitle>
      </div>

      <div className="d-sm-flex align-items-center mb-1 pb-2 border-bottom">
        <div className="d-flex align-items-center flex-grow-1 mb-2 mb-sm-0">
          <span>Donate:</span>
          <InputGroup className="donate__control">
            <InputGroup.Text className="">
              $
            </InputGroup.Text>
            <FormControl type="number" />
          </InputGroup>

          <div className="d-flex align-items-center ms-auto">
            <span className="fs-7 me-1">Tax Receipt?</span>
            <ToggleSwitch
              checked={check}
              changevalue={() => setCheck(!check)}
            />
          </div>
        </div>
        <Button variant="outline-primary" className="organisation__cart-btn" style={{border: '2px solid'}}>
          Add to cart (0)
        </Button>
      </div>
      <div className="note note__info mb-12p">
        <FontAwesomeIcon
          icon={regular("circle-info")}
          className="text-info mr-6p"
        />
        Item availability will be confirmed at checkout.
      </div>
      <ul className="list-unstyled mb-0">
        {
          productDetails?.length > 0 ?
            productDetails.slice(0, loadMore ? productDetails.length : 3).map((product, i) => {

              return (
                <OrganisationItem product={product} productPrice={productPrice} setproductPrice={setproductPrice} tagTitle={props.tagTitle} key={i}
                  addToCart={props.addToCart} checkItemInCart={props.checkItemInCart} currencySymbol={currencySymbol}
                />
              )
            })
            : <p>product Not Found</p>
        }
        {/* <OrganisationItem />
        <OrganisationItem /> */}
      </ul>
      {
        !loadMore &&
        productDetails?.length > 3 &&
        <div className="more__log">
          <Button variant="info" className="fs-6 pt-12p pb-12p w-100" onClick={() => setLoadMore(true)}>Load More . . .</Button>
        </div>
      }
    </>
  );
}

export default OrganisationWidget;
