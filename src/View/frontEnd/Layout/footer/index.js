import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

// import IconButton from "@components/molecules/icon-button";
// import FooterCategoryLinks from "@components/molecules/footer-category-links";
import IconButton from "../../Component/icon-button";
import FooterCategoryLinks from "../../Component/footer-category-links";

import "./style.scss";

function Footer() {
  return (
    <div className="footer border-top px-1">
      <Container fluid className="footer__top">
        <Row className="border-bottom pb-4 mb-4">
          <Col md="5" className="mb-3 mb-sm-0">
            <div className="loop__text pe-sm-5 me-sm-5 text-center text-sm-start">
              <h3 className="heading-4 mb-12p">Stay in the loop</h3>
              <p>
                Join our mailing list to stay in the loop with our newest
                feature releases, non-profit partners, and tips and tricks for
                navigating Donorport.
              </p>
              <div className="footer__newsletter d-flex align-items-center">
                <input
                  className="form-control form-control-lg"
                  placeholder="Your email address"
                  type="text"
                  name="Newsletter"
                />
                <Button
                  size="lg"
                  className="btn__newsletter ms-2 flex-shrink-0"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </Col>
          <Col md="7" className="text-center text-sm-start">
            <h3 className="heading-4 mb-12p">Join the community</h3>
            <div className="footer__socialwrap d-flex justify-content-center justify-content-sm-start">
              <IconButton
                size="lg"
                href="https://www.twitter.com"
                icon={<FontAwesomeIcon icon={brands("twitter")} />}
                target="_blank"
              />
              <IconButton
                size="lg"
                href="https://www.facebook.com"
                icon={<FontAwesomeIcon icon={brands("facebook")} />}
                target="_blank"
              />

              <IconButton
                size="lg"
                href="https://www.instagram.com"
                icon={<FontAwesomeIcon icon={brands("instagram")} />}
                target="_blank"
              />
              <IconButton
                size="lg"
                href="https://www.discord.com"
                icon={<FontAwesomeIcon icon={brands("discord")} />}
                target="_blank"
              />
              <IconButton
                size="lg"
                href="https://www.mail.com"
                icon={<FontAwesomeIcon icon={solid("envelope")} />}
                target="_blank"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="footer__middle pb-2">
          <Col
            sm
            className="footer__block logo text-center text-sm-start mb-2 mb-sm-0"
          >
            <a href="/" className="d-inline-flex align-items-center mb-2">
              <img
                src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/61fed883243c845a8478a637_2022%20(Icon).svg"
                alt=""
                className="svg__logo"
              />

              <div className="svg__name ms-1">Donorport</div>
            </a>
            <p>
              The world's first and largest crowd-funding platform for
              non-profits &amp;&nbsp;charities. Donate directly to the needs of
              the organization and help them fund all of their product needs.
            </p>
          </Col>
          <Col className="footer__block mb-2 mb-sm-0 text-center text-sm-start">
            <FooterCategoryLinks categoryName="Home" />
          </Col>
          <Col className="footer__block mb-2 mb-sm-0 text-center text-sm-start">
            <FooterCategoryLinks categoryName="Support" />
          </Col>
          <Col className="footer__block text-center text-sm-start">
            <FooterCategoryLinks categoryName="Information" />
          </Col>
          <Col className="footer__block text-center text-sm-start">
            <FooterCategoryLinks categoryName="Marketplace" />
          </Col>
        </Row>
        <div className="footer__bottom d-sm-flex align-items-center border-top text-center text-sm-start">
          <div className="copyright mb-1 mb-sm-0">
            <div>© 2021 Donorport, Inc.</div>
          </div>
          <ul className="list-unstyled mb-0 d-flex align-items-center justify-content-center justify-content-sm-start ms-auto">
            <li className="footer__link-item me-4">
              <a href="#" className="footer__link">
                Privacy Policy
              </a>
            </li>
            <li className="footer__link-item">
              <a href="/terms" className="footer__link">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
