import { Button, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
// import OrganisationTeamItem from "@components/molecules/org-team-item";
import OrganisationTeamItem from "../../molecules/org-team-item"

import "./style.scss";

const AdminAdmin = () => {
  return (
    <div className="mw-600">
      <div className="mb-5">
        <h4 className="fw-bolder">Administrators</h4>
        <div className="text-subtext mb-3">
          These users have full access to the account for
          <FontAwesomeIcon
            icon={regular("link")}
            className="text-subtext me-1 ms-2"
          />
          Tree Frog
        </div>

        <div className="d-flex align-items-center gap-2 mb-3">
          <FormControl placeholder="Email" size="lg" />

          <Button variant="info" disabled size="lg" className="rounded fw-bold text-white">
            Invite
          </Button>
          
          <Button variant="outline-primary" size="lg" className="rounded text-nowrap fw-bold">
            1 remaining
          </Button>
        </div>

        <ul className="list-unstyeld flex__1 ps-0">
          <OrganisationTeamItem
            showEmail={true}
            rightElement={
              <FontAwesomeIcon
                icon={solid("shield-halved")}
                className="text-info fs-4 ms-auto"
              />
            }
          />
          <OrganisationTeamItem
            showEmail={true}
            rightElement={
              <div className="d-flex aling-items-center">
                <Button variant="link" className="">
                  <FontAwesomeIcon
                    icon={regular("shield-halved")}
                    className="text-subtext fs-4 ms-auto"
                  />
                </Button>
                <Button variant="danger">Remove</Button>
              </div>
            }
          />
        </ul>

        <div className="px-1 py-20p mt-1 mb-20p fs-7 text-subtext">
          <FontAwesomeIcon
            icon={solid("shield-halved")}
            className="fs-5 text-info me-2"
          />
          The Organization Administrator controls access for Team Members
        </div>

        <div className="note note--info text-dark">
          <FontAwesomeIcon icon={regular('circle-info')} className="text-info me-1"/>
          For support with user admin accounts click here.
        </div>
      </div>

    </div>
  );
};

export default AdminAdmin;
