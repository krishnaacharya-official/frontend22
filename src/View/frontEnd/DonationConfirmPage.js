import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import orderApi from '../../Api/frontEnd/order';
import FrontLoader from '../../Common/FrontLoader';
import helper, { purchasedPriceWithTax } from '../../Common/Helper';
import DefaultLayout from './Component/templates/default-layout';
import organizationApi from '../../Api/frontEnd/organization';
import {Button} from 'react-bootstrap';

const DonationConfirmPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const userAuthToken = localStorage.getItem('userAuthToken');
  const [doantionDetails, setDonationDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const getDonationDetails = async () => {
    let data = {};
    data.donationId = params.id;
    const details = await organizationApi.getDonationDetails(userAuthToken, data);
    if (details && details.data.success) {
      if (details.data.data.length > 0) {
        setDonationDetails(details.data.data[0]);
      } else {
        navigate('/');
      }
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    (async () => {
      if (params.id) {
        setLoading(false);
        await getDonationDetails();
        setLoading(false);
      } else {
        navigate('/');
      }
    })();
  }, [params.id]);

  return (
    <>
      {console.log(doantionDetails)}
      <DefaultLayout>
        <FrontLoader loading={loading} />
        <div style={{ maxWidth: '980px', margin: 'auto' }}>
          <div style={{ padding: '5% 15% 0% 15%' }}>
            <center>
              <img
                style={{ width: '120px' }}
                src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/62f91f5a4baf698de2fbded0_%E2%80%94Pngtree%E2%80%94green%20check%20mark%20icon%20flat_5253210.png"
                alt=''
              />
              {/* <p
                style={{
                  fontSize: '19px',
                  textAlign: 'left',
                }}
              >
                Hi {doantionDetails?.userDetails?.name},
              </p>
              <p
                style={{
                  fontSize: '19px',
                  textAlign: 'left'
                }}
              >
                Thank you for donating through Donorport!
                <br />
                Your Transection Id is : {doantionDetails?.uniqueTransactionId}
              </p>*/}
              <h1 style={{ fontSize: '19px' }}>Transaction Completed</h1>
              <span>#{doantionDetails?.uniqueTransactionId}</span>
            </center>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-3">
            <Button size="large" variant="primary" className="fw bold my-5 ">
              Back To Home
            </Button>
            <Button size="large" variant="secondary" className="fw-bold my-5 ">
              Go to Donation
            </Button>
          </div>
          <div>
            <center>
              <div style={{ padding: '0% 15% 0% 15%' }}>
                <div role="list" className="email__list" style={{ marginTop: '26px' }}>
                  <div
                    data-id="product"
                    role="listitem"
                    className="email__item w-dyn-item"
                    style={{
                      paddingTop: '24px'
                    }}
                  >
                    <div
                      className="checkout__top d-flex align-items-center flex-row flex-nowrap"
                      style={{
                        flex: '0 0 auto'
                      }}
                    >
                      <div
                        className="checkout__left d-flex flex-row align-items-center flex-wrap"
                        style={{
                          flex: '0 auto'
                        }}
                      >
                        <div
                          className="checkout__thumb position-relative d-flex align-items-center justify-content-center"
                          style={{
                            width: '76px',
                            height: '76px',
                            marginRight: '12px',
                            flex: '0 0 auto',
                            borderRadius: '6px'
                          }}
                        >
                          <div
                            className="checkout__img d-flex justify-content-center align-items-center"
                            style={{
                              backgroundColor: '#f8fafd',
                              flex: 1,
                              borderRadius: '6px',
                              boxShadow: '1px 1px 3px 0 rgb(0 0 0 / 1%)',
                              height: '100% !important'
                            }}
                          >
                            <img
                              className="lazy item__img"
                              style={{
                                objectFit: 'contain',
                                backgroundColor: '#f8fafd',
                                width: '80px'
                              }}
                              data-sizes="auto"
                              alt=""
                              src={
                                helper.CampaignAdminLogoPath +
                                doantionDetails?.CampaignAdminDetails?.logo
                              }
                            />
                          </div>
                          {/* <div className="checkout__qtytag" style={{ position: 'absolute', left: 'auto', top: 0, right: 0, bottom: 'auto', display: 'flex', width: '21px', height: '21px', marginTop: '-5px', marginRight: '-5px', paddingTop: '3px', WebkitBoxPack: 'center', WebkitJustifyContent: 'center', msFlexPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', WebkitAlignItems: 'center', msFlexAlign: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#0e75f9', color: '#fff', fontSize: '11px', fontWeight: 700 }}><div>1</div></div> */}
                        </div>
                        <div
                          className="checkout__info d-flex flex-column flex-wrap align-items-start"
                          style={{
                            minWidth: '90px',
                            paddingTop: '6px',
                            paddingRight: '9px',
                            paddingLeft: '9px',
                            flex: 1
                          }}
                        >
                          <a
                            href="#"
                            className="checkout__title d-flex flex-row align-items-start fw-bolder"
                            style={{
                              paddingRight: '0.3rem',
                              flex: '0 0 auto',
                              fontSize: '19px',
                              maxWidth: '100%'
                            }}
                          >
                            <div>
                              {doantionDetails.type === 'PROJECT'
                                ? doantionDetails?.projectDetails?.name
                                : doantionDetails?.CampaignAdminDetails?.name}
                            </div>
                          </a>
                          {/* <div
                            className="checkout__brand"
                            style={{ maxWidth: '200px', paddingTop: '3px', fontSize: '13px' }}
                          >
                            <div>{doantionDetails.type}</div>
                          </div>*/}
                          <div
                            className="checkout__price flex-row"
                            style={{
                              display: 'none',
                              paddingTop: '6px',
                            }}
                          >
                            <h5>$22</h5>
                          </div>
                        </div>
                      </div>
                      <div
                        className="checkout__right d-flex flex-row align-items-center justify-content-end flex-wrap"
                        style={{
                          flex: 1
                        }}
                      >
                        <div
                          className="checkout__subtotal d-flex flex-row align-items-center fw-bold"
                          style={{
                            marginTop: '3px',
                            flex: '0 auto',
                            fontSize: '16px'
                          }}
                        >
                          <div className="checkout__itemvalue d-flec align-items-center">
                            <div
                              className="checkout__tag d-flex justify-content-center"
                              style={{
                                width: '90px',
                                marginRight: '21px',
                                flex: '0 0 auto'
                              }}
                            >
                              {/*  <div
                                className="tag tag--xp w-embed"
                                style={{
                                  display: 'flex',
                                  padding: 0,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  flex: '0 0 auto',
                                  borderRadius: '3px',
                                  fontSize: '14px',
                                  fontWeight: 700,
                                  width: 'auto',
                                  height: 'auto',
                                  color: '#4aabf0',
                                  whiteSpace: 'nowrap'
                                }}
                              >
                                <span className="checkout__xp">{doantionDetails.amount * 10}</span>
                                &nbsp;xp
                              </div> */}
                            </div>
                          </div>
                        </div>
                        <h4 style={{ color: 'var(--text-title)' }}>
                          {doantionDetails?.currencySymbol}
                          {doantionDetails.amount}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </center>
          </div>
          <br />
          <br />
        </div>
      </DefaultLayout>
    </>
  );
};
export default DonationConfirmPage;
