import { UPDATE_CURRENCY, UPDATE_CART, UPDATE_ORGANIZATION, UPDATE_USER_DETAILS, UPDATE_FEES, UPDATE_USER_LANGUAGE, LOGOUT } from "./user.types"

import userInitialState from "./user.initialstate"


const userReducer = (state = userInitialState, action) => {

    // let response = action.response;
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
                currencySymbol: '$',
                userLanguage: 'english',
            }

        default:
            return state;
    }
};

export default userReducer;