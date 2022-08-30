import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

import ListItemImg from "../../atoms/list-item-img";
import "./style.scss";
import moment from "moment";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import helper, { priceFormat } from "../../../../../Common/Helper";

const TaxTable = (props) => {
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
        <ul className="list-unstyled mb-0 list__table-list" style={{ maxHeight: "550px", minHeight: "550px" }}>

          {
            props.taxList.length > 0 ?
              props.taxList.map((item, i) => {
                // console.log(item)
                return (
                  <li className="table__list-item p-2">
                    <div className="d-sm-flex align-items-center flex-grow-1">
                      <div className="d-flex align-items-center flex__1 mb-2">
                        <div className="order-2 order-sm-1 ms-2 ms-sm-0 me-sm-2">
                          <div className="text-success fw-bold fs-5">{item.currencySymbol}{priceFormat(item.amount)}</div>
                          <div className="text-light fs-8">{moment(item.created_at).fromNow()}</div>
                        </div>
                        <div className="order-1 order-sm-2 d-flex align-items-center text-dark flex__1">
                          <div className="position-relative">
                            <ListItemImg imgSrc={helper.CampaignAdminLogoPath + item.organizationDetails.logo} className='charity_avatar_bg' />
                          </div>
                          <div className="d-sm-flex align-items-center flex__1 ms-2">
                            <div style={{ maxWidth: "300px", minWidth: "300px" }}>
                              <div className="fw-bold fs-5 billing__name mb-6p">
                                {item.organizationDetails.name}
                              </div>
                              <div className="text-light">#{item.uniqueTransactionId ? item.uniqueTransactionId : item.orderId}</div>
                            </div>

                            <span className="text-light fw-semibold flex__1">
                              {
                                item.type === 'Purchased' ?
                                  <>
                                    <FontAwesomeIcon
                                      icon={regular("wallet")}
                                      className="small me-1"
                                    />
                                    Purchased
                                  </>
                                  :
                                  <>
                                    <FontAwesomeIcon
                                      icon={regular("heart")}
                                      className="small me-1"
                                    />
                                    Donated
                                  </>
                              }

                            </span>


                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        {/* <Button
                          variant="ldanger"
                          className="text-white fs-7 rounded-pill flex-grow-1"
                        >
                          Cancel
                        </Button> */}

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
    </>
  );
};

export default TaxTable;
