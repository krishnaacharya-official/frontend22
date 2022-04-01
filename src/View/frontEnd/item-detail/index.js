// core
import React from "react";

// third party
import { Col, Container, Row } from "react-bootstrap";

// app specific
// import SuggestionWrapper from "@components/molecules/suggestion-wrapper";
// import {
//   Header,
//   Footer,
//   History,
//   SuggestedList,
//   ItemDetailMain,
//   SimilarItems,
// } from "@components/organisms";

import Header from "../Component/organisms/header";
import Footer from "../Component/organisms/footer";
import History from "../Component/organisms/history";
import SuggestedList from "../Component/organisms/suggested-list";
import ItemDetailMain from "../Component/organisms/item-detail-main"
import SimilarItems from "../Component/organisms/similar-items";
import SuggestionWrapper from "../Component/molecules/suggestion-wrapper";
import helper from "../../../Common/Helper";

// style
import "./style.scss";

// class ItemDetail extends React.Component {
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
//               <ItemDetailMain progress={70} />
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

const ItemDetail = (props) => {
  let productDetails = props.productDetails

  return (
    <>
      <Header />
      <SuggestionWrapper>
        <SuggestedList />
      </SuggestionWrapper>
      <Container fluid className="py-5">
        <Row>
          <Col md="7" className="mb-4 mb-0">
            <ItemDetailMain progress={70} productDetails={productDetails} />
          </Col>
          <Col md="5">
            <div className="d-none d-sm-block project__detail-img mb-3">
              <img
                className="img-fluid"
                alt=""
                src={helper.CampaignProductFullImagePath+productDetails?.image}
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

export default ItemDetail;
