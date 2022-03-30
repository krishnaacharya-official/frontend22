import React from "react";
import { Button } from "react-bootstrap";

import Avatar from "../avatar/index";

import "./style.scss";

function LinkedOrg() {
  return (
    <div className="linked-org">
      <div className="menu__title">
        <h6 className="mb-0">Linked</h6>
      </div>
      <ul className="linked-list list-unstyled mb-0">
        <li className="linked__item py-2 d-flex align-items-center">
          <Button
            variant="link"
            href="/administrator/tree-frog"
            className="linked__item-link py-0 d-flex align-items-center flex-grow-1 text-decoration-none"
          >
            <div className="linked__item-img-wrap">
              <img
                className="linked__item-img img-fluid" alt="a"
                src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c38e4fd28a71363f4ac5d_Tree-Frog-Logo-Mock.png"
              />
            </div>
            <div className="linked__item-label fs-7 fw-bold pl-12p">
              Tree Frog
            </div>
          </Button>
          <Button
            variant="link"
            className="btn__link-light linked__item-unlink ms-auto fs-7 me-1 fw-normal"
          >
            unlink
          </Button>
        </li>
        <li className="linked__item py-2 d-flex align-items-center">
          <Button
            variant="link"
            href="/administrator/tree-frog"
            className="linked__item-link py-0 d-flex align-items-center flex-grow-1 text-decoration-none"
          >
            <div className="linked__item-img-wrap">
              <img
                className="linked__item-img img-fluid"alt="a"
                src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5c2c38e4fd28a71363f4ac5d_Tree-Frog-Logo-Mock.png"
              />
            </div>
            <div className="linked__item-label fs-7 fw-bold pl-12p">
              Tree Frog
            </div>
          </Button>
          <Button
            variant="link"
            className="btn__link-light linked__item-unlink ms-auto fs-7 me-1 fw-normal"
          >
            unlink
          </Button>
        </li>
      </ul>
      <div className="menu__title">
        <h6 className="mb-0">Team</h6>
      </div>
      <ul className="linked-list list-unstyled mb-0">
        <li className="linked__item py-2">
          <div className="linked__item-link px-12p d-flex align-items-center flex-grow-1">
            <Avatar
              size={50}
              border={0}
              shadow={false}
              avatarUrl="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5d3f994a03c3fe76a42633a6_1.jpg"
            />
            <div className="linked__item-label fs-7 fw-bold pl-12p">
              <div className="mb-3p">Lindsey Rouche</div>
              <div className="team__role fs-7 fw-normal">active</div>
            </div>
          </div>
        </li>
      </ul>
      <div className="menu__title">
        <h6 className="mb-0 fs-7">Add an Organization</h6>

        <Button
          variant="link"
          className="p-0 btn__link-light linked__item-unlink ms-auto fs-7 me-1 fw-normal"
        >
          request access
        </Button>
      </div>
      <div className="activate">
        <div className="activate__icon">
          <i className="fa-regular fa-fingerprint "></i>
        </div>
        <div className="activate__code">
          <input
            type="text"
            className="activate__input"
            name="verifyCode1"
          />
          <input
            type="text"
            className="activate__input"
            name="verifyCode2"
          />
          <input
            type="text"
            className="activate__input"
            name="verifyCode3"
          />
          <input
            type="text"
            className="activate__input"
            name="verifyCode4"
          />
          <input
            type="text"
            className="activate__input"
            name="verifyCode5"
          />
        </div>
        <Button variant="info" className="ms-auto">
          Activate
        </Button>
      </div>
    </div>
  );
}

export default LinkedOrg;
