import { UPDATE_ORGANIZATION_BANK_DETAILS } from "./organization.types";


export const setOrganizationBankDetails = (data) => ({
    type: UPDATE_ORGANIZATION_BANK_DETAILS,
    payload: data,
});