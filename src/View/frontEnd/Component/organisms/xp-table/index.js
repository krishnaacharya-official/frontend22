import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

import ListItemImg from "../../atoms/list-item-img";
import "./style.scss";
import moment from "moment";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const XpTable = (props) => {
  let ItemList = props.ItemList


  function getData(type, xp) {
    let Res;
    switch (type) {
      case 'DONATED':
        Res = (<div className="order-1 order-sm-2 d-flex align-items-center text-dark me-sm-3 flex__1">
          <div className="position-relative">
            <ListItemImg imgSrc="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/60088347cb80b5186f9e1ead_donate.svg" />
          </div>

          <div className="d-sm-flex align-items-center flex__1 ms-2">
            <div className="fw-bold fs-5 billing__name">Donated</div>
            <span className="text-light fw-semibold flex__1">
              <FontAwesomeIcon
                icon={regular("heart")}
                className="small me-1"
              />Donated
            </span>
          </div>
          <div className="d-flex align-items-center">
            <span className="text-success fw-bold fs-5">{xp} xp</span>
          </div>
        </div>)
        break;
      case 'BOUGHT':
        Res = (<div className="order-1 order-sm-2 d-flex align-items-center text-dark me-sm-3 flex__1">
          <div className="position-relative">
            <ListItemImg imgSrc="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5e4c2ff23144db148fd45b43_wallet.svg" />
          </div>

          <div className="d-sm-flex align-items-center flex__1 ms-2">
            <div className="fw-bold fs-5 billing__name">Bought</div>
            <span className="text-light fw-semibold flex__1">
              <FontAwesomeIcon
                icon={regular("bag-shopping")}
                className="small me-1"
              />Bought
            </span>
          </div>
          <div className="d-flex align-items-center">
            <span className="text-success fw-bold fs-5">{xp} xp</span>
          </div>
        </div>)
        break;

      default:


    }
    return Res;
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
            onClick={() => props.handleSortingChange('xp')}
          >
            XP Earned
            {
              props.sortField === 'xp' && props.order === 'asc' ?

                <FontAwesomeIcon
                  icon={solid("angle-up")}
                  className="small ml-6p"
                /> :
                <FontAwesomeIcon
                  icon={solid("angle-down")}
                  className="small ml-6p"
                />
            }

          </Button>
        </div>
        <ul className="list-unstyled mb-0 list__table-list" style={{ maxHeight: "500px", minHeight: "500px" }}>

          {
            ItemList.length > 0 ?
              ItemList.map((item, i) => {
                return (
                  <li className="table__list-item p-2">
                    <div className="d-flex align-items-center flex-grow-1">
                      <div className="order-2 order-sm-1 ms-2 ms-sm-0 me-sm-2">
                        {/* <div className="text-info fw-bold fs-5">{item.xp} XP</div> */}
                        <div className="text-light fs-8">{moment(item.created_at).fromNow()}</div>
                      </div>
                      {getData(item.type, item.xp)}

                      {/* <div className="order-1 order-sm-2 d-flex align-items-center text-dark me-sm-3 flex__1">
                        <div className="position-relative">
                          <ListItemImg imgSrc="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ef61d975395ccef43cbb71f_top.svg" />
                        </div>

                        <div className="d-sm-flex align-items-center flex__1 ms-2">
                          <div className="fw-bold fs-5 billing__name">Top Donor</div>
                          <span className="text-light fw-semibold flex__1">
                            <FontAwesomeIcon
                              icon={regular("heart")}
                              className="small me-1"
                            />Donated
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="text-success fw-bold fs-5">$400</span>
                        </div>
                      </div> */}

                    </div>
                  </li>
                )
              })


              // <li className="table__list-item p-2">
              //   <div className="d-flex align-items-center flex-grow-1">
              //     <div className="order-2 order-sm-1 ms-2 ms-sm-0 me-sm-2">
              //       <div className="text-info fw-bold fs-5">90 XP</div>
              //       <div className="text-light fs-8">11 months ago</div>
              //     </div>
              //     <div className="order-1 order-sm-2 d-flex align-items-center text-dark me-sm-3 flex__1">
              //       <div className="position-relative">
              //         <ListItemImg imgSrc="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ef61ef15babc48a50bd2bd5_share.svg" />
              //       </div>
              //       <div className="d-sm-flex align-items-center flex__1 ms-2">
              //         <div className="fw-bold fs-5 billing__name">Social Chain</div>
              //         <span className="text-light fw-semibold flex__1">
              //           <FontAwesomeIcon
              //             icon={regular("shopping-bag")}
              //             className="small me-1"
              //           />Bought 7
              //         </span>
              //       </div>
              //       <div className="d-flex align-items-center">
              //         <span className="text-success fw-bold fs-5">$400</span>
              //       </div>
              //     </div>
              //   </div>
              // </li>
              // <li className="table__list-item p-2">
              //   <div className="d-flex align-items-center flex-grow-1">
              //     <div className="order-2 order-sm-1 ms-2 ms-sm-0 me-sm-2">
              //       <div className="text-info fw-bold fs-5">90 XP</div>
              //       <div className="text-light fs-8">11 months ago</div>
              //     </div>
              //     <div className="order-1 order-sm-2 d-flex align-items-center text-dark me-sm-3 flex__1">
              //       <div className="position-relative">
              //         <ListItemImg imgSrc="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ef61d975395ccef43cbb71f_top.svg" />
              //       </div>
              //       <div className="d-sm-flex align-items-center flex__1 ms-2">
              //         <div className="fw-bold fs-5 billing__name">Top Donor</div>
              //         <span className="text-light fw-semibold flex__1">
              //           <FontAwesomeIcon
              //             icon={regular("heart")}
              //             className="small me-1"
              //           />Donated
              //         </span>
              //       </div>
              //       <div className="d-flex align-items-center">
              //         <span className="text-success fw-bold fs-5">$400</span>
              //       </div>
              //     </div>
              //   </div>
              // </li>
              :
              <li className="table__list-item p-2 fw-bold d-flex justify-content-center">No entries to show</li>}
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

export default XpTable;
