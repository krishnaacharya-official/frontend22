import ProjectSuggestionItem from "../../molecules/project-suggestion-item";

import "./style.scss";

function ProjectSuggestionList() {
  // this one need to be rendered based on device width
  // can try this solution https://stackoverflow.com/questions/39235506/render-component-in-different-order-depending-on-screen-size-react
  return (
      <ul className="suggested__list d-flex align-items-center list-unstyled mb-0">
        <ProjectSuggestionItem className="me-4"/>
        <ProjectSuggestionItem className="me-4" />
        <ProjectSuggestionItem className="me-4" />
        <ProjectSuggestionItem className="me-4" />
      </ul>

  );
}

export default ProjectSuggestionList;
