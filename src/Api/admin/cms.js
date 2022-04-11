import axios from "axios";
import helper from "../../Common/Helper";

function cms() {

    const list = async (authToken) => {
 
        let res = {};
        await axios({
            method: 'get',
            url: `${helper.ApiUrl}cms`,
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

    const addCmsPage = async (authToken, data) => {
        let res = {};
        await axios({
            method: 'Post',
            url: `${helper.ApiUrl}cms`,
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

    const deleteCmsPage = async (authToken, id) => {
        let res = {};
        await axios({
            method: 'delete',
            url: `${helper.ApiUrl}cms/${id}`,
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

    const updateCmsPage = async (authToken, data, id) => {
        let res = {};
        await axios({
            method: 'put',
            url: `${helper.ApiUrl}cms/${id}`,
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
        addCmsPage,
        deleteCmsPage,
        updateCmsPage
        
        

    }
}
const cmsApi = cms();
export default cmsApi;