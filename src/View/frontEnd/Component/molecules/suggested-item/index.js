import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PlaceholderImg from "../../../../../assets/images/placeholder.png";

import "./style.scss";

const propTypes = {
  sold: PropTypes.bool,
  imgUrl: PropTypes.string,
  productLink: PropTypes.string,
};

const defaultProps = {
  imgUrl: PlaceholderImg,
  sold: false,
  productLink: "#",
};
function SuggestedItem({ sold, ...otherProps }) {
  const sharedProps = {
    sold,
    ...otherProps,
  };
  return (
    <li className="suggest__item">
      <Link to={"/organization/"+sharedProps.organization.slug} className="d-block">
        {sharedProps.sold ? (
          <div className="post__sold">
            <img
              className="img-fluid"
              src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5d41c138db84bd176388cc01_sold-out.svg"
              alt=""
            />
          </div>
        ) : (
          ""
        )}

        <div className="product__thumb d-flex align-items-center">
          <img className="img-fluid mx-auto" alt="" src={sharedProps.imgUrl} />
        </div>
      </Link>
    </li>
  );
}

SuggestedItem.propTypes = propTypes;
SuggestedItem.defaultProps = defaultProps;

export default SuggestedItem;
