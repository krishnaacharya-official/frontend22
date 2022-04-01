import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
// import IconButton from "@components/molecules/icon-button";
// import ListItemImg from "@components/atoms/list-item-img";
import IconButton from "../icon-button";
import ListItemImg from "../../atoms/list-item-img";

import "./style.scss";

function SimilarItem() {
  return (
    <li className="similar__item__item pt-12p pb-12p d-flex align-items-center">
      <div className="d-flex align-items-center flex-grow-1">
        <a href="/" className="d-block">
          <ListItemImg imgSrc="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c25521110ec4aec05eec4_Teddy-Bear-PNG-Picture.png" />
        </a>
        <div className="similar__item__main pl-12p flex-grow-1">
          <div className="similar__item__title pr-12p">
            <a
              href="/"
              className="similar__item__name mb-3p text-dark d-inline-block"
            >
              Teddies
            </a>
            <div className="similar__item__location mb-6p">Today 9am</div>
          </div>
          <div className="similar__item__price">$14</div>
        </div>

        <div className="qty__tag ms-auto me-5">26</div>
      </div>
      <div className="similar__item__remove ms-auto">
        <IconButton
          size="md"
          className="px-3"
          variant="info"
          href="/cart"
          icon={<FontAwesomeIcon icon={regular("cart-shopping")} />}
          target="_blank"
        ></IconButton>
      </div>
    </li>
  );
}

export default SimilarItem;
