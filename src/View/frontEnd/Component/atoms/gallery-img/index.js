import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./style.scss";

function GalleryImg(props) {
  return (
    <div className="gallery__img">
      <div className="gallery__thumb">
        <a
          data-fancybox="gallery"
          href={props.bigImgSrc}
          className="gallery__link"
        >
          <div
            className="gallery__img"
            style={{
              backgroundImage: `url(${props.thumbImgSrc})`,
            }}
          >
            <img className="d-none" src={props.thumbImgSrc} alt="" />
          </div>
          <div className="gallery__hover">
            <FontAwesomeIcon icon={regular("magnifying-glass")} className="zoom__icon" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default GalleryImg;
