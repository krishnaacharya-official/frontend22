export const setLogin = (status)=>{
    return {type:"isLoggedIn",value:status}
}
export const setCart = (status)=>{
    return {type:"isUpdateCart",value:status}
}

export const setData = (data)=>{
    return {type:"data",value:data}
}

export const setUpdateOrg = (data)=>{
    return {type:"isUpdateOrg",value:data}
}

export const setTransectionFee = (data)=>{
    return {type:"transectionFee",value:data}
}
export const setPlatformFee = (data)=>{
    return {type:"platformFee",value:data}
}