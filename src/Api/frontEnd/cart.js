import axios from "axios";
import helper from "../../Common/Helper";

function cart() {

    const add = async (authToken, productId) => {

        let res = {};
        await axios({
            method: 'Post',
            url: `${helper.ApiUrl}cart`,
            responseType: 'json',
            headers: {
                "x-access-token": authToken,
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': 'true',
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                withCredentials: true,
                mode: 'no-cors',
            },
            data: {
                productId:productId
            }

        }).then((response) => {
            res = response
        });
        return res;
    }

    const list = async (authToken) => {
        let res = {};
        await axios({
            method: 'get',
            url: `${helper.ApiUrl}cart`,
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

    const deleteCartItem = async (authToken, id) => {
        let res = {};
        await axios({
            method: 'delete',
            url: `${helper.ApiUrl}cart/${id}`,
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

    const updateCart = async (authToken, quantity, id) => {

      
        let res = {};
        await axios({
            method: 'put',
            url: `${helper.ApiUrl}cart/${id}`,
            responseType: 'json',
            headers: {
                "x-access-token": authToken,
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': 'true',
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                withCredentials: true,
                mode: 'no-cors',
            },
            data: {
                quantity:quantity
            }

        }).then((response) => {
            res = response
        });
        return res;
    }

    return {
        add,
        list,
        deleteCartItem,
        updateCart,


    }
}
const cartApi = cart();
export default cartApi;