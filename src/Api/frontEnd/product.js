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

    return {
        details


    }
}
const productApi = product();
export default productApi;