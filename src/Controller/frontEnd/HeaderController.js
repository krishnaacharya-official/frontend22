import Index from "../../View/frontEnd/Layout/Home/Index";
import productApi from "../../Api/admin/product";
import React, { useState, useEffect } from "react"
import FrontLoader from "../../Common/FrontLoader";
import Header from "../../View/frontEnd/Component/organisms/header";
import cartApi from "../../Api/frontEnd/cart";
import authApi from "../../Api/admin/auth";
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import ToastAlert from "../../Common/ToastAlert";




export default function HeaderController() {

    const userAuthToken = localStorage.getItem('userAuthToken');
    const [loading, setLoading] = useState(false)
    const [update, setIsUpdate] = useState(false)
    const [cartItem, setCartItem] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        (async () => {
            setLoading(true)
            if (userAuthToken) {
                const verifyUser = await authApi.verifyToken(userAuthToken)
                if (!verifyUser.data.success) {
                    localStorage.clear()
                    navigate('/login')
                }
            }

            const getCartList = await cartApi.list(userAuthToken);
            if (getCartList.data.success === true) {
                setCartItem(getCartList.data.data)
                // console.log(getCartList.data.data)
            }
            setLoading(false)

        })()
    }, [userAuthToken,update])


    const removeCartItem = async (id) => {
        setLoading(true)
        const removeCartItem = await cartApi.deleteCartItem(userAuthToken, id);
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
            {/* {console.log(cartItem)} */}
            <FrontLoader loading={loading} />
            <Header 
            cartItem={cartItem} 
            removeCartItem={removeCartItem}
           
            />

        </>
    )

}