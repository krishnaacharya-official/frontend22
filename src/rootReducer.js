import { combineReducers } from "redux";

import userReducer from "./user/user.reducer"
import settingReducer from "./user/setting.reducer";
import organizationReducer from "./user/organization.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    setting: settingReducer,
    organizationReducer: organizationReducer

});

export default rootReducer;