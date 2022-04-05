import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import PropTypes from "prop-types";

import "./style.scss";

const propTypes = {
  items: PropTypes.array,
};

const defaultProps = {
  items: ["Show All", "2020", "2021", "2022"],
};

const LadderMenu = ({ items }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="ladder__menu position-relative">
      <div
        className="ladder__dropdown--selected"
        onClick={() => setActive(true)}
      >
        <div className="ladder__selected">{items[0]}</div>
        <FontAwesomeIcon
          icon={solid("chevron-down")}
          className="icon chevron__icon"
        />
      </div>

      <ul
        className={`ladder__ul ladder__ul--listing ${active ? "active" : ""}`}
      >
        {items.map((item, index) => (
          <li className="ladder__menu-item" onClick={() => setActive(false)} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

LadderMenu.defaultProps = defaultProps;
LadderMenu.propTypes = propTypes;

export default LadderMenu;
