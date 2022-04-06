import Index from "../../View/frontEnd/Layout/Home/Index";
import productApi from "../../Api/admin/product";
import React, { useState, useEffect } from "react"
import FrontLoader from "../../Common/FrontLoader";
import ToastAlert from "../../Common/ToastAlert";
import cartApi from "../../Api/frontEnd/cart";



export default function HomeController() {
    const [productList, setProductList] = useState([])
    // const adminAuthToken = localStorage.getItem('adminAuthToken');
    const [loading, setLoading] = useState(false)
    const userAuthToken = localStorage.getItem('userAuthToken');
    const [update, setIsUpdate] = useState(false)
    const [inCart, setInCart] = useState(false)


    useEffect(() => {
        (async () => {
            setLoading(true)
            const getproductList = await productApi.list(userAuthToken);
            if (getproductList.data.success === true) {
                setProductList(getproductList.data.data)
            }

            setLoading(false)


        })()
    }, [])

    const checkItemInCart = async (id) => {
        let res;
        const checkItemInCart = await cartApi.checkItemInCart(userAuthToken, id);
        if (checkItemInCart) {
            if (checkItemInCart.data.success) {
                setInCart(true)
                res = true
            } else {
                setInCart(false)
                res = false

            }

        } else {
            setLoading(false)
            setInCart(false)
            ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
            res = false
        }
        return res;
    }

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

    const removeCartItem = async (id) => {
        setLoading(true)
        const removeCartItem = await cartApi.removeCartProduct(userAuthToken, id);
        if (removeCartItem) {
            if (!removeCartItem.data.success) {
                setLoading(false)
                ToastAlert({ msg: removeCartItem.data.message, msgType: 'error' });
            } else {
                setIsUpdate(!update)
                ToastAlert({ msg: removeCartItem.data.message, msgType: 'success' });
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
                removeCartItem={removeCartItem}
                checkItemInCart={checkItemInCart}
            />
        </>
    )

}