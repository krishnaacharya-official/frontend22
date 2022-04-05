import { Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./style.scss";

const AddPost = (props) => {
  return (
    <div>
      <div className="d-flex align-items-center flex-grow-1 pb-20p mb-3 border-bottom">
        <Button variant="link" className="me-sm-2 me-1">
          <FontAwesomeIcon
            icon={solid("angle-left")}
            className="text-subtext fs-3"
          />
        </Button>
        <div className="fs-3 fw-bolder me-sm-3 flex__1">Create Item</div>

        <div className="ms-auto">
          <Button
            variant="warning"
            size="lg"
            className="text-white fw-bold fs-6"
          >
            Save as Draft
          </Button>
        </div>
      </div>
      <div className="studio__note d-sm-flex align-items-center py-2 px-3 border rounded mb-5">
        <div className="studio__thumb p-1 mr-20p d-none d-sm-block">
          <img
            className="img-fluid"
            alt=""
            src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5f47d53860aae8b7569f45a7_rocket.svg"
          />
        </div>
        <div className="flex__1 text-light mb-2 text-center text-sm-start">
          <div className="fs-5">
            This category has a free posting limit of 3.
          </div>
          <a
            href="/"
            className="studio__url mt-6p d-flex text-light justify-content-center justify-content-sm-start"
          >
            <FontAwesomeIcon
              icon={regular("circle-location-arrow")}
              className="me-1"
            />
            <div className="fw-semibold fs-7">You have 3 posts remaining</div>
          </a>
        </div>
        <div className="d-grid">
          <Button variant="info" className="btn__upgrade fs-7">
            Upgrade
          </Button>
        </div>
      </div>

      <div>
        <div className="">
          <span>Post Location</span>
          <FontAwesomeIcon icon={solid("angle-right")} />
        </div>
        <Row className="pt-5">
          <Col md="6"></Col>
          <Col md="6"></Col>
        </Row>
      </div>
    </div>
  );
};

export default AddPost;
