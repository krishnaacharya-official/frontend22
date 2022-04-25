import { setData, setLogin,setCart,setUpdateOrg } from "../action/userAction";


const useUser = (user,userdispatch)=> {
    return {
        isLoggedIn:user.isLoggedIn,
        isUpdateCart:user.isUpdateCart,
        isUpdateOrg:user.isUpdateOrg,
        data:user.data,
        setUserData:(data)=>{            
            userdispatch(setData(data));
        },
        setLogin:(loginStatus)=>{
            userdispatch(setLogin(loginStatus));                        
        },
        setCart:(cartStatus)=>{
            userdispatch(setCart(cartStatus));                        
        },
        setUpdateOrg:(cartStatus)=>{
            userdispatch(setUpdateOrg(cartStatus));                        
        },
        logout:()=>{
            localStorage.clear();
            userdispatch(setLogin(false));
            userdispatch(setData({}));            
        },        
    }
}
export default useUser;