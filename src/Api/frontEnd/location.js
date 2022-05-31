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
                // "x-access-token": authToken,
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


    const getUserCurrentLoaction = async () => {
        let res = {};
        await axios({
            method: 'get',
            url: `https://ipapi.co/json/`,
            responseType: 'json',
            // withCredentials: true,
            headers: {
                // "x-access-token": authToken,
                // "Access-Control-Allow-Origin": "*",
                // 'Access-Control-Allow-Credentials': 'true',
                // "Access-Control-Allow-Headers": "Content-Type, Authorization",
                // mode: 'no-cors',
            },

        }).then((response) => {
            res = response
        });
        return res;

        // let config = {
        //     method: 'get',
        //     url: 'https://ipapi.co/json/',
        //     headers: {}
        // };

        // axios(config)
        //     .then(function (response) {
        //         console.log(JSON.stringify(response.data));
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

    }

    const currencyByCountry = async (authToken, country) => {
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}currency`,
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
                country: country
            }

        }).then((response) => {
            res = response
        });
        return res;
    }

    const convertCurrency = async (currency) => {
        let res = {};
        await axios({
            method: 'get',
            url: 'https://api.apilayer.com/fixer/convert?to=' + currency + '&from=USD&amount=1',
            responseType: 'json',
            headers: {
                "apikey":"NBRaEclusJ6YWpGZx2U84DQfSoz5X0F3",
                // "x-access-token": authToken,
                // "Access-Control-Allow-Origin": "*",
                // 'Access-Control-Allow-Credentials': 'true',
                // "Access-Control-Allow-Headers": "Content-Type, Authorization",
                // withCredentials: true,
                // mode: 'no-cors',
            },


        }).then((response) => {
            res = response
        });
        return res;
    }


    return {
        countryList,
        stateListByCountry,
        cityListByState,
        getUserCurrentLoaction,
        currencyByCountry,
        convertCurrency

    }
}
const locationApi = location();
export default locationApi;