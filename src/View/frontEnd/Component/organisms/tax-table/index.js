import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

import ListItemImg from "../../atoms/list-item-img";
import "./style.scss";

const TaxTable = () => {
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
            Status
            <FontAwesomeIcon
              icon={solid("angle-down")}
              className="small ml-6p"
            />
          </Button>
        </div>
        <ul className="list-unstyled mb-0 list__table-list">
          <li className="table__list-item p-2">
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
                  variant="ldanger"
                  className="text-white fs-7 rounded-pill flex-grow-1"
                >
                  Cancel
                </Button>
                <Button
                  variant="link"
                  className="text-decoration-none ms-2 p-0"
                >
                  <FontAwesomeIcon
                    icon={solid("clock")}
                    className="fs-3 text-warning"
                  />
                </Button>
              </div>
            </div>
          </li>
          <li className="table__list-item p-2">
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
          </li>
        </ul>
      </div>
    </>
  );
};

export default TaxTable;
