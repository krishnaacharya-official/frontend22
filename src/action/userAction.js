export const setLogin = (status)=>{
    return {type:"isLoggedIn",value:status}
}
export const setCart = (status)=>{
    return {type:"isUpdateCart",value:status}
}

export const setData = (data)=>{
    return {type:"data",value:data}
}