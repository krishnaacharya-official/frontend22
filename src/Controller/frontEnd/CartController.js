import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import FrontLoader from "../../Common/FrontLoader";
import Cart from "../../View/frontEnd/cart";
import cartApi from "../../Api/frontEnd/cart";
import authApi from "../../Api/admin/auth";
import ToastAlert from "../../Common/ToastAlert";



export default function CartController() {
    const [cartItem, setCartItem] = useState([])
    const userAuthToken = localStorage.getItem('userAuthToken');
    const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');

    const [loading, setLoading] = useState(false)
    const [update, setIsUpdate] = useState(false)
    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        (async () => {
            setLoading(true)
            if (userAuthToken) {
                const verifyUser = await authApi.verifyToken(userAuthToken ?userAuthToken :CampaignAdminAuthToken)
                if (!verifyUser.data.success) {
                    localStorage.clear()
                    navigate('/login')
                }
            }

            const getCartList = await cartApi.list(userAuthToken ?userAuthToken :CampaignAdminAuthToken);
            if (getCartList.data.success === true) {
                setCartItem(getCartList.data.data)
            }
            setLoading(false)

        })()
    }, [update])

    const removeCartItem = async (id) => {
        setLoading(true)
        const removeCartItem = await cartApi.deleteCartItem(userAuthToken ?userAuthToken :CampaignAdminAuthToken, id);
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

    const clearCart = async () => {
        setLoading(true)
        const clearCart = await cartApi.clearCart(userAuthToken ?userAuthToken :CampaignAdminAuthToken);
        if (clearCart) {
            if (!clearCart.data.success) {
                setLoading(false)
                ToastAlert({ msg: clearCart.data.message, msgType: 'error' });

            } else {
                setIsUpdate(!update)
                ToastAlert({ msg: clearCart.data.message, msgType: 'success' });
                setLoading(false)
            }

        } else {
            setLoading(false)
            ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
        }
    }


    const updateCartItem = async (quentity, id) => {
        setLoading(true)
        const updateCartItem = await cartApi.updateCart(userAuthToken ?userAuthToken :CampaignAdminAuthToken, quentity, id);
        if (updateCartItem) {
            if (!updateCartItem.data.success) {
                setLoading(false)
                ToastAlert({ msg: updateCartItem.data.message, msgType: 'error' });

            } else {
                setIsUpdate(!update)
                ToastAlert({ msg: updateCartItem.data.message, msgType: 'success' });
                setLoading(false)
            }

        } else {
            setLoading(false)
            ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
        }
    }

    const checkout =() =>{
        navigate('/checkout')
    }
    return (
        <>
            <FrontLoader loading={loading} />
            <Cart
                cartItem={cartItem}
                removeCartItem={removeCartItem}
                clearCart={clearCart}
                updateCartItem={updateCartItem}
                checkout={checkout}

            />
        </>
    )

}