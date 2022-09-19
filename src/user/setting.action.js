import { SET_SETTING_VALUES,SET_XP_VALUES } from "./setting.types";


export const setSettings = (data) => ({
    type: SET_SETTING_VALUES,
    payload: data,
});

export const setXpSettings = (data) => ({
    type: SET_XP_VALUES,
    payload: data,
});