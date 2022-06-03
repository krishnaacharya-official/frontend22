import axios from "axios";
import helper from "../../Common/Helper";

function donation() {

    const list = async (authToken) => {

        let res = {};
        await axios({
            method: 'get',
            url: `${helper.ApiUrl}donation`,
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



    return {
        list,



    }
}
const donationApi = donation();
export default donationApi;