import React from "react";

// import { WidgetTitle, TagTitle } from "../../Component";
import WidgetTitle from "../widget-title"
import TagTitle from "../tag-title"
import OrganisationProjectItem from "../org-project-item";

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
