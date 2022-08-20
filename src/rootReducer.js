import { combineReducers } from "redux";

import userReducer from "./user/user.reducer"
import settingReducer from "./user/setting.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    setting: settingReducer,

});

export default rootReducer;