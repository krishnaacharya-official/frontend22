import { Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

// import { ToggleSwitch, FeedTag, FileUpload } from "@components/atoms";

import ToggleSwitch from "../../atoms/toggle-switch";
import FeedTag from "../../atoms/feed-tag";
import FileUpload from "../../atoms/file-upload";
import helper from "../../../../../Common/Helper";
// import noimg from "../../../assets/images/noimg.jpg"
import noimg from '../../../../../assets/images/noimg.jpg'

import "./style.scss";

const AddProject = (props) => {

  const { id, status, name, headline, video, description, error, images, infinite } = props.stateData

  let url = video;
  let videoid = url.split("?v=")[1];
  let embedlink = url ? "http://www.youtube.com/embed/" + videoid : "";


  let tempImages = props.tempImages
  let projectImages = props.projectImages
  let changefile = props.changefile
  let productList = props.productList
  let seletedProductList = props.seletedProductList
  let onSelectProduct = props.onSelectProduct
  let submitProjectForm = props.submitProjectForm
  let discardProject = props.discardProject







  return (
    <div className="add__project">
      <div className="d-sm-flex align-items-center flex-grow-1 pb-20p mb-3 border-bottom">
        <div className="d-flex align-items-center mb-2 mb-sm-0 flex__1">
          <Button variant="link" className="me-sm-2 me-1" onClick={() => props.createProject(false)}>
            <FontAwesomeIcon
              icon={solid("angle-left")}
              className="text-subtext fs-3"
            />
          </Button>
          <span className="fs-3 fw-bolder me-sm-3">Create Project</span>
          <Button
            variant="link"
            className="text-decoration-none ms-auto ms-sm-0"
          >
            <FontAwesomeIcon
              icon={solid("circle-question")}
              className="text-dark fs-4"
            />
          </Button>
        </div>

        <Button
          variant="warning"
          size="lg"
          className="text-white fw-bold fs-6 ms-sm-auto btn__draft"
          onClick={() => submitProjectForm(-1)}
        >
          Save as Draft
        </Button>
      </div>
      <div className="studio__note d-sm-flex align-items-center py-2 px-3 border rounded mb-5">
        <div className="studio__thumb p-1 mr-20p d-none d-sm-block">
          <img
            className="img-fluid"
            alt=""
            src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5f47d53860aae8b7569f45a7_rocket.svg"
          />
        </div>
        <div className="flex__1 text-light mb-2 mb-sm-0 text-center text-sm-start">
          <div className="fs-5">Your account allows up to 3 projects</div>
          <a
            href="/"
            className="studio__url mt-6p d-flex text-light justify-content-center justify-content-sm-start"
          >
            <FontAwesomeIcon
              icon={regular("circle-location-arrow")}
              className="me-1"
            />
            <div className="fw-semibold fs-7">
              You have 0 projects remaining
            </div>
          </a>
        </div>
        <div className="d-grid">
          <Button variant="info" className="btn__upgrade fs-7">
            Upgrade
          </Button>
        </div>
      </div>

      <div className="d-flex py-2 border-bottom">
        <h3 className="mb-0 fw-bolder me-2">Project Details</h3>
        <div className="me-2">
          <ToggleSwitch id="infinite" checked={infinite} name="infinite" changevalue={props.changevalue} />
        </div>
        <div className="d-flex align-items-center">
          <div className="bg-purple text-nowrap fs-8 fw-semibold rounded-3 p-6p text-white">
            Ongoing Need
            <FontAwesomeIcon icon={solid("infinity")} className="ml-3p" />
          </div>
        </div>
      </div>
      <Row className="mw-850 py-5">
        <Col lg="6">
          <form className="profile-detail-form">
            <div className="form-group border-bottom mb-2">
              <label htmlFor="headlineInput" className="form__label">
                Name
              </label>
              <input
                type="text"
                className="form-control form-control-lg mb-2"
                // id="headlineInput"
                placeholder="Christmas Drive"
                name='name' id="name" value={name} onChange={(e) => { props.changevalue(e) }}
              />
              {error && error.name && <p className="error">{error ? error.name ? error.name : "" : ""}</p>}
              <div className="text-light fs-8 pb-2 mb-1">
                <span>120</span> chars remaining
              </div>
            </div>
            <div className="form-group border-bottom mb-4">
              <label htmlFor="brandInput" className="form__label">
                Headline
              </label>
              <input
                type="text"
                className="form-control form-control-lg mb-2"
                // id="brandInput"
                placeholder="Feeding the homeless every Friday night"
                name='headline' id="headline" value={headline} onChange={(e) => { props.changevalue(e) }}
              />
              {error && error.headline && <p className="error">{error ? error.headline ? error.headline : "" : ""}</p>}

              <div className="text-light fs-8 pb-2 mb-1">
                <span>120</span> chars remaining
              </div>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="brandInput" className="form__label">
                Description
              </label>
              <input
                type="text"
                className="form-control form-control-lg mb-2"
                // id="brandInput"
                placeholder="Enter some details about your need"
                name='description' id="description" value={description} onChange={(e) => { props.changevalue(e) }}
              />
              {error && error.description && <p className="error">{error ? error.description ? error.description : "" : ""}</p>}

              <div className="text-light fs-8 pb-2 mb-1">
                <span>240</span> chars remaining
              </div>
            </div>
          </form>
        </Col>
        <Col lg="6">
          <form className="video-detail-form">
            <div className="form-group mb-2">
              <label htmlFor="videoInput" className="form__label">
                Pictures & Video
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                // id="videoInput"
                placeholder="Video URL"
                name='video' id="video" value={video} onChange={(e) => { props.changevalue(e) }}
              />
              {error && error.video && <p className="error">{error ? error.video ? error.video : "" : ""}</p>}
            </div>
            <div className="project-video-wrap mb-4">
              <iframe src={embedlink} title="YouTube video player"></iframe>
            </div>
            {/* <div className="">
              <div className="upload-picture-video-block mb-2">
                <FileUpload />
                <FileUpload />
                <FileUpload />
                <FileUpload />
                <FileUpload />
              </div>
            </div> */}
            <div className="d-flex align-items-center flex-wrap gap-2 mb-3">
              <div className="upload-wrap" style={{ width: "100%" }}>
                <FontAwesomeIcon
                  icon={solid("cloud-arrow-up")}
                  className="icon-cloud"
                />
                <label >
                  <input name='moreImg[]' id='moreImg' type="file" accept=".jpg,.gif,.png" multiple onChange={(e) => { props.changefile(e) }} />
                </label>
              </div>
              {error && error.moreImg && <p className='error'>{error ? error.moreImg ? error.moreImg : "" : ""}</p>}
              <div className='grid mt-3 mb-3' style={{ display: "contents" }}>
                {tempImages?.length ?
                  tempImages.map((img, key) => {
                    return (
                      <img src={img ? img : noimg} alt="lk" style={{ width: "100px", height: "100px" }} />
                    )

                  })

                  :
                  projectImages?.length ?
                    projectImages.map((img, key) => {
                      return (
                        <img src={img ? img !== "" ? helper.ProjectImagePath + img : noimg : noimg} alt="lk" style={{ width: "100px", height: "100px" }} />
                      )

                    })
                    : ""

                }

              </div>

              {error && error.images && <p className="error">{error ? error.images ? error.images : "" : ""}</p>}


            </div>
          </form>
        </Col>
      </Row>

      <div className="d-flex py-2 border-bottom mb-4">
        <h3 className="d-flex align-items-center mb-0 fw-bolder me-1">
          Select Products
        </h3>
        <span className="d-flex align-items-center text-light me-2">(0)</span>
        <Button variant="info">Create New</Button>
      </div>
      <div className="d-flex flex-wrap mb-3 p-20p border rounded-3">

        {
          productList.length > 0 &&
          productList.map((product, i) => {
            return (
              <FeedTag
                data={product} name={product.headline} onSelect={onSelectProduct} checked={seletedProductList.includes(product._id)}
                icon={
                  <img
                    src={helper.CampaignProductImagePath + product.image}
                    alt=""
                  />
                }
              />
            )
          })
        }
        

        {/* <FeedTag
          border={true}
          icon={
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c26551110ec14dd05ef15_image%20(1).png"
              alt=""
            />
          }
        />
        <FeedTag
          border={true}
          icon={
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c86a9da1a12a5c3a4ffea06_Glasses-PNG-Image-with-Transparent-Background.png"
              alt=""
            />
          }
        />
        <FeedTag
          border={true}
          icon={
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c24cdbda7359a71d94025_aj1_top3.png"
              alt=""
            />
          }
        />
        <FeedTag
          border={true}
          icon={
            <img
              src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c24f9fd28a7ccebf49f8d_lpk25_web_large_700x438.png"
              alt=""
            />
          }
        /> */}
      </div>
      {error && error.products && <p className="error">{error ? error.products ? error.products : "" : ""}</p>}
      <div>
        <div className="products-detial-footer d-sm-flex py-3 py-sm-5">
          <Button
            variant="danger"
            size="lg"
            className="fw-bold fs-6 mb-2 mb-sm-0"
            onClick={()=>discardProject()}
          >
            Disregard
          </Button>
          <Button variant="success" size="lg" className="fw-bold fs-6" onClick={() => submitProjectForm(1)}>
            {!id ? "Create Project":"Update Project"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddProject;