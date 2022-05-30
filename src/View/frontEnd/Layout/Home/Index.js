import Header from "../../Component/organisms/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import {
  Button,
  Container,
  Row,
  Col,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import {
  Product,
  GrabDropdown,
  FilterDropdown,
  LadderMenu
} from "../../Component/organisms";

import "./style.scss";
import HeaderController from "../../../../Controller/frontEnd/HeaderController";
import React, { useState } from "react";

export default function Index(props) {
  // const [selectedKey, setSelectedKey] = useState(3)
  const selectedKey = props.selectedKey
  const setSelectedKey = props.setSelectedKey

  let products;
  const title = {
    color: "#6b68f8"
  };

  if (props.productList && props.productList.length > 0) {
    products = props.productList.map((item, index) => {
      return (
        item.status === 1 &&
        <Col sm="6" md="4" lg="3" className="mb-2" key={index}>
          <Product {...item} addToCart={props.addToCart} removeCartItem={props.removeCartItem} checkItemInCart={props.checkItemInCart} pricingFees={props.pricingFees} />
        </Col>
      );
    });
  } else {
    products = (
      <div className="container">
        <h1 style={title} >Products Not Found</h1>
      </div>

    )

  }

  const items = [
    <div className="fw-semibold text-dark"  >
      Price: Low to High
      <span className="ms-2">
        <FontAwesomeIcon icon={solid("dollar-sign")} />
        <FontAwesomeIcon icon={solid("down")} className="ml-3p" />
      </span>
    </div>,

    <div className="fw-semibold text-dark"  >
      Price: High to Low
      <span className="ms-2">
        <FontAwesomeIcon icon={solid("dollar-sign")} />
        <FontAwesomeIcon icon={solid("up")} className="ml-3p" />
      </span>
    </div>,

    <div className="fw-semibold text-dark"  >
      Oldest
    </div>,

    <div className="fw-semibold text-dark"  >
      Recently Listed
    </div>,

    <div className="fw-semibold text-dark"  >
      Least Funded
      <span className="ms-2">
        <FontAwesomeIcon icon={solid("percent")} />
        <FontAwesomeIcon icon={solid("down")} className="ml-3p" />
      </span>
    </div>,

    <div className="fw-semibold text-dark" >
      Most Funded
      <span className="ms-2">
        <FontAwesomeIcon icon={solid("percent")} />
        <FontAwesomeIcon icon={solid("up")} className="ml-3p" />
      </span>
    </div>,
  ]

  

  return (
    <>
      <HeaderController />
      <Container
        className="d-flex flex-column flex-sm-row align-items-center py-2 bg-lighter border-bottom"
        fluid
      >
        <div className="filter__dropdown-wrap mb-2 mb-sm-0 ">
          <FilterDropdown organizationList={props.organizationList} categoryList={props.categoryList} seletedCategoryList={props.seletedCategoryList}
            onSelectCategory={props.onSelectCategory}
            setfilters={props.setfilters}
            filters={props.filters}
            onClickFilter={props.onClickFilter}
            onChangePriceSlider={props.onChangePriceSlider}


          />
        </div>
        <div className="filter__search-wrap mb-2 mb-sm-0 order-3 order-sm-2">
          <InputGroup className="input-group__alpha">
            <InputGroup.Text>
              <FontAwesomeIcon
                icon={regular("magnifying-glass")}
                className="zoom__icon fs-5"
              />
            </InputGroup.Text>
            <FormControl placeholder="Search" />
          </InputGroup>
        </div>

        <div className="grab__info ms-auto d-flex align-items-center order-2 order-sm-3">
          <Button variant="link" className="p-1 fs-5 d-none d-sm-block">
            <FontAwesomeIcon
              icon={regular("circle-question")}
              className="text-info"
            />
          </Button>
          <div className="grab__dropdown-wrap ms-sm-2 mb-2 mb-sm-0">
            <GrabDropdown />
          </div>
        </div>
      </Container>
      <Container className="d-flex align-items-center" fluid>
        <div className="donate-section mt-2 p-2 d-sm-flex align-items-center flex-grow-1">
          <div className="d-flex align-items-center d-sm-inline-bock">
            <span className="me-1">I want to donate up to</span>
            <InputGroup className="donate-value-control">
              <InputGroup.Text id="btnGroupAddon" className="">
                $
              </InputGroup.Text>
              <FormControl type="number" />
            </InputGroup>
            <span className="d-none d-sm-inline-block mx-1">
              to these items:
            </span>
          </div>
          <Button
            variant="outline-primary"
            className="btn__cart ms-sm-1 mt-2 mt-sm-0"
          >
            Add to Cart (0)
          </Button>
        </div>
      </Container>



      <Container fluid>
        <div className="d-sm-flex align-items-center py-20p">
          <div className="mb-1 mb-sm-0">{props.productList.length} items</div>
          <div className="d-flex align-items-center flex__1 ms-sm-2 gap-1 mb-2 mb-sm-0">
            {
              props.seletedCategoryList.length > 0 && props.categoryList.length > 0 &&
              props.categoryList.map((c, i) => {
                return (
                  props.seletedCategoryList.includes(c._id) &&
                  <div className="filter__item d-flex align-items-center bg-lighter rounded-pill py-1 px-2">
                    <span className="filter__item-icon">
                      {/* <img
                        alt=""
                        className="img-fluid"
                        src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5f7b68ae50b802debdff4ccd_family.svg"
                      /> */}
                      <i className={c.iconDetails[0].class} style={{ fontFamily: "fontAwesome", color: c.color, fontStyle: "normal", marginLeft: "1.5px" }}></i>

                    </span>
                    <span className="flex__1 ms-1 fs-5 fw-semibold text-subtext">
                      {c.name}
                    </span>
                    <Button variant="link" className="ms-2 p-0 fs-4 lh-1" onClick={() => props.removeCatFromFilter(c._id)}>
                      <FontAwesomeIcon
                        icon={solid("close")}
                        className="text-light"
                      />
                    </Button>
                  </div>

                )
              })

            }


            {/* <div className="filter__item d-flex align-items-center bg-lighter rounded-pill py-1 px-2">
              <span className="filter__item-icon">
                <img
                  alt=""
                  className="img-fluid"
                  src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/5f7b86975d011e33713edb0c_pp-science.svg"
                />
              </span>
              <span className="flex__1 ms-1 fs-5 fw-semibold text-subtext">
                Science
              </span>
              <Button variant="link" className="ms-2 p-0 fs-4 lh-1">
                <FontAwesomeIcon
                  icon={solid("close")}
                  className="text-light"
                />
              </Button>
            </div> */}

          </div>
          <div>
            <LadderMenu
              items={items}
              activeKey={selectedKey}
              // setSelectedKey={setSelectedKey}
              onChangeFilterOption={props.onChangeFilterOption}
            />
          </div>
        </div>
      </Container>

      <Container fluid className="py-2">
        <Row>{products}</Row>
      </Container>
    </>
  )

}