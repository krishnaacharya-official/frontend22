import PropTypes from "prop-types";
// import { Header, Footer } from "@components/organisms";
import HeaderController from "../../../../../Controller/frontEnd/HeaderController";
import Footer from "../../organisms/footer";
const propTypes = {
  hasFooter: PropTypes.bool,
};

const defaultProps = {
  hasFooter: true,
};

const DefaultLayout = ({ children, hasFooter }) => {
  return (
    <>
      <HeaderController />
      {children}
      {hasFooter ? <Footer /> : ""}
    </>
  );
};

DefaultLayout.propTypes = propTypes;
DefaultLayout.defaultProps = defaultProps;

export default DefaultLayout;
