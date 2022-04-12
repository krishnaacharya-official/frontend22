import axios from "axios";
import helper from "../../Common/Helper";

function inquiry() {

    const listPartnerShipInquries = async (authToken) => {
 
        let res = {};
        await axios({
            method: 'get',
            url: `${helper.ApiUrl}partnership`,
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
    const listVerificationInquries = async (authToken) => {
 
        let res = {};
        await axios({
            method: 'get',
            url: `${helper.ApiUrl}verification`,
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
        listPartnerShipInquries,
        listVerificationInquries
    
        
        

    }
}
const inquiryApi = inquiry();
export default inquiryApi;