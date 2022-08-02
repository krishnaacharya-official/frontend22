import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button } from "react-bootstrap";

// import { IconToggle, RoundedIcon, TagTitle } from "../../Component";
import IconToggle from "../../atoms/icon-toggle"
import RoundedIcon from "../../atoms/rounded-icon"
// import WidgetTitle from "../widget-title"
import TagTitle from "../../atoms/tag-title"


import IconButton from "../../molecules/icon-button";
import ShareWidget from "../share-widget";
import OrganisationWidget from "../organisation-widget";
import moment from "moment";
import helper from "../../../../../Common/Helper";

import "./style.scss";

function OrganisationDetailMain(props) {
  let organizationDetails = props.organizationDetails
  // console.log(organizationDetails)
  let iconClass = organizationDetails?.categoryDetails?.iconDetails?.class.replace('fa-', '')

  return (
    <div className="project__detail-main">
      <div className="mb-4">
        <div className="d-flex align-items-center mb-1">
          <div>
            <TagTitle>Organization</TagTitle>
            <h1 className="project__detail-title mb-0" style={{ textTransform: "capitalize" }}>{organizationDetails?.name}</h1>
          </div>
          <div className="page__logo page__logo--org ms-auto">
            <img
              alt=""
              src={helper.CampaignAdminLogoPath + organizationDetails?.logo}
            />
          </div>
        </div>

        <div className="project__detail-meta d-flex align-items-center mb-2">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={regular("clock")} className="me-1" />
            {/* December 27, 2018 */}
            {moment(organizationDetails?.created_at).format('MMMM DD , Y')}
          </div>
          <div className="d-flex align-items-center ms-2">
            <FontAwesomeIcon
              icon={regular("circle-location-arrow")}
              className="me-1"
            />
            {organizationDetails?.stateDetails?.state}, {organizationDetails?.cityDetails?.city}
          </div>
          <div className="text-light d-flex align-items-center ms-2">
            <IconToggle
              icon={<FontAwesomeIcon icon={regular("bell")} />}
              checkedIcon={<FontAwesomeIcon icon={solid("bell")} />}
              ischecked={props.isFollow}
              name='organization'
              onClickFilter={(e)=>props.followToOrganization(e)}
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
              bgColor={organizationDetails?.categoryDetails?.color}
              size={16}
              className="mr-6p"
              style={{ fontFamily: "fontAwesome", color: "white", fontStyle: "normal" }}
              icon={<i style={{ fontStyle: "normal" }} className={organizationDetails?.categoryDetails?.iconDetails?.class}></i>}
            />
            <span className="fs-6 text-dark fw-bold" style={{ textTransform: "capitalize" }}>{organizationDetails?.categoryDetails?.name}</span>
          </Button>

          {/* <Button
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
          </Button> */}
          <Button
            size="lg"
            variant="secondary"
            className=" text-decoration-none"
          >
            <span className="fs-6" style={{ textTransform: "capitalize" }}>{organizationDetails?.countryDetails?.country}</span>
          </Button>
        </div>

        <h5>{organizationDetails?.headline}</h5>
        <div className="page__paragraph lh-lg">
          {organizationDetails?.description}
        </div>
        <div>
          <IconButton
            variant="link"
            className="text-light text-decoration-none fw-normal px-0 fs-6"
            icon={<FontAwesomeIcon icon={solid("building")} />}
          >
            {organizationDetails?.address}
          </IconButton>
        </div>
      </div>

      <OrganisationWidget tagTitle="Organization" productDetails={organizationDetails?.productsDetails} addToCart={props.addToCart} checkItemInCart={props.checkItemInCart} />

    </div>
  );
}

export default OrganisationDetailMain;
