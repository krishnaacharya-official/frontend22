import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button } from "react-bootstrap";

import ListItemImg from "../../atoms/list-item-img";
import moment from "moment";
import helper, { priceFormat, getCalculatedPrice, getCardIcon } from "../../../../../Common/Helper";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import "./style.scss";
import { head } from "lodash";

const HistoryList = (props) => {
  let orderList = props.orderList
  let totalRecord = props.totalRecord

  const [active, setActive] = useState(0);
  // const [activeList, setActiveList] = useState([]);

  const [openData, setOpenData] = useState({
    key: "",
    activeDetail: false
  });
  const { key, activeDetail } = openData
  const calculatedPrice = getCalculatedPrice()

  // const showDetails = (key,isOpen) ={

  // }

  const activeList = props.activeList
  const setActiveList = props.setActiveList
  const setIschecked = props.setIschecked

  const showDetails = (e) => {

    let tempArry = [...activeList]
    const index = tempArry.indexOf(e);
    if (index > -1) {
      tempArry.splice(index, 1);
      setActiveList(tempArry)
    } else {
      tempArry = [...activeList, e]
      setActiveList([...activeList, e])
    }

    if (tempArry.length !== orderList.length) {
      setIschecked(false)
    } else {
      setIschecked(true)

    }

  }


  return (
    <>
      <ul className="history__list list-unstyled mb-0">

        {
          orderList.length > 0 ?
            orderList.map((order, i) => {
              // console.log(order.uniqueTransactionId)
              let last4 = JSON.parse(order.paymentResponse).data?.payment_method_details?.card?.last4
              let totalCharge = Number(order.appliedTaxPercentage)
              let CardType = JSON.parse(order.paymentResponse).data?.payment_method_details?.card?.brand
              // 

              return (
                <>
                  <li className="history__list-item">
                    <div className="py-2 border-bottom">
                      <div className="d-flex align-items-center mb-1">
                        <span className="flex__1 me-2">
                          <FontAwesomeIcon
                            icon={solid("receipt")}
                            className="mr-12p text-dark fs-4"
                          />
                          <span className="text-success fw-bold fs-4">{order.currencySymbol ? order.currencySymbol : "$"} {priceFormat(Number(order.total))}</span>
                          <span className="ml-6p text-light">{order.currency ? order.currency : "USD"}</span>
                        </span>
                        <span className="text-info fs-5 fw-bold">{order.xp ? order.xp : 200} xp</span>
                      </div>
                      <div>
                        <Button
                          variant="link"
                          className="text-dark p-0 mb-1"
                          // onClick={() => setOpenData({ ...openData, key: order._id, activeDetail: !activeDetail })}
                          onClick={() => showDetails(order._id)}

                        >
                          Order # {order.uniqueTransactionId ? order.uniqueTransactionId : order._id}
                        </Button>
                      </div>
                      {/* <div className="fw-bold fs-7 text-light">July 21, 2020</div> */}
                      <div className="fw-bold fs-7 text-light">{moment(order.created_at).format('MMMM DD , YYYY')}</div>

                    </div>
                    {
                      // activeDetail && key === order._id ? 
                      activeList.includes(order._id) ?
                        (
                          <ul className="list-unstyled ms-1">

                            {
                              order.orderItems.length > 0 &&
                              order.orderItems.map((item, key) => {
                                // console.log(item)
                                // console.log(item)
                                // let price = Math.round(Number(item.productPrice) + (totalCharge / 100) * Number(item.productPrice))
                                let price = item.productPrice

                                // let price = calculatedPrice.priceWithTax(item.productPrice)

                                return (
                                  <li className="d-sm-flex align-items-center px-sm-2 py-2 border-bottom border-sm-none">
                                    <div className="d-flex align-items-center mb-2 mb-sm-0 flex__1">
                                      <ListItemImg
                                        imgSrc={helper.CampaignProductImagePath + item.productImage}
                                        style={{border: "unset", background: "unset"}}
                                      />
                                      <div className="ms-2 order__id">
                                        <Button
                                          variant="link"
                                          className="text-dark fw-bold p-0 mb-3p"
                                        >
                                          {item.quantity} {item.itemDetails?.headline}
                                        </Button>
                                        <div className="text-light mb-3p">{item.itemDetails?.brand}</div>
                                        <div className="fs-5 text-success fw-bold">{order.currencySymbol ? order.currencySymbol : "$"} {priceFormat(Number(price))}</div>
                                      </div>
                                      <ListItemImg
                                        size={42}
                                        className="rounded-circle charity_avatar_bg"
                                        imgSrc={helper.CampaignAdminLogoPath + item?.itemDetails?.campaignadminsDetails.logo}
                                      />
                                    </div>
                                    <div className="order__values d-flex align-items-center">
                                      <span className="text-info fw-bold flex__1">{item.xp ? item.xp : 100} xp</span>
                                      <span className="fs-5 fw-bold text-success ms-2">{order.currencySymbol ? order.currencySymbol : "$"}{priceFormat(Number(price * item.quantity))}</span>
                                    </div>
                                  </li>
                                )
                              })
                            }



                            <li className="order__transaction px-sm-2 py-2">
                              <div className="bg-lighter d-flex align-items-center pt-20p pb-20p px-2">
                                <div className="order__logo me-2">
                                  <img
                                    src={getCardIcon(CardType)}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="order__card fs-7">
                                  <div className="text-dark fw-semibold mb-6p">
                                    XXXX XXXX XXXX {last4}
                                  </div>
                                  <div className="text-light fw-semibold">
                                    {/* <div>Transaction: July 02, 2019</div> */}
                                    <div>Transaction: {moment(order.created_at).format('MMMM DD , YYYY')}</div>

                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        ) : (
                          ""
                        )}
                  </li>


                </>
              )

            })

            :
            <li className="history__list-item">No Records to Display</li>
        }



      </ul >
      {/* <div className="position-absolute start-50 bottom-0"> */}
      <div className="mt-5 d-flex justify-content-center mb-5">

        {props.totalPages > 1 ?
          < Stack spacing={2} >
            <Pagination count={props.totalPages} variant="outlined" color="primary" page={props.pageNo} onChange={props.handleClick} />
          </Stack>
          : <></>}
      </div>
    </>
  );
};

export default HistoryList;
