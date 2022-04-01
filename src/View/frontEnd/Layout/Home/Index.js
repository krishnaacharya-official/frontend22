import Header from "../../Component/organisms/header";
import {
    Button,
    Container,
    Row,
    Col,
    FormControl,
    InputGroup,
} from "react-bootstrap";
import ProductItems from "./products.json";
import Product from "../../Component/organisms/product";
import "./style.scss";

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
                    <Product {...item} />
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
            <Header />

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