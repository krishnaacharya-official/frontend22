import { UPDATE_CURRENCY, UPDATE_CART, UPDATE_ORGANIZATION, UPDATE_USER_DETAILS, UPDATE_FEES, UPDATE_USER_LANGUAGE, UPDATE_CURRENCY_PRICE, LOGOUT, SET_PROFILE_IMAGE, SET_USER_COUNTRY, SET_USER_ADDRESS, UPDATE_XP, UPDATE_RANK, UPDATE_STATEID, UPDATE_SALES_TAX } from "./user.types"

import userInitialState from "./user.initialstate"


const userReducer = (state = userInitialState, action) => {

 
    switch (action.type) {

        case UPDATE_CURRENCY:
            return {
                ...state,
                currencySymbol: action.payload.currencySymbol,
                currency: action.payload.currency
            }

        case UPDATE_CART:
            return {
                ...state,
                isUpdateCart: action.payload

            }

        case UPDATE_ORGANIZATION:
            return {
                ...state,
                isUpdateOrg: action.payload

            }

        case UPDATE_USER_DETAILS:

            return {
                ...state,
                isUpdateUserDetails: action.payload

            }

        case UPDATE_FEES:

            return {
                ...state,
                transectionFee: action.payload.transectionFee,
                platformFee: action.payload.platformFee


            }

        case UPDATE_USER_LANGUAGE:

            return {
                ...state,
                userLanguage: action.payload

            }

        case UPDATE_CURRENCY_PRICE:

            return {
                ...state,
                pricePerCurrency: action.payload

            }

        case SET_PROFILE_IMAGE:

            return {
                ...state,
                profileImage: action.payload

            }

        case SET_USER_COUNTRY:

            return {
                ...state,
                countryId: action.payload

            }

        case UPDATE_STATEID:

            return {
                ...state,
                stateId: action.payload

            }

        case SET_USER_ADDRESS:
            return {
                ...state,
                countryName: action.payload.countryName,
                stateName: action.payload.stateName,
                cityName: action.payload.cityName,
                zip: action.payload.zip,
                area: action.payload.area
            }

        case UPDATE_XP:

            return {
                ...state,
                xp: action.payload

            }

        case UPDATE_RANK:

            return {
                ...state,
                rank: action.payload

            }

        case UPDATE_SALES_TAX:

            return {
                ...state,
                salesTax: action.payload

            }

        case LOGOUT:
            localStorage.clear();
            return {
                ...state,
                isLoggedIn: false,
                isUpdateCart: false,
                isUpdateOrg: false,
                isUpdateUserDetails: false,
                transectionFee: 0,
                platformFee: 0,
                currency: '',
                currencySymbol: '',
                userLanguage: 'english',
                pricePerCurrency: 0,
                profileImage: "",
                countryId: "",
                stateId: "",
                countryName: "",
                stateName: "",
                cityName: "",
                zip: "",
                area: "",
                xp: 0,
                rank: "",
                salesTax: ""

            }

        default:
            return state;
    }
};

export default userReducer;