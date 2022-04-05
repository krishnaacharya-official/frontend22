import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import OrganisationTeamItem from "../../molecules/org-team-item";

import "./style.scss";

const UserAdmin = () => {
  return (
    <div className="mw-600">
      <div className="mb-5">
        <div className="d-flex align-items-start">
          <div className="flex__1">
            <h4 className="fw-bolder">Administrator Status</h4>
            <div className="text-subtext mb-3">
              Enter the code you received to manage an Organization account
            </div>
          </div>
          <Button variant="success" className="btn__xs px-2 rounded-pill ms-2 text-uppercase">Active</Button>
        </div>

        <div className="activate">
          <div className="activate__icon">
            <FontAwesomeIcon icon={regular("fingerprint")} />
          </div>
          <div className="activate__code">
            <input type="text" className="activate__input" name="verifyCode1" />
            <input type="text" className="activate__input" name="verifyCode2" />
            <input type="text" className="activate__input" name="verifyCode3" />
            <input type="text" className="activate__input" name="verifyCode4" />
            <input type="text" className="activate__input" name="verifyCode5" />
          </div>
          <Button variant="info" className="ms-auto">
            Activate
          </Button>
        </div>
      </div>

      <div className="mb-5">
        <h4 className="fw-bolder">Team Members</h4>
        <div className="text-subtext mb-3">
          Yourself and others have access to an Organization account
        </div>

        <div className="d-sm-flex align-items-start">
          <div className="mr-20p">
            <a href="/" className="org__logo">
              <img
                className="img-fluid"
                src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5eb214120d5bdf50b6916eee_5eb2130f68b14aa4239923ed_Tree-Frog-Logo-Mock.png"
                alt=""
              />
            </a>
          </div>
          <ul className="list-unstyeld flex__1 ps-0">
            <OrganisationTeamItem
              showEmail={true}
              rightElement={
                <FontAwesomeIcon
                  icon={regular("shield")}
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
                      icon={regular("shield")}
                      className="text-subtext fs-4 ms-auto"
                    />
                  </Button>
                  <Button variant="danger">Remove</Button>
                </div>
              }
            />
          </ul>
        </div>

        <div className="note note--info">
          If this User Profile is the admin for the associated Admin Profile,
          the user may remove users or transfer administrator privileges here.
        </div>
      </div>
    </div>
  );
};

export default UserAdmin;
