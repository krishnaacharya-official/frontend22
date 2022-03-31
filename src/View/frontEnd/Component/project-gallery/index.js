// import Fancybox from "@components/molecules/fancybox";
// import GalleryImg from "@components/atoms/gallery-img";
import Fancybox from "../fancybox"
import GalleryImg from "../gallery-img"
// import { WidgetTitle, TagTitle } from "@components/atoms";

import WidgetTitle from "../widget-title";
import TagTitle from "../tag-title";

import "./style.scss";

function ProjectGallery(props) {
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
          <GalleryImg
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
          />
        </div>
      </Fancybox>
    </div>
  );
}

export default ProjectGallery;
