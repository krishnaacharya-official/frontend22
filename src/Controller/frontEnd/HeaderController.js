import Index from "../../View/frontEnd/Layout/Home/Index";
import productApi from "../../Api/admin/product";
import React, { useState, useEffect, useContext } from "react"
import FrontLoader from "../../Common/FrontLoader";
import Header from "../../View/frontEnd/Component/organisms/header";
import cartApi from "../../Api/frontEnd/cart";
import authApi from "../../Api/admin/auth";
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import ToastAlert from "../../Common/ToastAlert";
// import { UserContext } from '../../App';`
import settingApi from "../../Api/admin/setting";
import { useSelector, useDispatch } from "react-redux";
import { setFees, setIsUpdateCart } from "../../user/user.action";
import { setSettings } from "../../user/setting.action";



export default function HeaderController() {

    const userAuthToken = localStorage.getItem('userAuthToken');
    const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
    const token = userAuthToken ? userAuthToken : CampaignAdminAuthToken ? CampaignAdminAuthToken : ""

    const [loading, setLoading] = useState(false)
    const [update, setIsUpdate] = useState(false)
    const [cartItem, setCartItem] = useState([])
    const navigate = useNavigate();
    // const user = useContext(UserContext)
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();


    const [pricingFees, setPricingFees] = useState({
        platformFee: 0,
        transectionFee: 0,
        captian: "",
        admiral: "",
        pirate: "",
        narwhal: "",
        beluga: "",
        fish: "",

    })
    const { platformFee, transectionFee } = pricingFees

    useEffect(() => {
        (async () => {
            setLoading(true)
            if (token) {
                const verifyUser = await authApi.verifyToken(token)
                if (!verifyUser.data.success) {
                    localStorage.clear()
                    navigate('/login')
                }


                const getCartList = await cartApi.list(token);
                if (getCartList.data.success === true) {
                    setCartItem(getCartList.data.data)
                    // console.log(getCartList.data.data)
                }
            }
            setLoading(false)

            // console.log(user.isUpdateCart)

        })()
    }, [token, update, user.isUpdateCart])




    useEffect(() => {
        (async () => {
            setLoading(true)
            if (token) {
                const getSettingsValue = await settingApi.list(userAuthToken ? userAuthToken : CampaignAdminAuthToken, Object.keys(pricingFees));

                if (getSettingsValue.data.success) {
                    let data = {}

                    getSettingsValue.data.data.map((d, i) => {
                        data[d.name] = d.value
                    })

                    setPricingFees({
                        ...data
                    })
                    let feesData = {}
                    feesData.platformFee = data.platformFee
                    feesData.transectionFee = data.transectionFee
                    dispatch(setFees(feesData))

                    let rankData = {}

                    rankData.captian = data.captian
                    rankData.admiral = data.admiral
                    rankData.pirate = data.pirate
                    rankData.narwhal = data.narwhal
                    rankData.beluga = data.beluga
                    rankData.fish = data.fish
                    dispatch(setSettings(rankData))

                    // user.setTransectionFee(data.transectionFee)
                    // user.setPlatformFee(data.platformFee)


                }
            }
            setLoading(false)

        })()
    }, [token])


    const removeCartItem = async (id) => {
        setLoading(true)
        const removeCartItem = await cartApi.deleteCartItem(userAuthToken, id);
        if (removeCartItem) {
            if (!removeCartItem.data.success) {
                setLoading(false)
                ToastAlert({ msg: removeCartItem.data.message, msgType: 'error' });

            } else {
                setIsUpdate(!update)
                // user.setCart(!user.isUpdateCart)
                dispatch(setIsUpdateCart(!user.isUpdateCart))
                ToastAlert({ msg: removeCartItem.data.message, msgType: 'success' });
                setLoading(false)
            }

        } else {
            setLoading(false)
            ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
        }
    }

    const updateCartItem = async (quentity, id) => {
        setLoading(true)
        const updateCartItem = await cartApi.updateCart(userAuthToken, quentity, id);
        if (updateCartItem) {
            if (!updateCartItem.data.success) {
                setLoading(false)
                ToastAlert({ msg: updateCartItem.data.message, msgType: 'error' });

            } else {
                setIsUpdate(!update)
                // user.setCart(!user.isUpdateCart)
                dispatch(setIsUpdateCart(!user.isUpdateCart))
                ToastAlert({ msg: updateCartItem.data.message, msgType: 'success' });
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
                updateCartItem={updateCartItem}



            />

        </>
    )

}