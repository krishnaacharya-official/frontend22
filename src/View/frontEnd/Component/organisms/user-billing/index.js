import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button } from "react-bootstrap";

import "./style.scss";

const UserBilling = () => {
  return (
    <>
      <div className="mb-5">
        <div className="d-sm-flex align-items-center mb-5 mb-sm-3">
          <div className="flex__1 mb-2">
            <h4 className="fw-bolder">Payment History</h4>
            <div className="text-subtext">
              All transactions related to your Admin account
            </div>
          </div>
          <Button variant="info" size="lg" className="btn__export">
            <span className="fw-bold fs-6">Export</span>
          </Button>
        </div>
        <div className="billing__list mw-600">
          <div className="billing__item p-2 mb-3">
            <div className="billing__content d-flex align-items-center">
              <div className="billing__bottom">
                <div className="billing__value">
                  <div className="text-danger fw-bold fs-5 mb-3p">- $ 65</div>
                  <div className="fw-bold text-subtext fs-8">9/17/2018</div>
                </div>
                <div className="d-sm-none order__link text-subtext mt-6p me-sm-3">
                  #147289
                </div>
              </div>

              <div className="billing__details pr-3 ms-sm-2 flex__1">
                <div className="fw-bold mb-3p">Fresh Waters</div>
                <div className="text-subtext">
                  <FontAwesomeIcon icon={solid("heart")} className="mr-3p" />
                  Donate
                </div>
              </div>

              <div className="billing__tag">
                <div className="billing__payment">
                  <div className="billing__icon ml-12p mr-12p">
                    <img
                      width="26"
                      height="26"
                      src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5b5e656493af1e0441cd892a_mc_vrt_pos.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="billing__card fs-7">
                    <div>Mastercard</div>
                    <div className="linked__date">7709</div>
                  </div>
                </div>
              </div>

              <div className="d-none d-sm-block order__link text-subtext mt-6p me-3">
                #147289
              </div>
            </div>
          </div>

          <div className="billing__item p-2 mb-3">
            <div className="billing__content d-flex align-items-center">
              <div className="billing__bottom">
                <div className="billing__value">
                  <div className="text-success fw-bold fs-5 mb-3p">+ $ 65</div>
                  <div className="fw-bold text-subtext fs-8">9/17/2018</div>
                </div>
                <div className="d-sm-none order__link text-subtext mt-6p me-sm-3">
                  #147289
                </div>
              </div>

              <div className="billing__details pr-3 ms-sm-2 flex__1">
                <div className="fw-bold mb-3p">Alter Eco</div>
                <div className="text-subtext">
                  <FontAwesomeIcon icon={solid("heart")} className="mr-3p" />
                  Donate
                </div>
              </div>

              <div className="billing__tag">
                <div className="billing__payment">
                  <div className="billing__icon ml-12p mr-12p">
                    <img
                      width="26"
                      height="26"
                      src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620e5d4c36e4c982f37e9894_Bitcoin.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="billing__card fs-7">
                    <div>BTC</div>
                  </div>
                </div>
              </div>

              <div className="d-none d-sm-block order__link text-subtext mt-6p me-3">
                #147289
              </div>
            </div>
          </div>

          <div className="more__bills">
            <Button variant="info" className="fs-6 pt-12p pb-12p w-100">
              Load More . . .
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBilling;