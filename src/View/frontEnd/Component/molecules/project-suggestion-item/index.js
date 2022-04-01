
import "./style.scss";

function ProjectSuggestionItem(props) {
  return (
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
                "url(https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5bcffaeab823417be2a23023_east_africa_crisis_appeal_disastersemergencycomittee_credit_colin-crowley_save-the-children_0.jpg",
            }}
          ></div>
        </div>
      </div>
    </li>
  );
}

export default ProjectSuggestionItem;
