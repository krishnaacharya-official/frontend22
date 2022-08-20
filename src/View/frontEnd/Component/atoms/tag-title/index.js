import "./style.scss";

const TagTitle = (props) => {
  return <h5 className="project__detail-sublabel">{props.children}</h5>;
};

export default TagTitle;
