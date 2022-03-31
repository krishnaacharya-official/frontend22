import PropTypes from "prop-types";
import ListItemImg from "../list-item-img";

import "./style.scss";

const propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
};

const defaultProps = {
  label: "",
};

const IconText = ({ className, label, size, bgColor, ...otherProps }) => {
  const sharedProps = {
    className,
    size,
    ...otherProps,
  };
  return (
    <div className={`d-flex align-items-center ${className}`}>
      <ListItemImg icon={sharedProps.icon} className="me-1" />
      {sharedProps.children}
    </div>
  );
};

IconText.propTypes = propTypes;
IconText.defaultProps = defaultProps;

export default IconText;
