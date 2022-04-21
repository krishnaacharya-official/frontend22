import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import FrontLoader from "../../Common/FrontLoader";
import Cart from "../../View/frontEnd/cart";
import cartApi from "../../Api/frontEnd/cart";
import authApi from "../../Api/admin/auth";
import ToastAlert from "../../Common/ToastAlert";
import Checkout from "../../View/frontEnd/checkout";
import orderApi from "../../Api/frontEnd/order";
import { validateAll } from "indicative/validator";



export default function CheckoutController() {
    const [cartItem, setCartItem] = useState([])
    const userAuthToken = localStorage.getItem('userAuthToken');
    const [loading, setLoading] = useState(false)
    const [update, setIsUpdate] = useState(false)
    const [total, setTotal] = useState(0)
    const userData = JSON.parse(localStorage.getItem('userData'));


    const params = useParams();
    const navigate = useNavigate();
    const [state, setstate] = useState({
        name: "",
        email: "",
        phone: "",
        stateName: "",
        city: "",
        country: "",
        zip: "382415",
        line1: "address",
        cardNumber: "",
        cardExpMonth: "",
        cardExpYear: "",
        cardCVC: "",
        error: [],
    })
    const { email, phone, name, stateName, city, line1, cardNumber,
        cardExpMonth,
        cardExpYear,
        cardCVC,
        country,
        zip } = state


    useEffect(() => {
        (async () => {
            setLoading(true)
            if (userAuthToken) {
                const verifyUser = await authApi.verifyToken(userAuthToken)
                if (!verifyUser.data.success) {
                    localStorage.clear()
                    navigate('/login')
                }
            }

            const getCartList = await cartApi.list(userAuthToken);
            if (getCartList.data.success === true) {
                setCartItem(getCartList.data.data)

                let tempPriceArray = []
                if (getCartList.data.data.length > 0) {
                    getCartList.data.data.map((item, i) => {
                        tempPriceArray.push(item.productDetails?.price * item.quantity)
                    })

                    let sum = tempPriceArray.reduce(function (a, b) { return a + b; }, 0);
                    setTotal(sum)
                } else {
                    navigate('/')
                }

            }
            setLoading(false)

        })()
    }, [update])

    const pay = async () => {

        // if (cartItem.find(e => e.productDetails.tax === true)) {
        //     console.log(true)
        // } else {
        //     console.log(false)

        // }

        const rules = {
            cardNumber: "required",
            cardExpMonth: "required",
            cardExpYear: "required",
            cardCVC: "required",

        }

        const message = {
            'cardNumber.required': 'card Number is Required.',
            'cardExpMonth.required': 'card Expiry Month is Required.',
            'cardExpYear.required': 'card Expiry Year is Required.',
            'cardCVC.required': 'card cvc is Required.',

        }
        validateAll(state, rules, message).then(async () => {
            const formaerrror = {};
            setstate({
                ...state,
                error: formaerrror
            })


            setLoading(true)

            let data = {}
            data.name = userData.name
            data.email = userData.email
            data.city = city
            data.state = stateName
            data.line1 = line1
            data.country = country
            data.amount = total
            data.cardNumber = cardNumber
            data.cardExpMonth = cardExpMonth
            data.cardExpYear = cardExpYear
            data.cardCVC = cardCVC
            data.postalCode = zip
            data.phone = phone



            const payment = await orderApi.payment(userAuthToken, data);
            if (payment) {
                if (!payment.data.success) {
                    setLoading(false)
                    ToastAlert({ msg: payment.data.message, msgType: 'error' });

                } else {

                    let orderDetails = {}
                    let productDetails = []
                    if (cartItem && cartItem.length > 0) {
                        cartItem.map((item, i) => {
                            let tempObj = {}
                            tempObj.id = item.productDetails._id
                            tempObj.quantity = item.quantity
                            tempObj.soldOut = item.productDetails.soldout
                            tempObj.productName = item.productDetails.headline
                            tempObj.productImage = item.productDetails.image
                            tempObj.productPrice = item.productDetails.price
                            tempObj.tax = item.productDetails.tax
                            tempObj.unlimited = item.productDetails.unlimited
                            tempObj.postTag = item.productDetails.postTag
                            tempObj.totalPrice = item.productDetails.price * item.quantity
                            productDetails.push(tempObj)
                        })
                    }
                    orderDetails.email = userData.email
                    orderDetails.transactionId = payment.data.data.id
                    orderDetails.paymentResponse = JSON.stringify(payment.data)
                    orderDetails.subtotal = total
                    orderDetails.appliedTaxPercentage = 10
                    orderDetails.tax = 10
                    orderDetails.total = total
                    orderDetails.transactionStatus = payment.data.data.status
                    orderDetails.products = productDetails
                    if (cartItem.find(e => e.productDetails.tax === true)) {
                        orderDetails.taxRecipt = true
                    } else {
                        orderDetails.taxRecipt = false
                    }

                    const saveOrderDetails = await orderApi.saveOrderDetails(userAuthToken, orderDetails);

                    if (!saveOrderDetails.data.success) {
                        setLoading(false)
                        ToastAlert({ msg: saveOrderDetails.data.message, msgType: 'error' });
                    } else {
                        const clearCart = await cartApi.clearCart(userAuthToken);
                        if (clearCart.data.success) {
                            navigate('/thankyou')
                        }
                        ToastAlert({ msg: saveOrderDetails.data.message, msgType: 'success' });
                        setLoading(false)
                    }


                    // 

                }

            } else {
                setLoading(false)
                ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
            }
        }).catch(errors => {

            setLoading(false)
            const formaerrror = {};
            if (errors.length) {
                errors.forEach(element => {
                    formaerrror[element.field] = element.message
                });
            } else {
                ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
            }

            setstate({
                ...state,
                error: formaerrror
            })

        });
    }

    const changevalue = (e) => {
        let value = e.target.value.replace(/[^\d.]|\.(?=.*\.)/g, "");
        setstate({
            ...state,
            [e.target.name]: value
        })
    }

    const removeCartItem = async (id) => {
        setLoading(true)
        const removeCartItem = await cartApi.deleteCartItem(userAuthToken, id);
        if (removeCartItem) {
            if (!removeCartItem.data.success) {
                setLoading(false)
                ToastAlert({ msg: removeCartItem.data.message, msgType: 'error' });

            } else {
                setIsUpdate(!update)
                ToastAlert({ msg: removeCartItem.data.message, msgType: 'success' });
                setLoading(false)
            }

        } else {
            setLoading(false)
            ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
        }
    }

    return (
        <>
            {/* {console.log(cartItem)} */}
            <FrontLoader loading={loading} />
            <Checkout
                cartItem={cartItem}
                total={total}
                stateData={state}
                pay={pay}
                changevalue={changevalue}
                removeCartItem={removeCartItem}

            />
        </>
    )

}