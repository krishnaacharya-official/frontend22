import React from "react";
import PropTypes from "prop-types";
import { Image } from "./style";

const propTypes = {
  className: PropTypes.string,
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  className: undefined,
  avatarUrl: null,
  name: "",
  size: 35,
};

const Avatar = ({ className, avatarUrl, name, size, ...otherProps }) => {
  const sharedProps = {
    className,
    size,
    "data-testid": name ? `avatar:${name}` : "avatar",
    ...otherProps,
  };

  if (avatarUrl) {
    return <Image avatarUrl={avatarUrl} {...sharedProps} />;
  }

  return (
    <div {...sharedProps}>
      <span>{name.charAt(0)}</span>
    </div>
  );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
