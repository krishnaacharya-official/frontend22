import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import DefaultLayout from "../Component/templates/default-layout";
import MarqueeList from "../Component/molecules/marquee-list";

import "./style.scss";

const About = (props) => {
  // console.log(props.campaignAdminList)
  return (
    <DefaultLayout className="about">
      <div className="bg-lighter pb-4">
        <Container fluid>
          <Row className="about__row-1">
            <Col md="5" className="mb-4 mb-sm-0">
              <div className="about__content-1">
                <h1 className="about__title display-3 fw-bolder text-dark">
                  Welcome to Donorport
                </h1>
                <h6 className="fw-bolder text-dark mb-2">
                  Your donations, all in one place
                </h6>
                <p className="fs-5 text-light fw-semibold mb-4 lh-1.5">
                  Donorport is a crowd-funding platform for non-profits &
                  charities where donors can purchase consumer goods the
                  organziation needs to operate in the community. Organizations
                  post products they need and donors provide the funding for
                  those products.
                </p>
                <div className="d-flex align-items-center gap-2 mb-2 pb-5">
                  <Button
                    variant="info"
                    className="rounded-pill fw-bold fs-6 px-4"
                    size="lg"
                  >
                    Start Listing
                  </Button>
                  <Button
                    variant="outline-info"
                    className="rounded-pill fw-bold fs-6 px-4"
                    size="lg"
                  >
                    Learn More
                  </Button>
                </div>

                <h4 className="fw-bolder text-dark mb-2">
                  When would you choose Donorport for your giving?
                </h4>

                <ul className="fs-5 text-light ps-2">
                  <li className="mb-2">
                    When you want to see the proceeds from your donation
                  </li>
                  <li className="mb-2">
                    When you want to see a tangible return on your donation
                  </li>
                  <li className="mb-2">
                    When you want to customize your giving based on your
                    preferences
                  </li>
                  <li className="list-item">
                    When you want to follow the on-going needs of a non-profit
                    or charity
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="7">
              <div className="d-flex align-items-center ps-sm-5 justify-content-sm-center">
                <img
                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/621a6ad2371ac979e17501e8_4895778.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col md="4" className="position-relative mb-5 mb-sm-0">
              <div className="about__step d-flex mb-2 bg-info rounded-circle align-items-center justify-content-center text-white fw-bold fs-3">
                1
              </div>
              <div className="d-flex justify-content-center mb-2">
                <img
                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5f47d5391a5e29d04fc8a01d_click%20(1).svg"
                  className="about__step-icon"
                  alt=""
                />
              </div>
              <h4 className="mb-1 fw-bolder text-dark text-center">
                Non-profit creates a post
              </h4>
              <p className="text-light text-center fs-5">
                An organziation creates a post for products they need.
              </p>
            </Col>
            <Col md="4" className="position-relative mb-5 mb-sm-0">
              <div className="about__step d-flex mb-2 bg-info rounded-circle align-items-center justify-content-center text-white fw-bold fs-3">
                2
              </div>
              <div className="d-flex justify-content-center mb-2">
                <img
                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/60088347cb80b5186f9e1ead_donate.svg"
                  className="about__step-icon"
                  alt=""
                />
              </div>
              <h4 className="mb-1 fw-bolder text-dark text-center">
                Donors provide the funding
              </h4>
              <p className="text-light text-center fs-5">
                Donors send funds to pay for the products posted by the
                organizations.
              </p>
            </Col>
            <Col md="4" className="position-relative">
              <div className="about__step d-flex mb-2 bg-info rounded-circle align-items-center justify-content-center text-white fw-bold fs-3">
                3
              </div>
              <div className="d-flex justify-content-center mb-2">
                <img
                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ea77ef8debb84eec8354d5b_bank.svg"
                  className="about__step-icon"
                  alt=""
                />
              </div>
              <h4 className="mb-1 fw-bolder text-dark text-center">
                Non-profit buys the products
              </h4>
              <p className="text-light text-center fs-5">
                The organizations use the funding provided by the donors to
                purchase the products.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="text-center py-4">
        <h3 className="fs-1 fw-bolder text-dark">See it for yourself</h3>
        <div className="fs-5 text-light mb-3 pb-5">
          Check out how easy it is to donate on Donorport:
        </div>
        <div className="mw-600 mx-auto">
          <div className="video__frame">
            <iframe
              className="video__iframe"
              src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F5qap5aO4i9A%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5qap5aO4i9A&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F5qap5aO4i9A%2Fhqdefault.jpg&amp;key=c4e54deccf4d4ec997a64902e9a30300&amp;type=text%2Fhtml&amp;schema=youtube"
              scrolling="no"
              title="lofi hip hop radio - beats to relax/study to"
            ></iframe>
          </div>
        </div>
      </section>

      <Container fluid>
        <Row>
          <Col md="6">
            <div className="d-flex gap-2 mb-3">
              <div className="crypto__icon p-0">
                <img
                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620e5d6c9582b74e722c3122_ethereum-eth.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="crypto__icon p-0">
                <img
                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620e5d4c36e4c982f37e9894_Bitcoin.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="crypto__icon p-0">
                <img
                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620e5ca7ee8035585abb93b9_usd-coin-usdc-logo.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <h3 className="fs-1 fw-bolder text-dark">Cryptocurrency</h3>
            <p className="fs-5 text-light mb-3 pb-5 lh-1.5">
              Donorport accepts several forms of payment including credit cards,
              Google Pay, Stripe, and Cryptocurrency. Non-profits can select
              which cryptocurrencies they accept for payment through the use of
              the Coinbase Commerce API. Donorport understands the importance of
              privacy which is why we have adopted cryptocurrency on our
              platform so you can send your donations anonymously.
            </p>
          </Col>
          <Col md="6">
            <div className="d-flex gap-3 mb-3 py-6p flex-wrap">
              <div className="d-flex align-items-center text-success">
                <FontAwesomeIcon
                  icon={regular("building-columns")}
                  className="fs-4 me-1"
                />
                <span>Bank</span>
              </div>
              <div className="d-flex align-items-center text-success">
                <FontAwesomeIcon
                  icon={regular("credit-card-front")}
                  className="fs-4 me-1"
                />
                <span>Card</span>
              </div>
              <div className="crypto__icon-24">
                <img
                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620f2668a5060779fa814fd9_stripe-seeklogo.com.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="crypto__icon-24">
                <img
                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620f25f58e8ffe7b1df84772_PayPal.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="crypto__icon-24">
                <img
                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620f2720b58d094391f75d07_Google_Pay_(GPay)_Logo_(2018-2020).svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <h3 className="fs-1 fw-bolder text-dark">Standard Methods</h3>
            <p className="fs-5 text-light mb-3 pb-5 lh-1.5">
              Donorport accepts several forms of traditional payment methods
              including credit cards, Google Pay, PayPal and Stripe. Choose the
              payment method that works best for your giving. There are no taxes
              on your donation and any checkout fees will be added to the
              subtotal of your purchase at checkout.
            </p>
          </Col>
        </Row>
      </Container>

      <section className="mb-5">
        <Container fluid>
          <div className="p-5 rounded-5 bg-lighter">
            <Row>
              <Col md="7">
                <div className="pe-sm-5 me-sm-4">
                  <h3 className="fs-1 fw-bolder text-dark">Our Standard</h3>
                  <p className="fs-5 text-light mb-3 lh-1.5">
                    Donorport promises to remain a platform for the people which
                    is why we will never censor or ban any posts created by our
                    approved non-profits & charities. We approve non-profits.
                  </p>
                  <p className="fs-5 text-light lh-1.5">
                    To learn more check out our partnerships page.
                  </p>
                </div>
              </Col>
              <Col md="5">
                <ul className="list-unstyled fs-5 text-light">
                  <li className="d-flex align-items-center pt-2">
                    <div className="icon icon--shield">
                      <FontAwesomeIcon
                        icon={solid("shield-check")}
                        className="fs-3 me-1 text-success p-12p mr-12p"
                      />
                    </div>
                    <div>Non-profits keep 100% of your donation</div>
                  </li>
                  <li className="d-flex align-items-center pt-2">
                    <div className="icon icon--shield">
                      <FontAwesomeIcon
                        icon={solid("shield-check")}
                        className="fs-3 me-1 text-success p-12p mr-12p"
                      />
                    </div>
                    <div>Donorport never interferes with your donations</div>
                  </li>
                  <li className="d-flex align-items-center pt-2">
                    <div className="icon icon--shield">
                      <FontAwesomeIcon
                        icon={solid("shield-check")}
                        className="fs-3 me-1 text-success p-12p mr-12p"
                      />
                    </div>
                    <div>We will maintain your privacy and anonymity</div>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <Container fluid>
        <Row>
          <Col md="6">
            <div className="pe-sm-5">
              <h3 className="fs-1 fw-bolder text-dark">How it Works</h3>
              <p className="fs-5 text-light mb-3 lh-1.5">
                Non-profits & charities post products they need and donors
                provide the funds for those products. You don't have to buy the
                products, just simply send them the cash and when their post is
                fully funded the non-profit goes out and purchases the items on
                your behalf. And that's it! Donors can track their posts on
                their profile where tax receipts and photos and video are
                uploaded by the non-profit for the donor to enjoy.
              </p>
              <p className="fs-5 text-light lh-1.5">
                To learn more check out our partnerships page.
              </p>
            </div>
          </Col>
          <Col md="6">
            <div className="d-flex align-items-center flex-wrap mw-600">
              <div className="page__circle d-flex align-items-center bg-lighter rounded-circle p-3 justify-content-center">
                <img
                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5f47d53712617fc3ca56b307_emoji.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="seperator flex__1"></div>
              <div className="page__circle d-flex align-items-center bg-lighter rounded-circle p-3 justify-content-center">
                <img
                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/61fed883243c845a8478a637_2022%20(Icon).svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="seperator flex__1"></div>
              <div className="page__circle d-flex align-items-center bg-lighter rounded-circle p-3 justify-content-center">
                <img
                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5eb5c601301ea31f94e1caa8_town.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <section className="py-3">
        <MarqueeList campaignAdminList={props.campaignAdminList} />
      </section>

      <Container fluid>
        <Row>
          <Col md="6">
            <div className="d-flex align-items-center justify-content-center pe-sm-5">
              <img
                src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/621ede202b62e9b4e8a3e5dc_Charity-rafiki.svg"
                className="img-fluid"
                alt=""
              />
            </div>
          </Col>
          <Col md="6" className="pt-5">
            <div className="ps-sm-5">
              <h3 className="fs-1 fw-bolder text-dark">Easy, Fast & Fun</h3>
              <p className="fs-5 text-light mb-3 lh-1.5">
                Donate towards things your favourite non-profit actually needs.
                Basketballs, Running Shoes, Tents, anything and everything a
                non-profit or charity might need; they'll post it and you pay
                for it!
              </p>
              <ul className="list-unstyled fs-5 text-light">
                <li className="d-flex align-items-center pt-2">
                  <div className="icon icon--shield">
                    <FontAwesomeIcon
                      icon={solid("circle-heart")}
                      className="fs-3 me-1 text-danger p-12p mr-12p"
                    />
                  </div>
                  <span>
                    No gift in kind, no delivery; the organization purchases the
                    items
                  </span>
                </li>
                <li className="d-flex align-items-center pt-2">
                  <div className="icon icon--shield">
                    <FontAwesomeIcon
                      icon={solid("circle-heart")}
                      className="fs-3 me-1 text-danger p-12p mr-12p"
                    />
                  </div>
                  <span>
                    Centralize your giving; all in-one platform for donations
                  </span>
                </li>
                <li className="d-flex align-items-center pt-2">
                  <div className="icon icon--shield">
                    <FontAwesomeIcon
                      icon={solid("circle-heart")}
                      className="fs-3 me-1 text-danger p-12p mr-12p"
                    />
                  </div>
                  <span>
                    Eliminate waste, only fund things organizations need
                  </span>
                </li>
                <li className="d-flex align-items-center pt-2">
                  <div className="icon icon--shield">
                    <FontAwesomeIcon
                      icon={solid("circle-heart")}
                      className="fs-3 me-1 text-danger p-12p mr-12p"
                    />
                  </div>
                  <span>Non-profits keep 100% of your donation</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default About;
