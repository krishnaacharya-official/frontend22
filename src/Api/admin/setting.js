import axios from "axios";
import helper from "../../Common/Helper";

function setting() {

    const list = async (authToken, data) => {
 
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}setting/list`,
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
             data: data
            }

        }).then((response) => {
            res = response
        });
        return res;
    }

    const save = async (authToken, data) => {
 
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}setting/save`,
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
             data: data
            }

        }).then((response) => {
            res = response
        });
        return res;
    }


    return {
        list,
        save
        

    }
}
const settingApi = setting();
export default settingApi;