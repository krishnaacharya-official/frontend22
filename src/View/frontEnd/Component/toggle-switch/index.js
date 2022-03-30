// import React from "react";
import React,{ useState } from "react";
import _uniqueId from 'lodash/uniqueId';

import "./style.scss";

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