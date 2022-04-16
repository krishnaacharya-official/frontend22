import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./style.scss";

const FileUpload = () => {
  return (
    <div className="upload__item">
      <div className="upload-wrap">
        <FontAwesomeIcon
          icon={solid("cloud-arrow-up")}
          className="icon-cloud"
        />
        <label htmlFor="videoPicture">
          <input id="videoPicture" type="file" />
        </label>
      </div>
    </div>
  );
};

export default FileUpload;