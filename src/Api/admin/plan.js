import axios from "axios";
import helper from "../../Common/Helper";

function plan() {

    const list = async (authToken) => {
 
        let res = {};
        await axios({
            method: 'get',
            url: `${helper.ApiUrl}plan`,
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

    const save = async (authToken, data) => {
 
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}plan`,
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
        list,
        save
        

    }
}
const planApi = plan();
export default planApi;