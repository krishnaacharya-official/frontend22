import axios from "axios";
import helper from "../../Common/Helper";

function userAuth() {

    const login = async (email, password) => {
        let res = {};

        await axios({
            method: 'Post',
            url: `${helper.ApiUrl}auth/signin`,
            responseType: 'json',
            // withCredentials: true,
            // credentials: 'same-origin',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': 'true',
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                mode: 'no-cors',

            },
            data: {
                'email': email,
                'password': password,
            }

        }).then((response) => {
            res = response
        });
        return res;
    }
    const register = async (data) => {
        let res = {};
        await axios({
            method: 'Post',
            url: `${helper.ApiUrl}auth/signup`,
            responseType: 'json',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': 'true',
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                withCredentials: true,
                mode: 'no-cors',
            },
            data: data

        }).then((response) => {
            res = response
        });
        return res;
    }
    const sendOtp = async (email) => {
        let res = {};
        await axios({
            method: 'Post',
            url: `${helper.ApiUrl}auth/sendmail`,
            responseType: 'json',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': 'true',
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                withCredentials: true,
                mode: 'no-cors',
            },
            data: {
                email: email
            }

        }).then((response) => {
            res = response
        });
        return res;
    }
    const verifyOtp = async (email, otp, password) => {
        let res = {};
        await axios({
            method: 'Post',
            url: `${helper.ApiUrl}auth/verifyotp`,
            responseType: 'json',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': 'true',
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                withCredentials: true,
                mode: 'no-cors',
            },
            data: {
                email: email,
                otp: Number(otp),
                password: password
            }

        }).then((response) => {
            res = response
        });
        return res;
    }

    const getAuthTokenById = async (id) => {
        let res = {};

        await axios({
            method: 'Post',
            url: `${helper.ApiUrl}auth/getToken`,
            responseType: 'json',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': 'true',
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                mode: 'no-cors',

            },
            data: {
                'id': id,
            }

        }).then((response) => {
            res = response
        });
        return res;
    }

    return {
        login,
        register,
        sendOtp,
        verifyOtp,
        getAuthTokenById

    }
}
const userAuthApi = userAuth();
export default userAuthApi;