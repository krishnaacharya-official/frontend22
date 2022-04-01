import React from "react";

// import { WidgetTitle, TagTitle } from "@components/atoms";
import WidgetTitle from "../../atoms/widget-title"

import TagTitle from "../../atoms/tag-title"


import SimilarItem from "../../molecules/similar-item";

import "./style.scss";

function SimilarItems() {
  return (
    <>
      <TagTitle>Similar Items</TagTitle>
      <WidgetTitle href="/family">Family</WidgetTitle>

      <ul className="similar__items list-unstyled mb-0">
        <SimilarItem />
        <SimilarItem />
        <SimilarItem />
      </ul>
    </>
  );
}

export default SimilarItems;
