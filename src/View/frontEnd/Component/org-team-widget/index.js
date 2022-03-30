import React from "react";

// import { WidgetTitle, TagTitle } from "../../Component";
import WidgetTitle from "../widget-title"
import TagTitle from "../tag-title"
import OrganisationTeamItem from "../org-team-item";

import "./style.scss";

function OrganisationTeamWidget() {
  return (
    <>
      <TagTitle>Organisation</TagTitle>
      <WidgetTitle>Team</WidgetTitle>
      
      <ul className="list-unstyled mb-0 mt-12p">
        <OrganisationTeamItem />
        <OrganisationTeamItem />
      </ul>
    </>
  );
}

export default OrganisationTeamWidget;
