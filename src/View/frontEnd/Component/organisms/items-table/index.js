import { Button, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// import ListItemImg from "@components/atoms/list-item-img";
import ListItemImg from "../../atoms/list-item-img";
import "./style.scss";

import moment from "moment";
import helper, { getCalculatedPrice, priceFormat } from "../../../../../Common/Helper";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const ItemsTable = (props) => {
  const calculatedPrice = getCalculatedPrice()

  let orderItemList = props.orderItemList

  const totalPriceArray = props.totalPriceArray
  // console.log(orderItemList)
  return (
    <>
      <div className="list__table">
        <div className="list__table-sort d-flex justify-content-sort">
          <div className="flex__1">
            <Button
              variant="link"
              className="btn__sort px-0 text-decoration-none"
              onClick={() => props.handleSortingChange('created_at')}

            >
              Date
              {
                props.sortField === 'created_at' && props.order === 'asc' ?
                  <FontAwesomeIcon
                    icon={solid("angle-up")}
                    className="small ml-6p"
                  />
                  :
                  <FontAwesomeIcon
                    icon={solid("angle-down")}
                    className="small ml-6p"
                  />
              }
            </Button>
          </div>
          <Button
            variant="link"
            className="btn__sort px-0 text-decoration-none"
          >
            Status
            <FontAwesomeIcon
              icon={solid("angle-down")}
              className="small ml-6p"
            />
          </Button>
        </div>
        <ul className="list-unstyled mb-0 list__table-list" style={{ maxHeight: "500px", minHeight: "500px" }}>
          {
            orderItemList.length > 0 ?
            orderItemList.map((item, key) => {
              // console.log(item)
              // let price = Math.round(Number(item.productPrice) + (Number(item.appliedTaxPer) / 100) * Number(item.productPrice))
              // let price = priceFormat(Math.round(calculatedPrice.priceWithTax(Number(item.itemDetails.price))))
              let price = item.itemDetails.displayPrice ? item.itemDetails.displayPrice : item.itemDetails.price


              return (
                <li className="table__list-item p-2" key={key} >
                  <div className="d-xl-flex align-items-center flex-grow-1">
                    <Button
                      variant="link"
                      onClick={() => props.onItemClick(key)}
                      className="d-flex align-items-center text-dark me-sm-3 p-0 text-decoration-none text-start"
                    >
                      <div className="me-2">
                        <div className="text-success fw-bold fs-5">{item.currencySymbol}{price}</div>
                        <div className="text-light fs-8">{moment(item.created_at).fromNow()}</div>
                      </div>
                      <div className="position-relative">
                        <ListItemImg size={68} imgSrc={helper.CampaignProductImagePath + item.itemDetails?.image} />
                        <span className="badge list__img-badge" style={{ position: "absolute" }}>{item.quantity}</span>
                      </div>
                      <div className="ms-2">
                        <div className="fw-bolder fs-5 mb-3p" style={{ maxWidth: "300px", minWidth: "300px" }}>{item.itemDetails?.headline}</div>
                        <div className="fs-7 text-light">{item.itemDetails?.brand}</div>
                      </div>
                    </Button>
                    <div className="d-flex align-items-center flex__1">
                      <div className="d-flex align-items-center flex__1">
                        <div className="d-flex align-items-center progress__wrap me-2 flex__1">
                          {
                            !item.itemDetails?.unlimited ?

                              < span className="qty__tag pl-9p pb-3p pr-9p pt-3p me-1 fw-bold text-light">
                                {item.itemDetails?.soldout}/{item.itemDetails?.quantity}
                              </span>
                              :
                              <></>
                          }
                          <ProgressBar
                            variant={!item.itemDetails?.unlimited ? "success" : "infinity"}
                            now={!item.itemDetails?.unlimited ? Math.round(item.itemDetails?.soldout / item.itemDetails?.quantity * 100) : 100}
                            className="flex-grow-1"
                          />
                          {
                            !item.itemDetails?.unlimited ?
                              <span className="text-light ms-1 fw-bold">{Math.round(item.itemDetails?.soldout / item.itemDetails?.quantity * 100)}%</span>
                              :
                              <div className="unlimited unlimited--home" style={{ marginLeft: "10px" }}>
                                <div className="tag tag--ongoing _2">
                                  <div className="icon icon--unlimited">
                                    <FontAwesomeIcon icon={solid("infinity")} className="" />
                                  </div>
                                </div>
                              </div>
                          }

                        </div>
                        <Button
                          variant="link"
                          className="category__link me-auto p-0 text-decoration-none"
                        >
                          <div className="category__img-wrap d-flex align-items-center justify-content-center">
                            <img
                              className="img-fluid"
                              src={helper.CampaignAdminLogoPath + item.itemDetails?.organizationDetails?.logo}
                              alt=""
                            />
                          </div>
                        </Button>
                      </div>
                      <div className="d-none d-sm-block billing__buttons d-flex align-items-center">
                        {
                          item.itemDetails?.tax &&

                          <span className="product__type product__type-tax icon icon__solid-900" style={{ fontSize: "x-large" }}>
                            <FontAwesomeIcon icon={solid("calculator-simple")} />
                          </span>
                        }
                        {
                          item.fulfilDetails.length > 0 && item.fulfilDetails[0]?.receipt &&


                          <Button
                            variant="link"
                            className="category__link p-1 text-decoration-none"
                          >
                            <FontAwesomeIcon
                              icon={solid("receipt")}
                              className="fs-3 text-success"
                            />
                          </Button>
                        }
                        {
                          item.itemDetails.postTag &&
                          <Button
                            variant="link"
                            className="category__link p-1 text-decoration-none"
                          >

                            <FontAwesomeIcon
                              icon={solid("tag")}
                              className="fs-3 text-primary"
                            />


                          </Button>
                        }
                        {
                          item.fulfilDetails.length > 0 && item.fulfilDetails[0]?.video &&

                          <Button
                            variant="link"
                            className="category__link p-1 text-decoration-none"
                          >
                            <FontAwesomeIcon
                              icon={solid("clapperboard-play")}
                              className="fs-3 text-info"
                            />
                          </Button>
                        }
                      </div>
                    </div>
                  </div>
                </li>
              )

            })
            :
            <li className="table__list-item p-2 fw-bold d-flex justify-content-center">No entries to show</li>
          }

        </ul>

        <div className="mt-5 d-flex justify-content-center mb-5">

          {props.totalPages > 1 ?
            < Stack spacing={2} >
              <Pagination pageSize={15} count={props.totalPages} color="primary" shape="rounded" page={props.pageNo} onChange={props.handleClick} />
            </Stack>
            : <></>}
        </div>
      </div>
    </>
  );
};

export default ItemsTable;
