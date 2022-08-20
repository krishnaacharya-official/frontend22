import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// import DefaultLayout from "@templates/default-layout";
import DefaultLayout from "../Component/templates/default-layout";
import "./style.scss";
import { Link } from "react-router-dom";

const Sponsors = () => {
  return (
    <DefaultLayout>
      <div className="password-reset position-relative">
        <div className="page__banner"></div>
        <Container fluid className="position-relative pb-5 pt-5">
          <h1 className="text-dark fw-bolder mb-6p pt-2">Sponsorships</h1>
          <div className="fs-5 fw-semibold text-light pb-5 mb-3 mw-600">
            Donorport teams up with top brands to promote the platform. Show
            your customers that you care about local communities by sponsoring a
            category.
          </div>

          <div className="">
            <div className="d-flex align-items-center mb-5">
              <div className="p-12p rounded bg-lighter me-2">
                <FontAwesomeIcon
                  icon={solid("rectangle-ad")}
                  className="text-info fs-3"
                />
              </div>
              <div className="sponsor__list d-flex flex-wrap align-items-center flex__1">
                <div className="sponsor__item mb-2 mb-sm-0">
                  <a href="http://www.mcdonalds.com" className="sponsor__link">
                    <img
                      src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/624df00fca225a2f9055da1c_McDonald%27s_Golden_Arches.svg"
                      alt=""
                      className="sponsor__logo"
                    />
                  </a>
                </div>
                <div className="sponsor__item mb-2 mb-sm-0">
                  <a href="https://www.sprinklr.com/" className="sponsor__link">
                    <img
                      src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/624dea43b11e481200ac7241_Sprinklr_Brand_Logo.png"
                      alt=""
                      className="sponsor__logo"
                    />
                  </a>
                </div>
                <div className="sponsor__item mb-2 mb-sm-0">
                  <a
                    href="https://www.lg.com/global/about-our-brand"
                    className="sponsor__link"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/624dea1886c16d0e415b381d_LG-Logo-1995-2014.png"
                      alt=""
                      className="sponsor__logo"
                    />
                  </a>
                </div>
                <div className="sponsor__item mb-2 mb-sm-0">
                  <a
                    href="https://www.hormelfoods.com/brand/chi-chis-mexican-products/"
                    className="sponsor__link"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/624de9e9e4496f32fd5463ad_brand_chichis.png"
                      alt=""
                      className="sponsor__logo"
                    />
                  </a>
                </div>
                <div className="sponsor__item mb-2 mb-sm-0">
                  <a href="https://petpalfoods.com/" className="sponsor__link">
                    <img
                      src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/624deb5786e6970e3dcb726e_petpal.png"
                      alt=""
                      className="sponsor__logo"
                    />
                  </a>
                </div>
                <div className="sponsor__item mb-2 mb-sm-0">
                  <a
                    href="https://www.dunkindonuts.com/en"
                    className="sponsor__link"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/59df9e77ad9420000140eafe/61f88ffad85ed5121f3c986c_Dunkin-Donuts-01.svg"
                      alt=""
                      className="sponsor__logo"
                    />
                  </a>
                </div>
              </div>
            </div>

            <p className="fs-5 text-light p-3 mb-5">
              By partnering with different suppliers, Donorport is able to
              expand its reach to serve more communities across the world!
            </p>

            <ul className="list-unstyled mb-0 ms-sm-3">
              <li className="d-flex align-items-center py-1">
                <div className="p-12p mr-12p">
                  <FontAwesomeIcon
                    icon={solid("sailboat")}
                    className="fs-3 text-primary"
                  />
                </div>
                <div className="fs-5 text-light">
                  Donorport is selling ad space on every item page based on
                  category & location. If you want your brand to appear on an
                  item page please click the Apply button below and our team
                  will work to find a solution that works for you.
                </div>
              </li>
              <li className="d-flex align-items-center py-1">
                <div className="p-12p mr-12p">
                  <FontAwesomeIcon
                    icon={solid("anchor")}
                    className="fs-3 text-primary"
                  />
                </div>
                <div className="fs-5 text-light">
                  There is no limit to the number of categories and locations a
                  brand may advertise in.
                </div>
              </li>
              <li className="d-flex align-items-center py-1">
                <div className="p-12p mr-12p">
                  <FontAwesomeIcon
                    icon={solid("circle-bolt")}
                    className="fs-3 text-primary"
                  />
                </div>
                <div className="fs-5 text-light">
                  Phase 2 of our sponsorship program will involve exclusive
                  rights deals for organizations & brands. If you would like to
                  be an early adopter to our exclusive rights program or would
                  like to learn more, let us know by clicking the Apply button
                  below.
                </div>
              </li>
            </ul>
            <div className="mt-20p p-3 fs-5 text-light mb-3 ms-2">
              Interesting in becoming a sponsor on Donorport?
            </div>
            <Link variant="info" size="lg" className="btn btn-lg btn-info fw-bold ms-3" to='/partnership'>
              Apply
            </Link>
          </div>
        </Container>
      </div>
    </DefaultLayout>
  );
};

export default Sponsors;
