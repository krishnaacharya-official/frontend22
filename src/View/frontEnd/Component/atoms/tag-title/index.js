import "./style.scss";

const TagTitle = (props) => {
  return <h4 className="project__detail-sublabel mb-0" style={{fontWeight: "900"}}>{props.children}</h4>;
};

export default TagTitle;
