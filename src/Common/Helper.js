import Permissions from './Permissions'
import CryptoJS from 'crypto-js';
import { useSelector, useDispatch } from "react-redux";

let Mode = "production"
// let BASE_URL = 'https://donorport.herokuapp.com/'
let BASE_URL = 'http://54.186.21.246:9000/'


if (window.location.hostname === 'localhost') {
    Mode = "development"
    BASE_URL = 'http://localhost:8080/'

}
const AWS_S3_BUCKET_BASE_URL = "https://donorport.s3.us-west-2.amazonaws.com/"

let helper = {
    ApiUrl: BASE_URL + 'api/',
    CampaignAdminLogoPath: AWS_S3_BUCKET_BASE_URL + 'images/campaign/logo/resize/',
    CampaignProductImagePath: AWS_S3_BUCKET_BASE_URL + 'images/campaign/product/resize/',
    ProjectImagePath: AWS_S3_BUCKET_BASE_URL + 'images/campaign/project/resize/',
    CampaignProductFullImagePath: AWS_S3_BUCKET_BASE_URL + 'images/campaign/product/',
    DonorImagePath: AWS_S3_BUCKET_BASE_URL + 'images/donor/',
    DonorImageResizePath: AWS_S3_BUCKET_BASE_URL + 'images/donor/resize'

}



export default helper


export function hasPermission(ROLE, MODULE) {
    let RESPONCE;
    if (Permissions[ROLE]) {
        RESPONCE = Permissions[ROLE].includes(MODULE);

    } else {
        RESPONCE = false;
    }
    return RESPONCE;

}

export function ImageExist(url) {
    // let img = new Image();
    // img.src = url;
    // return img.height !== 0 ? true : false;

    let http = new XMLHttpRequest();

    http.open('HEAD', url, false);
    http.send();

    return http.status !== 404;
    // return true

}

export function priceFormat(m) {
    let price = parseInt(m, 10)
    let nf = new Intl.NumberFormat('en-US');
    return nf.format(price)
}

export function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export function encryptData(val) {
    let newVal = val;
    let ciphertext = CryptoJS.AES.encrypt(newVal, 'my-secret-key@123').toString();
    return ciphertext;
}
export function decryptData(val) {
    let bytes = CryptoJS.AES.decrypt(val, 'my-secret-key@123');
    let decryptedData = bytes?.toString(CryptoJS.enc.Utf8);
    // console.log(decryptedData)
    return decryptedData

}



// export function getCalculatedPrice(price) {

//     const user = useSelector((state) => state.user);
//     // Get Fees(%) from Reducer

//     let transectionFee = user.transectionFee
//     let platformFee = user.platformFee

//     //Calculate total charges (transectionFee + platformFee )

//     let totalCharge = Number(transectionFee) + Number(platformFee)


//     // Applying to Price
//     let taxPrice = Math.round(price + (totalCharge / 100) * price)


//     return taxPrice;
// }

export function getCalculatedPrice() {

    const user = useSelector((state) => state.user);
    const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
    // console.log('first', user.pricePerCurrency)

    //calculating price

    const getData = (price) => {

        // Get Fees(%) from Reducer

        let transectionFee = user.transectionFee
        let platformFee = user.platformFee

        //Calculate total charges (transectionFee + platformFee )

        let totalCharge = Number(transectionFee) + Number(platformFee)


        // Applying to Price
        let taxPrice = Math.round(price + (totalCharge / 100) * price)
        let convertdPrice = Math.round(taxPrice)
        // if (!CampaignAdminAuthToken) {
        //     convertdPrice = Math.round(user.pricePerCurrency * taxPrice)
        // }
        // console.log(user.pricePerCurrency)


        return convertdPrice;
    }

    const priceWithoutTax = (price) => {

        let taxPrice = Math.round(price)
        let convertdPrice = Math.round(taxPrice)
        // convertdPrice = Math.round(user.pricePerCurrency * taxPrice)
        return convertdPrice;

    }

    const priceWithTax = (price) => {


        let transectionFee = user.transectionFee
        let platformFee = user.platformFee

        //Calculate total charges (transectionFee + platformFee )

        let totalCharge = Number(transectionFee) + Number(platformFee)


        // Applying to Price
        let taxPrice = Math.round(price + (totalCharge / 100) * price)
        return taxPrice;

    }

    //get Currency Symbol

    const currencySymbol = () => {

        let currencySymbol = '$'
        // if (!CampaignAdminAuthToken) {
        //     currencySymbol = user.currencySymbol
        // }
        return currencySymbol
    }


    return {
        getData,
        currencySymbol,
        priceWithoutTax,
        priceWithTax
    }
}

