import { Container } from "react-bootstrap";

import "./style.scss";

function SuggestionWrapper(props) {
  return (
    <div className="suggested__list-wrap d-flex align-items-center container-fluid p-0 mb-0" style={{minHeight:"75px"}}>
          {props.children}
    </div>
  );
}

export default SuggestionWrapper;
