import React from 'react';

// import { WidgetTitle, TagTitle } from "@components/atoms";
import WidgetTitle from '../../atoms/widget-title';

import TagTitle from '../../atoms/tag-title';

import SimilarItem from '../../molecules/similar-item';

import './style.scss';

function SimilarItems(props) {
  let productDetails = props.productDetails;
  let categoryProducts = props.categoryProducts;

  let similerProductsCount = categoryProducts.filter(e => e._id !== productDetails._id).length


  return (

    // categoryProducts.length > 0 &&

    <>
      {
        similerProductsCount > 0 &&
        <>
          <TagTitle>Similar Items</TagTitle>
          <WidgetTitle href="/family">{productDetails.categoryDetails?.name}</WidgetTitle>
        </>
      }

      <ul className="similar__items list-unstyled mb-0">
        {categoryProducts.length > 0
          ? categoryProducts.map((product, i) => {

            if (product._id !== productDetails._id) {


              return (
                <div key={i}>
                  <SimilarItem
                    product={product}
                    key={i}
                    removeCartItem={props.removeCartItem}
                    checkItemInCart={props.checkItemInCart}
                    pricingFees={props.pricingFees}
                    addToCart={props.addToCart}
                  />
                </div>

              );
            }
          })
          : ''}
        {/* <SimilarItem />
         <SimilarItem />
         <SimilarItem /> */}
      </ul>
    </>
  );
}

export default SimilarItems;
