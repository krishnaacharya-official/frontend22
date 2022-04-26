import { Button } from "react-bootstrap";

import "./style.scss";

function OrganisationProjectItem() {
  return (
    <li className="org__project__item pt-12p pb-12p d-sm-flex align-items-center">
      <div className="d-flex align-items-center flex-grow-1">
        <div
          className="circle__progress"
          style={{
            background:
              "linear-gradient(0deg, #fff 50%, transparent 50%), linear-gradient(180deg, #45a3e4 50%, #fff 50%)",
          }}
        >
          <div
            className="circle__progress-img"
            style={{
              backgroundImage:
                "url(https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5bcffaeab823417be2a23023_east_africa_crisis_appeal_disastersemergencycomittee_credit_colin-crowley_save-the-children_0.jpg",
            }}
          ></div>
        </div>
        <div className="org__project_item__main pl-12p flex-grow-1">
          <div className="org__project__item__name mb-3p text-dark fw-bold">
            David Abbott
          </div>
          <div className="org__project__item__time fw-light">Today 9am</div>
        </div>
      </div>

      <div className="ms-auto">
        <Button variant="danger">
          Go to Project
        </Button>
      </div>
    </li>
  );
}

export default OrganisationProjectItem;