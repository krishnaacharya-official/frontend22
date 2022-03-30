import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import IconButton from "../icon-button";
import Avatar from "../avatar";
import AvatarImg from "../../../../assets/images/avatar.jpeg";

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
  return (
    <li
      className={`similar__item__wrap p-2 d-flex align-items-center ${
        sharedProps.active ? "active" : ""
      }`}
    >
      <div className="d-flex align-items-center w-100">
        <Avatar size={46} avatarUrl={AvatarImg} border={0} shadow={false} />
        <div className="ms-2 flex-grow-1">
          <div className="d-flex align-items-center justify-content-between me-3">
            <div className="text-dark fw-bold">David Abbott</div>
            <span className="text-info fs-5">
              <FontAwesomeIcon icon={solid("badge-check")} />
            </span>
            <IconButton
              bgColor={sharedProps.categoryColor}
              className="btn__xs rounded-pill"
              icon={
                <FontAwesomeIcon icon={solid("narwhal")}/>
              }
            >
              {sharedProps.categoryName}
            </IconButton>
          </div>
          <div className="text-lighter fs-8">
            <FontAwesomeIcon icon={solid("bag-shopping")} className="mr-6p" />
            Bought 4
          </div>
        </div>

        <div className="billing__value">
          <div className="fs-5 fw-bold text-success mb-3p">$ 14</div>
          <div className="fs-8 fw-bold text-light">1 hr ago</div>
        </div>
      </div>
    </li>
  );
}

HistoryItem.propTypes = propTypes;
HistoryItem.defaultProps = defaultProps;

export default HistoryItem;
