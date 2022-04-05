import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./style.scss";

const LadderMenuItems = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="ladder__menu position-relative">
      <div
        className="ladder__dropdown--selected"
        onClick={() => setActive(true)}
      >
        <div className="ladder__selected">
          <div className="ladder__icon">
            <div className="ladder__mark ladder__mark--open"></div>
          </div>
          Open
          <div className="ladder__total">
            $<span id="total_active">17,426</span>
          </div>
        </div>
        <FontAwesomeIcon icon={solid("chevron-down")} className="icon chevron__icon" />
      </div>

      <ul
        className={`ladder__ul ladder__ul--listing ${active ? "active" : ""}`}
      >
        <li className="ladder__menu-item" onClick={() => setActive(false)}>
          <div className="ladder__icon">
            <FontAwesomeIcon
              icon={solid("arrow-down-long")}
              className="icon icon--showall"
            />
          </div>
          Show All
        </li>
        <li className="ladder__menu-item active" onClick={() => setActive(false)}>
          <div className="ladder__icon">
            <div className="ladder__mark ladder__mark--open"></div>
          </div>
          Open
          <div className="ladder__total">$17,426</div>
        </li>
        <li className="ladder__menu-item" onClick={() => setActive(false)}>
          <div className="ladder__icon">
            <div className="ladder__mark ladder__mark--funded"></div>
          </div>
          Funded
          <div className="ladder__total">$17,426</div>
        </li>
      </ul>
    </div>
  );
};

export default LadderMenuItems;
