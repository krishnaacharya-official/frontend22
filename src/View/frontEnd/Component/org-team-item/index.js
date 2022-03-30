import Avatar from "../avatar";
import AvatarImg from "../../../../assets/images/avatar.jpeg";

import "./style.scss";

function OrganisationTeamItem() {
  return (
    <li className="org__team__item pt-12p pb-12p d-sm-flex align-items-center">
      <Avatar size={46} avatarUrl={AvatarImg} border={0} shadow={false} />
      <div className="org__team__item__main pl-12p flex-grow-1">
        <div className="org__team__item__title pr-12p">
          <div className="org__team__item__name mb-3p text-dark fw-bold">David Abbott</div>
          <div className="org__team__item__location fw-light mb-6p">abc@company.ca</div>
        </div>
        <div className="org__team__item__price fs-8 text-light">CFO / CEO</div>
      </div>
    </li>
  );
}

export default OrganisationTeamItem;
