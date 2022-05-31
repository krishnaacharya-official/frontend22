import { Container } from "react-bootstrap";

import "./style.scss";

function SuggestionWrapper(props) {
  return (
    <div className="suggested__list-wrap py-2">
      <Container fluid>
          {props.children}
      </Container>
    </div>
  );
}

export default SuggestionWrapper;
