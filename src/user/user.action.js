import { UPDATE_CURRENCY, UPDATE_CART, UPDATE_ORGANIZATION, UPDATE_USER_DETAILS, UPDATE_FEES, UPDATE_USER_LANGUAGE, UPDATE_CURRENCY_PRICE, LOGOUT,SET_PROFILE_IMAGE } from "./user.types"

export const setCurrency = (data) => ({
    type: UPDATE_CURRENCY,
    payload: data,
});

export const setIsUpdateCart = (val) => ({
    type: UPDATE_CART,
    payload: val,
});

export const setIsUpdateOrganization = (val) => ({
    type: UPDATE_ORGANIZATION,
    payload: val,
});

export const setIsUpdateUserDetails = (val) => ({
    type: UPDATE_USER_DETAILS,
    payload: val,
});

export const setFees = (data) => ({
    type: UPDATE_FEES,
    payload: data,
});

export const setUserLanguage = (val) => ({
    type: UPDATE_USER_LANGUAGE,
    payload: val,
});

export const setCurrencyPrice = (val) => ({
    type: UPDATE_CURRENCY_PRICE,
    payload: val,
});

export const setProfileImage = (val) => ({
    type: SET_PROFILE_IMAGE,
    payload: val,
});

export const setLogout = () => ({
    type: LOGOUT,
});
