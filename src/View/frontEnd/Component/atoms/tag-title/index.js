import "./style.scss";

const TagTitle = (props) => {
  return <h5 className="project__detail-sublabel mb-0">{props.children}</h5>;
};

export default TagTitle;
