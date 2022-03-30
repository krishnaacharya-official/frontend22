import Index from "../../View/frontEnd/Layout/Home/Index";
import productApi from "../../Api/admin/product";
import React, { useState, useEffect } from "react"
import FrontLoader from "../../Common/FrontLoader";


export default function HomeController() {
    const [productList, setProductList] = useState([])
    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            setLoading(true)
            const getproductList = await productApi.list(adminAuthToken);
            if (getproductList.data.success === true) {
                setProductList(getproductList.data.data)
            }
            setLoading(false)

        })()
    }, [])
    return (
        <>
            <FrontLoader loading={loading} />
            <Index productList={productList} />
        </>
    )

}