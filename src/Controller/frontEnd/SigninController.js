import React, { useEffect, useState } from "react"
import { validateAll } from "indicative/validator";
import FrontLoader from "../../Common/FrontLoader"
import ToastAlert from "../../Common/ToastAlert"
// import Signin from "../../View/frontEnd/Layout/Signin"
import userAuthApi from "../../Api/frontEnd/auth";
import { useNavigate } from "react-router-dom";
import Login from "../../View/frontEnd/login";
import { useSelector, useDispatch } from "react-redux";
import { setCurrency, setUserLanguage, setCurrencyPrice } from "../../user/user.action"
import locationApi from "../../Api/frontEnd/location";



function SigninController() {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [state, setstate] = useState({
        email: "",
        password: "",
        error: [],
    })
    const {
        error, email, password,
    } = state;

    const navigate = useNavigate();
    const dispatch = useDispatch()


    const convertCurrency = async (currency) => {
        const getCurrencyPrice = await locationApi.convertCurrency(currency)
        if (getCurrencyPrice) {
            console.log(getCurrencyPrice)
            console.log(getCurrencyPrice.data.result)

            if (getCurrencyPrice.data.success) {
                dispatch(setCurrencyPrice(getCurrencyPrice.data.result))

            }

        }
    }


    const signIn = () => {
        const rules = {
            email: 'required|email',
            password: 'required',
        }

        const message = {
            'email.required': 'Email is Required.',
            'email.email': 'please enter valid email.',
            'password.required': 'Password is Required.',

        }
        validateAll(state, rules, message).then(async () => {
            const formaerrror = {};
            setstate({
                ...state,
                error: formaerrror
            })
            setLoading(true)
            const uselogin = await userAuthApi.login(email, password)
            // console.log(uselogin)
            if (uselogin) {
                if (!uselogin.data.success) {
                    setLoading(false)
                    ToastAlert({ msg: uselogin.data.message, msgType: 'error' });
                } else {
                    if (uselogin.data.roleName === "USER" || uselogin.data.roleName === "CAMPAIGN_ADMIN") {

                        if (uselogin.data.roleName === "CAMPAIGN_ADMIN" && uselogin.data.otp_status !== 1) {
                            setLoading(false)
                            ToastAlert({ msg: 'Campaign Admin not Active.', msgType: 'error' });
                        } else {
                            localStorage.clear()

                            if (uselogin.data.roleName === "CAMPAIGN_ADMIN") {
                                localStorage.setItem('CampaignAdminAuthToken', uselogin.data.accessToken)
                                localStorage.setItem('CampaignAdmin', JSON.stringify(uselogin.data))
                                navigate('/campaign/' + uselogin.data.slug + '/dashboard', { replace: true })
                            } else {
                                // if user currency is already set
                                if (uselogin.data?.currency && uselogin.data?.currency !== null && uselogin.data?.currency !== "") {
                                    let currencyData = {}
                                    currencyData.currency = uselogin.data.currency.split('=')[0]
                                    currencyData.currencySymbol = uselogin.data.currency.split('=')[1]
                                    dispatch(setCurrency(currencyData))
                                    await convertCurrency(uselogin.data.currency.split('=')[0])
                                } else {

                                    //getting user current location(country)
                                    const userCurrentLocation = await locationApi.getUserCurrentLoaction()
                                    if (userCurrentLocation) {

                                        let countryName = userCurrentLocation.data.country_name
                                        if (countryName) {

                                            // get currency by country name
                                            const getCountryData = await locationApi.currencyByCountry(uselogin.data.accessToken, countryName)
                                            if (getCountryData) {
                                                if (getCountryData.data.success) {
                                                    let currencyData = {}
                                                    currencyData.currency = getCountryData.data.data.currency
                                                    currencyData.currencySymbol = getCountryData.data.data.symbol
                                                    dispatch(setCurrency(currencyData))
                                                }
                                            }
                                        }
                                    }
                                }
                                if (uselogin.data?.language && uselogin.data?.language !== null) {
                                    dispatch(setUserLanguage(uselogin.data.language))
                                }

                                localStorage.setItem('userAuthToken', uselogin.data.accessToken)
                                localStorage.setItem('userData', JSON.stringify(uselogin.data))
                                navigate('/', { replace: true })

                            }
                            ToastAlert({ msg: uselogin.data.message + " " + uselogin.data.name, msgType: 'success' });
                            setLoading(false)
                        }

                        // localStorage.clear()
                        // localStorage.setItem('userAuthToken', uselogin.data.accessToken)
                        // localStorage.setItem('userData', JSON.stringify(uselogin.data))
                        // navigate('/', { replace: true })
                        // ToastAlert({ msg: uselogin.data.message + " " + uselogin.data.name, msgType: 'success' });
                        // setLoading(false)

                    } else {
                        setLoading(false)
                        ToastAlert({ msg: 'User Not Found', msgType: 'error' });

                    }
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
        let value = e.target.value;
        setstate({
            ...state,
            [e.target.name]: value
        })
    }

    return (
        <>
            {/* <Signin
                signIn={signIn}
                changevalue={changevalue}
                stateData={state}
                showPassword={showPassword}
                setShowPassword={setShowPassword}

            /> */}
            <Login
                signIn={signIn}
                changevalue={changevalue}
                stateData={state}
                showPassword={showPassword}
                setShowPassword={setShowPassword}

            />
            <FrontLoader loading={loading} />

        </>
    )
}
export default SigninController