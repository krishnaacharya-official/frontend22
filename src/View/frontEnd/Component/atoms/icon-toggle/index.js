import { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

const propTypes = {
  checked: PropTypes.bool,
  activeColor: PropTypes.string,
  icon: PropTypes.element,
  checkedIcon: PropTypes.element,
};

const defaultProps = {
  checked: false,
  activeColor: "",
};

function IconToggle({
  checked,
  icon,
  checkedIcon,
  activeColor,
  ...otherProps
}) {
  const [_checked, setChecked] = useState(checked);

  const sharedProps = {
    checked,
    icon,
    checkedIcon,
    activeColor,
    ...otherProps,
  };
  return (
    <label className="icon__toggle-label" onClick={() => setChecked(!_checked)} >
      <input type="checkbox" value={_checked} className="icon__toggle-input" />
      <span
        className="icon__toggle-icon d-flex align-items-center"
        style={{ color: _checked ? sharedProps.activeColor : "" }}
      >
        {_checked ? sharedProps.checkedIcon : sharedProps.icon}
      </span>
    </label>
  );
}

IconToggle.defaultProps = defaultProps;
IconToggle.propTypes = propTypes;

export default IconToggle;
