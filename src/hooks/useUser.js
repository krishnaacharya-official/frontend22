import { setData, setLogin, setCart, setUpdateOrg, settransactionFee, setPlatformFee } from "../action/userAction";


const useUser = (user, userdispatch) => {
    return {
        isLoggedIn: user.isLoggedIn,
        isUpdateCart: user.isUpdateCart,
        isUpdateOrg: user.isUpdateOrg,
        data: user.data,
        transactionFee: user.transactionFee,
        platformFee: user.platformFee,


        setUserData: (data) => {
            userdispatch(setData(data));
        },
        setLogin: (loginStatus) => {
            userdispatch(setLogin(loginStatus));
        },
        setCart: (cartStatus) => {
            userdispatch(setCart(cartStatus));
        },
        setUpdateOrg: (cartStatus) => {
            userdispatch(setUpdateOrg(cartStatus));
        },

        settransactionFee: (fee) => {
            userdispatch(settransactionFee(fee));
        },
        setPlatformFee: (fee) => {
            userdispatch(setPlatformFee(fee));
        },
        logout: () => {
            localStorage.clear();
            userdispatch(setLogin(false));
            userdispatch(setData({}));
        },
    }
}
export default useUser;