import React from "react";
import "./style.scss";

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
    <a href="/" className="logo-wrap d-flex align-items-center">
      <img
        src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/61fed883243c845a8478a637_2022%20(Icon).svg"
        alt="Donorport Logo Icon"
        className="logo-icon"
      />
      <div className="logo-name ms-1">Donorport</div>
    </a>
  );

}

export default Logo;
