import React, { useState } from "react";
import { Button, Dropdown, FormControl, InputGroup } from "react-bootstrap";
import { ReactComponent as SearchIcon } from "../../../../assets/svg/search.svg";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "./style.scss";

// class GeoLocation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       locked: false,
//     };
//   }

//   toggleState = () => {
//     this.state.locked
//       ? this.setState({ locked: false })
//       : this.setState({ locked: true });
//   };

//   render() {
//     const ToggleButton = React.forwardRef(({ children, onClick }, ref) => {
//       return (
//         <Button
//           ref={ref}
//           variant="link"
//           onClick={(e) => {
//             e.preventDefault();
//             onClick(e);
//           }}
//           className="p-0 icon__btn text-decoration-none"
//         >
//           {children}
//         </Button>
//       );
//     });
//     return (
//       <>
//         <Dropdown className="d-flex" autoClose="outside">
//           <Dropdown.Toggle as={ToggleButton}>
//             <span className="d-flex align-items-center icon">
//               <i className="fa-solid fa-circle-location-arrow"></i>
//             </span>
//           </Dropdown.Toggle>

//           <Dropdown.Menu className="geo__dropdown dropdown-top-arrow w-310">
//             <div className="dropdown__inner position-relative">
//               <div className="geo_dropdown-top d-flex align-items-center">
//                 <InputGroup className="input-group__alpha">
//                   <InputGroup.Text>
//                     <SearchIcon />
//                   </InputGroup.Text>
//                   <FormControl placeholder="Search" />
//                 </InputGroup>

//                 <div className="geo__distance">
//                   <div className="mapboxgl-ctrl mapboxgl-ctrl__scale me-1">
//                     200 m
//                   </div>
//                 </div>

//                 <div className="geo__lock d-flex align-items-center">
//                   <Button
//                     variant="link"
//                     className="p-0 text-decoration-none mx-auto"
//                     onClick={this.toggleState}
//                   >
//                     <span className="d-flex align-items-center icon">
//                       {this.state.locked ? (
//                         <i className="fa-light fa-lock-open"></i>
//                       ) : (
//                         <i className="fa-solid fa-lock text-success"></i>
//                       )}
//                     </span>
//                   </Button>
//                 </div>
//               </div>
//               <div className="mapboxgl-map"></div>

//               <div className="geo__slider">
//                 <Slider
//                   handleStyle={{
//                     width: "26px",
//                     height: "26px",
//                     border: "none",
//                     background: "#3596F3",
//                     marginTop: "-10px",
//                   }}
//                   railStyle={{ backgroundColor: "#C7E3FB", height: "8px" }}
//                 />
//               </div>

//               <div className="d-grid gap-2 p-2">
//                 <Button variant="success">
//                   Update Results (12)
//                 </Button>
//               </div>
//             </div>
//           </Dropdown.Menu>
//         </Dropdown>
//       </>
//     );
//   }
// }


const GeoLocation = () => {

  const [state, setState] = useState({
    locked: false
  })

  const ToggleButton = React.forwardRef(({ children, onClick }, ref) => {
    return (
      <Button
        ref={ref}
        variant="link"
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        className="p-0 icon__btn text-decoration-none"
      >
        {children}
      </Button>
    );
  });

  const toggleState = () => {
    if(state.locked){
      setState({...state, locked: false })
    }else{
      setState({...state, locked: true });
    }
   
  };

  return (
    <>
      <Dropdown className="d-flex" autoClose="outside">
        <Dropdown.Toggle as={ToggleButton}>
          <span className="d-flex align-items-center icon">
            <i className="fa-solid fa-circle-location-arrow"></i>
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="geo__dropdown dropdown-top-arrow w-310">
          <div className="dropdown__inner position-relative">
            <div className="geo_dropdown-top d-flex align-items-center">
              <InputGroup className="input-group__alpha">
                <InputGroup.Text>
                  <SearchIcon />
                </InputGroup.Text>
                <FormControl placeholder="Search" />
              </InputGroup>

              <div className="geo__distance">
                <div className="mapboxgl-ctrl mapboxgl-ctrl__scale me-1">
                  200 m
                </div>
              </div>

              <div className="geo__lock d-flex align-items-center">
                <Button
                  variant="link"
                  className="p-0 text-decoration-none mx-auto"
                  onClick={()=>toggleState()}
                >
                  <span className="d-flex align-items-center icon">
                    {state.locked ? (
                      <i className="fa-light fa-lock-open"></i>
                    ) : (
                      <i className="fa-solid fa-lock text-success"></i>
                    )}
                  </span>
                </Button>
              </div>
            </div>
            <div className="mapboxgl-map"></div>

            <div className="geo__slider">
              <Slider
                handleStyle={{
                  width: "26px",
                  height: "26px",
                  border: "none",
                  background: "#3596F3",
                  marginTop: "-10px",
                }}
                railStyle={{ backgroundColor: "#C7E3FB", height: "8px" }}
              />
            </div>

            <div className="d-grid gap-2 p-2">
              <Button variant="success">
                Update Results (12)
              </Button>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default GeoLocation;
