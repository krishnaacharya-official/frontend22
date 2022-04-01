// core
import React from "react";

// third party
import { Col, Container, Row,Button } from "react-bootstrap";

// app specific
import Header from "../Component/organisms/header";
import Footer from "../Component/organisms/footer";
import ProjectDetailMain from "../Component/organisms/project-detail-main";
import SimilarItems from "../Component/organisms/similar-items";
import History from "../Component/organisms/history";
import SuggestionWrapper from "../Component/molecules/suggestion-wrapper";
import SuggestedList from "../Component/organisms/suggested-list";
import ProjectSuggestionList from "../Component/organisms/project-suggestion-list";
import GrabDropdown from "../Component/organisms/grab-dropdown";

// style
import "./style.scss";

// class ProjectDetail extends React.Component {
//   render() {
//     return (
//       <>
//         <Header />
//         <SuggestionWrapper>
//           <SuggestedList />
//         </SuggestionWrapper>
//         <Container fluid className="py-5">
//           <Row>
//             <Col md="7" className="mb-4 mb-0">
//               <ProjectDetailMain progress={70} />
//             </Col>
//             <Col md="5">
//               <div className="d-none d-sm-block project__detail-img mb-3">
//                 <img
//                   className="img-fluid"
//                   alt=""
//                   src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c26551110ec14dd05ef15_image%20(1).png"
//                 />
//               </div>
//               <History />
//             </Col>
//           </Row>
//         </Container>
//         <Container fluid>
//           <Row className="py-5 border-top">
//             <Col md="6" className="mb-4 mb-0">
//               <SimilarItems />
//             </Col>
//             <Col md="6"></Col>
//           </Row>
//         </Container>

//         <Footer />
//       </>
//     );
//   }
// }

const ProjectDetail = () => {
  return (
    <>
      <Header />
      <SuggestionWrapper>
        <div className="d-flex align-items-center">
          <ProjectSuggestionList />
          <div className="ms-auto d-flex align-items-center">
            <Button size="lg" className="fw-bold">
              Donate
            </Button>
            <GrabDropdown />
          </div>
        </div>
      </SuggestionWrapper>
      <Container fluid className="py-5">
        <Row>
          <Col md="7" className="mb-4 mb-0">
            <ProjectDetailMain progress={70} />
          </Col>
          <Col md="5">
            <History tagTitle="Activity" title="User Log" />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );

}

export default ProjectDetail;
