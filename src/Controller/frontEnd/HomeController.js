import Index from "../../View/frontEnd/Layout/Home/Index";
import productApi from "../../Api/admin/product";
import React, { useState, useEffect,useContext } from "react"
import FrontLoader from "../../Common/FrontLoader";
import ToastAlert from "../../Common/ToastAlert";
import cartApi from "../../Api/frontEnd/cart";
import settingApi from "../../Api/admin/setting";
import { UserContext } from '../../App';



export default function HomeController() {
    const [productList, setProductList] = useState([])
    // const adminAuthToken = localStorage.getItem('adminAuthToken');
    const [loading, setLoading] = useState(false)
    const userAuthToken = localStorage.getItem('userAuthToken');
    const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
    const user = useContext(UserContext)

    const [update, setIsUpdate] = useState(false)
    const [inCart, setInCart] = useState(false)

    const [pricingFees, setPricingFees] = useState({
        platformFee: 0,
        transectionFee: 0,

    })
    const { platformFee, transectionFee } = pricingFees


    useEffect(() => {
        (async () => {
            setLoading(true)
            const getproductList = await productApi.list(userAuthToken ? userAuthToken : CampaignAdminAuthToken);
            if (getproductList.data.success === true) {
                setProductList(getproductList.data.data)
            }
            setPricingFees({
                ...pricingFees,
                platformFee:user.platformFee,
                transectionFee:user.transectionFee
            })
            // const getSettingsValue = await settingApi.list(userAuthToken ? userAuthToken : CampaignAdminAuthToken, Object.keys(pricingFees));

            // if (getSettingsValue.data.success) {
            //     let data = {}

            //     getSettingsValue.data.data.map((d, i) => {
            //         data[d.name] = d.value
            //     })
            //     setPricingFees({
            //         ...data
            //     })
            // }
            setLoading(false)


        })()
    }, [user])

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
                pricingFees={pricingFees}
                
            />
        </>
    )

}