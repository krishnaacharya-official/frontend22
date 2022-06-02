import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

// import Avatar from "@components/atoms/avatar";
// import AvatarImg from "@assets/images/avatar.jpeg";
// import ListItemImg from "@components/atoms/list-item-img";
import "./style.scss";

import Avatar from "../../atoms/avatar";
import AvatarImg from "../../../../../assets/images/avatar.jpeg"
import ListItemImg from "../../atoms/list-item-img";
import helper,{priceFormat} from "../../../../../Common/Helper";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import moment from "moment";
import { Link } from "react-router-dom";

const ActivityTable = (props) => {
  let activityList = props.activityList

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
        </div>
        <ul className="list-unstyled mb-0 list__table-list" style={{ maxHeight:activityList.length > 0 ? "600px":"", minHeight:activityList.length > 0?  "600px":"" }}>
          {
            activityList.length > 0 ?
              activityList.map((list, i) => {
                // console.log(list)
                return (
                  <li className="table__list-item p-2">
                    <div className="d-sm-flex align-items-center flex-grow-1">
                      <div className="d-flex align-items-center me-sm-2 flex__1">
                        <div className="admin__billing-value ms-2 ms-sm-0 me-sm-2">
                          <div className="text-success fw-bold fs-5">{list.type === 'Bought' || list.type === 'Donate' ? (list.currencySymbol?list.currencySymbol :"$")  +  priceFormat(list.amount) : ""}</div>
                          <div className="text-light fs-8">{moment(list.created_at).fromNow()}</div>
                        </div>
                        <div className="position-relative d-flex">
                          <Avatar
                            size={62}
                            avatarUrl={helper.DonorImagePath + list.userDetails?.image}
                            border={0}
                            shadow={false}
                            className="mr-12p"
                          />
                        </div>
                        <div className="fw-bold flex__1">{list.userDetails?.name}</div>
                      </div>
                      <div className="w-200 d-flex align-items-center ms-sm-2">
                        {
                          list.type === 'Bought' ?
                            <>
                              <span className="p-2 mr-12p">
                                <img
                                  width={36}
                                  alt=""
                                  className="img-fluid"
                                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5e4c2ff23144db148fd45b43_wallet.svg"
                                />
                              </span>
                              <div className="">
                                <span className="text-dark fw-bold">Donation</span>
                                {/* <div className="d-flex text-light fs-7">
                                  <FontAwesomeIcon
                                    icon={regular("calendar-clock")}
                                    className="small me-1 fs-6"
                                  />
                                  / Month
                                </div> */}
                              </div>
                            </>
                            : list.type === 'Share' ?
                              <>
                                <span className="p-2 mr-12p">
                                  <img
                                    width={36}
                                    alt=""
                                    className="img-fluid"
                                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ef6176ab4ea47d76444346c_speech-bubble.svg"
                                  />
                                </span>
                                <div className="">
                                  <span className="text-dark fw-bold">Followed</span>
                                </div>
                              </>

                              : list.type === 'Followed' ?
                                <>
                                  <span className="p-2 mr-12p">
                                    <img
                                      width={36}
                                      alt=""
                                      className="img-fluid"
                                      src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ef6176ab4ea47d76444346c_speech-bubble.svg"
                                    />
                                  </span>
                                  <div className="">
                                    <span className="text-dark fw-bold">Followed</span>
                                  </div>
                                </>
                                : list.type === 'Donate'?
                                <>
                                <span className="p-2 mr-12p">
                                  <img
                                    width={36}
                                    alt=""
                                    className="img-fluid"
                                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/60088347cb80b5186f9e1ead_donate.svg"
                                  />
                                </span>
                                <div className="">
                                  <span className="text-dark fw-bold">Donation</span>
                                  {/* <div className="d-flex text-light fs-7">
                                    <FontAwesomeIcon
                                      icon={regular("calendar-clock")}
                                      className="small me-1 fs-6"
                                    />
                                    / Month
                                  </div> */}
                                </div>
                              </>
                              :<></>
                              }
                      </div>
                    </div>
                  </li>
                )
              })
              : <li className="table__list-item p-2 fw-bold d-flex justify-content-center">No entries to show</li>
          }

          {/* <li className="table__list-item p-2">
            <div className="d-sm-flex align-items-center flex-grow-1">
              <div className="d-flex align-items-center me-sm-2 flex__1">
                <div className="admin__billing-value ms-2 ms-sm-0 me-sm-2">
                  <div className="text-light fs-8">about a year ago</div>
                </div>
                <div className="position-relative d-flex">
                  <Avatar
                    size={62}
                    avatarUrl='https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5f4ab31be9fe7d7453a60b1f_user.svg'
                    border={0}
                    shadow={false}
                    className="mr-12p"
                  />
                </div>
                <div className="fw-bold flex__1">Trevor Gomer</div>
              </div>
              <div className="w-200 d-flex align-items-center ms-sm-2">
                <span className="p-2 mr-12p">
                  <img
                    width={36}
                    alt=""
                    className="img-fluid"
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ef61ef15babc48a50bd2bd5_share.svg"
                  />
                </span>
                <div className="">
                  <span className="text-dark fw-bold">Shared</span>
                </div>
              </div>
            </div>
          </li>
          <li className="table__list-item p-2">
            <div className="d-sm-flex align-items-center flex-grow-1">
              <div className="d-flex align-items-center me-sm-2 flex__1">
                <div className="admin__billing-value ms-2 ms-sm-0 me-sm-2">
                  <div className="text-light fs-8">about a year ago</div>
                </div>
                <div className="position-relative d-flex">
                  <Avatar
                    size={62}
                    avatarUrl={AvatarImg}
                    border={0}
                    shadow={false}
                    className="mr-12p"
                  />
                </div>
                <div className="fw-bold flex__1">Jessica Hopper</div>
              </div>
              <div className="w-200 d-flex align-items-center ms-sm-2">
                <span className="p-2 mr-12p">
                  <img
                    width={36}
                    alt=""
                    className="img-fluid"
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ef6176ab4ea47d76444346c_speech-bubble.svg"
                  />
                </span>
                <div className="">
                  <span className="text-dark fw-bold">Followed</span>
                </div>
              </div>
            </div>
          </li> */}
        </ul>

        {props.totalPages > 1 ? <div className="mt-5 d-flex justify-content-center mb-5">

        
            < Stack spacing={2} >
              <Pagination count={props.totalPages} variant="outlined" color="primary" page={props.pageNo} onChange={props.handleClick} />
            </Stack>
         
        </div>   : <></>}
      </div>
    </>
  );
};

export default ActivityTable;
