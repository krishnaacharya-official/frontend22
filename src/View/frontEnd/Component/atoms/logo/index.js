import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";


// class Logo extends React.Component {
//   render() {
//     return (
//       <a href="/" className="logo-wrap d-flex align-items-center">
//         <img
//           src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/61fed883243c845a8478a637_2022%20(Icon).svg"
//           alt="Donorport Logo Icon"
//           className="logo-icon"
//         />
//         <div className="logo-name ms-1">Donorport</div>
//       </a>
//     );
//   }
// }

const Logo = () =>{
  return (
    <Link to="/" className="logo-wrap d-flex align-items-center text-decoration-none">
      <img
        // src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/61fed883243c845a8478a637_2022%20(Icon).svg"
        src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/62a2a55e87f6544c42fa0e73_2022%20Logo%20Icon%20(2).svg"

        alt="Donorport Logo Icon"
        className="logo-icon"
      />
      <div className="logo-name ms-1">Donorport</div>
      <h4>{location}</h4>
    </Link>
  );

}

export default Logo;
