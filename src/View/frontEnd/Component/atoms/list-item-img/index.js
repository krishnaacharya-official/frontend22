import "./style.scss";

function ListItemImg(props) {
  return (
    <div className={`list__item-img ${props.icon ? 'me-2' : ''}`}>
      {props.icon ? props.icon : <img src={props.imgSrc} alt="" />}
    </div>
  );
}

export default ListItemImg;
