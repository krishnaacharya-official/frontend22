import "./style.scss";

const WidgetTitle = (props) => {
  return (
    <h5 className="widget__title mb-3p">
      {props.href ? (
        <a href={props.href} className="text-decoration-none">
          {props.children}
        </a>
      ) : (
        props.children
      )}
    </h5>
  );
};

export default WidgetTitle;
