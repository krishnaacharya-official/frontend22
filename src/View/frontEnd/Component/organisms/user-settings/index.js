import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";

import Avatar from "../../atoms/avatar";
import LinkedOrg from "../../molecules/linked-org";
import FollowingList from "../wishlist/index";
import UserSettingsList from "./user-settings-list";

import AvatarImg from "../../../../../assets/images/avatar.jpeg";

import "./style.scss";

// class UserSettings extends React.Component {
//   constructor(props) {
//     super(props);
//     state = {
//       wishlist: false,
//       linked_org: false,
//     };
//   }

//   goBack = () => {
//     this.setState({ wishlist: false, linked_org: false });
//   };

//   showWishList = () => this.setState({ wishlist: true });

//   showOrg = () => this.setState({ linked_org: true });

//   render() {
//     const UserButton = React.forwardRef(({ children, onClick }, ref) => {
//       return (
//         <Button
//           ref={ref}
//           variant="link"
//           onClick={(e) => {
//             e.preventDefault();
//             onClick(e);
//           }}
//           className="p-0 d-flex text-decoration-none"
//         >
//           {children}
//         </Button>
//       );
//     });
//     return (
//       <>
//         <Dropdown className="d-flex" autoClose="outside">
//           <Dropdown.Toggle as={UserButton}>
//             <Avatar avatarUrl={AvatarImg} />
//           </Dropdown.Toggle>

//           <Dropdown.Menu className="activity__dropdown w-310 dropdown-top-arrow">
//             <div className="dropdown__inner">
//               <div className="d-flex activity__dropdown-header">
//                 {this.state.wishlist || this.state.linked_org ? (
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

//                 {this.state.wishlist ? (
//                   <div className="fw-bold">Wishlist</div>
//                 ) : this.state.linked_org ? (
//                   <div className="fw-bold">Organizations</div>
//                 ) : (
//                   <div className="d-flex align-items-center w-100">
//                     <Avatar avatarUrl={AvatarImg} />
//                     <Button
//                       href="#"
//                       variant="link"
//                       className="p-0 ms-2 btn__link-dark text-decoration-none"
//                     >
//                       David Abbott
//                     </Button>
//                     <a
//                       href="/leaderboard"
//                       className="btn btn__xs rounded-pill btn__purple ms-auto"
//                     >
//                       <i className="fa-solid fa-narwhal mr-3p"></i>
//                       <span className="text text__badge">Narwhal</span>
//                     </a>
//                   </div>
//                 )}
//               </div>

//               <div className="activity__dropdown-body">
//                 {this.state.wishlist ? (
//                   <FollowingList />
//                 ) : this.state.linked_org ? (
//                   <LinkedOrg />
//                 ) : (
//                   <UserSettingsList
//                     onWishlistClick={this.showWishList}
//                     onOrgClick={this.showOrg}
//                   />
//                 )}
//               </div>

//               <div className="activity__dropdown-footer"></div>
//             </div>
//           </Dropdown.Menu>
//         </Dropdown>
//       </>
//     );
//   }
// }

const UserSettings = () => {
  const [state, setState] = useState({
    wishlist: false,
    linked_org: false,
  })

  const goBack = () => {
    setState({...state, wishlist: false, linked_org: false });
  };

  const showWishList = () => setState({...state, wishlist: true });

  const showOrg = () => setState({...state, linked_org: true });

  const UserButton = React.forwardRef(({ children, onClick }, ref) => {
    return (
      <Button
        ref={ref}
        variant="link"
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        className="p-0 d-flex text-decoration-none"
      >
        {children}
      </Button>
    );
  });

  return (
    <>
      <Dropdown className="d-flex" autoClose="outside">
        <Dropdown.Toggle as={UserButton}>
          <Avatar avatarUrl={AvatarImg} />
        </Dropdown.Toggle>

        <Dropdown.Menu className="activity__dropdown w-310 dropdown-top-arrow">
          <div className="dropdown__inner">
            <div className="d-flex activity__dropdown-header">
              {state.wishlist || state.linked_org ? (
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

              {state.wishlist ? (
                <div className="fw-bold">Wishlist</div>
              ) : state.linked_org ? (
                <div className="fw-bold">Organizations</div>
              ) : (
                <div className="d-flex align-items-center w-100">
                  <Avatar avatarUrl={AvatarImg} />
                  <Button
                    href="#"
                    variant="link"
                    className="p-0 ms-2 btn__link-dark text-decoration-none"
                  >
                    David Abbott
                  </Button>
                  <a
                    href="/leaderboard"
                    className="btn btn__xs rounded-pill btn__purple ms-auto"
                  >
                    <i className="fa-solid fa-narwhal mr-3p"></i>
                    <span className="text text__badge">Narwhal</span>
                  </a>
                </div>
              )}
            </div>

            <div className="activity__dropdown-body">
              {state.wishlist ? (
                <FollowingList />
              ) : state.linked_org ? (
                <LinkedOrg />
              ) : (
                <UserSettingsList
                  onWishlistClick={()=>showWishList()}
                  onOrgClick={()=>showOrg()}
                />
              )}
            </div>

            <div className="activity__dropdown-footer"></div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default UserSettings;
