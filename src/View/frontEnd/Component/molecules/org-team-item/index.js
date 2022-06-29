import Avatar from "../../atoms/avatar";
import AvatarImg from "../../../../../assets/images/avatar.jpeg";
import { Button } from "react-bootstrap";
import "./style.scss";
import helper from "../../../../../Common/Helper";
import moment from "moment";

function OrganisationTeamItem(props) {
  const member = props.member

  let image = member.type === 'USER' ? helper.DonorImageResizePath + member?.userDetails?.image : helper.CampaignAdminLogoPath + member?.orgDetails?.logo
  let name = member.type === 'USER' ? member.userDetails?.name : member?.orgDetails?.name
  let email = member.type === 'USER' ? member.userDetails?.email : member?.orgDetails?.email

  return (
    // <li className="org__team__item pt-12p pb-12p d-sm-flex align-items-center">
    //   <Avatar size={46} avatarUrl={AvatarImg} border={0} shadow={false} />
    //   <div className="org__team__item__main pl-12p flex-grow-1">
    //     <div className="org__team__item__title pr-12p">
    //       <div className="org__team__item__name mb-3p text-dark fw-bold">David Abbott</div>
    //       <div className="org__team__item__location fw-light mb-6p">abc@company.ca</div>
    //     </div>
    //     <div className="org__team__item__price fs-8 text-light">CFO / CEO</div>
    //   </div>
    // </li>

    <li className="org__team__item pt-12p pb-12p d-sm-flex align-items-center">
      <Avatar size={46} avatarUrl={image} border={0} shadow={false} />
      <div className="org__team__item__main pl-12p flex-grow-1">
        <div className="org__team__item__title pr-12p">
          <div className="org__team__item__name mb-3p text-dark fw-bold">
            {name}
          </div>
          {props.showEmail ? (
            <div className="org__team__item__location fw-light mb-6p">
              {email}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="org__team__item__price fs-8 text-light">{moment(member?.created_at).format('MMMM DD, YYYY')}</div>
        <div className="org__team__item__price fs-8 text-light">{member?.campaignadminDetails?.name}</div>

      </div>
      {props.showContact ? (
        <Button variant="outline-info" size="lg" className="ms-auto fw-bold">
          Contact
        </Button>
      ) : (
        ""
      )}

      {
        !member.status &&

        <Button variant="outline-primary" size="lg" className="ms-auto fw-bold">
          PENDING
        </Button>

      }

      &nbsp;{
        !props.isCurrent &&
        <Button variant="danger" size="lg" className="ms-auto fw-bold" onClick={() => props.removeTeamMember(member._id)}>
          Remove
        </Button>}
    </li>
  );
}

export default OrganisationTeamItem;
