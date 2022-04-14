// import React from "react";
import React, { useState } from "react";
import _uniqueId from 'lodash/uniqueId';
import PropTypes from "prop-types";

import "./style.scss";

// const defaultProps = {
//   defaultColor: "#efefef",
//   checkedColor: "#06d6a0",
//   checked: false,
// };

// const propTypes = {
//   defaultColor: PropTypes.string,
//   checkedColor: PropTypes.string,
// };

// const ToggleSwitch = ({
//   checked,
//   defaultColor,
//   checkedColor,
// }) => {
//   const [id] = useState(_uniqueId("switch-"));
//   const [_checked, setChecked] = useState(checked);
//   return (
//     <>
//       <input
//         checked={_checked}
//         onChange={() => setChecked(!_checked)}
//         className="switch-checkbox"
//         id={id}
//         type="checkbox"
//       />
//       <label
//         style={{ background: _checked ? checkedColor : defaultColor }}
//         className="switch-label"
//         htmlFor={id}
//       >
//         <span className={`switch-button`} />
//       </label>
//     </>
//   );
// };

// ToggleSwitch.defaultProps = defaultProps;
// ToggleSwitch.propTypes = propTypes;
const ToggleSwitch = ({ isOn, handleToggle, colorOne, colorTwo }) => {
  const [id] = useState(_uniqueId('switch-'));
    return (
      <>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="switch-checkbox"
          id={id}
          type="checkbox"
        />
        <label
          style={{ background: isOn ? colorOne : colorTwo }}
          className="switch-label"
          htmlFor={id}
        >
          <span className='switch-button' />
        </label>
      </>
    );
  };

export default ToggleSwitch;