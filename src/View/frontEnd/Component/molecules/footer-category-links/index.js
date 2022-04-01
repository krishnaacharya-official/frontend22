import PropTypes from "prop-types";

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
          <a href="/about-us" className="footer__link">
            About Us
          </a>
        </li>
        <li className="footer__link-item">
          <a href="/media" className="footer__link">
            Press &amp; Media
          </a>
        </li>
        <li className="footer__link-item">
          <a href="/leaderboard" className="footer__link">
            Leaderboard
          </a>
        </li>
        <li className="footer__link-item">
          <a href="/xp" className="footer__link">
            XP
          </a>
        </li>
        <li className="footer__link-item">
          <a href="/ranks" className="footer__link">
            Ranks
          </a>
        </li>
      </ul>
    </div>
  );
}

FooterCategoryLinks.defaultProps = defaultProps;
FooterCategoryLinks.propTypes = propTypes;

export default FooterCategoryLinks;
