import { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

const propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.string,
};

const defaultProps = {
  checked: false,
  color: "",
};

function RadioToggle({ checked, children, color,disabled, ...otherProps }) {
  const [_checked, setChecked] = useState(checked);

  const sharedProps = {
    checked,
    color,
    disabled,
    ...otherProps,
  };
  return (
    <label className={`radio__toggle-label ${_checked ? 'active' : ''}`} style={{backgroundColor: _checked ? color : 'transparent', opacity: disabled ? '0.4' : 1}} onClick={() => !disabled ? setChecked(!_checked) : ''}>
      <input type="radio" value={_checked} className="radio__toggle-input" />
      <mark className="dot" style={{backgroundColor: !_checked ? color : 'transparent'}}></mark>
      <span
        className="icon__toggle-icon d-flex align-items-center"
        style={{ color: _checked ? sharedProps.activeColor : "" }}
      >
        {children}
      </span>
    </label>
  );
}

RadioToggle.defaultProps = defaultProps;
RadioToggle.propTypes = propTypes;

export default RadioToggle;
