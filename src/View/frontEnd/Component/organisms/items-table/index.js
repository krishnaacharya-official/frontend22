import { Button, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// import ListItemImg from "@components/atoms/list-item-img";
import ListItemImg from "../../atoms/list-item-img";
import "./style.scss";

import moment from "moment";
import helper from "../../../../../Common/Helper";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const ItemsTable = (props) => {
  let orderItemList = props.orderItemList
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
        <ul className="list-unstyled mb-0 list__table-list" style={{maxHeight:"500px",minHeight:"500px"}}>
          {
            orderItemList.length > 0 &&
            orderItemList.map((item, key) => {
              // console.log(item)
              return (
                <li className="table__list-item p-2" key={key} >
                  <div className="d-xl-flex align-items-center flex-grow-1">
                    <Button
                      variant="link"
                      onClick={() => props.onItemClick(key)}
                      className="d-flex align-items-center text-dark me-sm-3 p-0 text-decoration-none text-start"
                    >
                      <div className="me-2">
                        <div className="text-success fw-bold fs-5">${item?.totalPrice}</div>
                        <div className="text-light fs-8">{moment(item.created_at).fromNow()}</div>
                      </div>
                      <div className="position-relative">
                        <ListItemImg imgSrc={helper.CampaignProductImagePath + item.itemDetails?.image} />
                        <span className="badge list__img-badge" style={{ position: "absolute" }}>{item.quantity}</span>
                      </div>
                      <div className="ms-2">
                        <div className="fw-bolder fs-5 mb-3p" style={{maxWidth:"300px",minWidth:"300px"}}>{item.itemDetails?.headline}</div>
                        <div className="fs-7 text-light">{item.itemDetails?.brand}</div>
                      </div>
                    </Button>
                    <div className="d-flex align-items-center flex__1">
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
                        <Button
                          variant="link"
                          className="category__link p-1 text-decoration-none"
                        >
                          <FontAwesomeIcon
                            icon={solid("receipt")}
                            className="fs-3 text-success"
                          />
                        </Button>
                        {
                          item.postTag &&
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
                        <Button
                          variant="link"
                          className="category__link p-1 text-decoration-none"
                        >
                          <FontAwesomeIcon
                            icon={solid("clapperboard-play")}
                            className="fs-3 text-info"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </li>
              )

            })
          }

        </ul>

        <div className="mt-5 d-flex justify-content-center mb-5">

          {props.totalPages > 1 ?
            < Stack spacing={2} >
              <Pagination count={props.totalPages} variant="outlined" color="primary" page={props.pageNo} onChange={props.handleClick} />
            </Stack>
            : <></>}
        </div>
      </div>
    </>
  );
};

export default ItemsTable;
