import settingInitialState from "./setting.initialstate";
import { SET_SETTING_VALUES,SET_XP_VALUES } from "./setting.types";


const settingReducer = (state = settingInitialState, action) => {


    switch (action.type) {

        case SET_SETTING_VALUES:
            return {
                ...state,
                captian: action.payload.captian,
                admiral: action.payload.admiral,
                pirate: action.payload.pirate,
                narwhal: action.payload.narwhal,
                beluga: action.payload.beluga,
                fish: action.payload.fish,
            }

        case SET_XP_VALUES:
            return {
                ...state,
                topDonator: action.payload.topDonator,
                topDonation: action.payload.topDonation,
                forEachItem: action.payload.forEachItem,
                forEachDonation: action.payload.forEachDonation,
                forEachShare: action.payload.forEachShare,
                forEachOrganization: action.payload.forEachOrganization,
            }



        default:
            return state;
    }
};

export default settingReducer;