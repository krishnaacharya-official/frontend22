import { Button, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// import ListItemImg from "@components/atoms/list-item-img";
import ListItemImg from "../../atoms/list-item-img";
import "./style.scss";

const ItemsTable = (props) => {
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
            <div className="d-xl-flex align-items-center flex-grow-1">
              <Button
                variant="link"
                onClick={props.onItemClick}
                className="d-flex align-items-center text-dark me-sm-3 p-0 text-decoration-none text-start"
              >
                <div className="me-2">
                  <div className="text-success fw-bold fs-5">$175</div>
                  <div className="text-light fs-8">11 months ago</div>
                </div>
                <div className="position-relative">
                  <ListItemImg imgSrc="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c261c9a157530d68c2861_rustic-reclaimed-dining-chair-front-view.png" />
                  <span className="badge list__img-badge">1</span>
                </div>
                <div className="ms-2">
                  <div className="fw-bolder fs-5 mb-3p">Wood Chairs</div>
                  <div className="fs-7 text-light">Callum's Wood Finishing</div>
                </div>
              </Button>
              <div className="d-flex align-items-center flex__1">
                <div className="d-flex align-items-center flex__1">
                  <div className="d-flex align-items-center progress__wrap me-2 flex__1">
                    <span className="qty__tag pl-9p pb-3p pr-9p pt-3p me-1 fw-bold text-light">
                      7/10
                    </span>
                    <ProgressBar
                      variant="success"
                      now={30}
                      className="flex-grow-1"
                    />
                    <span className="text-light ms-1 fw-bold">30%</span>
                  </div>
                  <Button
                    variant="link"
                    className="category__link me-auto p-0 text-decoration-none"
                  >
                    <div className="category__img-wrap d-flex align-items-center justify-content-center">
                      <img
                        className="img-fluid"
                        src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcb0c93fcd2a0d1b6f822d_Red_Cross_icon.svg"
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
                  <Button
                    variant="link"
                    className="category__link p-1 text-decoration-none"
                  >
                    <FontAwesomeIcon
                      icon={solid("tag")}
                      className="fs-3 text-primary"
                    />
                  </Button>
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
          <li className="table__list-item p-2">
            <div className="d-xl-flex align-items-center flex-grow-1">
              <Button
                variant="link"
                onClick={props.onItemClick}
                className="d-flex align-items-center text-dark me-sm-3 p-0 text-decoration-none text-start"
              >
                <div className="me-2">
                  <div className="text-success fw-bold fs-5">$175</div>
                  <div className="text-light fs-8">11 months ago</div>
                </div>
                <div className="position-relative">
                  <ListItemImg imgSrc="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c261c9a157530d68c2861_rustic-reclaimed-dining-chair-front-view.png" />
                  <span className="badge list__img-badge">1</span>
                </div>
                <div className="ms-2">
                  <div className="fw-bolder fs-5 mb-3p">Wood Chairs</div>
                  <div className="fs-7 text-light">Callum's Wood Finishing</div>
                </div>
              </Button>
              <div className="d-flex align-items-center flex__1">
                <div className="d-flex align-items-center flex__1">
                  <div className="d-flex align-items-center progress__wrap me-2 flex__1">
                    <span className="qty__tag pl-9p pb-3p pr-9p pt-3p me-1 fw-bold text-light">
                      7/10
                    </span>
                    <ProgressBar
                      variant="success"
                      now={30}
                      className="flex-grow-1"
                    />
                    <span className="text-light ms-1 fw-bold">30%</span>
                  </div>
                  <Button
                    variant="link"
                    className="category__link me-auto p-0 text-decoration-none"
                  >
                    <div className="category__img-wrap d-flex align-items-center justify-content-center">
                      <img
                        className="img-fluid"
                        src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcb0c93fcd2a0d1b6f822d_Red_Cross_icon.svg"
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
                  <Button
                    variant="link"
                    className="category__link p-1 text-decoration-none"
                  >
                    <FontAwesomeIcon
                      icon={solid("tag")}
                      className="fs-3 text-primary"
                    />
                  </Button>
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
        </ul>
      </div>
    </>
  );
};

export default ItemsTable;
