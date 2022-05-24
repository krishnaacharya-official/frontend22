
import { Link } from "react-router-dom";
import "./style.scss";
import helper from "../../../../../Common/Helper";

function ProjectSuggestionItem(props) {
  let project = props.project
  // console.log(project.imageDetails[0].image)
  let imgUrl = helper.ProjectImagePath + project.imageDetails[0].image 
  // console.log(imgUrl)

  return (
    <Link to={"/project/" + project.slug}>
      <li className={`project__suggestion__item pt-12p pb-12p d-sm-flex align-items-center ${props.className}`}>
        <div className="d-flex align-items-center flex-grow-1">
          <div
            className="circle__progress"
            style={{
              background:
                "linear-gradient(0deg, #fff 50%, transparent 50%), linear-gradient(180deg, #45a3e4 50%, #fff 50%)",
            }}
          >
            <div
              className="circle__progress-img"
              style={{
                backgroundImage:
                  "url("+imgUrl+" ",
              }}
            ></div>
          </div>
        </div>
      </li>
    </Link >

  );
}

export default ProjectSuggestionItem;
