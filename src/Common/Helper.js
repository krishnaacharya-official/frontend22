import Permissions from './Permissions'

let Mode = "production"
if (window.location.hostname === 'localhost') {
    Mode = "development"
}


let helper = {
    ApiUrl: 'http://localhost:8080/api/',
    CampaignAdminLogoPath: 'http://localhost:8080/campaign/logo/resize/',
    CampaignProductImagePath: 'http://localhost:8080/campaign/product/resize/'
}

if (Mode === "production") {

    helper = {
        ApiUrl: 'https://donorport.herokuapp.com/api/',
        CampaignAdminLogoPath: 'https://donorport.herokuapp.com/campaign/logo/resize/',
        CampaignProductImagePath: 'https://donorport.herokuapp.com/campaign/product/resize/'
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