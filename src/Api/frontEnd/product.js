import axios from "axios";
import helper from "../../Common/Helper";

function product() {

    const details = async (slug) => {
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}product/details`,
            responseType: 'json',
            headers: {
                // "x-access-token": authToken,
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': 'true',
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                withCredentials: true,
                mode: 'no-cors',
            },
            data: {
                productSlug: slug
            }


        }).then((response) => {
            res = response
        });
        return res;
    }

    const listByCategory = async (authToken, categoryId) => {
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}product/category`,
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
                categoryId: categoryId
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
            url: `${helper.ApiUrl}product`,
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

    const itemPurchasedHistory = async (authToken, productId) => {

        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}product/history`,
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
                productId: productId
            }

        }).then((response) => {
            res = response
        });
        return res;

    }


    const productFilter = async (authToken,data) => {
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}product/filter`,
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
        details,
        listByCategory,
        list,
        itemPurchasedHistory,
        productFilter


    }
}
const productApi = product();
export default productApi;