import React from "react";

// import { WidgetTitle, TagTitle } from "../../Component";
import WidgetTitle from "../../atoms/widget-title"

import TagTitle from "../../atoms/tag-title"

import OrganisationProjectItem from "../../molecules/org-project-item";

import "./style.scss";

function OrganisationProjectsWidget() {
  return (
    <>
      <TagTitle>Organisation</TagTitle>
      <WidgetTitle>Projects</WidgetTitle>
      
      <ul className="list-unstyled mb-0 mt-12p">
        <OrganisationProjectItem />
        <OrganisationProjectItem />
      </ul>
    </>
  );
}

export default OrganisationProjectsWidget;
