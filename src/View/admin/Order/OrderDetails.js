import Dialog from '@mui/material/Dialog';
import React, { useEffect,useState } from 'react';

import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Button, Card } from '@mui/material';
import moment from 'moment';
import Label from '../../../components/Label';
// import helper from '../../../Common/Helper';
import helper,{ priceFormat } from '../../../Common/Helper';



const Transition = React.forwardRef(function Transition(propss, ref) {
    return <Slide direction="up" {...propss} />;
});
const DialogTransition = (props) => {
    return <Slide direction='up' {...props} />;
};
const OrderDetails = (props) => {
    
    let orderDetails = {}
    orderDetails = props.orderDetails
    // console.log(orderDetails)
    // console.log(Object.keys(orderDetails).length)


    // useEffect(() => {
    //     orderDetails = props.orderDetails
    // }, [props.orderDetails])

    return (
        <>
            <Dialog
                fullScreen
                open={props.modal}
                onClose={() => props.setModal(false)}
                TransitionComponent={Transition}

            >



                <AppBar sx={{ position: 'relative', bgcolor: "#3773c6" }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => props.setModal(false)}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            ORDER ID : {orderDetails._id}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={() => props.setModal(false)}>
                            Close
                        </Button>
                    </Toolbar>
                </AppBar>

                <div className="invoice invoice-content  px-5 pt-5">
                    <div className="row">
                        <div className="col-3">
                            <h5 className="almost-gray mb-3">Invoiced to:</h5>
                            <p className="gray-ish" style={{ textTransform: "capitalize" }}>{orderDetails?.userDetails?.name}</p>
                            <p className="gray-ish">User Adress</p>
                            <p className="gray-ish">EMAIL ID : {orderDetails?.userDetails?.email}</p>
                        </div>
                        <div className="col-3">
                            <h5 className="almost-gray">Order Id:</h5>
                            <p className="gray-ish">{orderDetails._id}</p>

                            <h5 className="almost-gray">Order Date:</h5>
                            <p className="gray-ish">{moment(orderDetails.created_at).format('DD MMMM YYYY')} </p>

                            <h5 className="almost-gray">Order Time:</h5>
                            <p className="gray-ish">{moment(orderDetails.created_at).format('hh:mm A')} </p>

                        </div>
                        <div className="col-3">
                            <h5 className="almost-gray">Transection Id:</h5>

                            <Label
                                variant="ghost"
                                color="info"
                                className="mb-2"
                            >
                                {orderDetails.transactionId}
                            </Label>

                            <h5 className="almost-gray">Transection Status:</h5>

                            <Label
                                variant="ghost"
                                color={(orderDetails.transactionStatus === "succeeded" && 'success') || 'error'}
                            >
                                {orderDetails.transactionStatus}
                            </Label>

                        </div>
                        <div className="col-3 text-right total-field">
                            <h4 className="almost-gray">Total Amount</h4>
                            <h1 className="gray-ish"><span className="curency">$</span>{priceFormat(orderDetails.total)}</h1>

                        </div>
                    </div>
                    <table border="0" cellSpacing="0" cellPadding="0" className='mt-5 '>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className="text-left">IMAGE</th>
                                <th className="text-left">NAME</th>
                                <th className="text-right">PRICE</th>
                                <th className="text-right">QUANTITY</th>
                                <th className="text-right">TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(orderDetails).length !== 0 && Object.keys(orderDetails).length !== undefined && orderDetails.orderItems.length > 0 ?
                                    orderDetails.orderItems.map((item, i) => {
                                        return (
                                            <tr>
                                                <td className="no">{i + 1}</td>
                                                <td className="price"><img style={{ width: "50px" }} src={helper.CampaignProductImagePath + item.productImage} alt="product" /></td>
                                                <td className=""><h3>{item.productName}</h3></td>
                                                <td className="unit">${priceFormat(item.productPrice)}</td>
                                                <td className="qty">{item.quantity}</td>
                                                <td className="total">${priceFormat(item.totalPrice)}</td>

                                            </tr>
                                        )
                                    }) : 
                                    <tr>
                                    <td className="unit text-center" colSpan={6}>Items Not Found</td>

                                </tr>

                            }



                        </tbody>
                        {
                            Object.keys(orderDetails).length !== 0 &&  orderDetails.orderItems.length > 0 &&
                            
                            <tfoot>
                                <tr>
                                    <td colSpan="3"></td>
                                    <td colSpan="2">SUBTOTAL</td>
                                    <td>${priceFormat(orderDetails.subtotal)}</td>
                                </tr>
                                <tr>
                                    <td colSpan="3"></td>
                                    <td colSpan="2">TRANSECTION FEES ( {orderDetails.transectionFees ?orderDetails.transectionFees:0} %)</td>
                                    <td>${Math.round(( Number(orderDetails.transectionFees ?orderDetails.transectionFees:0) / 100) * Number(orderDetails.subtotal))}</td>
                                </tr>
                                <tr>
                                    <td colSpan="3"></td>
                                    <td colSpan="2">PLATFORM FEES ( {orderDetails.platformFees ?orderDetails.platformFees:0} %)</td>
                                    <td>${Math.round((  Number(orderDetails.platformFees ?orderDetails.platformFees:0) / 100) * Number(orderDetails.subtotal))}</td>
                                </tr>
                                <tr>
                                    <td colSpan="3"></td>
                                    <td colSpan="2">GRAND TOTAL</td>
                                    <td>${priceFormat(orderDetails.total)}</td>
                                </tr>
                            </tfoot>
                        }

                    </table>
                </div>




            </Dialog >
        </>

    )
}
export default OrderDetails