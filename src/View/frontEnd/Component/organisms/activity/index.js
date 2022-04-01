import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import ActivityList from "./activity-list";
import FollowingList from "./following-list";
import NotificationSettings from "../../molecules/notification-settings";

import "./style.scss";

// class Activity extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       empty: false,
//       following: false,
//       settings: false,
//     };
//   }

//   moreClick = () => {
//     this.setState({ following: true });
//   };

//   goBack = () => {
//     this.setState({ following: false, settings: false });
//   };

//   showSettings = () => {
//     this.setState({ settings: true });
//   };

//   render() {
//     const ActivityButton = React.forwardRef(({ children, onClick }, ref) => {
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
//           <Dropdown.Toggle as={ActivityButton} id="dropdown-custom-components">
//             <span className="icon activity-icon d-flex align-items-center">
//               <i className="fa-solid fa-bell"></i>
//             </span>
//           </Dropdown.Toggle>

//           <Dropdown.Menu className="activity__dropdown w-310 dropdown-top-arrow">
//             <div className="dropdown__inner">
//               <div className="d-flex activity__dropdown-header">
//                 {this.state.following || this.state.settings ? (
//                   <Button
//                     variant="link"
//                     className="btn__link-light px-6p text-decoration-none"
//                     onClick={this.goBack}
//                   >
//                     <i className="fa-solid fa-chevron-left"></i>
//                   </Button>
//                 ) : (
//                   ""
//                 )}

//                 <div className="fw-bold">
//                   {this.state.following
//                     ? "Following"
//                     : this.state.settings
//                     ? "Notification Settings"
//                     : "Activity"}
//                 </div>

//                 {!(this.state.following || this.state.settings) ? (
//                   <Button
//                     variant="link"
//                     className="ms-auto view__more-activity btn__link-light px-6p text-decoration-none"
//                     onClick={this.moreClick}
//                   >
//                     <i className="fa-regular fa-ellipsis-stroke-vertical"></i>
//                   </Button>
//                 ) : (
//                   ""
//                 )}
//               </div>

//               <div className="activity__dropdown-body">
//                 {!(this.state.following || this.state.settings) ? (
//                   <div className="activity__controls px-2">
//                     <Button
//                       variant="link"
//                       className="px-0 btn__link-light mark__feed text-decoration-none"
//                     >
//                       Mark all read
//                     </Button>
//                     <Button
//                       variant="link"
//                       className="btn__link-light activity__settings ms-auto px-0"
//                       onClick={this.showSettings}
//                     >
//                       <i className="fa-solid fa-gear"></i>
//                     </Button>
//                   </div>
//                 ) : (
//                   ""
//                 )}

//                 {this.state.following ? <FollowingList /> : this.state.settings ? <NotificationSettings /> : <ActivityList />}
//               </div>

//               <div className="activity__dropdown-footer"></div>
//             </div>
//           </Dropdown.Menu>
//         </Dropdown>
//       </>
//     );
//   }
// }

const Activity = () =>{
  const [state, setState] = useState({
    empty: false,
    following: false,
    settings: false,
  })

const  moreClick = () => {
    setState({...state, following: true });
  };

  const goBack = () => {
    setState({...state,  following: false, settings: false });
  };

  const showSettings = () => {
    setState({...state,settings: true });
  };

  const ActivityButton = React.forwardRef(({ children, onClick }, ref) => {
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

  return (
    <>
      <Dropdown className="d-flex" autoClose="outside">
        <Dropdown.Toggle as={ActivityButton} id="dropdown-custom-components">
          <span className="icon activity-icon d-flex align-items-center">
            <i className="fa-solid fa-bell"></i>
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="activity__dropdown w-310 dropdown-top-arrow">
          <div className="dropdown__inner">
            <div className="d-flex activity__dropdown-header">
              {state.following || state.settings ? (
                <Button
                  variant="link"
                  className="btn__link-light px-6p text-decoration-none"
                  onClick={()=>goBack()}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </Button>
              ) : (
                ""
              )}

              <div className="fw-bold">
                {state.following
                  ? "Following"
                  : state.settings
                  ? "Notification Settings"
                  : "Activity"}
              </div>

              {!(state.following || state.settings) ? (
                <Button
                  variant="link"
                  className="ms-auto view__more-activity btn__link-light px-6p text-decoration-none"
                  onClick={()=>moreClick()}
                >
                  <i className="fa-regular fa-ellipsis-stroke-vertical"></i>
                </Button>
              ) : (
                ""
              )}
            </div>

            <div className="activity__dropdown-body">
              {!(state.following || state.settings) ? (
                <div className="activity__controls px-2">
                  <Button
                    variant="link"
                    className="px-0 btn__link-light mark__feed text-decoration-none"
                  >
                    Mark all read
                  </Button>
                  <Button
                    variant="link"
                    className="btn__link-light activity__settings ms-auto px-0"
                    onClick={()=>showSettings()}
                  >
                    <i className="fa-solid fa-gear"></i>
                  </Button>
                </div>
              ) : (
                ""
              )}

              {state.following ? <FollowingList /> : state.settings ? <NotificationSettings /> : <ActivityList />}
            </div>

            <div className="activity__dropdown-footer"></div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Activity;
