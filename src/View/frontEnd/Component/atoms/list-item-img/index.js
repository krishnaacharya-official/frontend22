import PropTypes from "prop-types";
import "./style.scss";

const propTypes = {
  imgSrc: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  iconSize: PropTypes.number,
};
const defaultProps = {
  size: 54,
};

function ListItemImg({ icon, imgSrc, size, iconSize, className }) {
  return (
    <div
      className={`list__item-img ${className}`}
      //style={{ width: size + "px", height: size + "px" }}
    >
      {icon ? icon : <img src={imgSrc} alt="" />}
    </div>
  );
}

ListItemImg.defaultProps = defaultProps;
ListItemImg.propTypes = propTypes;

export default ListItemImg;
