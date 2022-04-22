import axios from "axios";
import helper from "../../Common/Helper";

function auth() {

    const login = async (email, password) => {
        let res = {};
        await axios({
            method: 'Post',
            url: `${helper.ApiUrl}auth/admin_signin`,
            responseType: 'json',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': 'true',
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                withCredentials: true,
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
    const verifyToken = async (token) => {
        let res = {};
        await axios({
            method: 'Post',
            url: `${helper.ApiUrl}auth/verifToken`,
            responseType: 'json',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': 'true',
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                withCredentials: true,
                mode: 'no-cors',
            },
            data: {
                token:token
            }

        }).then((response) => {
            res = response
        });
        return res;
    }

    return {
        login,
        verifyToken

    }
}
const authApi = auth();
export default authApi;