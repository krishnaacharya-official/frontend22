import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import orderApi from '../../Api/frontEnd/order';
import FrontLoader from '../../Common/FrontLoader';
import helper, { purchasedPriceWithTax } from '../../Common/Helper';
import DefaultLayout from './Component/templates/default-layout';
import { Button } from 'react-bootstrap';
import ListItemImg from './Component/atoms/list-item-img';

const OrderConfirmPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const userAuthToken = localStorage.getItem('userAuthToken');
  const [orderDetails, setOrderDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const getOrderDetails = async () => {
    let data = {};
    data.orderId = params.id;
    const details = await orderApi.getOrderDetails(userAuthToken, data);
    if (details && details.data.success) {
      if (details.data.data.length > 0) {
        setOrderDetails(details.data.data[0]);
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
        await getOrderDetails();
        setLoading(false);
      } else {
        navigate('/');
      }
    })();
  }, [params.id]);

  return (
    <>
      {/* {console.log(orderDetails)} */}
      <DefaultLayout>
        <FrontLoader loading={loading} />
        <div style={{ maxWidth: '980px', margin: 'auto' }}>
          <div
            className="d-flex flex-column align-items-center"
            style={{ padding: '5% 15% 0% 15%' }}
          >
            <center>
              <img
                style={{ width: '120px' }}
                src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/62f91f5a4baf698de2fbded0_%E2%80%94Pngtree%E2%80%94green%20check%20mark%20icon%20flat_5253210.png"
              ></img>

              {/*}   <p
                style={{
                  fontSize: '19px',
                  textAlign: 'left',
                  color: '#6f6f90'
                }}
              >
                Hi {orderDetails?.userDetails?.name},
            </p>*/}
              <br />
              <h1 className="fs-1 fw-bolder">Transcation Completed</h1>
              <span className="fs-3" style={{ color: '#6f6f90' }}>
                Order #{orderDetails.uniqueTransactionId}
              </span>
            </center>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-3">
            <Button size="large" variant="primary" className="fw bold my-5 ">
              Back To Home
            </Button>
            <Button size="large" variant="secondary" className="fw-bold my-5 ">
              Go to Order
            </Button>
          </div>
          <div>
            <center>
              <div style={{ padding: '0% 15% 0% 15%' }}>
                <div
                  role="list"
                  className="email__list"
                  style={{
                    marginTop: '26px',
                    paddingTop: '3rem',
                    borderTop: '1px solid whitesmoke'
                  }}
                >
                  {orderDetails?.orderItems?.length > 0 &&
                    orderDetails?.orderItems.map((itm, i) => {
                      return (
                        <div
                          data-id="product"
                          role="listitem"
                          className="email__item"
                          style={{
                            paddingTop: '24px',
                            paddingBottom: '38px',
                            borderBottom: '1px solid #f5f5f5'
                          }}
                        >
                          <div
                            className="checkout__top d-flex flex-row align-items-start flex-nowrap"
                            style={{
                              flex: '0 0 auto'
                            }}
                          >
                            <div
                              className="checkout__left d-flex flex-row align-items-start flex-nowrap"
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
                                  className="checkout__img d-flex align-items-center justify-content-center"
                                  style={{
                                    backgroundColor: '#f8fafd',
                                    flex: 1,
                                    borderRadius: '6px',
                                    boxShadow: '1px 1px 3px 0 rgb(0 0 0 / 1%)',
                                    height: '100% !important'
                                  }}
                                >
                                  <img
                                    className="list__item-img avatar__checkout border"
                                    alt=""
                                    style={{
                                      objectFit: 'contain',
                                      backgroundColor: '#f8fafd',
                                      width: '80px'
                                    }}
                                    data-sizes="auto"
                                    src={helper.CampaignProductImagePath + itm.itemDetails.image}
                                  />
                                </div>
                                <div
                                  className="checkout__qtytag d-flex align-items-center justify-content-center fw-bold"
                                  style={{
                                    position: 'absolute',
                                    left: 'auto',
                                    top: 0,
                                    right: 0,
                                    bottom: 'auto',
                                    width: '21px',
                                    height: '21px',
                                    marginTop: '-5px',
                                    marginRight: '-5px',
                                    paddingTop: '3px',
                                    borderRadius: '50%',
                                    backgroundColor: '#0e75f9',
                                    color: '#fff',
                                    fontSize: '11px'
                                  }}
                                >
                                  <div>{itm.quantity}</div>
                                </div>
                              </div>
                              <div
                                className="checkout__info d-flex flex-column flex-wrap align-items-start px-3 pt-2"
                                style={{
                                  minWidth: '90px',
                                  flex: 1
                                }}
                              >
                                <a
                                  href="/item/hoodies"
                                  className="checkout__title d-flex flex-row align-items-start fw-bolder"
                                  style={{
                                    paddingRight: '0.3rem',
                                    flex: '0 0 auto',
                                    fontSize: '19px',
                                    maxWidth: '100%'
                                  }}
                                >
                                  <div>{itm.itemDetails.headline}</div>
                                </a>
                                <div
                                  className="checkout__brand"
                                  style={{ maxWidth: '200px', paddingTop: '3px', fontSize: '13px' }}
                                >
                                  <div>{itm.itemDetails.brand}</div>
                                </div>
                                <div
                                  className="checkout__price flex-row"
                                  style={{
                                    display: 'none',
                                    paddingTop: '6px'
                                  }}
                                >
                                  <h5 style={{ color: 'var(--text-title)' }}>$22</h5>
                                </div>
                              </div>
                            </div>
                            <div
                              className="checkout__right d-flex flex-row align-items-center justify-content-end flex-wrap"
                              style={{
                                flex: 1
                              }}
                            >
                              <Link
                                to={
                                  '/organization/' + item?.productDetails?.organizationDetails.slug
                                }
                              >
                                <ListItemImg
                                  size={46}
                                  className="ms-2 d-none d-sm-flex"
                                  imgSrc={
                                    helper.CampaignAdminLogoPath +
                                    item.productDetails?.organizationDetails?.logo
                                  }
                                />
                              </Link>
                              <div
                                className="checkout__subtotal d-flex flex-row align-items-center fw-bold"
                                style={{
                                  marginTop: '3px',
                                  flex: '0 auto',
                                  color: '#6f6f90',
                                  fontSize: '16px'
                                }}
                              >
                                <div className="checkout__itemvalue d-flex align-items-center">
                                  {/*   <div
                                    className="checkout__tag"
                                    style={{
                                      display: 'flex',
                                      width: '90px',
                                      marginRight: '21px',
                                      WebkitBoxPack: 'center',
                                      WebkitJustifyContent: 'center',
                                      msFlexPack: 'center',
                                      justifyContent: 'center',
                                      WebkitBoxFlex: 0,
                                      WebkitFlex: '0 0 auto',
                                      msFlex: '0 0 auto',
                                      flex: '0 0 auto'
                                    }}
                                  >
                                    <div
                                      className="tag tag--xp"
                                      style={{
                                        display: 'flex',
                                        padding: 0,
                                        WebkitBoxPack: 'center',
                                        WebkitJustifyContent: 'center',
                                        msFlexPack: 'center',
                                        justifyContent: 'center',
                                        WebkitBoxAlign: 'center',
                                        WebkitAlignItems: 'center',
                                        msFlexAlign: 'center',
                                        alignItems: 'center',
                                        WebkitBoxFlex: 0,
                                        WebkitFlex: '0 0 auto',
                                        msFlex: '0 0 auto',
                                        flex: '0 0 auto',
                                        borderRadius: '3px',
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        width: 'auto',
                                        height: 'auto',
                                        whiteSpace: 'nowrap'
                                      }}
                                    >
                                      <span className="checkout__xp">{itm.xp}</span>&nbsp;xp
                                    </div>
                                  </div>*/}
                                </div>
                              </div>
                              <h4>
                                {orderDetails.currencySymbol}
                                {
                                  itm.productPrice
                                  // purchasedPriceWithTax(Number(itm.productPrice), Number(orderDetails.appliedTaxPercentage)) * itm.quantity
                                }
                              </h4>
                            </div>
                          </div>
                          {/*   {itm.tax === true && (
                            <div
                              className="note note--email"
                              style={{
                                color: 'var(--text-title)',
                                maxWidth: '100%',
                                marginTop: '1.3rem',
                                marginBottom: '9px',
                                padding: '9px',
                                backgroundColor: '#f8fafd'
                              }}
                            >
                              <div style={{ textAlign: 'left' }}>
                                <img
                                  alt=""
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAASpJREFUOE+lUztOw0AUnDEchBrbUIAEdlLAIaj5ROIjnDQcAKeHJlnxkxBwElIQByQaYjt1DgJ+KIuMzNougC1W+3bezuzOe0sYo9lLlmWennyIK8QiBRPOMea7jJ46zlsxncWg0Y8Phbw0CfOYIkfDtnv1HecLXyVSd8jcjwJHi+rJV8k1gH0jaQqRB5DbABYM7CYKnAM2L8YrWWa9llSzbDfqLN37vfEOLOvOxC0rW6Wn0j1Cbk2Q4MswsNcbKn0WyJqJC9iir9IzQE5KymSo9wRbgNhlP3hOTyWPBDaKoACDUeBsaj/6cQjytKyMQb2ySDdqu2HdYUArV78ZZBgd2916ZbYq3S5ee3bdqqdpt+vqPCModNIPTwB81fnfHZYT/Lm3c4Lf/KpP90mRhNu+qFMAAAAASUVORK5CYII="
                                />
                                &nbsp; This item is marked as tax eligible
                                <a
                                  href="/new-organizations"
                                  className="link link--new"
                                  style={{ zIndex: 99, cursor: 'pointer', color: '#3a94d4' }}
                                >
                                  <span
                                    className="link link--terms"
                                    style={{ zIndex: 99, cursor: 'pointer' }}
                                  />
                                </a>
                              </div>
                            </div>
                            )} */}
                        </div>
                      );
                    })}
                </div>
              </div>
            </center>
          </div>
          <br />
          <br />
          <div style={{}}>
            <center>
              <div style={{ margin: '2% 15% 0% 15%', minHeight: '90px' }}>
                <div
                  style={{
                    textAlign: 'left',
                    display: 'inline-block',
                    width: '70%',
                    float: 'left'
                  }}
                >
                  <p style={{ fontSize: '19px', color: '#6f6f90' }}>Subtotal:</p>
                </div>
                <div
                  style={{
                    textAlign: 'right',
                    display: 'inline-block',
                    width: '25%',
                    float: 'right'
                  }}
                >
                  <p style={{ color: '#6f6f90' }}>
                    <b style={{ fontSize: '16px' }}>
                      {' '}
                      {orderDetails.currencySymbol}
                      {/* {purchasedPriceWithTax(Number(orderDetails.subtotal), Number(orderDetails.appliedTaxPercentage))} */}
                      {orderDetails.subtotal}
                    </b>
                  </p>
                </div>

                <div
                  style={{
                    textAlign: 'left',
                    display: 'inline-block',
                    width: '70%',
                    float: 'left'
                  }}
                >
                  <p style={{ fontSize: '19px', color: '#6f6f90' }}>
                    Stripe :{/* ({orderDetails.salesTaxPer}%): */}
                  </p>
                </div>
                <div
                  style={{
                    textAlign: 'right',
                    display: 'inline-block',
                    width: '25%',
                    float: 'right'
                  }}
                >
                  <p style={{ color: '#6f6f90' }}>
                    <b style={{ fontSize: '16px' }}>
                      {' '}
                      {orderDetails.currencySymbol}
                      {orderDetails.salesTax}
                    </b>
                  </p>
                </div>

                <div
                  style={{
                    textAlign: 'left',
                    display: 'inline-block',
                    width: '70%',
                    float: 'left'
                  }}
                >
                  <p style={{ fontSize: '19px', color: '#6f6f90' }}>XP:</p>
                </div>
                <div
                  style={{
                    textAlign: 'right',
                    display: 'inline-block',
                    width: '25%',
                    float: 'right'
                  }}
                >
                  <p style={{ color: '#4aabf0' }}>
                    <b style={{ fontSize: '16px' }}>{orderDetails.xp} xp </b>
                  </p>
                </div>
              </div>
              <div>
                {/* <div className="order__transaction px-sm-2 py-2">
                  <div className="bg-lighter d-flex align-items-center pt-20p pb-20p px-2">
                    <div className="order__logo me-2">
                      <img src={getCardIcon(CardType)} alt="" className="img-fluid" />
                    </div>
                    <div className="order__card fs-7">
                      <div className="text-dark fw-semibold mb-6p">XXXX XXXX XXXX {last4}</div>
                      <div className="text-light fw-semibold">
                        <div>Transaction: {moment(order.created_at).format('MMMM DD , YYYY')}</div>
                      </div>
                    </div>
                  </div>
                </div>*/}
                <center>
                  <div
                    style={{
                      margin: '3% 15% 2% 15%',
                      paddingTop: '3%',
                      minHeight: '90px',
                      borderTop: '1px solid #f5f5f5'
                    }}
                  >
                    <div
                      style={{
                        textAlign: 'left',
                        display: 'inline-block',
                        width: '70%',
                        float: 'left'
                      }}
                    >
                      <p style={{ fontSize: '19px', color: '#6f6f90' }}>Total:</p>
                    </div>
                    <div
                      style={{
                        textAlign: 'right',
                        display: 'inline-block',
                        width: '25%',
                        float: 'right'
                      }}
                    >
                      <p style={{ color: '#6f6f90' }}>
                        {orderDetails.currency}
                        <b style={{ fontSize: '26px' }}>
                          {' '}
                          {orderDetails.currencySymbol}
                          {orderDetails.total}
                        </b>
                      </p>
                    </div>
                  </div>
                  <p
                    className="fs-5"
                    style={{
                      padding: '0% 15%',
                      textAlign: 'left',
                      color: '#6f6f90'
                    }}
                  >
                    Thanks for donating through Donorport! The organization(s) have received your
                    donation and will purcahse the items on your behalf when the post has been fully
                    funded or the items were listed as ongoing. Navigate to your profile to track
                    updates to your orders including follow-up media from the Organization.
                  </p>
                </center>
              </div>
            </center>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};
export default OrderConfirmPage;
