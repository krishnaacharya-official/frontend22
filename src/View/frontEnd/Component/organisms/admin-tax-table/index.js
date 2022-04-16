import { Button, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  light,
} from "@fortawesome/fontawesome-svg-core/import.macro";

// import Avatar from "@components/atoms/avatar";
// import AvatarImg from "@assets/images/avatar.jpeg";


import Avatar from "../../atoms/avatar";
import AvatarImg from "../../../../../assets/images/avatar.jpeg"

import "./style.scss";

const AdminTaxTable = () => {
  return (
    <>
      <div className="admin__tax-table list__table mb-4">
        <div className="list__table-sort d-flex justify-content-sort">
          <div className="flex__1">
            <Button
              variant="link"
              className="btn__sort px-0 text-decoration-none"
            >
              Date
              <FontAwesomeIcon
                icon={solid("angle-up")}
                className="small ml-6p"
              />
            </Button>
          </div>
          <Button
            variant="link"
            className="btn__sort px-0 text-decoration-none"
          >
            Status
            <FontAwesomeIcon
              icon={solid("angle-down")}
              className="small ml-6p"
            />
          </Button>
        </div>
        <ul className="list-unstyled mb-0 list__table-list">
          <li className="table__list-item p-2">
            <div className="d-sm-flex align-items-center flex-grow-1">
              <div className="d-flex align-items-center me-sm-2 mb-1 mb-sm-0">
                <div className="admin__billing-value ms-2 ms-sm-0 me-sm-2">
                  <div className="text-success fw-bold fs-5">$5</div>
                  <div className="text-light fs-8">about a year ago</div>
                </div>
                <div className="position-relative d-flex">
                  <Avatar
                    size={62}
                    avatarUrl={AvatarImg}
                    border={0}
                    shadow={false}
                    className="mr-12p"
                  />
                </div>
                <div className="text__wrap mw-200">
                  <div className="fw-bolder fs-5">Jessica Hopper</div>
                  <div className="fs-7 text-light mb-6p">name@email.com</div>
                  <div className="fs-7 text-light">
                    255 West Baker St.
                    <br /> Dallas TX, USA 118098
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center flex__1 mb-1 mb-sm-0">
                <div className="pe-1 p-sm-2 mr-12p">
                  <img
                    loading="lazy"
                    width={36}
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/6005ba4366767589aa5a9f09_5ecc698a8164c2821bc91f84_Classic_topview-500x392.png"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <Button variant="link" className="text-dark px-0 py-3p">
                      Dinner Drive
                    </Button>
                  </div>
                  <div className="text-light fs-7">
                    <FontAwesomeIcon
                      icon={regular("wallet")}
                      className="mr-3p"
                    />
                    Bought 4
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center ms-sm-2 btn__wrap">
                <Button
                  variant="link"
                  className="d-flex align-items-center p-0 text-decoration-none me-2"
                >
                  <FontAwesomeIcon
                    icon={solid("file-arrow-up")}
                    className="text-success fs-3"
                  />
                  <div className="ps-2">
                    <div className="file__name text-dark mb-3p fw-normal">
                      receipt_92304.jpg
                    </div>
                    <div className="text-light fs-7 fw-normal">
                      3 days ago - 1.3 Mb
                    </div>
                  </div>
                </Button>
                <Dropdown className="d-flex ms-auto" autoClose="outside">
                  <Dropdown.Toggle
                    variant="link"
                    className="no-caret text-decoration-none"
                  >
                    <FontAwesomeIcon
                      icon={regular("ellipsis-vertical")}
                      className="text-light fs-3"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="">
                    <Dropdown.Item className="d-flex align-items-center p-2">
                      <span className="fw-bold fs-7 flex__1">View</span>
                      <FontAwesomeIcon
                        icon={solid("magnifying-glass")}
                        className="ms-1"
                      />
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="d-flex align-items-center p-2">
                      <span className="fw-bold fs-7 flex__1">Edit</span>
                      <FontAwesomeIcon icon={light("pen")} className="ms-1" />
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="d-flex align-items-center p-2">
                      <span className="fw-bold fs-7 flex__1">Delete</span>
                      <FontAwesomeIcon
                        icon={regular("trash")}
                        className="ms-1"
                      />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </li>
          <li className="table__list-item p-2">
            <div className="d-sm-flex align-items-center flex-grow-1">
              <div className="d-flex align-items-center me-sm-2 mb-1 mb-sm-0">
                <div className="admin__billing-value ms-2 ms-sm-0 me-sm-2">
                  <div className="text-success fw-bold fs-5">$5</div>
                  <div className="text-light fs-8">about a year ago</div>
                </div>
                <div className="position-relative d-flex">
                  <Avatar
                    size={62}
                    avatarUrl={AvatarImg}
                    border={0}
                    shadow={false}
                    className="mr-12p"
                  />
                </div>
                <div className="text__wrap mw-200">
                  <div className="fw-bolder fs-5">Jessica Hopper</div>
                  <div className="fs-7 text-light mb-6p">name@email.com</div>
                  <div className="fs-7 text-light">
                    255 West Baker St.
                    <br /> Dallas TX, USA 118098
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center flex__1 mb-1 mb-sm-0">
                <div className="pe-1 p-sm-2 mr-12p">
                  <img
                    loading="lazy"
                    width={36}
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/6005ba4366767589aa5a9f09_5ecc698a8164c2821bc91f84_Classic_topview-500x392.png"
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <Button variant="link" className="text-dark px-0 py-3p">
                      Dinner Drive
                    </Button>
                  </div>
                  <div className="text-light fs-7">
                    <FontAwesomeIcon
                      icon={regular("wallet")}
                      className="mr-3p"
                    />
                    Bought 4
                  </div>
                </div>

                <Button variant="warning" className="d-flex align-items-center ms-auto text-white">
                  <FontAwesomeIcon icon={regular("clock")} className="me-1" />
                  Upload
                </Button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminTaxTable;
