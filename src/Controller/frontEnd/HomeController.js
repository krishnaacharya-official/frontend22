import Index from "../../View/frontEnd/Layout/Home/Index";
import productApi from "../../Api/admin/product";
import React, { useState, useEffect } from "react"


export default function HomeController() {
    const [productList, setProductList] = useState([])
    const adminAuthToken = localStorage.getItem('adminAuthToken');

    useEffect(() => {
        (async () => {
        const getproductList = await productApi.list(adminAuthToken);
            if (getproductList.data.success === true) {
                setProductList(getproductList.data.data)
            }
        })()
    }, [])
    return (
        <Index productList={productList} />
    )

}