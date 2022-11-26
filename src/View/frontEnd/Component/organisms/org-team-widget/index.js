import React from "react";

// import { WidgetTitle, TagTitle } from "../../Component";
import WidgetTitle from "../../atoms/widget-title"

import TagTitle from "../../atoms/tag-title"


import "./style.scss";

function OrganisationTeamWidget(props) {
  return (
    <>
      {/* <TagTitle>Organisation</TagTitle>
      <WidgetTitle>Team</WidgetTitle>
      
      <ul className="list-unstyled mb-0 mt-12p">
        <OrganisationTeamItem />
        <OrganisationTeamItem />
      </ul> */}

      <TagTitle>{props.tagTitle ? props.tagTitle : "Organisation"}</TagTitle>
      <WidgetTitle href="/log">
        {props.title ? props.title : "Team"}
      </WidgetTitle>

      <ul className="list-unstyled mb-0 mt-12p">
        {/* <OrganisationTeamItem showEmail={props.showEmail} showContact={props.showContact}/>
        <OrganisationTeamItem showEmail={props.showEmail} showContact={props.showContact} /> */}
      </ul>
    </>
  );
}

export default OrganisationTeamWidget;
