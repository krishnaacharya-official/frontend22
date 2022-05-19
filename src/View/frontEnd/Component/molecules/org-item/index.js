import { Button } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import ListItemImg from "../../atoms/list-item-img";
import moment from "moment"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import helper from "../../../../../Common/Helper";
import cartApi from "../../../../../Api/frontEnd/cart";
import { useSelector, useDispatch } from "react-redux";
import { setIsUpdateCart } from "../../../../../user/user.action"

import "./style.scss";

function OrganisationItem(props) {
  let product = props.product
  let productId = props.tagTitle === "Project" ? product?.itemDetails?._id : product?._id
  let productPrice = props.tagTitle === "Project" ? props.productPrice[product?.itemDetails?._id] : props.productPrice[product?._id]
  const setproductPrice = props.setproductPrice
  const [totalPrice, setTotalPrice] = useState(productPrice)
  const [totalQuantity, setTotalQuantity] = useState(1)
  let headline = props.tagTitle === "Project" ? product?.itemDetails?.headline : product?.headline
  let created_at = props.tagTitle === "Project" ? product?.itemDetails?.created_at : product?.created_at
  let infinite = props.tagTitle === "Project" ? product?.itemDetails?.unlimited : product?.unlimited
  let image = props.tagTitle === "Project" ? product?.itemDetails?.image : product?.image
  let soldout = props.tagTitle === "Project" ? product?.itemDetails?.soldout : product?.soldout
  let quantity = props.tagTitle === "Project" ? product?.itemDetails?.quantity : product?.quantity


  const [addedToCard, setAddedToCard] = useState(false)
  const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const cart_btn = addedToCard ? (
    <Button
      variant="success"
      size="sm"
      className="icon icon__pro"

    >
      <FontAwesomeIcon icon={solid("circle-check")} />
    </Button>
  ) : (
    <Button
      variant="primary"
      size="sm"
      className="icon icon__pro"
      onClick={() => {
        props.addToCart(productId, totalQuantity)
        dispatch(setIsUpdateCart(!user.isUpdateCart))
      }}
    >
      ${totalPrice}
    </Button>
  );

  

  const btn =
    soldout === quantity ? (
      <span className="btn btn-outline-danger btn-sm btn__sold">Sold</span>
    ) : (
      cart_btn
    );



  useEffect(() => {
    (async () => {
      setTotalPrice(productPrice)
      if (!CampaignAdminAuthToken) {
        const checkItem = await props.checkItemInCart(productId)
        if (checkItem === true) {
          setAddedToCard(true)
        } else {
          setAddedToCard(false)

        }
      }

    })()
  }, [!user.isUpdateCart, productPrice])

  // console.log("product",product)
  return (
    <li className="org__item__item pt-12p pb-12p d-sm-flex align-items-center">
      <div className="d-flex align-items-center flex-grow-1">
        <a href="/" className="d-block">
          <ListItemImg imgSrc={helper.CampaignProductImagePath + image} />
        </a>
        <div className="org__item__main pl-12p flex-grow-1">
          <div className="org__item__title pr-12p">
            <a
              href="/"
              className="org__item__name mb-3p text-dark d-inline-block"
            >
              {headline}
            </a>
            <div className="org__item__location mb-6p">{moment(created_at).fromNow()}</div>
          </div>
          <div className="org__item__price">${productPrice}</div>
        </div>

        <span className="org__item-subtotal d-sm-none text-success fw-bolder">
          ${productPrice}
        </span>
      </div>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center flex-grow-1 fs-5 me-2">
          <div className="org__item__count mt-3p">1</div>
          <div className="org__item-slider flex-grow-1 mx-2">
            <Slider
              handleStyle={{
                width: "26px",
                height: "26px",
                border: "none",
                background: "#3596F3",
                marginTop: "-10px",
              }}
              railStyle={{ backgroundColor: "#C7E3FB", height: "8px" }}
              min={1}
              max={infinite ? 1 : 10}

              // onChange={(e) => setTotalPrice({
              //   ...props.productPrice,
              //   [product?.itemDetails?._id]:e*productPrice
              // })}
              onChange={(e) => {
                setTotalPrice(e * productPrice)
                setTotalQuantity(e)
              }}
            />
          </div>
          <div className="org__item__count mt-3p">{infinite ?
            <div className="tag tag--ongoing" style={{ height: "26px", width: "26px", backgroundColor: "#a976f0", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              {/* <div className="icon icon--unlimited"></div> */}
              <FontAwesomeIcon icon={solid("infinity")} className="icon icon--unlimited" />
            </div>
            : 10}</div>
        </div>
        {/* <span className="org__item-subtotal d-none d-sm-block text-success fw-bolder me-2">
          ${totalPrice}
        </span> */}
        {/* <Button className="ms-auto" disabled={true}>
          <span className="fw-bold">${infinite ? productPrice : totalPrice}</span>
        </Button> */}
        {!CampaignAdminAuthToken && btn}
      </div>
    </li>
  );
}

export default OrganisationItem;
