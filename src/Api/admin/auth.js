import axios from "axios";
import helper from "../../Common/Helper";

function auth() {

    const login = async (email, password) => {
        let res = {};
        await axios({
            method: 'Post',
            url: `${helper.ApiUrl}auth/signin`,
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

    return {
        login,

    }
}
const authApi = auth();
export default authApi;