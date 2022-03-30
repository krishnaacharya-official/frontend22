import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button } from "react-bootstrap";

// import { IconToggle, RoundedIcon, TagTitle } from "../../Component";
import IconToggle from "../icon-toggle"
import RoundedIcon from "../rounded-icon"
// import WidgetTitle from "../widget-title"
import TagTitle from "../tag-title"

import IconButton from "../icon-button";
import ShareWidget from "../share-widget";
import OrganisationWidget from "../org-projects-widget";

import "./style.scss";

function OrganisationDetailMain(props) {
  return (
    <div className="project__detail-main">
      <div className="mb-4">
        <div className="d-flex align-items-center mb-1">
          <div>
            <TagTitle>Organization</TagTitle>
            <h1 className="project__detail-title mb-0">Red Cross</h1>
          </div>
          <div className="page__logo page__logo--org ms-auto">
            <img
              alt=""
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5ebcb0c93fcd2a0d1b6f822d_Red_Cross_icon.svg"
            />
          </div>
        </div>

        <div className="project__detail-meta d-flex align-items-center mb-2">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={regular("clock")} className="me-1" />
            December 27, 2018
          </div>
          <div className="d-flex align-items-center ms-2">
            <FontAwesomeIcon
              icon={regular("circle-location-arrow")}
              className="me-1"
            />
            Toronto, ON
          </div>
          <div className="text-light d-flex align-items-center ms-2">
            <IconToggle
              icon={<FontAwesomeIcon icon={regular("bell")} />}
              checkedIcon={<FontAwesomeIcon icon={solid("bell")} />}
            />

            <ShareWidget />
          </div>
        </div>

        <div className="category__icons d-flex align-items-center mb-2">
          <Button
            size="lg"
            variant="link"
            className="btn__category text-decoration-none"
          >
            <RoundedIcon
              bgColor="#c13e40"
              size={16}
              className="mr-6p"
              icon={<FontAwesomeIcon icon={solid("briefcase-medical")} />}
            />
            <span className="fs-6 text-dark fw-bold">Shelter</span>
          </Button>

          <Button
            size="lg"
            variant="link"
            className="btn__category text-decoration-none"
          >
            <span className="d-flex align-items-center icon__category">
              <img
                alt=""
                className="img-fluid"
                src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c38e4fd28a71363f4ac5d_Tree-Frog-Logo-Mock.png"
              />
            </span>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className=" text-decoration-none"
          >
            <span className="fs-6">Shelter</span>
          </Button>
        </div>

        <h5>Personal tents for the homeless in Alberta, Canada</h5>
        <div className="page__paragraph lh-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div>
          <IconButton
            variant="link"
            className="text-light text-decoration-none fw-normal px-0 fs-6"
            icon={<FontAwesomeIcon icon={solid("building")} />}
          >
            A 501(c)(3) nonprofit, EIN 59-2751953
          </IconButton>
        </div>
      </div>

      <OrganisationWidget />

    </div>
  );
}

export default OrganisationDetailMain;
