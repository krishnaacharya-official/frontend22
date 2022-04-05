import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

import ListItemImg from "../../atoms/list-item-img";
import "./style.scss";

const XpTable = () => {
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
          <Button
            variant="link"
            className="btn__sort px-0 text-decoration-none"
          >
            XP Earned
            <FontAwesomeIcon
              icon={solid("angle-down")}
              className="small ml-6p"
            />
          </Button>
        </div>
        <ul className="list-unstyled mb-0 list__table-list">
          <li className="table__list-item p-2">
            <div className="d-flex align-items-center flex-grow-1">
              <div className="order-2 order-sm-1 ms-2 ms-sm-0 me-sm-2">
                <div className="text-info fw-bold fs-5">90 XP</div>
                <div className="text-light fs-8">11 months ago</div>
              </div>
              <div className="order-1 order-sm-2 d-flex align-items-center text-dark me-sm-3 flex__1">
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
              </div>
            </div>
          </li>
          <li className="table__list-item p-2">
            <div className="d-flex align-items-center flex-grow-1">
              <div className="order-2 order-sm-1 ms-2 ms-sm-0 me-sm-2">
                <div className="text-info fw-bold fs-5">90 XP</div>
                <div className="text-light fs-8">11 months ago</div>
              </div>
              <div className="order-1 order-sm-2 d-flex align-items-center text-dark me-sm-3 flex__1">
                <div className="position-relative">
                  <ListItemImg imgSrc="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ef61ef15babc48a50bd2bd5_share.svg" />
                </div>
                <div className="d-sm-flex align-items-center flex__1 ms-2">
                <div className="fw-bold fs-5 billing__name">Social Chain</div>
                <span className="text-light fw-semibold flex__1">
                  <FontAwesomeIcon
                    icon={regular("shopping-bag")}
                    className="small me-1"
                  />Bought 7
                </span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="text-success fw-bold fs-5">$400</span>
                </div>
              </div>
            </div>
          </li>
          <li className="table__list-item p-2">
            <div className="d-flex align-items-center flex-grow-1">
              <div className="order-2 order-sm-1 ms-2 ms-sm-0 me-sm-2">
                <div className="text-info fw-bold fs-5">90 XP</div>
                <div className="text-light fs-8">11 months ago</div>
              </div>
              <div className="order-1 order-sm-2 d-flex align-items-center text-dark me-sm-3 flex__1">
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
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default XpTable;
