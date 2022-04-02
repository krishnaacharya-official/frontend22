import Index from "../../View/frontEnd/Layout/Home/Index";
import productApi from "../../Api/admin/product";
import React, { useState, useEffect } from "react"
import FrontLoader from "../../Common/FrontLoader";
import ToastAlert from "../../Common/ToastAlert";
import cartApi from "../../Api/frontEnd/cart";



export default function HomeController() {
    const [productList, setProductList] = useState([])
    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const [loading, setLoading] = useState(false)
    const userAuthToken = localStorage.getItem('userAuthToken');
    const [update, setIsUpdate] = useState(false)

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

    const addToCart = async (id) => {
        setLoading(true)
        const addItemToCart = await cartApi.add(userAuthToken, id);
        if (addItemToCart) {
            if (!addItemToCart.data.success) {
                setLoading(false)
                ToastAlert({ msg: addItemToCart.data.message, msgType: 'error' });
            } else {
                setIsUpdate(!update)
                ToastAlert({ msg: addItemToCart.data.message, msgType: 'success' });
                setLoading(false)
            }

        } else {
            setLoading(false)
            ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
        }
    }
    return (
        <>
            <FrontLoader loading={loading} />
            <Index 
            productList={productList}
            addToCart={addToCart}
             />
        </>
    )

}