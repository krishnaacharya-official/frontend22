import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Button, ProgressBar } from 'react-bootstrap';

// import { IconToggle, RoundedIcon, TagTitle } from "@components/atoms";
// import {
//   ShareWidget,
//   OrganisationWidget,
//   ProjectGallery,
//   OrganisationTeamWidget,
// } from "../Components/organisms";

import ShareWidget from '../share-widget';
import OrganisationWidget from '../organisation-widget';
import ProjectGallery from '../project-gallery';
import OrganisationTeamWidget from '../org-team-widget';
// import IconButton from "../../molecules/icon-button";
import RoundedIcon from '../../atoms/rounded-icon';
import TagTitle from '../../atoms/tag-title';
import IconToggle from '../../atoms/icon-toggle';
// import helper from "../../../../../Common/Helper";
import noImg from '../../../../../assets/images/noimg.jpg';
import moment from 'moment';
import helper, { getCalculatedPrice, priceFormat, isIframe } from '../../../../../Common/Helper';

import './style.scss';
import { Link } from 'react-router-dom';

function ProjectDetailMain(props) {
  let projectDetails = props.projectDetails;
  let productDetails = props.productDetails;
  let video = projectDetails?.video;
  // let videoid = url ? url.split("?v=")[1] : "";
  // let embedlink = url ? "http://www.youtube.com/embed/" + videoid : "";

  // const countProjectProcess = (data) => {
  //   // console.log(data)
  //   let totalQArray = []
  //   let soldOutQArray = []
  //   let per = 0

  //   if (data?.length > 0) {
  //     data.map((p, i) => {
  //       // console.log(p.itemDetails)
  //       totalQArray.push(Number(p.itemDetails.quantity))
  //       soldOutQArray.push(Number(p.itemDetails.soldout))
  //     })

  //     const total = totalQArray.reduce((partialSum, a) => partialSum + a, 0);
  //     const soldout = soldOutQArray.reduce((partialSum, a) => partialSum + a, 0);

  //     per = soldout / total * 100
  //   } else {
  //     per = 0;

  //   }
  //   return Math.round(per);

  // }

  // const countProjectProcess = (data) => {
  //   // console.log(data)
  //   let totalQArray = [];
  //   let soldOutQArray = [];
  //   let per = 0;

  //   if (data?.length > 0) {
  //     data.map((p, i) => {
  //       // console.log(p.itemDetails)
  //       if (!p.itemDetails.unlimited) {
  //         totalQArray.push(Number(p.itemDetails.quantity));
  //         soldOutQArray.push(Number(p.itemDetails.soldout));
  //       }
  //     });

  //     const total = totalQArray.reduce((partialSum, a) => partialSum + a, 0);
  //     const soldout = soldOutQArray.reduce((partialSum, a) => partialSum + a, 0);
  //     if (soldout === 0 || total === 0) {
  //       per = 0;
  //     } else {
  //       per = (Number(soldout) / Number(total)) * 100;
  //     }
  //   } else {
  //     per = 0;
  //   }
  //   return Math.round(per);
  // };

  const countProjectProcess = (data) => {
    let allProductPer = [];

    let per = 0;

    if (data?.length > 0) {
      data.map((p, i) => {
        if (!p.itemDetails.unlimited) {
          let itm = (Number(p.itemDetails.soldout) / Number(p.itemDetails.quantity)) * 100;
          allProductPer.push(itm);
        } else {
          allProductPer.push(0);
        }
      });

      const total = allProductPer.reduce((partialSum, a) => partialSum + a, 0);
      per = total / allProductPer.length;
      per = Math.round(per);
    } else {
      per = 0;
    }
    return Math.round(per);
  };

  // console.log(projectDetails)
  return (
    <div className="project__detail-main">
      <div className="d-flex flex-column mb-4">
        <div className="d-flex align-items-center mb-1">
          <div>
            <TagTitle>Project</TagTitle>
            <h1 className="project__detail-title text-dark">{projectDetails.name}</h1>
          </div>
          {/* <div className="page__logo page__logo--org ms-auto">
            <img
              alt=""
              src={
                projectDetails?.campaignDetails?.logo
                  ? helper.CampaignAdminLogoPath + projectDetails?.campaignDetails?.logo
                  : noImg
              }
            />
          </div> */}
        </div>

        <div className="project__detail-meta d-flex align-items-center mb-2">
          <div className="d-flex align-items-center me-2">
            <FontAwesomeIcon icon={regular('clock')} className="me-1" />
            {/* December 27, 2018 */} {moment(projectDetails.created_at).format('MMMM DD , YYYY')}
          </div>
          <div className="d-flex align-items-center me-2">
            <FontAwesomeIcon icon={regular('circle-location-arrow')} className="me-1" />
            {projectDetails?.campaignDetails?.address}
          </div>
        </div>

        <div className="product__top px-0 mb-1 d-flex align-items-center">
          <div className="d-flex align-items-center w-310">
            <ProgressBar
              variant={projectDetails.infinity ? 'infinity' : 'success'}
              now={countProjectProcess(projectDetails.productDetails)}
              className="flex-grow-1 me-1"
            />
            {projectDetails.infinity ? (
              <span className="tag tag__ongoing tag__rounded fs-9">
                <FontAwesomeIcon icon={regular('infinity')} />
              </span>
            ) : (
              <span className="text-light">
                {countProjectProcess(projectDetails.productDetails)}%
              </span>
            )}
          </div>
          <div className="text-light d-flex align-items-center ms-3">
            <IconToggle
              icon={<FontAwesomeIcon icon={regular('bell')} />}
              checkedIcon={<FontAwesomeIcon icon={solid('bell')} />}
              onClickFilter={(e) => props.followToProject(e)}
              name="Project"
              ischecked={props.isFollow}
            />

            <ShareWidget />
          </div>
        </div>

        <div className="category__icons d-flex align-items-center mb-4 order--1 order-sm-0">
          {/*} <Button
            size="lg"
            variant="link"
            className="btn__category text-decoration-none btn btn-link btn-lg"
          >
            <RoundedIcon
              bgColor="#c13e40"
              size={16}
              className="mr-6p"
              icon={<FontAwesomeIcon icon={solid("briefcase-medical")} />}
            />
            <span className="fs-6 text-dark fw-bold">Shelter</span>
            </Button>*/}

          <Link
            size="lg"
            variant="link"
            className="btn__category text-decoration-none btn btn-link btn-lg"
            to={'/categories/' + projectDetails?.campaignDetails?.categoryDetails?.slug}
          >
            <span className="d-flex align-items-center icon__category">
              {/* <img
                alt=""
                className="img-fluid"
                src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c38e4fd28a71363f4ac5d_Tree-Frog-Logo-Mock.png"
              /> */}
              {/* <img
                alt=""
                className="img-fluid"
                src={
                  projectDetails?.campaignDetails?.logo
                    ? helper.CampaignAdminLogoPath + projectDetails?.campaignDetails?.logo
                    : noImg
                }
              /> */}

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512">
                <path
                  d={projectDetails?.campaignDetails?.categoryDetails?.icon}
                  fill={projectDetails?.campaignDetails?.categoryDetails?.color}
                ></path>{' '}
              </svg>
            </span>
            <span className="fs-6 text-dark fw-bold ms-1" style={{ textTransform: 'capitalize' }}>
              {projectDetails?.campaignDetails?.categoryDetails?.name}
            </span>
          </Link>
          <Link
            size="lg"
            variant="link"
            className="btn__category text-decoration-none btn btn-link btn-lg"
            to={'/organization/' + projectDetails?.campaignDetails?.slug}
          >
            <span className="d-flex align-items-center icon__category">
              {/* <CategoryIcon /> */}
              {/* <div className="page__logo page__logo--org ms-auto" > */}
              <img
                alt=""
                style={{ width: 'auto', maxHeight: '90%', maxWidth: '90%' }}
                src={helper.CampaignAdminLogoPath + projectDetails?.campaignDetails?.logo}
              />
              {/* </div> */}
            </span>
            <span className="fs-6 text-dark fw-bold ms-1" style={{ textTransform: 'capitalize' }}>
              {projectDetails?.campaignDetails?.name}
            </span>
          </Link>
        </div>
        {/*   <div className="iframe__wrapper">
          {/* <iframe
            className="embedly-embed"
            src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FdR0C1C0WaCA%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdR0C1C0WaCA&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FdR0C1C0WaCA%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube"
            width="854"
            height="480"
            scrolling="no"
            title="YouTube embed"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe> */}
        {/* <iframe src={embedlink} title="YouTube video player"
            width="854"
            height="480"
            scrolling="no"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe> */}

        {/*

        </div>*/}

        {video && isIframe(video) && (
          <div
            className="project-video-wrap mb-4"
            dangerouslySetInnerHTML={{ __html: video }}
          ></div>
        )}

        {projectDetails?.images && projectDetails?.images.length > 0 && (
          <ProjectGallery
            className="mb-3"
            title={false}
            images={projectDetails?.images}
            tagTitle="Project"
          />
        )}

        <h4 className="page__blurb">{projectDetails.headline}</h4>
        <div className="page__paragraph">{projectDetails.description}</div>
      </div>
      {/* <div className="mb-4">
        <OrganisationTeamWidget tagTitle="Project" showEmail={false} showContact />
      </div> */}
      <OrganisationWidget
        tagTitle="Project"
        productDetails={projectDetails.productDetails}
        addToCart={props.addToCart}
        checkItemInCart={props.checkItemInCart}
      />
    </div>
  );
}

export default ProjectDetailMain;
