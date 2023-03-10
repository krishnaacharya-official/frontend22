import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// import DefaultLayout from "@templates/default-layout";
import DefaultLayout from '../Component/templates/default-layout';
import './style.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Page from '../../../components/Page';

const Pricing = () => {
  const user = useSelector((state) => state.user);

  const lineStyle = {
    // display:" -webkit-box",
    // display: "-webkit-flex",
    // display: "-ms-flexbox",
    display: 'flex',
    width: '0px',
    marginRight: '16px',
    marginLeft: '16px',
    '-webkit-box-pack': 'center',
    '-webkit-justify-content': 'center',
    '-ms-flex-pack': 'center',
    justifyContent: 'center',
    '-webkit-box-align': 'center',
    '-webkit-align-items': 'center',
    '-ms-flex-align': 'center',
    /* align-items: center, */
    border: '1px solid #e6e6e6',
    // fontFamily: 'Font awesome 5 pro solid 900',
    padding: 'unset',
    fontSize: 'xx-large',
    fontWeight: 700
  };

  const syStyle = {
    // display: -webkit-box,
    // display: -webkit-flex,
    // display: -ms-flexbox,
    display: 'flex',
    width: ' 32px',
    height: '42px',
    minHeight: '42px',
    minWidth: ' 32px',
    '-webkit-box-pack': 'center',
    '-webkit-justify-content': 'center',
    '-ms-flex-pack': 'center',
    justifyContent: 'center',
    '-webkit-box-align': 'center',
    '-webkit-align-items': 'center',
    '-ms-flex-align': 'center',
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: '#fff',
    fontSize: 'xx-large',
    fontWeight: 700,
    color: '#e6e6e6'
  };
  return (
    <Page
      title="Donorport | Pricing"
      description="Pricing and Fees ; Platform Fee. 0%. Donorport does not take a fee. Organizations receive 100% of your donation ; Transaction Fees. 2.9%. + $0.30 per item donated"
    >
      <DefaultLayout>
        <div className="password-reset position-relative">
          <Container fluid className="position-relative pb-5 pt-5">
            <div className="d-flex flex-column">
              <h1 className="text-dark fw-bolder mb-6p pt-2">Pricing and Fees</h1>
              <div className="fs-5 text-light pb-2 mb-3 mw-600">
                It is 100% free for organizations to create posts and receive funding on Donorport.
                100% of each donation goes directly to the organization so they receive every penny
                they need.
              </div>
              <div className="note fs-5 mb-3">
                Donorport includes local tax and merchant fees into the display price to ensure the
                charity has exactly what they need to purchase the items at the store. We don't
                charge for our services, but our payment merchants require 2.9% to process each
                transaction. We include this cost, along with the Charity's local tax rate, in the
                display price for products posted by our Charities. For More information please
                visit our{' '}
                <a
                  href="https://www.youtube.com/watch?v=G3Y5PcuH23Y"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms of Service
                </a>{' '}
              </div>
              <div className="row py-4 justify-content-center">
                <div className="col-sm-4 mb-3 mb-md-0">
                  <div className=" text-center h-100">
                    <div className="card-body d-flex flex-column">
                      <div className="mb-4">
                        <h5>Platform Fee</h5>
                        <span className="display-4">{user?.platformFee}%</span>
                        {/* <span className="display-4">2%</span> */}
                      </div>

                      <p style={{ color: 'rgba(151,150,177,.48)' }}>
                        Donorport does not take a fee. Organizations receive 100% of your donation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-1 " style={lineStyle}>
                  <div className="s" style={syStyle}>
                    +
                  </div>
                </div>

                <div className="col-sm-4 mb-3 mb-md-0">
                  <div className=" text-center h-100">
                    <div className="card-body d-flex flex-column">
                      <div className="mb-4">
                        <h5>Transaction Fees</h5>
                        <span className="display-4">{user?.transactionFee}%</span>
                        {/* <span className="display-4">3%</span> */}
                      </div>

                      <p style={{ color: 'rgba(151,150,177,.48)' }}>
                        + $0.30 per item donated *including debit and credit card charges (Stripe)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-1 " style={lineStyle}>
                  <div className="s" style={syStyle}>
                    =
                  </div>
                </div>

                <div className="col-sm-3 mb-3 mb-md-0">
                  <div className=" text-center h-100">
                    <div className="card-body d-flex flex-column">
                      <div className="mb-4">
                        <h5>Total</h5>
                        {/* <span className="display-4">{isNaN(totalFees) ? 0 : totalFees.toFixed(1)}%</span> */}
                        {/* <span className="display-4">5%</span> */}
                        <span className="display-4">
                          {(Number(user?.platformFee) + Number(user?.transactionFee)).toFixed(1)}%
                        </span>
                      </div>

                      <p style={{ color: 'rgba(151,150,177,.48)' }}>
                        Paid by the Donor at checkout
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="text-dark fw-bolder mb-6p pt-2">Still have questions?</h4>

              <p style={{ color: '#9796b1' }} className="mt-3">
                Learn more about how Donorport can help you raise money for your non-profit or
                charity <Link to="/about-us">here</Link> .
              </p>
            </div>
          </Container>
        </div>
      </DefaultLayout>
    </Page>
  );
};

export default Pricing;
