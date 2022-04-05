import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./style.scss";

const LadderMenuXp = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="ladder__menu position-relative">
      <div
        className="ladder__dropdown--selected"
        onClick={() => setActive(true)}
      >
        <div className="ladder__selected">
          <div className="ladder__icon">
            <img
              alt=""
              src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/60088347cb80b5186f9e1ead_donate.svg"
            />
          </div>
          Donate
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
        <li className="ladder__menu-item" onClick={() => setActive(false)}>
          <div className="ladder__icon">
            <img
              alt=""
              src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/60088347cb80b5186f9e1ead_donate.svg"
            />
          </div>
          Donated
        </li>
        <li className="ladder__menu-item" onClick={() => setActive(false)}>
          <div className="ladder__icon">
            <img
              alt=""
              src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ef6176ab4ea47d76444346c_speech-bubble.svg"
            />
          </div>
          Followed
        </li>
        <li
          className="ladder__menu-item active"
          onClick={() => setActive(false)}
        >
          <div className="ladder__icon">
            <img
              alt=""
              src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ef61ef15babc48a50bd2bd5_share.svg"
            />
          </div>
          Shared
        </li>
        <li className="ladder__menu-item" onClick={() => setActive(false)}>
          <div className="ladder__icon">
            <img
              alt=""
              src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5e4c2ff23144db148fd45b43_wallet.svg"
            />
          </div>
          Bought
        </li>
      </ul>
    </div>
  );
};

export default LadderMenuXp;
