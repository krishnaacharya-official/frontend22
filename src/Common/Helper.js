const Mode = "development"

let helper = {
    ApiUrl: 'http://localhost:8080/api/',
    CampaignAdminLogoPath: 'http://localhost:8080/campaign/logo/resize/',
    CampaignProductImagePath:'http://localhost:8080/campaign/product/resize/'
}

if (Mode === "production") {

    helper = {
        ApiUrl: '',

    }
}


export default helper