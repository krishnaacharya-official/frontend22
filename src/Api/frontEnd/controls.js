import axios from "axios";
import helper from "../../Common/Helper";

function controls() {

    const list = async (authToken, data) => {
        let res = {};
        await axios({
            method: 'get',
            url: `${helper.ApiUrl}controls/list`,
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

    const saveControls = async (authToken, data, id) => {
        let res = {};
        await axios({
            method: 'put',
            url: `${helper.ApiUrl}controls/` + id,
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



    const organizationControlsList = async (authToken, data) => {
        let res = {};
        await axios({
            method: 'get',
            url: `${helper.ApiUrl}org/controls/list`,
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

    const saveOrganizationControls = async (authToken, data, id) => {
        let res = {};
        await axios({
            method: 'put',
            url: `${helper.ApiUrl}org/controls/` + id,
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
        saveControls,
        organizationControlsList,
        saveOrganizationControls


    }
}
const controlsApi = controls();
export default controlsApi;