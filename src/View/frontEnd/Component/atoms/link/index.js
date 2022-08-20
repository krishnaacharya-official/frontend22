import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import "./style.scss";

const propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
};

const defaultProps = {};

const Link = ({ url, ...otherProps }) => {
  const sharedProps = {
    url,
    ...otherProps,
  };

  <Button {...sharedProps}>{sharedProps.children}</Button>;
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
