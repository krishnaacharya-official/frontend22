import Header from "../../Component/organisms/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
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
    FilterDropdown
  } from "../../Component/organisms";

import "./style.scss";
import HeaderController from "../../../../Controller/frontEnd/HeaderController";

export default function Index(props) {
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

    return (
        <>
            <HeaderController />
            <Container
          className="d-flex flex-column flex-sm-row align-items-center py-2 bg-lighter border-bottom"
          fluid
        >
          <div className="filter__dropdown-wrap mb-2 mb-sm-0 ">
            <FilterDropdown />
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

            <Container fluid className="py-2">
                <Row>{products}</Row>
            </Container>
        </>
    )

}