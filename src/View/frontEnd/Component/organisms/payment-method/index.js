import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// import { ListItemImg, ToggleSwitch } from "@components/atoms";

import ListItemImg from "../../atoms/list-item-img";
import ToggleSwitch from "../../atoms/toggle-switch";
import { Link } from "react-router-dom";

import "./style.scss";

const PaymentMethod = () => {
  return (
    <div className="mw-600">
      <div className="mb-5">
        <h4 className="fw-bolder">Saved Payment Methods</h4>
        <div className="text-subtext mb-3">
          Credit Cards you saved when donating
        </div>

        <div className="linked__list d-flex flex-column">
          <div className="linked__item d-flex align-items-center p-1 border">
            <div className="accounts__icon">
              <ListItemImg
                size={75}
                className="bg-white"
                imgSrc="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/62277f679099844cc42cc1d1_5b5e656493af1e0441cd892a_mc_vrt_pos.svg"
              />
            </div>
            <div className=" flex__1 mx-2 text-break">
              <div className="accounts__email fw-bold">Ending in 7709</div>
              <div className="fs-7 mb-3p">Mastercard</div>
              <div className="fs-7 text-subtext">8 / 2019</div>
            </div>
            <Button variant="link" className="text-danger fs-7">
              remove
            </Button>
          </div>

          <div className="linked__item d-flex align-items-center p-1 border">
            <div className="accounts__icon">
              <ListItemImg
                size={75}
                className="rounded-circle"
                imgSrc="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5b5e7b0e93af1ec003cd9a58_paypal-seeklogo.com.svg"
              />
            </div>
            <div className="accounts__email fw-bolder flex__1 mx-2 text-break">
              k************l@gmail.com
            </div>
            <Button variant="link" className="text-danger fs-7">
              remove
            </Button>
          </div>

          <div className="fs-7">
            <FontAwesomeIcon
              icon={regular("info-circle")}
              className="mr-3p text-info"
            />
            <span className="text-light">
              To change your password <Link to='/change-password'>click here</Link>
            </span>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h4 className="fw-bolder">Direct Deposit Accounts</h4>
        <div className="d-flex align-items-center mb-3">
          <span className="text-subtext flex__1">
            Direct Deposit information for contributions from your donors
          </span>
          <Button variant="info">Add Bank</Button>
        </div>

        <div className="linked__list d-flex flex-column">
          <div className="linked__item d-flex align-items-center p-2 border">
            <div className="accounts__icon">
              <ListItemImg
                className="bg-white"
                icon={
                  <FontAwesomeIcon
                    icon={regular("building-columns")}
                    className="fs-3 text-subtext"
                  />
                }
              />
            </div>
            <div className=" flex__1 mx-2 text-break">
              <div className="accounts__email fw-bold">41089471</div>
              <div className="fs-7 mb-3p">TD Bank</div>
              <div className="fs-7 text-subtext">11456 - 009</div>
            </div>
            <div className="flex__1">
              <FontAwesomeIcon
                icon={solid("shield-halved")}
                className="fs-3 text-primary"
              />
            </div>
            <Button variant="link" className="text-danger">
              unlink
            </Button>
          </div>
        </div>

        <div className="px-1 py-20p mt-1 mb-20p fs-7 text-subtext">
          <FontAwesomeIcon
            icon={solid("shield-halved")}
            className="fs-5 text-primary me-2"
          />
          This method will be used for deposits from donations / items you post.
        </div>

        <div className="note text-dark">
          Funds will be deposited into this account when items you post are
          fully funded or you receive donations from users (both one-time &
          recurring).
        </div>
      </div>

      <div className="mb-5">
        <h4 className="fw-bolder">Cryptocurrencyies</h4>
        <div className="text-subtext mb-4">
          Allow your donors to send funds via cryptocurrency. Choose the coins
          you wish to accept. These payment options will be presented to the
          donor at checkout.
        </div>

        <ul className="list-unstyled crypto__list">
          <li className="list__item d-flex align-items-center py-1">
            <span className="crypto__icon">
              <img
                className="img-fluid"
                src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620e5ca7ee8035585abb93b9_usd-coin-usdc-logo.svg"
                alt=""
              />
            </span>
            <span className="fs-5 fw-semibold text-subtext flex__1">
              USD Coin
            </span>
            <ToggleSwitch />
          </li>
          <li className="list__item d-flex align-items-center py-1">
            <span className="crypto__icon">
              <img
                className="img-fluid"
                src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620e5d4c36e4c982f37e9894_Bitcoin.svg"
                alt=""
              />
            </span>
            <span className="fs-5 fw-semibold text-subtext flex__1">
              Bitcoin
            </span>
            <ToggleSwitch />
          </li>
          <li className="list__item d-flex align-items-center py-1">
            <span className="crypto__icon">
              <img
                className="img-fluid"
                src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620e5d6c9582b74e722c3122_ethereum-eth.svg"
                alt=""
              />
            </span>
            <span className="fs-5 fw-semibold text-subtext flex__1">
              Ethereum
            </span>
            <ToggleSwitch />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentMethod;
