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

const ActivityTable = () => {
  return (
    <>
      <div className="list__table">
        <div className="list__table-sort d-flex justify-content-sort">
          <div className="flex__1">
            <Button
              variant="link"
              className="btn__sort px-0 text-decoration-none"
            >
              Date
              <FontAwesomeIcon
                icon={solid("angle-up")}
                className="small ml-6p"
              />
            </Button>
          </div>
        </div>
        <ul className="list-unstyled mb-0 list__table-list">
          <li className="table__list-item p-2">
            <div className="d-sm-flex align-items-center flex-grow-1">
              <div className="d-flex align-items-center me-sm-2 flex__1">
                <div className="admin__billing-value ms-2 ms-sm-0 me-sm-2">
                  <div className="text-success fw-bold fs-5">$5</div>
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
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/60088347cb80b5186f9e1ead_donate.svg"
                  />
                </span>
                <div className="">
                  <span className="text-dark fw-bold">Donation</span>
                  <div className="d-flex text-light fs-7">
                    <FontAwesomeIcon
                      icon={regular("calendar-clock")}
                      className="small me-1 fs-6"
                    />
                    / Month
                  </div>
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
          </li>
        </ul>
      </div>
    </>
  );
};

export default ActivityTable;
