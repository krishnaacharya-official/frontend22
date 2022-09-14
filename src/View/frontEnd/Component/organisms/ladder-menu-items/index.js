import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./style.scss";

const LadderMenuItems = (props) => {
  const [active, setActive] = useState(0);
  const listBy = props.listBy

  return (
    <div className="ladder__menu position-relative">
      <div
        className="ladder__dropdown--selected"
        onClick={() => setActive(true)}
      >
        <div className="ladder__selected">
          <div className="ladder__icon">
            {
              listBy === 'Show All' ?
                <FontAwesomeIcon
                  icon={solid("arrow-down-long")}
                  className="icon icon--showall"
                />
                : listBy === 'Open' ?
                  <div className="ladder__mark ladder__mark--open"></div>
                  : listBy === 'Closed' ?
                    <div className="ladder__mark ladder__mark--funded"></div>
                    : listBy === 'Draft' ?
                      <div className="ladder__mark ladder__mark--draft" style={{ background: "#ffd027" }}></div>
                      : <></>
            }
          </div>
          {listBy}
          <div className="ladder__total">
            {/* $<span id="total_active">17,426</span> */}
          </div>
        </div>
        <FontAwesomeIcon icon={solid("chevron-down")} className="icon chevron__icon" />
      </div>

      <ul
        className={`ladder__ul ladder__ul--listing ${active ? "active" : ""}`}
      >
        <li className={listBy === 'Show All' ? "ladder__menu-item active" : 'ladder__menu-item'} onClick={() => {
          setActive(false)
          props.onChangeDropDown('Show All')
        }}>
          <div className="ladder__icon">
            <FontAwesomeIcon
              icon={solid("arrow-down-long")}
              className="icon icon--showall"
            />
          </div>
          Show All
        </li>
        <li className={listBy === 'Open' ? "ladder__menu-item active" : 'ladder__menu-item'} onClick={() => {
          setActive(false)
          props.onChangeDropDown('Open')
        }}>
          <div className="ladder__icon">
            <div className="ladder__mark ladder__mark--open"></div>
          </div>
          Open
          {/* <div className="ladder__total">$17,426</div> */}
        </li>
        {/* <li className={listBy === 'Closed' ? "ladder__menu-item active" : 'ladder__menu-item'} onClick={() => {
          setActive(false)
          props.onChangeDropDown('Closed')
        }}>
          <div className="ladder__icon">
            <div className="ladder__mark ladder__mark--funded"></div>
          </div>
          Closed
        
        </li> */}
        <li className={listBy === 'Draft' ? "ladder__menu-item active" : 'ladder__menu-item'} onClick={() => {
          setActive(false)
          props.onChangeDropDown('Draft')

        }}>
          <div className="ladder__icon">
            <div className="ladder__mark ladder__mark--draft" style={{ background: "#ffd027" }}></div>
          </div>
          Draft
          {/* <div className="ladder__total">$17,426</div> */}
        </li>
      </ul>
    </div>
  );
};

export default LadderMenuItems;
