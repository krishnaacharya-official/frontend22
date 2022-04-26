import axios from "axios";
import helper from "../../Common/Helper";

function location() {


    const countryList = async (authToken) => {
        let res = {};
        await axios({
            method: 'get',
            url: `${helper.ApiUrl}country`,
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

    //---------------STATE LIST BY COUNTRY----------------------

    const stateListByCountry = async (authToken, countryId) => {
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}state/list`,
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
                countryId: countryId
            }

        }).then((response) => {
            res = response
        });
        return res;
    }
    //---------------CITY LIST BY STATE----------------------

    const cityListByState = async (authToken, stateId) => {
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}city/list`,
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
                stateId: stateId
            }

        }).then((response) => {
            res = response
        });
        return res;
    }


    return {
        countryList,
        stateListByCountry,
        cityListByState

    }
}
const locationApi = location();
export default locationApi;