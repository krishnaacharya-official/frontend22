import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState, useEffect } from "react";
import ListItemImg from "../../atoms/list-item-img";
import "./style.scss";
import moment from "moment";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import helper, { priceFormat } from "../../../../../Common/Helper";
import { List } from "@mui/material";
import CSVExportBtn from '../../../CSVExportBtn';


const TaxTable = (props) => {


  const totalVal = (data) => {
    let tempSub = []
    let sum
    if (data.length > 0) {
      data.map((i, k) => {
        tempSub.push(i.amount)
      })
      sum = tempSub.reduce(function (a, b) { return a + b; }, 0);
    } else {
      sum = 0
    }
    return sum;
  }

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
            onClick={() => props.handleSortingChange('receipt')}

          >
            Status
            {
              props.sortField === 'receipt' && props.order === 'asc' ?
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
        <ul className="list-unstyled mb-0 list__table-list">

          {
            props.taxList.length > 0 ?
              props.taxList.map((item, i) => {
                // console.log(item)
                return (
                  <>
                    <li className="table__list-item p-2">
                      <div className="d-sm-flex align-items-center flex-grow-1">
                        <div className="d-flex align-items-center flex__1 mb-2">
                          <div className="order-2 order-sm-1 ms-2 ms-sm-0 me-sm-2">
                            <div className="text-success fw-bold fs-5">{item[0].currencySymbol}{totalVal(item)}</div>
                            <div className="text-light fs-8">{moment(item[0].created_at).fromNow()}</div>
                          </div>
                          <div className="order-1 order-sm-2 d-flex align-items-center text-dark flex__1">
                            <div className="position-relative">
                              <ListItemImg imgSrc={helper.CampaignAdminLogoPath + item[0].organizationDetails?.logo} className='charity_avatar_bg' />
                            </div>
                            <div className="d-sm-flex align-items-center flex__1 ms-2">
                              <div style={{ maxWidth: "300px", minWidth: "300px" }}>
                                <div className="fw-bold fs-5 billing__name mb-6p">
                                  {item[0].organizationDetails?.name}
                                </div>
                                {/* <div className="text-light">#{item.uniqueTransactionId ? item.uniqueTransactionId : item.orderId}</div> */}
                              </div>




                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center ">
                          {/* <Button
                          variant="ldanger"
                          className="text-white fs-7 rounded-pill flex-grow-1"
                        >
                          Cancel
                        </Button> */}

                          {
                            item.length === 1 &&


                            <div className="d-flex align-items-center flex__1 mb-1 mb-sm-0">
                              <div className="pe-1 p-sm-2 mr-12p">
                                <img
                                  loading="lazy"
                                  width={36}
                                  // src={helper.CampaignProductImagePath + item[0].orderItemDetails?.productImage}
                                  src={item[0].type === 'Purchased' ? helper.CampaignProductImagePath + item[0]?.orderItemDetails?.productImage : 'https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/60088347cb80b5186f9e1ead_donate.svg'}

                                  alt=""
                                />
                              </div>
                              <div>
                                <div>
                                  <Button variant="link" className="text-dark px-0 py-3p">
                                    {/* {item[0].orderItemDetails?.productName} */}
                                    {item[0].type === 'Purchased' ? item[0].orderItemDetails?.productName : 'Donation'}
                                  </Button>
                                </div>
                                <div className="text-light fs-7">
                                  {/* <FontAwesomeIcon
                                    icon={regular("wallet")}
                                    className="mr-3p"
                                  />
                                  Bought {item[0].orderItemDetails?.quantity} */}
                                  {
                                    item[0].type === 'Purchased' ?
                                      <>
                                        <FontAwesomeIcon
                                          icon={regular("wallet")}
                                          className="mr-3p"
                                        />
                                        Bought {item[0].orderItemDetails?.quantity}
                                      </>

                                      :
                                      <>
                                        <FontAwesomeIcon
                                          icon={regular("heart")}
                                          className="mr-3p"
                                        />
                                        Donated
                                      </>

                                  }
                                </div>
                              </div>
                            </div>


                          }




                          {
                            item.receipt ?
                              <a href={helper.recieptPath + item.receipt} download
                                variant="info"
                                className="text-white fs-7 rounded-pill flex-grow-1 btn btn-info"
                              >
                                Download
                              </a>
                              :
                              <Button
                                variant="link"
                                className="text-decoration-none ms-2 p-0"
                              >

                                <FontAwesomeIcon
                                  icon={solid("clock")}
                                  className="fs-3 text-warning"
                                />
                              </Button>
                          }



                        </div>
                      </div>
                    </li>
                    {
                      // item.type === 'Purchased' &&
                      <>
                        <div className="container-fluid">
                          {
                            item.
                              length > 1 &&
                            item.map((i1, k) => {
                              let Aimg = i1.type === 'Purchased' ? helper.CampaignProductImagePath + i1?.orderItemDetails?.productImage : 'https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/60088347cb80b5186f9e1ead_donate.svg'
                              // if (item[0].type === 'Purchased') {
                              let Name = i1.type === 'Purchased' ? i1.orderItemDetails?.productName : 'Donation'


                              return (
                                <>
                                  <hr />
                                  <li className="table__list-item p-2">
                                    <div className="d-sm-flex align-items-center flex-grow-1">
                                      <div className="d-flex align-items-center me-sm-2 mb-1 mb-sm-0">
                                        <div className="admin__billing-value ms-2 ms-sm-0 me-sm-2">
                                          <div className="text-success fw-bold fs-5">{i1.currencySymbol}{i1.amount}</div>
                                          <div className="text-light fs-8">{moment(i1.created_at).fromNow()}</div>
                                        </div>

                                      </div>
                                      <div className="d-flex align-items-center flex__1 mb-1 mb-sm-0">
                                        <div className="pe-1 p-sm-2 mr-12p">
                                          <img
                                            loading="lazy"
                                            width={36}
                                            src={Aimg}
                                            alt=""
                                          />
                                        </div>
                                        <div>
                                          <div>
                                            <Button variant="link" className="text-dark px-0 py-3p">
                                              {/* {i1?.orderItemDetails?.productName} */}
                                              {Name}
                                            </Button>
                                          </div>
                                          <div className="text-light fs-7">
                                            {/* <FontAwesomeIcon
                                              icon={regular("wallet")}
                                              className="mr-3p"
                                            />
                                            Bought {i1?.orderItemDetails?.quantity} */}
                                            {
                                              i1.type === 'Purchased' ?
                                                <>
                                                  <FontAwesomeIcon
                                                    icon={regular("wallet")}
                                                    className="mr-3p"
                                                  />
                                                  Bought {i1.orderItemDetails?.quantity}
                                                </>

                                                :
                                                <>
                                                  <FontAwesomeIcon
                                                    icon={regular("heart")}
                                                    className="mr-3p"
                                                  />
                                                  Donated
                                                </>

                                            }
                                          </div>


                                        </div>

                                      </div>

                                    </div>

                                  </li>

                                </>
                              )
                              // }

                            })
                          }

                        </div>

                        <hr />
                      </>

                    }
                  </>
                )
              })

              :
              <div className="d-sm-flex align-items-center justify-content-center flex-grow-1">
                <li className="table__list-item p-2">No Records to Display</li>
              </div>
          }

          {/* <li className="table__list-item p-2">
            <div className="d-sm-flex align-items-center flex-grow-1">
              <div className="d-flex align-items-center flex__1 mb-2">
                <div className="order-2 order-sm-1 ms-2 ms-sm-0 me-sm-2">
                  <div className="text-success fw-bold fs-5">$10</div>
                  <div className="text-light fs-8">11 months ago</div>
                </div>
                <div className="order-1 order-sm-2 d-flex align-items-center text-dark flex__1">
                  <div className="position-relative">
                    <ListItemImg imgSrc="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ef61d975395ccef43cbb71f_top.svg" />
                  </div>
                  <div className="d-sm-flex align-items-center flex__1 ms-2">
                    <div>
                      <div className="fw-bold fs-5 billing__name mb-6p">
                        Top Donor
                      </div>
                      <div className="text-light">#158329</div>
                    </div>
                    <span className="text-light fw-semibold flex__1">
                      <FontAwesomeIcon
                        icon={regular("heart")}
                        className="small me-1"
                      />
                      Donated
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <Button
                  variant="info"
                  className="text-white fs-7 rounded-pill flex-grow-1"
                >
                  Download
                </Button>
              </div>
            </div>
          </li> */}
        </ul>
        {props.totalPages > 1 &&
          <div className="mt-5 d-flex justify-content-center mb-5">

            {props.totalPages > 1 ?
              < Stack spacing={2} >
                <Pagination count={props.totalPages} variant="outlined" color="primary" page={props.pageNo} onChange={props.handleClick} />
              </Stack>
              : <></>}
          </div>}

      </div>

      {
        props.taxList.length > 0 &&
        <div className="mt-5  mb-5">
          <CSVExportBtn
            headers={props.headers}
            csvData={props.csvData}
            label='Export'
            prifix='_user_tax'
          />
        </div>
      }
    </>
  );
};

export default TaxTable;
