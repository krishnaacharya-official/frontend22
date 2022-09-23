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
import helper, { getCalculatedPrice, countInArray } from "../../../../../Common/Helper"
import cartApi from "../../../../../Api/frontEnd/cart";
import { useSelector, useDispatch } from "react-redux";
import { setIsUpdateCart } from "../../../../../user/user.action"
import { useNavigate } from "react-router-dom";

function OrganisationWidget(props) {
  const [check, setCheck] = useState(false);
  const [loadMore, setLoadMore] = useState(false)
  const [price, setPrice] = useState()
  const [cartProductList, setCartProductList] = useState([])
  const [cartProductIds, setCartProductIds] = useState([])
  const [availabileProducts, setAvailabileProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])


  const [productPrice, setproductPrice] = useState({});
  const getCalc = getCalculatedPrice()
  const userAuthToken = localStorage.getItem('userAuthToken');
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user);
  let productDetails = props.productDetails
  let currencySymbol = getCalc.currencySymbol()

  useEffect(() => {
    (async () => {
      if (productDetails?.length > 0) {
        let obj = {}
        let tempP = []
        let tempnotw = []

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



        // setAvailabileProducts(tempP)
        // console.log(currencySymbol)



        setproductPrice(obj)
        setLoadMore(false)

        productDetails.map((pr, i) => {
          let product = pr

          let infinite = props.tagTitle === "Project" ? product?.itemDetails?.unlimited : product?.unlimited
          let tax = props.tagTitle === "Project" ? product?.itemDetails?.tax : product?.tax

          let soldout = props.tagTitle === "Project" ? product?.itemDetails?.soldout : product?.soldout
          let quantity = props.tagTitle === "Project" ? product?.itemDetails?.quantity : product?.quantity
          let isFulfiled = props.tagTitle === "Project" ? product?.itemDetails?.isFulfiled : product?.isFulfiled
          let isFinish = !infinite && soldout >= quantity ? true : false

          if (isFinish || isFulfiled && !infinite) {
            tempnotw.push(pr)
          } else {
            tempP.push(pr)
          }


        })
        tempP = tempP?.filter(function (item, pos, self) {
          return self.indexOf(item) === pos;
        })

        setAvailabileProducts(tempP)


      }
      productDetails = productDetails?.filter(function (item, pos, self) {
        return self.indexOf(item) === pos;
      })

      if (props.tagTitle === "Project") {

        productDetails = productDetails.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.itemDetails?._id === value.itemDetails?._id
          ))
        )
        setAllProducts(productDetails)

      } else {

        productDetails = productDetails.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t._id === value._id
          ))
        )
        setAllProducts(productDetails)

      }



    })()
  }, [productDetails])


  const onChangeTax = (e) => {
    setCheck(e)
    if (e) {
      setAvailabileProducts(productDetails.filter(e => props.tagTitle === "Project" ? e.itemDetails.tax === true : e.tax === true))
      setAllProducts(productDetails.filter(e => props.tagTitle === "Project" ? e.itemDetails.tax === true : e.tax === true))
    } else {
      let tempP = []
      let tempnotw = []
      if (productDetails.length > 0) {
        productDetails.map((pr, i) => {
          let product = pr

          let infinite = props.tagTitle === "Project" ? product?.itemDetails?.unlimited : product?.unlimited
          let tax = props.tagTitle === "Project" ? product?.itemDetails?.tax : product?.tax

          let soldout = props.tagTitle === "Project" ? product?.itemDetails?.soldout : product?.soldout
          let quantity = props.tagTitle === "Project" ? product?.itemDetails?.quantity : product?.quantity
          let isFulfiled = props.tagTitle === "Project" ? product?.itemDetails?.isFulfiled : product?.isFulfiled
          let isFinish = !infinite && soldout >= quantity ? true : false

          if (isFinish || isFulfiled && !infinite) {
            tempnotw.push(pr)
          } else {
            tempP.push(pr)
          }


        })
      }
      tempP = tempP?.filter(function (item, pos, self) {
        return self.indexOf(item) === pos;
      })

      setAvailabileProducts(tempP)
      productDetails = productDetails?.filter(function (item, pos, self) {
        return self.indexOf(item) === pos;
      })
      setAllProducts(productDetails)

    }

  }

  // console.log(productPrice)



  const onChangeDonatePrice = async (e) => {
    let value = e.target.value.replace(/[^\d.]|\.(?=.*\.)/g, "");
    setPrice(value)
    if (Number(value) > 0) {


      let cart = [];
      let cartTotal = 0;
      // let p = productList.filter(e => getCalc.getData(e.price) < value)
      let p;
      if (props.tagTitle === 'Project') {
        p = availabileProducts.filter(e => (e.itemDetails?.displayPrice ? e.itemDetails?.displayPrice : e.itemDetails?.price) < value)

      } else {
        p = availabileProducts.filter(e => (e.displayPrice ? e.displayPrice : e.price) < value)

      }




      if (p.length > 0) {
        p.map((itm, key) => {
          let price1;


          if (props.tagTitle === 'Project') {

            price1 = itm.itemDetails?.displayPrice ? itm.itemDetails?.displayPrice : itm.itemDetails?.price
          } else {
            price1 = itm.displayPrice ? itm.displayPrice : itm.price
          }
          // if (value > cartTotal + getCalc.getData(itm.price)) {
          if (value > cartTotal + price1) {
            let pID = props.tagTitle === 'Project' ? itm.itemDetails?._id : itm._id
            let unlimited = props.tagTitle === 'Project' ? itm.itemDetails?.unlimited : itm.unlimited


            if (unlimited) {
              cart.push(pID)

              setCartProductList(cart)
              // cartTotal += getCalc.getData(itm.price)
              cartTotal += price1
            } else {
              // console.log(cart)
              // console.log('pid', typeof (pID))
              let counts = {}
              cart.forEach(function (x) { counts[x] = (counts[x] || 0) + 1 })
              let checkQ = props.tagTitle === 'Project' ? (Number(itm.itemDetails?.quantity) - Number(itm.itemDetails?.soldout)) :
                (Number(itm.quantity) - Number(itm.soldout))
              // console.log('count', cart.forEach(function (x) { counts[x] = (counts[x] || 0) + 1 }))
              // console.log(counts)

              // console.log(cart.filter(item => item === pID).length)
              if (Number(counts[pID] ? counts[pID] : 0) < checkQ) {

                cart.push(pID)

                setCartProductList(cart)
                // cartTotal += getCalc.getData(itm.price)
                cartTotal += price1

              }
            }



          }

        })

        if (value - cartTotal > 0) {

          while (p.length > 0) {
            // let price2 = e.displayPrice ? e.displayPrice : e.price


            if (props.tagTitle === 'Project') {
              p = availabileProducts.filter(e => (e.itemDetails?.displayPrice ? e.itemDetails?.displayPrice : e.itemDetails?.price) < value - cartTotal)

              // price2 = e.itemDetails?.displayPrice ? e.itemDetails?.displayPrice : e.itemDetails?.price
            } else {
              p = availabileProducts.filter(e => (e.displayPrice ? e.displayPrice : e.price) < value - cartTotal)
            }

            // p = productList.filter(e => getCalc.getData(e.price) < value - cartTotal)
            // p = availabileProducts.filter(e => price2 < value - cartTotal)



            if (p.length > 0) {
              p.map((itm, key) => {
                let price3;


                if (props.tagTitle === 'Project') {

                  price3 = itm.itemDetails?.displayPrice ? itm.itemDetails?.displayPrice : itm.itemDetails?.price
                } else {
                  price3 = itm.displayPrice ? itm.displayPrice : itm.price

                }

                let pID = props.tagTitle === 'Project' ? itm.itemDetails?._id : itm._id

                // if (value > cartTotal + getCalc.getData(itm.price)) {
                if (value > cartTotal + price3) {
                  let pID = props.tagTitle === 'Project' ? itm.itemDetails?._id : itm._id
                  let unlimited = props.tagTitle === 'Project' ? itm.itemDetails?.unlimited : itm.unlimited


                  if (unlimited) {
                    cart.push(pID)

                    setCartProductList(cart)
                    // cartTotal += getCalc.getData(itm.price)
                    cartTotal += price3
                  } else {
                    let counts = {}
                    cart.forEach(function (x) { counts[x] = (counts[x] || 0) + 1 })
                    let checkQ = props.tagTitle === 'Project' ? (Number(itm.itemDetails?.quantity) - Number(itm.itemDetails?.soldout)) :
                      (Number(itm.quantity) - Number(itm.soldout))
                    // console.log('count', cart.forEach(function (x) { counts[x] = (counts[x] || 0) + 1 }))
                    // console.log('2', counts)
                    // console.log(cart.filter(item => item === pID).length)
                    if (Number(counts[pID] ? counts[pID] : 0) < checkQ) {

                      cart.push(pID)

                      setCartProductList(cart)
                      // cartTotal += getCalc.getData(itm.price)
                      cartTotal += price3

                    }
                  }



                }

              })
            }
          }

        }


      } else {
        setCartProductList([])
      }
    } else {
      setCartProductList([])
    }

  }

  const onClickAddToCart = async () => {
    if (userAuthToken) {


      if (cartProductList.length > 0) {
        let data = {}
        let tempArray = []
        cartProductList.map((itm, i) => {
          let tempobj = {}
          if (tempArray.some(e => e.productId === itm)) {
            let objIndex = tempArray.findIndex((obj => obj.productId === itm));
            tempArray[objIndex].qty += 1
          } else {
            tempobj.productId = itm
            tempobj.qty = 1
            tempArray.push(tempobj)
          }


        })


        data.productIds = tempArray
        // setLoading(false)
        const addMultiple = await cartApi.addMultiple(userAuthToken, data)

        if (addMultiple) {
          if (!addMultiple.data.success) {
            // setLoading(false)
            // ToastAlert({ msg: addMultiple.data.message, msgType: 'error' });
          } else {
            // setIsUpdate(!update)
            dispatch(setIsUpdateCart(!user.isUpdateCart))
            setCartProductList([])
            setPrice('')
            /*ToastAlert({ msg: addMultiple.data.message, msgType: 'success' });*/
            // setLoading(false)
          }

        } else {
          // setLoading(false)
          // ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
        }
      }
    } else {
      navigate('/signin')
    }
    setCheck(false)

  }


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
              {currencySymbol}
            </InputGroup.Text>
            <FormControl type="text" value={price} onChange={(e) => onChangeDonatePrice(e)} />
          </InputGroup>

          <div className="d-flex align-items-center ms-auto">
            <span className="fs-7 me-1">Tax Receipt?</span>
            <ToggleSwitch
              checked={check}
              changevalue={() => onChangeTax(!check)}
            />
          </div>
        </div>
        <Button variant="outline-primary" className="organisation__cart-btn" style={{ border: '2px solid' }} onClick={() => onClickAddToCart()}>
          Add to cart (
          {cartProductList.length}
          )
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
          allProducts?.length > 0 ?
            allProducts.slice(0, loadMore ? allProducts.length : 3).map((product, i) => {

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
        allProducts?.length > 3 &&
        <div className="more__log">
          <Button variant="info" className="fs-6 pt-12p pb-12p w-100" onClick={() => setLoadMore(true)}>Load More . . .</Button>
        </div>
      }
    </>
  );
}

export default OrganisationWidget;
