import settingInitialState from "./setting.initialstate";
import { SET_SETTING_VALUES } from "./setting.types";


const settingReducer = (state = settingInitialState, action) => {


    switch (action.type) {

        case SET_SETTING_VALUES:
            return {
                ...state,
                captian: action.payload.captian,
                admiral: action.payload.captian,
                pirate: action.payload.pirate,
                narwhal: action.payload.narwhal,
                beluga: action.payload.beluga,
                fish: action.payload.fish,
            }



        default:
            return state;
    }
};

export default settingReducer;