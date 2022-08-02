import React, { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom";
import orderApi from "../../Api/frontEnd/order";
import FrontLoader from "../../Common/FrontLoader";
import helper, { purchasedPriceWithTax } from "../../Common/Helper";
import DefaultLayout from "./Component/templates/default-layout";

const OrderConfirmPage = () => {
    const params = useParams();
    const navigate = useNavigate();

    const userAuthToken = localStorage.getItem('userAuthToken');
    const [orderDetails, setOrderDetails] = useState({})
    const [loading, setLoading] = useState(false)


    const getOrderDetails = async () => {
        let data = {}
        data.orderId = params.id
        const details = await orderApi.getOrderDetails(userAuthToken, data)
        if (details && details.data.success) {
            if (details.data.data.length > 0) {
                setOrderDetails(details.data.data[0])
            } else {
                navigate('/')
            }

        } else {
            navigate('/')
        }

    }

    useEffect(() => {
        (async () => {
            if (params.id) {
                setLoading(false)
                await getOrderDetails()
                setLoading(false)


            } else {
                navigate('/')

            }
        })()
    }, [params.id])



    return (
        <>
            {/* {console.log(orderDetails)} */}
            <DefaultLayout>
                <FrontLoader loading={loading} />
                <div style={{ padding: '5% 10%' }}>
                    <div style={{ padding: '10% 15% 0% 15%' }}><center>
                        <img style={{ float: 'right', width: "25px" }} alt="" src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/62a2a55e87f6544c42fa0e73_2022%20Logo%20Icon%20(2).svg" />
                        <p style={{ fontSize: '19px', textAlign: 'left', color: '#6f6f90', font: 'bold 19px/20px Helvetica' }}>
                            Hi {orderDetails?.userDetails?.name},</p>
                        <p style={{ fontSize: '19px', textAlign: 'left', color: '#6f6f90', font: 'bold 19px/30px Helvetica' }}>
                            Thank you for donating through Donorport! Navigate to your profile to track updates to your orders including follow-up media from the Organization.
                        </p>
                        <br />
                        <h1 style={{ fontSize: '19px', color: '#6f6f90', font: 'bold 23px/10px Helvetica' }}>Order Receipt</h1>
                        <span style={{ color: '#6f6f90', font: '17px/10px Helvetica' }}>#{orderDetails.uniqueTransactionId}</span>
                    </center></div><br />
                    <div><center><div style={{ padding: '0% 15% 0% 15%' }}>
                        <div role="list" className="email__list w-dyn-items" style={{ marginTop: '26px' }}>

                            {
                                orderDetails?.orderItems?.length > 0 &&
                                orderDetails?.orderItems.map((itm, i) => {
                                    return (
                                        <div data-id="product" role="listitem" className="email__item w-dyn-item" style={{ paddingTop: '24px', paddingBottom: '38px', borderBottom: '1px solid #f5f5f5' }}>
                                            <div className="checkout__top" style={{ display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', WebkitFlexDirection: 'row', msFlexDirection: 'row', flexDirection: 'row', WebkitFlexWrap: 'nowrap', msFlexWrap: 'nowrap', flexWrap: 'nowrap', WebkitBoxAlign: 'start', WebkitAlignItems: 'flex-start', msFlexAlign: 'start', alignItems: 'flex-start', WebkitBoxFlex: 0, WebkitFlex: '0 0 auto', msFlex: '0 0 auto', flex: '0 0 auto' }}><div className="checkout__left" style={{ display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', WebkitFlexDirection: 'row', msFlexDirection: 'row', flexDirection: 'row', WebkitFlexWrap: 'nowrap', msFlexWrap: 'nowrap', flexWrap: 'nowrap', WebkitBoxAlign: 'start', WebkitAlignItems: 'flex-start', msFlexAlign: 'start', alignItems: 'flex-start', WebkitBoxFlex: 0, WebkitFlex: '0 auto', msFlex: '0 auto', flex: '0 auto' }}><div className="checkout__thumb" style={{ position: 'relative', display: 'flex', width: '76px', height: '76px', marginRight: '12px', WebkitBoxPack: 'center', WebkitJustifyContent: 'center', msFlexPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', WebkitAlignItems: 'center', msFlexAlign: 'center', alignItems: 'center', WebkitBoxFlex: 0, WebkitFlex: '0 0 auto', msFlex: '0 0 auto', flex: '0 0 auto', borderRadius: '6px' }}><div className="checkout__img w-embed" style={{ backgroundColor: '#f8fafd', display: 'flex', WebkitBoxPack: 'center', WebkitJustifyContent: 'center', msFlexPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', WebkitAlignItems: 'center', msFlexAlign: 'center', alignItems: 'center', WebkitBoxFlex: 1, WebkitFlex: 1, msFlex: 1, flex: 1, borderRadius: '6px', boxShadow: '1px 1px 3px 0 rgb(0 0 0 / 1%)', height: '100% !important' }}>
                                                <img className="lazy item__img" alt="" style={{ objectFit: 'contain', backgroundColor: '#f8fafd', width: "80px" }} data-sizes="auto" src={helper.CampaignProductImagePath + itm.itemDetails.image} />
                                            </div><div className="checkout__qtytag" style={{ position: 'absolute', left: 'auto', top: 0, right: 0, bottom: 'auto', display: 'flex', width: '21px', height: '21px', marginTop: '-5px', marginRight: '-5px', paddingTop: '3px', WebkitBoxPack: 'center', WebkitJustifyContent: 'center', msFlexPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', WebkitAlignItems: 'center', msFlexAlign: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#0e75f9', color: '#fff', fontSize: '11px', fontWeight: 700 }}><div>{itm.quantity}
                                            </div></div></div><div className="checkout__info" style={{ display: 'flex', minWidth: '90px', paddingTop: '6px', paddingRight: '9px', paddingLeft: '9px', WebkitBoxOrient: 'vertical', WebkitBoxDirection: 'normal', WebkitFlexDirection: 'column', msFlexDirection: 'column', flexDirection: 'column', WebkitFlexWrap: 'wrap', msFlexWrap: 'wrap', flexWrap: 'wrap', WebkitBoxAlign: 'start', WebkitAlignItems: 'flex-start', msFlexAlign: 'start', alignItems: 'flex-start', WebkitBoxFlex: 1, WebkitFlex: 1, msFlex: 1, flex: 1 }}>
                                                    <a href="/item/hoodies" className="checkout__title w-inline-block" style={{ display: 'inline-block', paddingRight: '0.3rem', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', WebkitFlexDirection: 'row', msFlexDirection: 'row', flexDirection: 'row', WebkitBoxAlign: 'start', WebkitAlignItems: 'flex-start', msFlexAlign: 'start', alignItems: 'flex-start', WebkitBoxFlex: 0, WebkitFlex: '0 0 auto', msFlex: '0 0 auto', flex: '0 0 auto', fontSize: '19px', fontWeight: 900, maxWidth: '100%', color: 'var(--text-title)' }}><div>{itm.itemDetails.headline}</div></a><div className="checkout__brand" style={{ maxWidth: '200px', paddingTop: '3px', fontSize: '13px' }}><div>{itm.itemDetails.brand}</div></div>
                                                    <div className="checkout__price" style={{ display: 'none', paddingTop: '6px', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', WebkitFlexDirection: 'row', msFlexDirection: 'row', flexDirection: 'row' }}><h5 style={{ color: 'var(--text-title)' }}>$22</h5></div></div></div><div className="checkout__right" style={{ display: 'flex', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', WebkitFlexDirection: 'row', msFlexDirection: 'row', flexDirection: 'row', WebkitBoxPack: 'end', WebkitJustifyContent: 'flex-end', msFlexPack: 'end', justifyContent: 'flex-end', WebkitFlexWrap: 'wrap', msFlexWrap: 'wrap', flexWrap: 'wrap', WebkitBoxAlign: 'center', WebkitAlignItems: 'center', msFlexAlign: 'center', alignItems: 'center', WebkitBoxFlex: 1, WebkitFlex: 1, msFlex: 1, flex: 1 }}><div className="checkout__subtotal" style={{ display: 'flex', marginTop: '3px', WebkitBoxOrient: 'horizontal', WebkitBoxDirection: 'normal', WebkitFlexDirection: 'row', msFlexDirection: 'row', flexDirection: 'row', WebkitBoxAlign: 'center', WebkitAlignItems: 'center', msFlexAlign: 'center', alignItems: 'center', WebkitBoxFlex: 0, WebkitFlex: '0 auto', msFlex: '0 auto', flex: '0 auto', color: '#6f6f90', fontSize: '16px', fontWeight: 700 }}><div className="checkout__itemvalue" style={{ display: 'flex', WebkitBoxAlign: 'center', WebkitAlignItems: 'center', msFlexAlign: 'center', alignItems: 'center' }}><div className="checkout__tag" style={{ display: 'flex', width: '90px', marginRight: '21px', WebkitBoxPack: 'center', WebkitJustifyContent: 'center', msFlexPack: 'center', justifyContent: 'center', WebkitBoxFlex: 0, WebkitFlex: '0 0 auto', msFlex: '0 0 auto', flex: '0 0 auto' }}><div className="tag tag--xp w-embed" style={{ display: 'flex', padding: 0, WebkitBoxPack: 'center', WebkitJustifyContent: 'center', msFlexPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', WebkitAlignItems: 'center', msFlexAlign: 'center', alignItems: 'center', WebkitBoxFlex: 0, WebkitFlex: '0 0 auto', msFlex: '0 0 auto', flex: '0 0 auto', borderRadius: '3px', fontSize: '14px', fontWeight: 700, width: 'auto', height: 'auto', color: '#4aabf0', whiteSpace: 'nowrap' }}><span className="checkout__xp">{itm.xp}</span>&nbsp;xp</div></div></div></div><h4 style={{ color: 'var(--text-title)' }}>{orderDetails.currencySymbol}{purchasedPriceWithTax(Number(itm.productPrice), Number(orderDetails.appliedTaxPercentage)) * itm.quantity}</h4></div></div>
                                            {
                                                itm.tax === true &&

                                                <div className="note note--email" style={{ color: 'var(--text-title)', maxWidth: '100%', marginTop: '1.3rem', marginBottom: '9px', padding: '9px', backgroundColor: '#f8fafd' }}><div style={{ textAlign: 'left' }}><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAASpJREFUOE+lUztOw0AUnDEchBrbUIAEdlLAIaj5ROIjnDQcAKeHJlnxkxBwElIQByQaYjt1DgJ+KIuMzNougC1W+3bezuzOe0sYo9lLlmWennyIK8QiBRPOMea7jJ46zlsxncWg0Y8Phbw0CfOYIkfDtnv1HecLXyVSd8jcjwJHi+rJV8k1gH0jaQqRB5DbABYM7CYKnAM2L8YrWWa9llSzbDfqLN37vfEOLOvOxC0rW6Wn0j1Cbk2Q4MswsNcbKn0WyJqJC9iir9IzQE5KymSo9wRbgNhlP3hOTyWPBDaKoACDUeBsaj/6cQjytKyMQb2ySDdqu2HdYUArV78ZZBgd2916ZbYq3S5ee3bdqqdpt+vqPCModNIPTwB81fnfHZYT/Lm3c4Lf/KpP90mRhNu+qFMAAAAASUVORK5CYII=" />&nbsp; This item is marked as tax eligible<a href="/new-organizations" className="link link--new" style={{ zIndex: 99, cursor: 'pointer', color: '#3a94d4' }}><span className="link link--terms" style={{ zIndex: 99, cursor: 'pointer' }} /></a></div></div>
                                            }

                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div></center></div><br /><br />
                    <div style={{}}><center>
                        <div style={{ margin: '2% 15% 0% 15%', minHeight: '90px' }}>
                            <div style={{ textAlign: 'left', display: 'inline-block', width: '70%', float: 'left' }}>
                                <p style={{ fontSize: '19px', color: '#6f6f90', font: 'bold 19px Helvetica' }}>
                                    Subtotal:</p></div>
                            <div style={{ textAlign: 'right', display: 'inline-block', width: '25%', float: 'right' }}>
                                <p style={{ color: '#6f6f90', font: '16px Helvetica' }}><b style={{ fontSize: '16px' }}> {orderDetails.currencySymbol
                                }{purchasedPriceWithTax(Number(orderDetails.subtotal), Number(orderDetails.appliedTaxPercentage))}</b></p></div>


                            <div style={{ textAlign: 'left', display: 'inline-block', width: '70%', float: 'left' }}>
                                <p style={{ fontSize: '19px', color: '#6f6f90', font: 'bold 19px Helvetica' }}>
                                    SalesTax ({orderDetails.salesTaxPer}%):</p></div>
                            <div style={{ textAlign: 'right', display: 'inline-block', width: '25%', float: 'right' }}>
                                <p style={{ color: '#6f6f90', font: '16px Helvetica' }}><b style={{ fontSize: '16px' }}> {orderDetails.currencySymbol
                                }{orderDetails.salesTax}</b></p></div>

                            <div style={{ textAlign: 'left', display: 'inline-block', width: '70%', float: 'left' }}>
                                <p style={{ fontSize: '19px', color: '#6f6f90', font: 'bold 19px Helvetica' }}>
                                    XP:</p></div>
                            <div style={{ textAlign: 'right', display: 'inline-block', width: '25%', float: 'right' }}>
                                <p style={{ color: '#4aabf0', font: '16px Helvetica' }}><b style={{ fontSize: '16px' }}>{orderDetails.xp} xp </b></p></div>
                        </div>
                        <div><center>
                            <div style={{ margin: '3% 15% 2% 15%', minHeight: '90px', borderTop: '1px solid #f5f5f5' }}>
                                <div style={{ textAlign: 'left', display: 'inline-block', width: '70%', float: 'left' }}>
                                    <p style={{ fontSize: '19px', color: '#6f6f90', font: 'bold 19px Helvetica' }}>
                                        Total:</p></div>
                                <div style={{ textAlign: 'right', display: 'inline-block', width: '25%', float: 'right' }}>
                                    <p style={{ color: '#6f6f90', font: '19px Helvetica' }}>
                                        {orderDetails.currency
                                        }<b style={{ fontSize: '26px' }}> {orderDetails.currencySymbol
                                        }{orderDetails.total}</b></p></div></div>
                            <div style={{ borderTop: '1px solid #f5f5f5', margin: '0% 15%', padding: '2% 5%' }}><center>
                                <p style={{ color: '#aaa9c2', font: 'bold 12px/20px Helvetica' }}>This email was sent to <a href="#link" style={{ color: '#6f6f90', cursor: 'pointer' }}>{orderDetails?.userDetails?.email} </a> by Donorport Ltd. You have received this mandatory email service announcement to update you about important changes to your Donorport product or account.</p><br />
                                <p style={{ font: 'bold 12px/20px Helvetica', padding: '0% 20%', color: '#aaa9c2' }}>© 2022 Donorport LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043</p><br />
                                <div style={{ font: 'bold 12px/20px Helvetica', gridTemplateColumns: 'auto auto auto', padding: '0% 30% 0% 30%' }}>
                                    <a href="#link" style={{ fontSize: '12px', textAlign: 'center', color: '#aaa9c2', cursor: 'pointer' }}>&nbsp;Contact&nbsp;</a>
                                    <a href="#link" style={{ fontSize: '12px', textAlign: 'center', color: '#aaa9c2', cursor: 'pointer' }}>&nbsp;Home&nbsp;</a>
                                    <a href="#link" style={{ fontSize: '12px', textAlign: 'center', color: '#aaa9c2', cursor: 'pointer' }}>&nbsp;Unsubscribe&nbsp;</a>
                                </div><br />
                                <p style={{ font: 'bold 14px/20px Helvetica', color: '#6f6f90' }}><b>Thank you ♥</b></p><br />
                                <div style={{ font: 'bold 12px/20px Helvetica', gridTemplateColumns: 'auto auto auto', padding: '0% 30% 0% 30%' }}>
                                    <a href="#link" style={{ textAlign: 'center', color: '#aaa9c2', cursor: 'pointer' }}><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAVhJREFUOE+VkrtKA0EUhv9/195XsNXGyko3aCESUUFhZxPxGTSVhZ2lVdRXUOLObOMNA4Ik7qaysrDwPWzNHMnKruOqAQdm4Mw537kTlWNMtilDO0ufMyJ4B/BMeq9KLVy7pnQFY7JjiOxVneUy2VUqWC10JWh0Kr8BJPoimALyCxXVciZ/jMnuIFL/BhKJCDpRVLvMbQrH5IlSQYvGDDYg9qoajUIVNoLk4qKXR/M9v1fakFvUOt0ncFQFi5SMTp8AzLl6sXI4AjsEmmPAn7UTCROdngmwU4BDO1xqNpf6P8bkNk+gGcdpyyPa40Ct03kCA2cUB6PmLEPs/X9SpcjK5zh0dg3Iugs7zanUyBsVBRs5mCTZmlg5BzBZwH+Ab/S4HYbBbbk5cfw4TbJNYMXdkK/B42HC+q2txvxLuTluikncr1t69Siq7Y7+tU5PPbHdsLHYde0+AFFGmW0wX2fQAAAAAElFTkSuQmCC" />&nbsp;Facebook&nbsp;</a>
                                    <a href="#link" style={{ textAlign: 'center', color: '#aaa9c2', cursor: 'pointer' }}><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAARFJREFUOE+dkrFOAkEQhmf2Lr6ClYbOBAsLMbGQRXsLG+a4F+ApKCh8Cl7gYGgs6JXDwkQpLCSxM/oW5tgxc7InRg1mt9qZ3e+f2Z0fIXCh50bZtI8GzwHg8A+tuTiZJGmrr+clOB7O2oLCKEiFFPdpevayDmfZdQ1AtiMT3+mddqc5LkEe5o8IeKkJDzDf7ume6OTZCy9dcRxhPKCOPfgER7lsOdm9SFtvq/hhreU5JbbBPOsSNQd6lxKLFahBCXHOspSFA3ejsQFzihHWiSz5Ij9A5rwOAk+AsE9kFyuhb7lfKwaDQa1u+hwVvcqmO+8GX7/euGEcfkTlWEB61Tj+Y4AY4yNvksoAqhhkuRCffwB6F84P05t5DwAAAABJRU5ErkJggg==" />&nbsp;Instagram&nbsp;</a>
                                    <a href="#link" style={{ textAlign: 'center', color: '#aaa9c2', cursor: 'pointer' }}><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAXxJREFUOE+dkT9IW1EYxc95msVBUHCwc2kdXFoEF31pEZyaqb6Xl0qhBERb/DPZWcHupbRzsSC83EemjILFPNqpptBOCg4i0g6lECgOTfKOvNiE8GpM6Z2++537+77DucR/HsZcqfRpIJOZOL9qhjEfh6X6Kwv45mTt9ea9UVtl4O/PCnwGq7Hkuve/d8JBED5QpFJH74egIqltGhOuQXoJMgS44LpTh62HphCeAbrRAcbabYouff/9uMW+r3/EXwIqACokK5DeJe0r0mY2l96gMeWnFIYEvPiXnCjkHM/2ubMTDqX69RPAEYBbvWAr0t25XPpzM9WgUH4uYAtA6jpQwulAtTqWWcycN0FjwseE8nEt4V5XWFhxPft1rDfBS7j8FsKT7hu562anZ1t6GywWy6P1uh5RdEBMJgbs9dVr+YfzMydtsFDY36Y4DMIGMJjcSPCNk51e/rsfh+OHTgONEdK6YxE3BX4AcBBFv7943szxVfbbVnt9Q1K/AFHji1h00ZLcAAAAAElFTkSuQmCC" />&nbsp;Twitter&nbsp;</a>
                                </div>

                            </center>
                            </div>
                            <Link to="/" className="site-footer__fineprint mt-5 " id="fineprint">Back To Home</Link>

                        </center></div>
                    </center></div></div>
            </DefaultLayout>


        </>
    )

}
export default OrderConfirmPage