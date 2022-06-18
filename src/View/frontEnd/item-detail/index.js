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
import HeaderController from "../../../Controller/frontEnd/HeaderController";

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
      <HeaderController />
      <SuggestionWrapper>
        <SuggestedList itemTag="product" productList={props.productList} productId={productDetails?._id} productDetails={productDetails}  />
      </SuggestionWrapper>
      <Container fluid className="py-5">
        <Row>
          <Col md="7" className="mb-4 mb-0">


            <ItemDetailMain progress={70} productDetails={productDetails} addToCart={props.addToCart} checkItemInCart={props.checkItemInCart}
            addProductToWishlist={props.addProductToWishlist} wishListproductIds={props.wishListproductIds}
             />
          </Col>
          <Col md="5">
            <div className="d-none d-sm-block project__detail-img mb-3">
              <img
                className="img-fluid"
                alt=""
                src={helper.CampaignProductFullImagePath + productDetails?.image}
              />
            </div>
            {
              productDetails.quantity === productDetails.soldout &&

              <img src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5d41c138db84bd176388cc01_sold-out.svg" loading="lazy" alt="" className="sold sold--item"></img>}
            <History list={props.purchasedItemList} />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="py-5 border-top">
          <Col md="6" className="mb-4 mb-0">
            <SimilarItems
              productDetails={productDetails}
              categoryProducts={props.categoryProducts}
              removeCartItem={props.removeCartItem}
              checkItemInCart={props.checkItemInCart}
              pricingFees={props.pricingFees}
              addToCart={props.addToCart}
            />
          </Col>
          <Col md="6"></Col>
        </Row>
      </Container>

      <Footer />
    </>
  );

}

export default ItemDetail;
