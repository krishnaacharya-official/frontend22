import axios from "axios";
import helper from "../../Common/Helper";

function adminCampaign() {

    //---------------LiST CAMPAIGN ADMIN----------------------

    const list = async (authToken, data = []) => {
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}campaign_admin/list`,
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
        data.append('slug', cdata.slug);
        data.append('headline', cdata.headline);
        data.append('promoVideo', cdata.promoVideo);
        data.append('ein', cdata.ein);





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
        data.append('email', cdata.email);

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
        if (cdata.category_id) {
            data.append('category_id', cdata.category_id);
        }
        // data.append('category_id', cdata.category_id);
        data.append('headline', cdata.headline);
        data.append('promoVideo', cdata.promoVideo);

        data.append('ein', cdata.ein);


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

    //---------------COUNTRY LIST----------------------

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

    //---------------GET LOGGEDIN CAMPAIGN DETAILS----------------------
    const getCampaignDetails = async (authToken) => {

        let res = {};
        await axios({
            method: 'get',
            url: `${helper.ApiUrl}campaign_admin/details`,
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

    const getCampaignDetailsBySlug = async (authToken, data) => {

        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}campaign_admin/details/slug`,
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

    const saveCampaignDetails = async (authToken, cdata) => {
        const data = new FormData();
        data.append('name', cdata.name);
        data.append('description', cdata.description);
        data.append('headline', cdata.headline);
        data.append('promoVideo', cdata.promoVideo);

        data.append('country_id', cdata.country_id);
        data.append('city_id', cdata.city_id);
        data.append('state_id', cdata.state_id);
        data.append('organizationId', cdata.organizationId);
        data.append('category_id', cdata.category_id);

        data.append('ein', cdata.ein);

        // if (cdata.password) {
        //     data.append('password', cdata.password);
        // }

        if (cdata.logo) {
            data.append('logo', cdata.logo);
        }
        // data.append('description', cdata.description);
        // data.append('twitter', cdata.twitter);
        // data.append('facebook', cdata.facebook);
        // data.append('linkedin', cdata.linkedin);
        if (cdata.url) {
            data.append('url', cdata.url);
        }
        // data.append('address', cdata.address);
        // data.append('category_id', cdata.category_id);

        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}campaign_admin/details`,
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
    const updatePassword = async (authToken, data) => {
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}campaign_admin/updatePassword`,
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


    const addBankAccount = async (authToken, fromdata) => {

        const data = new FormData();
        data.append('registerdBusinessAddress', fromdata.registerdBusinessAddress);
        data.append('typeOfBusiness', fromdata.typeOfBusiness);
        data.append('firstName', fromdata.firstName);
        data.append('lastName', fromdata.lastName);
        data.append('personalEmail', fromdata.personalEmail);
        data.append('dob', fromdata.dob);
        data.append('phoneNo', fromdata.phoneNo);
        data.append('ssn', fromdata.ssn);
        data.append('homeCountry', fromdata.homeCountry);
        data.append('addLine1', fromdata.addLine1);
        data.append('addLine2', fromdata.addLine2);
        data.append('city', fromdata.city);
        data.append('stateName', fromdata.stateName);
        data.append('zip', fromdata.zip);
        data.append('personalIdNumber', fromdata.personalIdNumber);
        data.append('businessName', fromdata.businessName);
        data.append('businessWebsite', fromdata.businessWebsite);
        data.append('mcc', fromdata.mcc);
        data.append('accountHolderName', fromdata.accountHolderName);
        data.append('accountHolderType', fromdata.accountHolderType);
        data.append('routingNumber', fromdata.routingNumber);
        data.append('accountNumber', fromdata.accountNumber);
        data.append('bankEmail', fromdata.bankEmail);
        data.append('identityDocumentType', fromdata.identityDocumentType);
        data.append('identityDocumentImage', fromdata.identityDocumentImage);
        data.append('status', fromdata.status);
        data.append('countryId', fromdata.countryId);
        data.append('currency', fromdata.currency);




        let res = {};
        await axios({
            method: 'Post',
            url: `${helper.ApiUrl}bank_account`,
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

        }).catch((err) => {
            // console.log(err)
            res = err
        });
        return res;
    }

    //---------------LIST BANK ACCOUNTS----------------------
    const listBankAccount = async (authToken) => {
        let res = {};
        await axios({
            method: 'get',
            url: `${helper.ApiUrl}bank_account`,
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

    //---------------DELETE BANK ACCOUNT----------------------

    const deleteBankAccount = async (authToken, id) => {
        let res = {};
        await axios({
            method: 'delete',
            url: `${helper.ApiUrl}bank_account/${id}`,
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

    const activityList = async (authToken, data) => {
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}campaign_admin/activity`,
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
    const payToCampaignAdmin = async (authToken, data) => {
        let res = {};
        await axios({
            method: 'Post',
            url: `${helper.ApiUrl}campaign_admin/payout`,
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
    const CampaignAdminPayHistory = async (authToken, data) => {
        let res = {};
        await axios({
            method: 'Post',
            url: `${helper.ApiUrl}campaign_admin/payout/list`,
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

    const updateSalesTax = async (authToken, data) => {


        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}campaign_admin/salesTax`,
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



    const chekConnectAccount = async (authToken, data) => {
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}bank_account/check`,
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
    const createExpressAccount = async (authToken, data) => {
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}bank_account/express`,
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


    const makeAccountPrimary = async (authToken, data) => {
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}bank_account/primary`,
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
    const getPrimaryBankAccount = async (authToken) => {
        let res = {};
        await axios({
            method: 'get',
            url: `${helper.ApiUrl}bank_account/primary`,
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
    const chekOrganizationAccount = async (authToken) => {
        let res = {};
        await axios({
            method: 'get',
            url: `${helper.ApiUrl}bank_account/check/organization`,
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

    const addAccountDetails = async (authToken, data) => {
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}bank_account/details`,
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
        add,
        updateCampaignAdmin,
        deleteCampaignAdmin,
        applyCampaignAdmin,
        VerifyOtpCampaignAdmin,
        countryList,
        stateListByCountry,
        cityListByState,
        getCampaignDetails,
        saveCampaignDetails,
        updatePassword,
        addBankAccount,
        listBankAccount,
        deleteBankAccount,
        activityList,
        payToCampaignAdmin,
        CampaignAdminPayHistory,
        getCampaignDetailsBySlug,
        updateSalesTax,
        chekConnectAccount,
        createExpressAccount,
        makeAccountPrimary,
        chekOrganizationAccount,
        addAccountDetails,
        getPrimaryBankAccount

    }
}
const adminCampaignApi = adminCampaign();
export default adminCampaignApi;