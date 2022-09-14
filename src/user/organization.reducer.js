import organizationInitialState from "./organization.initialstate";
import { UPDATE_ORGANIZATION_BANK_DETAILS } from "./organization.types";


const organizationReducer = (state = organizationInitialState, action) => {


    switch (action.type) {

        case UPDATE_ORGANIZATION_BANK_DETAILS:
            return {
                ...state,
                bankDetails: action.payload
            }



        default:
            return state;
    }
};

export default organizationReducer;