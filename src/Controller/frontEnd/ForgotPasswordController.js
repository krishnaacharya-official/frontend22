import FrontLoader from "../../Common/FrontLoader";
// import ForgotPassword from "../../View/frontEnd/Layout/ForgotPassword";
import React, { useState, useEffect } from "react";
// import ResetPassword from "../../View/frontEnd/Layout/ResetPassword";
import { useParams, useNavigate } from "react-router-dom";
import ToastAlert from "../../Common/ToastAlert";
import { validateAll } from "indicative/validator";
import userAuthApi from "../../Api/frontEnd/auth";
import ForgotPassword from "../../View/frontEnd/forgot-password";




export default function ForgotPasswordController() {
    const [loading, setLoading] = useState(false)
    const [isSendOtp, setIsSendOtp] = useState(false)
    const [state, setstate] = useState({
        email: "",
        // password: "",
        // cpassword: "",
        // otp: "",
        error: [],
    })
    const {
        error, email, 
        // password,cpassword,otp,
    } = state;
    const navigate = useNavigate()

    const changevalue = (e) => {
        let value = e.target.value;
        setstate({
            ...state,
            [e.target.name]: value
        })
    }
    const sendOtp = () => {
        const rules = {
            email: 'required|email',
        }

        const message = {
            'email.required': 'Email is Required.',
            'email.email': 'please enter valid email.',

        }
        validateAll(state, rules, message).then(async () => {
            const formaerrror = {};
            setstate({
                ...state,
                error: formaerrror
            })
            setLoading(true)
            const sendOtp = await userAuthApi.sendOtp(email)
            if (sendOtp) {
                if (!sendOtp.data.success) {
                    setLoading(false)
                    ToastAlert({ msg: sendOtp.data.message, msgType: 'error' });
                } else {
                    // setIsSendOtp(true)
                    setstate({
                        ...state,
                        email: "",
                        error: [],
                    })
                    ToastAlert({ msg: sendOtp.data.message, msgType: 'success' });
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
    // const reset = () => {
    //     const rules = {
    //         otp: 'required',
    //         password: 'required|min:6',
    //         cpassword: 'required|same:password',

    //     }

    //     const message = {
    //         'email.required': 'Email is Required.',
    //         'email.email': 'please enter valid email.',
    //         'password.min': 'Password must be at least 6 characters',
    //         'password.required': 'Password is Required.',
    //         'cpassword.required': 'Confirm Password is Required.',

    //     }
    //     validateAll(state, rules, message).then(async () => {
    //         const formaerrror = {};
    //         setstate({
    //             ...state,
    //             error: formaerrror
    //         })
    //         setLoading(true)
    //         const resetPassword = await userAuthApi.verifyOtp(email,otp,password)
    //         if (resetPassword) {
    //             if (!resetPassword.data.success) {
    //                 setLoading(false)
    //                 ToastAlert({ msg: resetPassword.data.message, msgType: 'error' });
    //             } else {
    //                 navigate('/signin')
    //                 ToastAlert({ msg: resetPassword.data.message, msgType: 'success' });
    //                 setLoading(false)
    //             }

    //         } else {
    //             setLoading(false)
    //             ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
    //         }








    //     }).catch(errors => {

    //         setLoading(false)
    //         const formaerrror = {};
    //         if (errors.length) {
    //             errors.forEach(element => {
    //                 formaerrror[element.field] = element.message
    //             });
    //         } else {
    //             ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
    //         }

    //         setstate({
    //             ...state,
    //             error: formaerrror
    //         })

    //     });

    // }

    return (
        <>
            <FrontLoader loading={loading} />
            {/* {!isSendOtp ?
                <ForgotPassword
                    changevalue={changevalue}
                    stateData={state}
                    sendOtp={sendOtp}
                /> :
                <ResetPassword
                    changevalue={changevalue}
                    stateData={state}
                    reset={reset}

                />} */}
                <ForgotPassword 
                changevalue={changevalue}
                stateData={state}
                sendOtp={sendOtp}
                />

        </>
    )
}