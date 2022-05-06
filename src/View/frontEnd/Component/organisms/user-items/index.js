import { useState, useEffect } from "react";
import { ProgressBar, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
// import ListItemImg from "@components/atoms/list-item-img";

import ListItemImg from "../../atoms/list-item-img";
// import {
//   LadderMenuItems,
//   ItemsTable,
//   ShareWidget,
// } from "@components/organisms";
import LadderMenuItems from "../ladder-menu-items";
import ShareWidget from "../share-widget";
import ItemsTable from "../items-table";
import { Outlet, Link, useLocation, useOutletContext } from "react-router-dom";
import userApi from "../../../../../Api/frontEnd/user";
import FrontLoader from "../../../../../Common/FrontLoader";
import moment from "moment";
import helper, { getCalculatedPrice, priceFormat } from "../../../../../Common/Helper";



import "./style.scss";

const UserItems = () => {
  const [detail, setDetail] = useState({
    key: null,
    show: false
  });
  const { key, show } = detail
  const userAuthToken = localStorage.getItem('userAuthToken');
  const [loading, setLoading] = useState(false)
  const [data, setData] = useOutletContext();
  const [pageNo, setPageNo] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalRecord, setTotalRecord] = useState(1)
  const [sortField, setSortField] = useState("created_at");
  const [order, setOrder] = useState("asc");
  const [orderItemList, setOrderItemList] = useState([])
  const calculatedPrice = getCalculatedPrice()

  const getOrderItemList = async (page, field, type) => {
    setLoading(true)
    let formData = {}
    formData.organizationId = data._id
    formData.pageNo = page
    formData.sortField = field
    formData.sortType = type
    formData.filter = true



    const getOrderItem = await userApi.userOrderItemslist(userAuthToken, formData);
    if (getOrderItem.data.success === true) {
      setOrderItemList(getOrderItem.data.data)
      setTotalPages(getOrderItem.data.totalPages)
      setTotalRecord(getOrderItem.data.totalRecord)
    }
    setLoading(false)


  }

  useEffect(() => {
    (async () => {

      await getOrderItemList(pageNo, sortField, order)

    })()
  }, [data._id])

  const handleClick = async (e, v) => {

    setPageNo(Number(v))
    await getOrderItemList(Number(v), sortField, order)
  }


  const handleSortingChange = async (accessor) => {

    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    await getOrderItemList(pageNo, accessor, sortOrder)


  };
  const onItemClick = (key) => {
    setDetail({ ...detail, key: key, show: true })

  }


  return (
    <>
      <FrontLoader loading={loading} />
      {!detail.show ? (
        <div>
          <header className="py-sm-2 pb-2 mb-3 w-100 d-sm-flex align-items-center">
            <h1 className="d-none d-sm-flex page__title mb-0 fs-3 fw-bolder me-2">
              My Items
            </h1>
            <span className="d-none d-sm-flex text-light fs-5 ml-2">({totalRecord})</span>

            <span className="d-none d-sm-flex item__total-wrap d-flex ms-3">
              <FontAwesomeIcon
                icon={solid("money-bills-simple")}
                className="text-dark mr-12p fs-4"
              />
              USD $1,309.00
            </span>

            <div className="ms-sm-auto">
              <LadderMenuItems />
            </div>
          </header>

          <ItemsTable
            onItemClick={onItemClick}
            handleClick={handleClick}
            totalPages={totalPages}
            totalRecord={totalRecord}
            pageNo={pageNo}
            handleSortingChange={handleSortingChange}
            order={order}
            sortField={sortField}
            orderItemList={orderItemList}
          />
        </div>
      ) : (
        orderItemList.length > 0 &&
        orderItemList.map((item, i) => {
          // console.log(item.appliedTaxPer)
          // let price = Math.round(Number(item.productPrice) + (Number(item.appliedTaxPer) / 100) * Number(item.productPrice))
          let price = priceFormat(Math.round(calculatedPrice.priceWithTax(Number(item.itemDetails.price))))
          let purchasedPrice = (Math.round(calculatedPrice.priceWithTax(Number(item.productPrice))))

          // console.log(purchasedPrice)


          return (

            <div className={detail.show && Number(detail.key) === i ? "" : "d-none"}>
              <div className="d-flex align-items-center flex-grow-1 pb-20p border-bottom">
                <Button variant="link" className="me-sm-2 me-1" onClick={() => setDetail(false)}>
                  <FontAwesomeIcon
                    icon={solid("angle-left")}
                    className="text-subtext fs-3"
                  />
                </Button>
                <div className="d-flex align-items-center text-dark me-sm-3 flex__1">
                  <div className="item__image-wrap">
                    <img
                      alt=""
                      height="56"
                      className="img-fluid"
                      src={helper.CampaignProductImagePath + item.itemDetails?.image}
                    />
                  </div>
                  <div className="ms-3">
                    <div className="fw-bolder fs-4 mb-3p">{item.itemDetails?.headline}</div>
                    <div className="fs-7 text-light">{item.itemDetails?.brand}</div>
                  </div>
                </div>

                <div className="d-none d-sm-flex align-items-center flex__1">
                  <div className="d-flex align-items-center flex__1">
                    <div className="d-flex align-items-center progress__wrap me-2 flex__1">
                      <span className="qty__tag pl-9p pb-3p pr-9p pt-3p me-1 fw-bold text-light">
                        {item.itemDetails?.soldout}/{item.itemDetails?.quantity}
                      </span>
                      <ProgressBar
                        variant="success"
                        now={item.itemDetails?.soldout / item.itemDetails?.quantity * 100}
                        className="flex-grow-1"
                      />
                      <span className="text-light ms-1 fw-bold">{item.itemDetails?.soldout / item.itemDetails?.quantity * 100}%</span>
                    </div>
                  </div>
                </div>

                <ListItemImg
                  size={42}
                  imgSrc={helper.CampaignAdminLogoPath + item.itemDetails?.organizationDetails?.logo}
                />
              </div>

              <div className="d-sm-none pt-20p pb-20p">
                <div className="d-flex align-items-center">
                  <span className="qty__tag pl-9p pb-3p pr-9p pt-3p me-1 fw-bold text-light">
                    7/10
                  </span>
                  <ProgressBar variant="success" now={30} className="flex__1" />
                  <span className="text-light ms-1 fw-bold">30%</span>
                </div>
              </div>

              <Row className="pt-5">
                <Col md="6">
                  <div className="project__detail-main me-sm-3">
                    <h6 className="project__detail-label mb-3p">Item</h6>
                    <h1 className="project__detail-title mb-0">
                      Personal Shelters
                    </h1>
                    <h5 className="project__detail-sublabel">Product</h5>
                    <div className="project__detail-subtitle mb-12p">Eureka ™</div>
                    <div className="project__detail-price fs-2 text-success">
                      $ {price}
                    </div>
                    <div className="project__detail-meta d-flex align-items-center mb-4">
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={regular("clock")} className="me-1" />
                        {moment(item.itemDetails?.created_at).format('MMMM DD, YYYY')}
                      </div>
                      <div className="d-flex align-items-center ms-2">
                        <FontAwesomeIcon
                          icon={regular("circle-location-arrow")}
                          className="me-1"
                        />
                        Toronto, ON
                      </div>
                    </div>

                    <h5>Personal tents for the homeless in Alberta, Canada</h5>
                    <div className="page__paragraph mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </div>
                    <a href="/item/water-tabs" className="text-subtext">
                      <span className="url__icon me-1">
                        <FontAwesomeIcon icon={regular("square-up-right")} />
                      </span>
                      <span className="date__name date__name--url">
                        www.donorport.com/linktopost
                      </span>
                    </a>

                    <div className="empty_state mt-5">
                      <div className="note note-info d-flex align-items-center">
                        <span className="post__badge post__badge--sold me-2 text-primary fs-3">
                          <FontAwesomeIcon icon={solid("photo-film")} />
                        </span>
                        <span className="fs-6 text-subtext">
                          Giveaway media appears here when the post has been fully
                          funded.
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex__1 fs-5">
                      <div className="fw-bolder mb-6p">Order Number</div>
                      <div className="text-subtext">#{item.orderId}</div>
                    </div>
                    <ShareWidget />
                  </div>
                  <div className="order__widget mb-3">
                    <div className="d-flex align-items-start bg-lighter p-12p text-dark flex__1 mb-3">
                      <div className="">
                        <img
                          alt=""
                          width="32"
                          className="img-fluid"
                          src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c245cfd28a711fcf49f67_HYDRATION-TABS-three-tabs-s.png"
                        />
                      </div>
                      <div className="ms-2 flex__1 fw-bolder">
                        <div className="mb-3p">{item.itemDetails?.headline}</div>
                        <div className="text-success ">{item.currencySymbol ? item.currencySymbol :"$" }{priceFormat(purchasedPrice)}</div>
                      </div>
                      <div>
                        qty <span className="fw-bolder ml-3p">{item.quantity}</span>
                      </div>
                    </div>

                    <div className="py-3 border-top border-bottom">
                      <div className="d-flex align-items-center fw-bolder mb-20p">
                        <span className="flex__1">Subtotal:</span>
                        <span className="text-success">{item.currencySymbol ? item.currencySymbol :"$"} {priceFormat(Number(purchasedPrice)*Number(item.quantity))}</span>
                      </div>
                      <div className="d-flex align-items-center ">
                        <span className="fw-bolder flex__1">XP</span>
                        <span className="text-info fw-semibold">10 xp</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center pt-3 mb-2">
                      <span className="fw-bolder flex__1">Total:</span>
                      <span className="text-success fw-bold fs-4">{item.currencySymbol ? item.currencySymbol :"$"} {priceFormat(Number(purchasedPrice)*Number(item.quantity))}</span>
                    </div>
                    <div className="bg-lighter d-flex align-items-center p-20p rounded">
                      <div className="order__logo me-2">
                        <img
                          src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5b5e656493af1e0441cd892a_mc_vrt_pos.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="order__card fs-7">
                        <div className="text-dark fw-semibold mb-6p">
                          5432 XXXX XXXX 4809
                        </div>
                        <div className="text-light fw-semibold">
                          <div>Transaction: {moment(item.created_at).format('MMMM DD,YYYY')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fw-bold mb-2">Order Files</div>
                  <div className="empty_state mb-4">
                    <div className="note note-info d-flex align-items-center">
                      <span className="post__badge post__badge--sold me-2 text-primary fs-3">
                        <FontAwesomeIcon icon={solid("file-lines")} />
                      </span>
                      <span className="fs-6 text-subtext">
                        Tax & Order Receipts appear here when they are available.
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

          )


        })

      )}
    </>
  );
};

export default UserItems;
