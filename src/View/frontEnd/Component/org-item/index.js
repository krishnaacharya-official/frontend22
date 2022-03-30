import { Button } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import ListItemImg from "../list-item-img";

import "./style.scss";

function OrganisationItem() {
  return (
    <li className="org__item__item pt-12p pb-12p d-sm-flex align-items-center">
      <div className="d-flex align-items-center flex-grow-1">
        <a href="/" className="d-block">
          <ListItemImg imgSrc="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c25521110ec4aec05eec4_Teddy-Bear-PNG-Picture.png" />
        </a>
        <div className="org__item__main pl-12p flex-grow-1">
          <div className="org__item__title pr-12p">
            <a
              href="/"
              className="org__item__name mb-3p text-dark d-inline-block"
            >
              Teddies
            </a>
            <div className="org__item__location mb-6p">Today 9am</div>
          </div>
          <div className="org__item__price">$14</div>
        </div>

        <span class="org__item-subtotal d-sm-none text-success fw-bolder">
          $1,650.00
        </span>
      </div>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center flex-grow-1 fs-5 me-2">
          <div className="org__item__count mt-3p">1</div>
          <div className="org__item-slider flex-grow-1 mx-2">
            <Slider
              handleStyle={{
                width: "26px",
                height: "26px",
                border: "none",
                background: "#3596F3",
                marginTop: "-10px",
              }}
              railStyle={{ backgroundColor: "#C7E3FB", height: "8px" }}
            />
          </div>
          <div className="org__item__count mt-3p">10</div>
        </div>
        <span class="org__item-subtotal d-none d-sm-block text-success fw-bolder me-2">
          $1,650.00
        </span>
        <Button className="ms-auto">
          <span className="fw-bold">0</span>
        </Button>
      </div>
    </li>
  );
}

export default OrganisationItem;
