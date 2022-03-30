import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

import { ButtonContent } from "./style";
import "./style.scss";

const propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  bgColor: PropTypes.string 
};

const defaultProps = {
  label: "",
  // border: "1px",
  bgColor: "",
};

const IconButton = ({ className, label, size, bgColor, ...otherProps }) => {
  const sharedProps = {
    className,
    size,
    ...otherProps,
  };
  return (
    <Button
      {...sharedProps}
      className={`${
        !sharedProps.children
          ? sharedProps.size
            ? "btn__icon-" + sharedProps.size
            : "btn__icon"
          : ""
      } ${sharedProps.className}`}
      style={{'backgroundColor': sharedProps.bgColor, 'borderColor': sharedProps.bgColor}}
    >
      <ButtonContent
        size={sharedProps.size}
        className="d-flex align-items-center btn__content"
      >
        <span
          className={`icon__wrap d-flex align-items-center ${
            sharedProps.children ? "me-1" : ""
          }`}
        >
          {sharedProps.icon}
        </span>
        {sharedProps.children}
      </ButtonContent>
    </Button>
  );
};

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
