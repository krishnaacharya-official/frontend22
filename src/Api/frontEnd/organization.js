import axios from "axios";
import helper from "../../Common/Helper";

function organization() {

    const details = async (slug) => {
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}organization/details`,
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
                slug: slug
            }


        }).then((response) => {
            res = response
        });
        return res;
    }


    const organizationPurchasedItemHistory = async (authToken, organizationId) => {

        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}campaign_admin/purchase_history`,
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
                organizationId: organizationId
            }

        }).then((response) => {
            res = response
        });
        return res;

    }

    const donate = async (authToken, data) => {
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}campaign_admin/donate`,
            responseType: 'json',
            headers: {
                "x-access-token": authToken,
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


    const organizationDonatedItemHistory = async (authToken, organizationId) => {

        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}campaign_admin/donate_history`,
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
                organizationId: organizationId
            }

        }).then((response) => {
            res = response
        });
        return res;

    }

    const organizatationTaxlist = async (authToken, data) => {

        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}organization/tax`,
            responseType: 'json',
            headers: {
                "x-access-token": authToken,
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

    const organizatationTaxUpload = async (authToken, cdata) => {

        
        const data = new FormData();
        data.append('image', cdata.image);
        data.append('orderId', cdata.orderId);



        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}organization/receipt/upload`,
            responseType: 'json',
            headers: {
                "x-access-token": authToken,
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



    return {
        details,
        organizationPurchasedItemHistory,
        donate,
        organizationDonatedItemHistory,
        organizatationTaxlist,
        organizatationTaxUpload

    }
}
const organizationApi = organization();
export default organizationApi;