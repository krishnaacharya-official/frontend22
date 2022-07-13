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
import wishlistApi from "../../Api/frontEnd/wishlist";
// import {userAuth as frontEndAuthApi} from "../../Api/frontEnd/auth"
import userAuthApi from "../../Api/frontEnd/auth";
import notificationApi from "../../Api/frontEnd/notification";



export default function HeaderController() {

    const userAuthToken = localStorage.getItem('userAuthToken');
    const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
    const token = userAuthToken ? userAuthToken : CampaignAdminAuthToken ? CampaignAdminAuthToken : ""
    const [wishListproductList, setWishListProductList] = useState([])
    const [notificationList, setNotificationList] = useState([])


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

    const getWishListProductList = async () => {
        const list = await wishlistApi.list(token)
        if (list) {
            if (list.data.success) {
                // console.log(list.data.data)
                setWishListProductList(list.data.data)
            }
        }

    }

    const addProductToWishlist = async (productId) => {
        let data = {}
        data.productId = productId
        setLoading(true)
        const add = await wishlistApi.add(token, data)
        if (add) {
            if (add.data.success) {
                setLoading(false)
                await getWishListProductList()
                dispatch(setIsUpdateCart(!user.isUpdateCart))
            } else {
                setLoading(false)

                ToastAlert({ msg: add.data.message, msgType: 'error' });

            }

        } else {
            setLoading(false)
            ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
        }
    }

    const getNotificationList = async () => {
        let data = {}
        data.countryId = user.countryId
        const getList = await notificationApi.list(userAuthToken, data)

        if (getList) {

            if (getList.data.success) {
                setNotificationList(getList.data.data)
            }
        }

    }

    useEffect(() => {
        (async () => {
            setLoading(true)

            if (userAuthToken && user.countryId) {
                // console.log('token')
                await getNotificationList()

            }
            if (token && token !== '') {
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
                // console.log('first')
                await getWishListProductList()
            }

            setLoading(false)

            // console.log(user.isUpdateCart)

        })()
    }, [token, userAuthToken, update, !user.isUpdateCart, user.countryId])




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

    const getAuthToken = async (id, slug) => {
        const getToken = await userAuthApi.getAuthTokenById(id)
        localStorage.setItem('tempCampaignAdminAuthToken', getToken.data.token)
        localStorage.setItem('type', 'temp')
        navigate('/campaign/' + slug + '/dashboard', { state: { type: 'temp' } }, { replace: true })

    }


    const setWatchNotification = async (watched, id) => {
        let data = {}
        data.watched = watched
        data.type = 'watched'
        data.id = id
        const setWatch = await notificationApi.setWatch(userAuthToken, data)
        if (setWatch) {
            if (setWatch.data.success) {
                await getNotificationList()
            }
        }
    }


    const removeNotification = async (id) => {
        let data = {}
        data.removed = true
        data.type = 'removed'
        data.id = id
        const setWatch = await notificationApi.setWatch(userAuthToken, data)
        if (setWatch) {
            if (setWatch.data.success) {
                await getNotificationList()
            }
        }
        // const removeNotification = await notificationApi.removeNotification(userAuthToken, id)
        // if (removeNotification) {
        //     if (removeNotification.data.success) {
        //         await getNotificationList()
        //     }
        // }
    }





    return (
        <>

            <FrontLoader loading={loading} />
            <Header
                cartItem={cartItem}
                removeCartItem={removeCartItem}
                updateCartItem={updateCartItem}
                wishListproductList={wishListproductList}
                addProductToWishlist={addProductToWishlist}
                getAuthToken={getAuthToken}
                notificationList={notificationList}
                setWatchNotification={setWatchNotification}
                removeNotification={removeNotification}



            />

        </>
    )

}