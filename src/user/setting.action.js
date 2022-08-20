import { SET_SETTING_VALUES } from "./setting.types";


export const setSettings = (data) => ({
    type: SET_SETTING_VALUES,
    payload: data,
});