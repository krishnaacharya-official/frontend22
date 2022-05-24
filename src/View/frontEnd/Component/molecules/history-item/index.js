import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import IconButton from "../icon-button";
import Avatar from "../../atoms/avatar";
import AvatarImg from "../../../../../assets/images/avatar.jpeg";
import helper,{priceFormat} from "../../../../../Common/Helper";
import moment from "moment";

import "./style.scss";

const propTypes = {
  active: PropTypes.bool,
  categoryColor: PropTypes.string,
  categoryName: PropTypes.string
};

const defaultProps = {
  active: false,
  categoryName: "Norwhal",
  categoryColor: "#a278fc" // I think we need to populate category color random
};

function HistoryItem({ active, ...otherProps }) {
  const sharedProps = {
    active,
    ...otherProps,
  };
  let item = sharedProps.item

  return (
    <li
      className={`similar__item__wrap p-2 d-flex align-items-center ${sharedProps.active ? "active" : ""
        }`}
    >
      <div className="d-flex align-items-center w-100">
        <Avatar size={46} avatarUrl={helper.DonorImagePath +item?.orderDetails?.userDetails?.image} border={0} shadow={false} />
        <div className="ms-2 flex-grow-1">
          <div className="d-flex align-items-center justify-content-between me-3">
            <div className="text-dark fw-bold">{item?.orderDetails?.userDetails?.name}</div>
            <span className="text-info fs-5">
              <FontAwesomeIcon icon={solid("badge-check")} />
            </span>
            <IconButton
              bgColor={sharedProps.categoryColor}
              className="btn__xs rounded-pill"
              icon={
                <FontAwesomeIcon icon={solid("narwhal")} />
              }
            >
              {sharedProps.categoryName}
            </IconButton>
          </div>
          <div className="text-lighter fs-8">
            <FontAwesomeIcon icon={solid("bag-shopping")} className="mr-6p" />
            Bought {item?.quantity}
          </div>
        </div>

        <div className="billing__value">
          <div className="fs-5 fw-bold text-success mb-3p">{item?.orderDetails?.currencySymbol ? item?.orderDetails?.currencySymbol : "$"} {priceFormat(item?.orderDetails?.total)}</div>
          <div className="fs-8 fw-bold text-light">{moment(item?.orderDetails?.created_at).fromNow()}</div>
        </div>
      </div>
    </li>
  );
}

HistoryItem.propTypes = propTypes;
HistoryItem.defaultProps = defaultProps;

export default HistoryItem;
