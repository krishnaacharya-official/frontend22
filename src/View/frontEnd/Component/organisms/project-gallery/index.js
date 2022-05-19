// import Fancybox from "@components/molecules/fancybox";
// import GalleryImg from "@components/atoms/gallery-img";
import Fancybox from "../../molecules/fancybox"
import GalleryImg from "../../atoms/gallery-img"
// import { WidgetTitle, TagTitle } from "@components/atoms";

import WidgetTitle from "../../atoms/widget-title"

import TagTitle from "../../atoms/tag-title"
import helper from "../../../../../Common/Helper"


import "./style.scss";

function ProjectGallery(props) {
  let images = props.images
  return (
    <div className={`${props.className}`}>
      {props.title ? (
        <>
          <TagTitle>Project</TagTitle>
          <WidgetTitle>E03 Virus</WidgetTitle>
        </>
      ) : (
        ""
      )}
      <Fancybox>
        <div className="gallery__container">
          {
            images?.length > 0 &&
            images.slice(0,5).map((img, i) => {
              return (
                <GalleryImg
                  thumbImgSrc={ props.tagTitle==="Project" ? helper.ProjectImagePath + img.image : helper.CampaignProductImagePath+img.image}
                  bigImgSrc={ props.tagTitle==="Project" ? helper.ProjectFullImagePath + img.image : helper.CampaignProductFullImagePath+img.image }
                />
              )
            })
          }
          {/* <GalleryImg
            thumbImgSrc="https://lipsum.app/id/33/200x150"
            bigImgSrc="https://lipsum.app/id/33/1024x768"
          />
          <GalleryImg
            thumbImgSrc="https://lipsum.app/id/34/200x150"
            bigImgSrc="https://lipsum.app/id/34/1024x768"
          />
          <GalleryImg
            thumbImgSrc="https://lipsum.app/id/35/200x150"
            bigImgSrc="https://lipsum.app/id/35/1024x768"
          />
          <GalleryImg
            thumbImgSrc="https://lipsum.app/id/36/200x150"
            bigImgSrc="https://lipsum.app/id/36/1024x768"
          /> */}
        </div>
      </Fancybox>
    </div>
  );
}

export default ProjectGallery;
