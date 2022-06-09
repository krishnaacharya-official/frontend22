import Permissions from './Permissions'
import CryptoJS from 'crypto-js';
import { useSelector, useDispatch } from "react-redux";
import IconButton from "../View/frontEnd/Component/molecules/icon-button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

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
    ProjectFullImagePath: AWS_S3_BUCKET_BASE_URL + 'images/campaign/project/',

    CampaignProductFullImagePath: AWS_S3_BUCKET_BASE_URL + 'images/campaign/product/',
    DonorImagePath: AWS_S3_BUCKET_BASE_URL + 'images/donor/',
    DonorImageResizePath: AWS_S3_BUCKET_BASE_URL + 'images/donor/resize/',
    GoogleKey: 'AIzaSyD4CXzRpf7L9sFFJDIFzgSeoFOESqXaAuE',
    sponsorLogoPath: AWS_S3_BUCKET_BASE_URL + 'images/sponsor/logo/',
    sponsorLogoResizePath: AWS_S3_BUCKET_BASE_URL + 'images/sponsor/logo/resize/'




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
    const setting = useSelector((state) => state.setting);

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
            currencySymbol = user.currencySymbol
        // }
        return currencySymbol
    }


    // const getUserRank = () => {

    //     let rank;
    //     switch (user.rank) {
    //         case 'fish':

    //             rank = (
    //                 <IconButton
    //                     bgColor="hsla(0, 96.46%, 76.14%, 1.00)"
    //                     className="rounded-pill"
    //                     icon={<FontAwesomeIcon icon={solid("fish")} />}
    //                 >
    //                     Fish
    //                 </IconButton>)
    //             break;

    //         case 'beluga':
    //             rank = (
    //                 <IconButton
    //                     bgColor="#78bafc"
    //                     className="rounded-pill"
    //                     icon={<FontAwesomeIcon icon={solid("whale")} />}
    //                 >
    //                     Beluga
    //                 </IconButton>
    //             )
    //             break;

    //         case 'narwhal':

    //             rank = (
    //                 <IconButton
    //                     bgColor="#a278fc"
    //                     className="rounded-pill me-2"
    //                     icon={<FontAwesomeIcon icon={solid("narwhal")} />}
    //                 >
    //                     Narwhal
    //                 </IconButton>
    //             )

    //             break;

    //         case 'pirate':

    //             rank = (
    //                 <IconButton
    //                     bgColor="#fc8c63"
    //                     className="rounded-pill"
    //                     icon={<FontAwesomeIcon icon={solid("swords")} />}
    //                 >
    //                     Pirate
    //                 </IconButton>
    //             )
    //             break;

    //         case 'admiral':

    //             rank = (
    //                 <IconButton
    //                     bgColor="#95dbb0"
    //                     className="rounded-pill"
    //                     icon={<FontAwesomeIcon icon={solid("ship")} />}
    //                 >
    //                     Admiral
    //                 </IconButton>
    //             )

    //             break;

    //         case 'captian':

    //             rank = (
    //                 <IconButton
    //                     bgColor="#000"
    //                     className="rounded-pill"
    //                     icon={<FontAwesomeIcon icon={solid("anchor")} />}
    //                 >
    //                     Captain
    //                 </IconButton>
    //             )
    //             break;
    //         default:
    //             <>
    //             </>
    //             break;

    //     }
    //     return rank;

    // }

    const getUserRank = (UserXp) => {


        const captian = setting.captian && setting.captian !== "" ? Number(setting.captian) : 100000
        const admiral = setting.admiral && setting.admiral !== "" ? Number(setting.admiral) : 10000
        const pirate = setting.pirate && setting.pirate !== "" ? Number(setting.pirate) : 5000
        const narwhal = setting.narwhal && setting.narwhal !== "" ? Number(setting.narwhal) : 2500
        const beluga = setting.beluga && setting.beluga !== "" ? Number(setting.beluga) : 1000
        const fish = setting.fish && setting.fish !== "" ? Number(setting.fish) : 500
        let rank;


        switch (true) {

            case (UserXp < fish):
                rank = <></>
                break;

            case (UserXp >= fish && UserXp < beluga):
                rank = (
                    <IconButton
                        bgColor="hsla(0, 96.46%, 76.14%, 1.00)"
                        className="rounded-pill"
                        icon={<FontAwesomeIcon icon={solid("fish")} />}
                    >
                        Fish
                    </IconButton>)

                break;

            case (UserXp >= beluga && UserXp < narwhal):
                rank = (
                    <IconButton
                        bgColor="#78bafc"
                        className="rounded-pill"
                        icon={<FontAwesomeIcon icon={solid("whale")} />}
                    >
                        Beluga
                    </IconButton>
                )

                break;

            case (UserXp >= narwhal && UserXp < pirate):
                rank = (
                    <IconButton
                        bgColor="#a278fc"
                        className="rounded-pill me-2"
                        icon={<FontAwesomeIcon icon={solid("narwhal")} />}
                    >
                        Narwhal
                    </IconButton>
                )

                break;

            case (UserXp >= pirate && UserXp < admiral):
                rank = (
                    <IconButton
                        bgColor="#fc8c63"
                        className="rounded-pill"
                        icon={<FontAwesomeIcon icon={solid("swords")} />}
                    >
                        Pirate
                    </IconButton>
                )

                break;

            case (UserXp >= admiral && UserXp < captian):
                rank = (
                    <IconButton
                        bgColor="#95dbb0"
                        className="rounded-pill"
                        icon={<FontAwesomeIcon icon={solid("ship")} />}
                    >
                        Admiral
                    </IconButton>
                )


                break;

            case (UserXp >= captian):
                rank = (
                    <IconButton
                        bgColor="#000"
                        className="rounded-pill"
                        icon={<FontAwesomeIcon icon={solid("anchor")} />}
                    >
                        Captain
                    </IconButton>
                )

                break;
                default:
                    <></>
                break;


        }
        return rank
    }


    return {
        getData,
        currencySymbol,
        priceWithoutTax,
        priceWithTax,
        getUserRank
    }
}

