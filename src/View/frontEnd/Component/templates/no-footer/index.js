import PropTypes from "prop-types";
// import { Header, Footer } from "@components/organisms";
import HeaderController from "../../../../../Controller/frontEnd/HeaderController";


const NoFooter = ({ children}) => {
  return (
    <>
      <HeaderController />
      {children}
      {""}
    </>
  );
};

export default NoFooter;
