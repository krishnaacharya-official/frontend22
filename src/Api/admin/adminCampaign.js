import axios from "axios";
import helper from "../../Common/Helper";

function adminCampaign() {

    //---------------LiST CAMPAIGN ADMIN----------------------

    const list = async (authToken) => {
        let res = {};
        await axios({
            method: 'get',
            url: `${helper.ApiUrl}campaign_admin`,
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

    //---------------ADD CAMPAIGN ADMIN----------------------

    const add = async (authToken, cdata) => {

        const data = new FormData();
        data.append('name', cdata.name);
        data.append('email', cdata.email);
        data.append('status', cdata.status);
        data.append('password', cdata.password);
        data.append('logo', cdata.logo);
        data.append('description', cdata.description);
        data.append('twitter', cdata.twitter);
        data.append('facebook', cdata.facebook);
        data.append('linkedin', cdata.linkedin);
        data.append('url', cdata.url);
        data.append('country_id', cdata.country_id);
        data.append('city_id', cdata.city_id);
        data.append('state_id', cdata.state_id);
        data.append('address', cdata.address);
        data.append('category_id', cdata.category_id);

        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}campaign_admin`,
            ContentType: 'application/json',
            headers: {
                "x-access-token": authToken,
            },
            data: data

        }).then((response) => {
            res = response
        });
        return res;
    }

    //---------------UPDATE CAMPAIGN ADMIN----------------------

    const updateCampaignAdmin = async (authToken, cdata, id) => {

        const data = new FormData();
        data.append('name', cdata.name);
        data.append('status', cdata.status);
        if (cdata.password) {
            data.append('password', cdata.password);
        }
     
        if (cdata.logo) {
            data.append('logo', cdata.logo);
        }
        data.append('description', cdata.description);
        data.append('twitter', cdata.twitter);
        data.append('facebook', cdata.facebook);
        data.append('linkedin', cdata.linkedin);
        data.append('url', cdata.url);
        data.append('country_id', cdata.country_id);
        data.append('city_id', cdata.city_id);
        data.append('state_id', cdata.state_id);
        data.append('address', cdata.address);
        data.append('category_id', cdata.category_id);

        let res = {};
        await axios({
            method: 'put',
            url: `${helper.ApiUrl}campaign_admin/${id}`,
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

    //---------------DELETE CAMPAIGN ADMIN----------------------

    const deleteCampaignAdmin = async (authToken, id) => {
        let res = {};
        await axios({
            method: 'delete',
            url: `${helper.ApiUrl}campaign_admin/${id}`,
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


    //---------------APPLY CAMPAIGN ADMIN----------------------


    const applyCampaignAdmin = async (data) => {
        let res = {};
        await axios({
            method: 'Post',
            url: `${helper.ApiUrl}campaign_admin/apply_cmapaign_admin`,
            responseType: 'json',
            headers: {
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

    //---------------VERIFY CAMPAIGN ADMIN----------------------

    const VerifyOtpCampaignAdmin = async (data) => {
        let res = {};
        await axios({
            method: 'Post',
            url: `${helper.ApiUrl}campaign_admin/verifyOtp`,
            responseType: 'json',
            headers: {
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
        add,
        updateCampaignAdmin,
        deleteCampaignAdmin,
        applyCampaignAdmin,
        VerifyOtpCampaignAdmin

    }
}
const adminCampaignApi = adminCampaign();
export default adminCampaignApi;