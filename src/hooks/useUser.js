import { setData, setLogin,setCart } from "../action/userAction";


const useUser = (user,userdispatch)=> {
    return {
        isLoggedIn:user.isLoggedIn,
        isUpdateCart:user.isUpdateCart,
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
        logout:()=>{
            localStorage.clear();
            userdispatch(setLogin(false));
            userdispatch(setData({}));            
        },        
    }
}
export default useUser;