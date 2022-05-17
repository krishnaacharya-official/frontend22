import axios from "axios";
import helper from "../../Common/Helper";

function project() {

    const details = async (authToken, slug) => {
        let res = {};
        await axios({
            method: 'post',
            url: `${helper.ApiUrl}project/details`,
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
                projectSlug: slug
            }


        }).then((response) => {
            res = response
        });
        return res;
    }

    return {
        details
    }
}
const projectApi = project();
export default projectApi;
