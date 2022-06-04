import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button, ProgressBar } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import IconToggle from "../../atoms/icon-toggle";
import ShareWidget from "../share-widget";
import { ReactComponent as CategoryIcon } from "../../../../../assets/svg/child.svg";
import IconText from "../../molecules/icon-text";
import ProjectGallery from "../project-gallery";
import moment from "moment";
import helper, { getCalculatedPrice, priceFormat } from "../../../../../Common/Helper";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsUpdateCart } from "../../../../../user/user.action"
import "./style.scss";

function ProjectDetailMain(props) {
  let productDetails = props.productDetails
  const getCalc = getCalculatedPrice();
  let price = getCalc.getData(productDetails?.price)
  let currencySymbol = getCalc.currencySymbol()

  let per = productDetails.soldout / productDetails.quantity * 100

  const [quantity, setQuantity] = useState(1)

  const [addedToCard, setAddedToCard] = useState(false)
  const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();



  useEffect(() => {
    (async () => {
      if (!CampaignAdminAuthToken) {
        const checkItem = await props.checkItemInCart(productDetails._id)
        if (checkItem === true) {
          setAddedToCard(true)
        } else {
          setAddedToCard(false)

        }
      }

    })()
  }, [!user.isUpdateCart])


  const cart_btn = addedToCard ? (
    <Button
      variant="success"
      size="lg"
      className="icon icon__pro"

    >
      Added In cart &nbsp;
      <FontAwesomeIcon icon={solid("circle-check")} />
    </Button>
  ) : (
    <Button
      variant="primary"
      size="lg"
      className="icon icon__pro"
      onClick={() => {
        props.addToCart(productDetails._id, quantity)
        dispatch(setIsUpdateCart(!user.isUpdateCart))
      }}
    >
      Add to cart ( {quantity} )
    </Button>
  );
  const btn =
    productDetails.soldout === productDetails.quantity ? (
      <span className="btn btn-outline-danger btn-lg btn__sold">Sold</span>
    ) : (
      cart_btn
    );

  // console.log(productDetails)

  return (
    <div className="project__detail-main">
      <h6 className="project__detail-label mb-3p">Item</h6>
      <h1 className="project__detail-title mb-0" style={{ textTransform: "capitalize" }}>{productDetails?.headline}</h1>
      <h5 className="project__detail-sublabel">Product</h5>
      <div className="project__detail-subtitle mb-12p">{productDetails?.brand} ™</div>
      <div className="project__detail-price fs-2 text-success">{currencySymbol} {priceFormat(price)}</div>
      <div className="project__detail-meta d-flex align-items-center">
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={regular("clock")} className="me-1" />
          {moment(productDetails?.created_at).format('MMMM DD, YYYY')}
        </div>
        <div className="d-flex align-items-center ms-2">
          <FontAwesomeIcon
            icon={regular("circle-location-arrow")}
            className="me-1"
          />
          Toronto, ON
        </div>
      </div>

      {/* show for mobile view */}

      <div className="d-sm-none project__detail-img mb-3">
        <img
          className="img-fluid"
          alt=""
          src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c26551110ec14dd05ef15_image%20(1).png"
        />
      </div>
      <div className="product__top px-0 mb-1 d-flex align-items-center">
        <div className="d-flex align-items-center flex-grow-1">
          <ProgressBar
            variant="success"
            now={per}
            className="flex-grow-1 me-1"
          />
          {props.onGoing ? (
            <span className="tag tag__ongoing tag__rounded fs-5">
              <FontAwesomeIcon icon={regular("infinity")} />
            </span>
          ) : (
            <span className="fw-bold">
              {productDetails.soldout} / {productDetails.quantity} <span className="fs-9 fw-normal">sold</span>
            </span>
          )}
        </div>
        <div className="text-light d-flex align-items-center ms-3">
          <IconToggle
            activeColor="rgb(246, 100, 97)"
            icon={<FontAwesomeIcon icon={regular("heart")} />}
            checkedIcon={<FontAwesomeIcon icon={solid("heart")} />}
            onClickFilter={() => { }}
          />

          <IconToggle
            icon={<FontAwesomeIcon icon={regular("bell")} />}
            checkedIcon={<FontAwesomeIcon icon={solid("bell")} />}
            onClickFilter={() => { }}
          />

          <ShareWidget />
        </div>
      </div>

      <div className="category__icons d-flex align-items-center mb-4">
        <Button
          size="lg"
          variant="link"
          className="btn__category text-decoration-none"
        >
          <span className="d-flex align-items-center icon__category" style={{ fontFamily: "fontAwesome", color: productDetails?.categoryDetails?.color, fontStyle: "normal" }}>
            <span style={{ fontSize: "x-large" }} className={productDetails?.subCategoryDetails?.iconDetails.class} ></span>
          </span>{" "}
          <span className="fs-6 text-dark fw-bold" style={{ textTransform: "capitalize" }}>{productDetails?.subCategoryDetails?.name}</span>
        </Button>
        <Link
          size="lg"
          variant="link"
          className="btn__category text-decoration-none"
          to={'/organization/' + productDetails?.campaignDetails?.slug}
        >
          <span className="d-flex align-items-center icon__category">
            {/* <CategoryIcon /> */}
            {/* <div className="page__logo page__logo--org ms-auto" > */}
            <img
              alt=""
              style={{ width: "30px" }}
              src={helper.CampaignAdminLogoPath + productDetails?.campaignDetails?.logo}

            />
            {/* </div> */}
          </span>
          <span className="fs-6 text-dark fw-bold" style={{ textTransform: "capitalize" }}>{productDetails?.campaignDetails?.name}</span>
        </Link>
        {/* <Button
          size="lg"
          variant="link"
          className="btn__category text-decoration-none"
        >
          <span className="d-flex align-items-center icon__category">
            <img
              alt=""
              className="img-fluid"
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c38e4fd28a71363f4ac5d_Tree-Frog-Logo-Mock.png"
            />
          </span>
        </Button> */}
        <Button size="lg" variant="success" className=" text-decoration-none">
          <span className="fs-6">Shelter</span>
        </Button>
      </div>

      <h5>Personal tents for the homeless in Alberta, Canada</h5>
      <div className="page__paragraph lh-lg">
        {productDetails?.description?.replace(/<\/?[^>]+(>|$)/g, "")}
      </div>

      <div className="project__calculate mt-4">
        <div className="sub__total">
          <div className="text-dark fw-bold me-2">Subtotal:</div>
          <div className="price fs-4 fw-bold text-success">${price * quantity}</div>
        </div>
        <div className="d-flex align-items-center fs-5 py-1 mb-3">
          <div className="project__count mt-3p">1</div>
          <div className="flex-grow-1 mx-2">
            <Slider
              handleStyle={{
                width: "26px",
                height: "26px",
                border: "none",
                background: "#3596F3",
                marginTop: "-10px",


              }}
              min={1}
              max={10}
              railStyle={{ backgroundColor: "#C7E3FB", height: "8px" }}
              onChange={(e) => setQuantity(e)}
            />
          </div>
          <div className="project__count mt-3p">10</div>
        </div>

        {/* <Button size="lg" className="w-100">
          <span className="fw-bold">Add to cart ( {quantity} )</span>
        </Button> */}

        {/* {productDetails.quantity !== productDetails.soldout && cart_btn} */}
        {!CampaignAdminAuthToken && btn}
      </div>

      <div className="product__badge mt-5">
        <IconText
          className="pt-12p pb-12p"
          icon={
            <FontAwesomeIcon
              icon={solid("infinity")}
              className="fs-4 text-info pt-12p pb-12p"
            />
          }
        >
          Item is ongoing - there is no fixed quantity.
        </IconText>
        <IconText
          className="pt-12p pb-12p"
          icon={
            <FontAwesomeIcon
              icon={solid("calculator-simple")}
              className="fs-4 text-info"
            />
          }
        >
          Item was already purchased by the organization. Your purchase will
          cover those costs.
        </IconText>
        <IconText
          className="pt-12p pb-12p"
          icon={
            <FontAwesomeIcon icon={solid("image")} className="fs-4 text-info" />
          }
        >
          These items are tax deductible.
        </IconText>
        {
          productDetails?.advertisements?.length > 0 &&

          <IconText
            className="pt-12p pb-12p"
            icon={
              // <FontAwesomeIcon icon="fa-solid fa-rectangle-ad" />
              <FontAwesomeIcon icon={solid("rectangle-ad")} className="fs-4 text-info" />
            }
          >
            {
              productDetails?.advertisements.map((ad, i) => {
                return (
                  <a href={ad.advertisementsData?.website} target="_blank" rel="noreferrer" key={i}>
                    <img src={helper.sponsorLogoResizePath + ad.advertisementsData?.logo} alt='sponsor' className="p-1" style={{ width: "50px" }}></img>
                  </a>
                )
              })
            }
          </IconText>
        }
      </div>

      <ProjectGallery className="mt-5 mb-3" tagTitle="Products" images={productDetails?.productImages} />
    </div >
  );
}

export default ProjectDetailMain;
