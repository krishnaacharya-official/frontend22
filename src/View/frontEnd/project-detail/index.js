// core
import React from "react";

// third party
import { Col, Container, Row } from "react-bootstrap";

// app specific
import Header from "@components/organisms/header";
import Footer from "@components/organisms/footer";
import ProjectDetailMain from "@components/organisms/project-detail-main";
import SimilarItems from "@components/organisms/similar-items";
import History from "@components/organisms/history";
import SuggestionWrapper from "@components/molecules/suggestion-wrapper";
import SuggestedList from "@components/organisms/suggested-list";

// style
import "./style.scss";

class ProjectDetail extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SuggestionWrapper>
          <SuggestedList />
        </SuggestionWrapper>
        <Container fluid className="py-5">
          <Row>
            <Col md="7" className="mb-4 mb-0">
              <ProjectDetailMain progress={70} />
            </Col>
            <Col md="5">
              <div className="d-none d-sm-block project__detail-img mb-3">
                <img
                  className="img-fluid"
                  alt=""
                  src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c26551110ec14dd05ef15_image%20(1).png"
                />
              </div>
              <History />
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="py-5 border-top">
            <Col md="6" className="mb-4 mb-0">
              <SimilarItems />
            </Col>
            <Col md="6"></Col>
          </Row>
        </Container>

        <Footer />
      </>
    );
  }
}

export default ProjectDetail;
