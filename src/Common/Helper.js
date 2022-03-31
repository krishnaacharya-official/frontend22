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

}

if (Mode === "production") {

    helper = {
        ApiUrl: 'https://donorport.herokuapp.com/api/',
        CampaignAdminLogoPath: 'https://donorport.herokuapp.com/images/campaign/logo/resize/',
        CampaignProductImagePath: 'https://donorport.herokuapp.com/images/campaign/product/resize/',
        ProjectImagePath: 'https://donorport.herokuapp.com/images/project/resize/',
        CampaignProductFullImagePath: 'https://donorport.herokuapp.com/images/campaign/product/',


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