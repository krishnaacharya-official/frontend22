import axios from "axios";
import helper from "../../Common/Helper";

function follow() {

    const follow = async (authToken, data) => {

        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}follow`,
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

    const checkUserFollow = async (authToken, data) => {


        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}follow/check`,
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


    const userFollowedOrganizationList = async (authToken) => {


        let res = {};
        await axios({
            method: 'get',
            url: `${helper.ApiUrl}follow/user`,
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


    const removeFollowedOrganization = async (authToken, id) => {


        let res = {};
        await axios({
            method: 'delete',
            url: `${helper.ApiUrl}follow/` + id,
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
        follow,
        checkUserFollow,
        userFollowedOrganizationList,
        removeFollowedOrganization


    }
}
const followApi = follow();
export default followApi;