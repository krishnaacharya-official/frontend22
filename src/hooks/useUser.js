import { setData, setLogin } from "../action/userAction";


const useUser = (user,userdispatch)=> {
    return {
        isLoggedIn:user.isLoggedIn,
        data:user.data,
        setUserData:(data)=>{            
            userdispatch(setData(data));
        },
        setLogin:(loginStatus)=>{
            userdispatch(setLogin(loginStatus));                        
        },
        logout:()=>{
            localStorage.clear();
            userdispatch(setLogin(false));
            userdispatch(setData({}));            
        },        
    }
}
export default useUser;