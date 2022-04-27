import Permissions from './Permissions'

let Mode = "production"
if (window.location.hostname === 'localhost') {
    Mode = "development"
}


let helper = {
    ApiUrl: 'http://localhost:8080/api/',
    CampaignAdminLogoPath: 'http://localhost:8080/images/campaign/logo/resize/',
    CampaignProductImagePath: 'http://localhost:8080/images/campaign/product/resize/',
    ProjectImagePath: 'http://localhost:8080/images/project/resize/',
    CampaignProductFullImagePath: 'http://localhost:8080/images/campaign/product/',
    DonorImagePath: 'http://localhost:8080/images/donor/'
    //     DONOR_IMAGE_PATH = /assets/images/donor/
    // DONOR_IMAGE_RESIZE_PATH = /assets/images/donor/resize/

}

if (Mode === "production") {

    helper = {
        ApiUrl: 'https://donorport.herokuapp.com/api/',
        CampaignAdminLogoPath: 'https://donorport.herokuapp.com/images/campaign/logo/resize/',
        CampaignProductImagePath: 'https://donorport.herokuapp.com/images/campaign/product/resize/',
        ProjectImagePath: 'https://donorport.herokuapp.com/images/project/resize/',
        CampaignProductFullImagePath: 'https://donorport.herokuapp.com/images/campaign/product/',
        DonorImagePath: 'https://donorport.herokuapp.com/images/donor/'



    }
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
    let img = new Image();
    img.src = url;
    return img.height !== 0 ? true : false;
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
