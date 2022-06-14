import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import DefaultLayout from "../Component/templates/default-layout";
import MarqueeList from "../Component/molecules/marquee-list";

import "./style.scss";

const About = () => {
  return (
    <DefaultLayout className="about">
      <section className="pb-4">
        <Container fluid className="about-hero pb-sm-4 mb-sm-4">
          <Row className="about__row-1">
            <Col md="5" className="d-flex align-items-center">
              <div className="about__content-1 text-center text-sm-start">
                <h1 className="about__title display-5 fw-bolder text-dark">
                  A Crowdfunding Platform for Charities
                </h1>

                <p className="fs-5 text-light fw-semibold mb-4 lh-1.5">
                  Charities post products they need, donors provide the funding,
                  the charity purchases the products. No fees, No costs, No
                  gift-in-kind - You choose how charities spend your money.
                </p>
                <div className="d-flex align-items-center gap-2 mb-2 pb-5 justify-content-center justify-content-sm-left">
                  <Button variant="primary" className="fw-bold fs-6" size="lg">
                    Start Listing
                  </Button>
                  <Button variant="link" className="fs-5 text-light" size="lg">
                    Home
                  </Button>
                </div>
              </div>
            </Col>
            <Col md="7">
              <div className="d-flex align-items-center content__2 mb-3 mb-sm-0 justify-content-sm-center">
                <img
                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/626f21b70f1d0f40951a1eb6_Savings-amico.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <div className="text-center">
            <h1 className="text-dark fw-bolder">Our Services</h1>
          </div>
          <Row>
            <Col md="7" className="position-relative mb-5 mb-sm-0 d-none d-sm-flex">
              <div className="services__img text-center">
                <img
                  className="img-fluid"
                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/626df2f3a0717a4b4ca2d22c_Profile%20pic-rafiki%20(1).svg"
                  alt=""
                />
              </div>
            </Col>
            <Col
              md="5"
              className="d-flex align-items-center position-relative text-center text-sm-start"
            >
              <div className="services__text">
                <div className="fw-bolder mb-2 text-dark">
                  Your donations, all in one place
                </div>
                <h2 className="display-5 fw-bolder text-dark mb-2">
                  Discover unique opportunities
                </h2>
                <p className="text-light fs-5 lh-1.5 mb-4">
                  Browse categories and filter results based on your donation
                  preferences. Our geo-location system shows you posts from
                  charities near you so you can support your local
                  organizations.
                </p>
                <div className="circle"></div>
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
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container fluid>
          <Row>
            <Col md="5" className="position-relative mb-5 mb-sm-0">
              <div className="mw-460 text-center text-sm-start">
                <div className="tag__item d-inline-block fw-semibold mb-3 p-12p rounded text-primary fs-5">
                  Donations
                </div>
                <h2 className="fw-bolder text-dark">Tangible Giving</h2>
                <p className="fs-5 text-light fw-semibold mb-4 lh-1.5">
                  Charities are often asked what they need, not how much they
                  need. Donorport allows you to see the needs and provide
                  funding for them.
                </p>
              </div>
            </Col>
            <Col md="7">
              <div className="d-flex gap-4 flex-column flex-sm-row align-items-center justify-content-center pb-5 mb-sm-5">
                <div className="bigcircle">
                  <img
                    className="img-fluid"
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/626ed39508c567867626b6bd_624ba8a3688ae7c3ef86a416_20139509001_front_a06_%402.png"
                    srcSet="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/626ed39508c567867626b6bd_624ba8a3688ae7c3ef86a416_20139509001_front_a06_%402-p-500.png 500w, https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/626ed39508c567867626b6bd_624ba8a3688ae7c3ef86a416_20139509001_front_a06_%402.png 560w"
                    alt=""
                  />
                </div>
                <div className="bigcircle _2">
                  <img
                    className="img-fluid"
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/626ed451dc441c3cda41d114_5f7b731470e7e18043959c58_s-l300.png"
                    alt=""
                  />
                </div>
                <div className="bigcircle">
                  <img
                    className="img-fluid"
                    src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/626ed48de402f534df101dd9_5c2c24cdbda7359a71d94025_aj1_top3.png"
                    sizes="120px"
                    srcSet="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/626ed48de402f534df101dd9_5c2c24cdbda7359a71d94025_aj1_top3-p-500.png 500w, https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/626ed48de402f534df101dd9_5c2c24cdbda7359a71d94025_aj1_top3-p-800.png 800w, https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/626ed48de402f534df101dd9_5c2c24cdbda7359a71d94025_aj1_top3.png 1000w"
                    alt=""
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="how-it-works bg-lighter">
        <img
          src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/621fbd2a971cc27a3898b387_60e47ee6c4af646a50d5b8e3_hero-illustration.svg"
          alt=""
          className="how-it-works-bg"
        />

        <Container fluid className="how-it-works__content">
          <div className="mw-460 text-center text-sm-left">
            <div className="tag__item d-inline-block fw-semibold mb-3 p-12p rounded text-primary fs-5">
              How it Works
            </div>

            <h2 className="fw-bolder text-dark">Transparent</h2>
            <p className="fs-5 text-light mb-3 pb-5 lh-1.5">
              A&nbsp;simple solution to the charity fundraising problem. Now you
              can see where your money goes; hand pick from a list of needs
              posted by hundreds of organizations.
            </p>
          </div>
          <Row>
            <Col md="4" className="position-relative mb-5 mb-sm-0">
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
      </section>

      <section>
        <Container fluid>
          <div
            role="list"
            className="ourbrand__lists d-flex flex-wrap align-items-center justify-content-between"
          >
            <div
              role="listitem"
              className="ourbrand__item d-flex align-items-center justify-content-center"
            >
              <img
                src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/626cb8aafbea8678573371cd_Tim_Hortons_logo.svg"
                alt=""
                className="image-2"
              />
            </div>
            <div
              role="listitem"
              className="ourbrand__item d-flex align-items-center justify-content-center"
            >
              <img
                src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/626f437fab93d764b284564d_McDonald%27s_Golden_Arches.svg"
                alt=""
                className="image-2"
              />
            </div>
            <div
              role="listitem"
              className="ourbrand__item d-flex align-items-center justify-content-center"
            >
              <img
                src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/6271d71d721c60e1ee063619_Crocs_wordmark.svg"
                alt=""
                className="image-2"
              />
            </div>
            <div
              role="listitem"
              className="ourbrand__item d-flex align-items-center justify-content-center"
            >
              <img
                src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/626f4471dc441c225745284c_Target_logo.svg"
                alt=""
                className="image-2"
              />
            </div>
            <div
              role="listitem"
              className="ourbrand__item d-flex align-items-center justify-content-center"
            >
              <img
                src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/624de9e9e4496f32fd5463ad_brand_chichis.png"
                alt=""
                className="image-2"
              />
            </div>
            <div
              role="listitem"
              className="ourbrand__item d-flex align-items-center justify-content-center"
            >
              <img
                src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/626f44aef1df651c17c8f3e6_Purina-logo.svg"
                alt=""
                className="image-2"
              />
            </div>
            <div
              role="listitem"
              className="ourbrand__item d-flex align-items-center justify-content-center"
            >
              <img
                src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/61f88ffad85ed5121f3c986c_Dunkin-Donuts-01.svg"
                alt=""
                className="image-2"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-5">
        <Container fluid>
          <div className="p-5 rounded-5 bg-lighter position-relative overflow-hidden">
            <Row>
              <Col md="7">
                <div className="pe-sm-5 me-sm-4">
                  <h2 className="fw-bolder text-dark">Our Standard</h2>
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
            <div className="blob blob--2"></div>
            <div className="blob"></div>
          </div>
        </Container>
      </section>

      <section className="mb-5">
        <Container fluid>
          <Row>
            <Col md="7">
              <div className="d-flex align-items-center justify-content-center pe-sm-5 h-100">
                <img
                  src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/6271b1e2ec98d212a842735e_To%20do%20list-rafiki.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </Col>
            <Col md="5" className="pt-5">
              <div className="ps-sm-5">
                <div className=" text-center text-sm-left">
                  <div className="tag__item d-inline-block fw-semibold mb-3 p-12p rounded text-primary fs-5">
                    Tax Management
                  </div>
                </div>

                <h2 className="fw-bolder text-dark text-center text-sm-left">
                  Centralized Giving
                </h2>
                <p className="fs-5 text-light fw-semibold lh-1.5 mb-0 text-center text-sm-left">
                  When you donate on Donorport, your tax receipts are uploaded
                  directly to the platform so you can view, download, and track
                  all of your receipts for every donation, each year.
                </p>
                <ul className="list-unstyled fs-5 text-light">
                  <li className="d-flex align-items-center pt-2">
                    <div className="icon icon--shield">
                      <FontAwesomeIcon
                        icon={solid("circle-bolt")}
                        className="fs-3 me-1 text-primary p-12p mr-12p"
                      />
                    </div>
                    <span>All of your tax receipts in one place</span>
                  </li>
                  <li className="d-flex align-items-center pt-2">
                    <div className="icon icon--shield">
                      <FontAwesomeIcon
                        icon={solid("pen-circle")}
                        className="fs-3 me-1 text-primary p-12p mr-12p"
                      />
                    </div>
                    <span>
                      View, download, review & share your receipts every year
                    </span>
                  </li>
                  <li className="d-flex align-items-center pt-2">
                    <div className="icon icon--shield">
                      <FontAwesomeIcon
                        icon={solid("circle-check")}
                        className="fs-3 me-1 text-primary p-12p mr-12p"
                      />
                    </div>
                    <span>
                      Encrypted files maintain your privacy and security
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid>
          <div className="mw-460 text-center text-sm-start pb-5 mb-2">
            <div className="tag__item d-inline-block fw-semibold mb-3 p-12p rounded text-primary fs-5">
              Payment Options
            </div>
            <h2 className="fw-bolder text-dark">Modern Solutions</h2>
            <p className="fs-5 text-light fw-semibold lh-1.5 mb-0">
              As technology advances, so does the neeed for platforms to adopt
              the latest solutions. Donorport accepts all major forms of payment
              making it easier than ever to donate.
            </p>
          </div>
          <Row>
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
              <p className="fs-5 text-light mb-3 pb-5 lh-1.5">
                Donorport accepts several forms of traditional payment methods
                including credit cards, Google Pay, PayPal and Stripe. Choose
                the payment method that works best for your giving.
              </p>
            </Col>
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
              <p className="fs-5 text-light mb-3 pb-5 lh-1.5">
                Donorport understands the importance of privacy which is why we
                have adopted cryptocurrency on our platform so you can send your
                donations anonymously.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3">
        <MarqueeList />
      </section>

      <section>
        <Container fluid>
          <div className="position-relative mb-5 mb-sm-0">
            <div className="mw-460 text-center text-sm-start">
              <div className="tag__item d-inline-block fw-semibold mb-3 p-12p rounded text-primary fs-5">
                Our Partners
              </div>
              <h2 className="fw-bolder text-dark">Trusted Charities</h2>
              <p className="fs-5 text-light fw-semibold mb-4 lh-1.5">
                Only registered charities and non-profits in good standing are
                allowed to post on Donorport so you can be sure your donation is
                secure.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </DefaultLayout>
  );
};

export default About;