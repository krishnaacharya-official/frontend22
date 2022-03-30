// core
import React from "react";

// third party
import { Col, Container, Row } from "react-bootstrap";

// app specific
import Header from "../Layout/header";
import Footer from "../Layout/footer";
import OrganisationDetailMain from "../Component/organisation-detail-main";
import History from "../Component/history";
import SuggestionWrapper from "../Component/suggestion-wrapper";
import SuggestedList from "../Component/suggested-list";
import OrganisationTeamWidget from "../Component/org-team-widget";
import OrganisationProjectsWidget from "../Component/org-projects-widget";

// style
import "./style.scss";

// class OrganisationDetail extends React.Component {
//   render() {
//     return (
//       <>
//         <Header />
//         <SuggestionWrapper>
//           <SuggestedList />
//         </SuggestionWrapper>
//         <Container fluid className="py-5">
//           <Row>
//             <Col md="7" className="mb-4">
//               <OrganisationDetailMain progress={70} />
//             </Col>
//             <Col md="5">
//               <div className="mb-4">
//               <OrganisationTeamWidget />
//               </div>
//               <History />
//             </Col>
//           </Row>
//         </Container>
//         <Container fluid>
//           <Row className="py-5">
//             <Col md="6" className="mb-4 mb-0">
//               <OrganisationProjectsWidget />
//             </Col>
//             <Col md="6"></Col>
//           </Row>
//         </Container>

//         <Footer />
//       </>
//     );
//   }
// }

const OrganisationDetail = () => {
  return (
    <>
      <Header />
      <SuggestionWrapper>
        <SuggestedList />
      </SuggestionWrapper>
      <Container fluid className="py-5">
        <Row>
          <Col md="7" className="mb-4">
            <OrganisationDetailMain progress={70} />
          </Col>
          <Col md="5">
            <div className="mb-4">
            <OrganisationTeamWidget />
            </div>
            <History />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="py-5">
          <Col md="6" className="mb-4 mb-0">
            <OrganisationProjectsWidget />
          </Col>
          <Col md="6"></Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default OrganisationDetail;
