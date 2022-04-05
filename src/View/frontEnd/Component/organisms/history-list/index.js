import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button } from "react-bootstrap";

import ListItemImg from "../../atoms/list-item-img";

import "./style.scss";

const HistoryList = () => {
  const [active, setActive] = useState(false);
  return (
    <ul className="history__list list-unstyled mb-0">
      <li className="history__list-item">
        <div className="py-2 border-bottom">
          <div className="d-flex align-items-center mb-1">
            <span className="flex__1 me-2">
              <FontAwesomeIcon
                icon={solid("receipt")}
                className="mr-12p text-dark fs-4"
              />
              <span className="text-success fw-bold fs-4">$ 106.05</span>
              <span className="ml-6p text-light">USD</span>
            </span>
            <span className="text-info fs-5 fw-bold">50 xp</span>
          </div>
          <div>
            <Button
              variant="link"
              className="text-dark p-0 mb-1"
              onClick={() => setActive(!active)}
            >
              Order # 978456
            </Button>
          </div>
          <div className="fw-bold fs-7 text-light">July 21, 2020</div>
        </div>
        {active ? (
          <ul className="list-unstyled ms-1">
            <li className="d-sm-flex align-items-center px-sm-2 py-2 border-bottom border-sm-none">
              <div className="d-flex align-items-center mb-2 mb-sm-0 flex__1">
                <ListItemImg
                  size={75}
                  imgSrc="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c2478bda7359714d93fec_image%20(2).png"
                />
                <div className="ms-2 order__id">
                  <Button
                    variant="link"
                    className="text-dark fw-bold p-0 mb-3p"
                  >
                    4 Water Tabs
                  </Button>
                  <div className="text-light mb-3p">Axebat</div>
                  <div className="fs-5 text-success fw-bold">$ 19</div>
                </div>
                <ListItemImg
                  size={42}
                  className="rounded-circle"
                  imgSrc="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c245cfd28a711fcf49f67_HYDRATION-TABS-three-tabs-s.png"
                />
              </div>
              <div className="order__values d-flex align-items-center">
                <span className="text-info fw-bold flex__1">40 xp</span>
                <span className="fs-5 fw-bold text-success ms-2">$76</span>
              </div>
            </li>
            <li className="d-sm-flex align-items-center px-sm-2 py-2 border-bottom border-sm-none">
              <div className="d-flex align-items-center mb-2 mb-sm-0 flex__1">
                <ListItemImg
                  size={75}
                  imgSrc="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5fda4db5c4b3ae6372b2c6a5_332337372_99_a.png"
                />
                <div className="ms-2 order__id">
                  <Button
                    variant="link"
                    className="text-dark fw-bold p-0 mb-3p"
                  >
                    4 Water Tabs
                  </Button>
                  <div className="text-light mb-3p">Axebat</div>
                  <div className="fs-5 text-success fw-bold">$ 19</div>
                </div>
                <ListItemImg
                  size={42}
                  className="rounded-circle"
                  imgSrc="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c2478bda7359714d93fec_image%20(2).png"
                />
              </div>
              <div className="order__values d-flex align-items-center">
                <span className="text-info fw-bold flex__1">40 xp</span>
                <span className="fs-5 fw-bold text-success ms-2">$76</span>
              </div>
            </li>
            <li className="order__transaction px-sm-2 py-2">
              <div className="bg-lighter d-flex align-items-center pt-20p pb-20p px-2">
                <div className="order__logo me-2">
                  <img
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5b5e656493af1e0441cd892a_mc_vrt_pos.svg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="order__card fs-7">
                  <div className="text-dark fw-semibold mb-6p">
                    5432 XXXX XXXX 4809
                  </div>
                  <div className="text-light fw-semibold">
                    <div>Transaction: July 02, 2019</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        ) : (
          ""
        )}
      </li>
    </ul>
  );
};

export default HistoryList;
