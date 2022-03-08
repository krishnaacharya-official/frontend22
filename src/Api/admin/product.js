import axios from "axios";
import helper from "../../Common/Helper";

function product() {

    const add = async (authToken, cdata) => {


        const data = new FormData();
        data.append('title', cdata.title);
        data.append('subtitle', cdata.subtitle);
        data.append('status', cdata.status);
        data.append('image', cdata.image);
        data.append('organizationId', cdata.organizationId);
        data.append('price', cdata.price);
        data.append('description', cdata.description);
        data.append('category_id', cdata.category_id);
        data.append('subcategory_id', cdata.subcategory_id);
        data.append('quantity', cdata.quantity);

        let res = {};
        await axios({
            method: 'Post',
            url: `${helper.ApiUrl}product`,
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

    const list = async (authToken) => {
        let res = {};
        await axios({
            method: 'get',
            url: `${helper.ApiUrl}product`,
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

    const deleteProduct = async (authToken, id) => {
        let res = {};
        await axios({
            method: 'delete',
            url: `${helper.ApiUrl}product/${id}`,
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
    const updateProduct = async (authToken, cdata, id) => {

        const data = new FormData();
        data.append('title', cdata.title);
        data.append('subtitle', cdata.subtitle);
        data.append('status', cdata.status);
        if (cdata.image) {
            data.append('image', cdata.image);
        }
        data.append('organizationId', cdata.organizationId);
        data.append('price', cdata.price);
        data.append('description', cdata.description);
        data.append('category_id', cdata.category_id);
        data.append('subcategory_id', cdata.subcategory_id);
        data.append('quantity', cdata.quantity);

        let res = {};
        await axios({
            method: 'put',
            url: `${helper.ApiUrl}product/${id}`,
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
        add,
        list,
        deleteProduct,
        updateProduct

    }
}
const productApi = product();
export default productApi;