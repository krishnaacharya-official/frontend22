import axios from "axios";
import helper from "../../Common/Helper";

function notification() {

    const list = async (authToken,data) => {

        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}notification`,
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

    const setWatch = async (authToken, data) => {

        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}notification/watch`,
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

    const removeNotification = async (authToken, id) => {

        let res = {};
        await axios({
            method: 'delete',
            url: `${helper.ApiUrl}notification/` + id,
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
        setWatch,
        removeNotification



    }
}
const notificationApi = notification();
export default notificationApi;