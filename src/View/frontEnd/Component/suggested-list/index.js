import SuggestedItem from "../suggested-item";
import SuggestionWrapper from "../suggestion-wrapper";

import "./style.scss";

function SuggestedList() {
  // this one need to be rendered based on device width
  // can try this solution https://stackoverflow.com/questions/39235506/render-component-in-different-order-depending-on-screen-size-react
  return (
    // <SuggestionWrapper>
      <ul className="suggested__list d-flex align-items-center list-unstyled mb-0">
        <SuggestedItem
          imgUrl="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c232c4fdbba5411c5cb63_21AK148G912_CC148_1024x1024.png"
          sold
        />
        <SuggestedItem imgUrl="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c257efd28a7c95af49fa8_xlarge.png" />
        <SuggestedItem imgUrl="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c232c4fdbba5411c5cb63_21AK148G912_CC148_1024x1024.png" />
      </ul>
    // </SuggestionWrapper>

  );
}

export default SuggestedList;
