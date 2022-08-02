import "./style.scss";

const WidgetTitle = (props) => {
  return (
    <div className="project__detail-subtitle mb-12p">
      {props.href ? (
        <div className="text-decoration-none">
          {props.children}
        </div>
      ) : (
        props.children
      )}
    </div>
  );
};

export default WidgetTitle;
