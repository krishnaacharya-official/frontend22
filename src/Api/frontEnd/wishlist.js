import axios from "axios";
import helper from "../../Common/Helper";

function wishlist() {

    const list = async (authToken) => {

        let res = {};
        await axios({
            method: 'get',
            url: `${helper.ApiUrl}wishlist`,
            responseType: 'json',
            headers: {
                "x-access-token": authToken,
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': 'true',
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                withCredentials: true,
                mode: 'no-cors',
            },


        }).then((response) => {
            res = response
        });
        return res;
    }

    const add = async (authToken,data) => {

        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}wishlist`,
            responseType: 'json',
            headers: {
                "x-access-token": authToken,
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': 'true',
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                withCredentials: true,
                mode: 'no-cors',
            },
            data:data

        }).then((response) => {
            res = response
        });
        return res;
    }



    return {
        list,
        add



    }
}
const wishlistApi = wishlist();
export default wishlistApi;