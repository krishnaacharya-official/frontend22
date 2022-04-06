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
        cardNumber: "4242424242424242",
        cardExpMonth: "02",
        cardExpYear: "2050",
        cardCVC: "111",
        error: [],
    })
    const { amount, email, phone, name, stateName, city, line1, cardNumber,
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
                getCartList.data.data.map((item, i) => {
                    tempPriceArray.push(item.productDetails?.price * item.quantity)
                })

                let sum = tempPriceArray.reduce(function (a, b) { return a + b; }, 0);
                setTotal(sum)
            }
            setLoading(false)

        })()
    }, [update])

    const pay = async () => {

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
                    await cartApi.clearCart(userAuthToken);
                    ToastAlert({ msg: payment.data.message, msgType: 'success' });
                    setLoading(false)
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


    return (
        <>
            <FrontLoader loading={loading} />
            <Checkout
                cartItem={cartItem}
                total={total}
                stateData={state}

            />
        </>
    )

}