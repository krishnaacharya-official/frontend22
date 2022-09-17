import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const propTypes = {
  categoryName: PropTypes.string
};

const defaultProps = {
  categoryName: ''
};

function FooterCategoryLinks({ categoryName, list, ...otherProps }) {
  const sharedProps = {
    categoryName,
    list,
    ...otherProps
  };
  // console.log(sharedProps.list)
  return (
    <div {...otherProps}>
      <a href="/" className="footer__category-title d-block mb-2">
        <span className="fw-bolder">{sharedProps.categoryName}</span>
      </a>
      {sharedProps.categoryName === 'Home' && (
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
            <Link to="/leaderboard" className="footer__link">
              Leaderboard
            </Link>
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
      )}
      {sharedProps.categoryName === 'Support' && (
        <ul className="list-unstyled footer__links">
          <li className="footer__link-item">
            <Link to="/apply" className="footer__link">
              Apply to Post
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/help" className="footer__link">
              Help Center
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/partnership" className="footer__link">
              Partnerships
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/sponsors" className="footer__link">
              Sponsorships
            </Link>
          </li>
        </ul>
      )}

      {sharedProps.categoryName === 'Information' && (
        <ul className="list-unstyled footer__links">
          <li className="footer__link-item">
            <Link to="/trust" className="footer__link">
              Trust &amp; Safety
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/sponsors" className="footer__link">
              Become Verified
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/item-tags" className="footer__link">
              Post Tags
            </Link>
          </li>
        </ul>
      )}
      {sharedProps.categoryName === 'Marketplace' && (
        <ul className="list-unstyled footer__links">
          {
            sharedProps.list.length > 0 &&
            sharedProps.list.map((l, i) => {
              return (
                <li className="footer__link-item">
                  <Link to={'/categories/' + l.slug} className="footer__link">
                    {l.name}
                  </Link>
                </li>
              )
            })

          }
          {/* <li className="footer__link-item">
            <Link to="/trust" className="footer__link">
              Trust &amp; Safety
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/sponsors" className="footer__link">
              Become Verified
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/item-tags" className="footer__link">
              Post Tags
            </Link>
          </li> */}
        </ul>
      )}
    </div>
  );
}

FooterCategoryLinks.defaultProps = defaultProps;
FooterCategoryLinks.propTypes = propTypes;

export default FooterCategoryLinks;
