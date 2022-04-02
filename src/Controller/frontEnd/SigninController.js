import React, { useEffect, useState } from "react"
import { validateAll } from "indicative/validator";
import FrontLoader from "../../Common/FrontLoader"
import ToastAlert from "../../Common/ToastAlert"
import Signin from "../../View/frontEnd/Layout/Signin"
import userAuthApi from "../../Api/frontEnd/auth";
import { useNavigate } from "react-router-dom";


function SigninController() {
    const [loading, setLoading] = useState(false)
    const [state, setstate] = useState({
        email: "",
        password: "",
        error: [],
    })
    const {
        error, email, password,
    } = state;

    const navigate = useNavigate();


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
                    if (uselogin.data.roleName !== "ADMIN") {
                        localStorage.clear()
                        localStorage.setItem('userAuthToken', uselogin.data.accessToken)
                        localStorage.setItem('userData', JSON.stringify(uselogin.data))
                        navigate('/', { replace: true })
                        ToastAlert({ msg: uselogin.data.message + " " + uselogin.data.name, msgType: 'success' });
                        setLoading(false)

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
            <FrontLoader loading={loading} />
            <Signin
                signIn={signIn}
                changevalue={changevalue}
                stateData={state}
            />
        </>
    )
}
export default SigninController