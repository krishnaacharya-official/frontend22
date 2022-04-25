import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";

const propTypes = {
  categoryName: PropTypes.string,
};

const defaultProps = {
  categoryName: "",
};

function FooterCategoryLinks({ categoryName, ...otherProps }) {
  const sharedProps = {
    categoryName,
    ...otherProps,
  };
  return (
    <div {...otherProps}>
      <a href="/" className="footer__category-title d-block mb-2">
        <span className="fw-bold">{sharedProps.categoryName}</span>
      </a>
      <ul className="list-unstyled footer__links">
        <li className="footer__link-item">
          <Link to="/about-us" className="footer__link">
            About Us
          </Link>
        </li>
        <li className="footer__link-item">
          <Link to="/media" className="footer__link">
            Press &amp; Media
          </Link>
        </li>
        <li className="footer__link-item">
          <a href="/leaderboard" className="footer__link">
            Leaderboard
          </a>
        </li>
        <li className="footer__link-item">
          <Link to="/xp" className="footer__link">
            XP
          </Link>
        </li>
        <li className="footer__link-item">
          <Link to="/ranks" className="footer__link">
            Ranks
          </Link>
        </li>
      </ul>
    </div>
  );
}

FooterCategoryLinks.defaultProps = defaultProps;
FooterCategoryLinks.propTypes = propTypes;

export default FooterCategoryLinks;
