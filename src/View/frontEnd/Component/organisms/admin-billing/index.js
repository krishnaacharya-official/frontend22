import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button } from "react-bootstrap";

// import { ToggleSwitch, Avatar } from "@components/atoms"
import Avatar from "../../atoms/avatar";
import ToggleSwitch from "../../atoms/toggle-switch";

import "./style.scss";

const AdminBilling = () => {
  return (
    <div className="mw-600">
      <div className="mb-5">
        <div className="flex__1 mb-3">
          <h4 className="fw-bolder">Premium Plan</h4>
          <div className="text-subtext">Your current account plan:</div>
        </div>

        <Button variant="info" className="rounded-pill ms-auto">
          Free Plan <FontAwesomeIcon icon={solid("cloud")} className="ms-1" />
        </Button>
      </div>

      <div className="mb-5">
        <div className="flex__1 mb-3">
          <h4 className="fw-bolder">Payment Schedule</h4>
          <div className="text-subtext">
            Choose how often your unlimited donations are disbursed to your EFT
            account
          </div>
        </div>

        <ul className="mb-0 list-unstyled schedule__list">
          <li className="list__item d-flex align-items-center py-2">
            <ToggleSwitch />
            <span className="text-light ms-2">Weekly</span>
          </li>
          <li className="list__item d-flex align-items-center py-2">
            <ToggleSwitch />
            <span className="text-light ms-2">Monthly</span>
          </li>
        </ul>
      </div>

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
        <div className="billing__list mb-3">
          <div className="billing__item p-2 border-bottom border-bottom-sm-none">
            <div className="billing__content d-sm-flex align-items-center">
              <div className="flex__1 d-flex d-sm-flex-block align-items-center mb-2 mb-sm-0">
                <Avatar
                  size={62}
                  avatarUrl="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5f4ab31be9fe7d7453a60b1f_user.svg"
                  border={0}
                  shadow={false}
                  className="admin__avatar mr-12p"
                />
                <div className="admin__billing__value flex__1">
                  <div className="text-danger fw-bold fs-5 mb-3p">- $ 65</div>
                  <div className="fw-bold text-subtext fs-8">9/17/2018</div>
                </div>
                <div className="admin__billing__details pr-3 ms-2 flex__1">
                  <div className="fw-bold mb-3p">Fresh Waters</div>
                  <div className="text-subtext">
                    <FontAwesomeIcon icon={solid("heart")} className="mr-3p" />
                    Donate
                  </div>
                </div>
              </div>

              <div className="admin__billing__tag">
                <div className="billing__payment">
                  <div className="billing__icon ml-12p mr-12p">
                    <img
                      width="26"
                      height="26"
                      src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5b5e656493af1e0441cd892a_mc_vrt_pos.svg"
                      alt=""
                    />
                  </div>
                  <div className="billing__card fs-7">
                    <div>Mastercard</div>
                    <div className="linked__date">7709</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="billing__item p-2 border-bottom border-bottom-sm-none">
            <div className="billing__content d-sm-flex align-items-center">
              <div className="flex__1 d-flex d-sm-flex-block align-items-center mb-2 mb-sm-0">
                <Avatar
                  size={62}
                  avatarUrl="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5f4ab31be9fe7d7453a60b1f_user.svg"
                  border={0}
                  shadow={false}
                  className="admin__avatar mr-12p"
                />
                <div className="admin__billing__value flex__1">
                  <div className="text-danger fw-bold fs-5 mb-3p">- $ 65</div>
                  <div className="fw-bold text-subtext fs-8">9/17/2018</div>
                </div>
                <div className="admin__billing__details pr-3 ms-2 flex__1">
                  <div className="fw-bold mb-3p">Fresh Waters</div>
                  <div className="text-subtext">
                    <FontAwesomeIcon icon={solid("heart")} className="mr-3p" />
                    Donate
                  </div>
                </div>
              </div>

              <div className="admin__billing__tag">
                <div className="billing__payment">
                  <div className="billing__icon ml-12p mr-12p">
                    <img
                      width="26"
                      height="26"
                      src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5b5e656493af1e0441cd892a_mc_vrt_pos.svg"
                      alt=""
                    />
                  </div>
                  <div className="billing__card fs-7">
                    <div>Mastercard</div>
                    <div className="linked__date">7709</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="more__bills mt-3">
            <Button variant="info" className="fs-6 pt-12p pb-12p w-100">
              Load More . . .
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBilling;
