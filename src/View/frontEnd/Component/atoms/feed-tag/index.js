import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import _uniqueId from "lodash/uniqueId";
import PropTypes from "prop-types";
import "./style.scss";

const propTypes = {
  checked: PropTypes.bool,
};

const FeedTag = ({ checked = false }) => {
  const [id] = useState(_uniqueId("tag-"));
  const [active, setActive] = useState(checked);
  return (
    <div className={`feed__tag rounded-pill ${active ? "bg-info text-white" : "text-subtext"}`}>
      <input
        id={id}
        type="checkbox"
        name="checkbox"
        className=""
        onChange={() => setActive(!active)}
      />
      <label htmlFor={id}>
        <div className={`icon icon--feedtag ${!active ? "on" : "off"}`}>
          <FontAwesomeIcon icon={regular("circle-plus")} className="" />
        </div>
        <div className="feed__tagtext fs-7 fw-bold">Christmas Drive</div>
        <div className={`icon icon--feedremove ${active ? "on" : "off"}`}>
          <FontAwesomeIcon icon={regular("close")} className="" />
        </div>
      </label>
    </div>
  );
};

FeedTag.propTypes = propTypes;

export default FeedTag;
