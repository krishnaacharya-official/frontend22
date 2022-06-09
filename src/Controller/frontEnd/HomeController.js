import Index from "../../View/frontEnd/Layout/Home/Index";
import productApi from "../../Api/frontEnd/product";
import React, { useState, useEffect, useContext } from "react"
import FrontLoader from "../../Common/FrontLoader";
import ToastAlert from "../../Common/ToastAlert";
import cartApi from "../../Api/frontEnd/cart";
import settingApi from "../../Api/admin/setting";
// import { UserContext } from '../../App';
import adminCampaignApi from "../../Api/admin/adminCampaign";
import categoryApi from "../../Api/admin/category";
import locationApi from "../../Api/frontEnd/location";
import { useSelector, useDispatch } from "react-redux";
import { setCurrency, setUserLanguage, setCurrencyPrice, setProfileImage, setUserCountry, setUserAddress } from "../../user/user.action"
import advertisementApi from "../../Api/admin/advertisement";



export default function HomeController() {
    const [productList, setProductList] = useState([])
    const [advertisementList, setAdvertisementList] = useState([])
    // const adminAuthToken = localStorage.getItem('adminAuthToken');
    const [loading, setLoading] = useState(false)
    const userAuthToken = localStorage.getItem('userAuthToken');
    const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
    // const user = useContext(UserContext)
    const user = useSelector((state) => state.user);
    const token = userAuthToken ? userAuthToken : CampaignAdminAuthToken
    const [categoryList, setCategoryList] = useState([])
    const [update, setIsUpdate] = useState(false)
    const [inCart, setInCart] = useState(false)
    const [organizationList, setOrganizationList] = useState([])
    const [seletedCategoryList, setSeletedCategoryList] = useState([])
    const [selectedKey, setSelectedKey] = useState(3)
    const dispatch = useDispatch()
    const userData = JSON.parse(localStorage.getItem('userData'));
    const CampaignAdmin = JSON.parse(localStorage.getItem('CampaignAdmin'));
    const [address, setAddress] = useState({
        stateName: "",
        zip: "",
        cityName: "",
        area: "",
        countryName: "",
    })

    const [filters, setfilters] = useState({
        taxEligible: false,
        postTag: false,
        infinite: false,

        lowToHigh: false,
        highToLow: false,
        oldEst: false,
        newEst: false,
        leastFunded: false,
        mostFunded: false,


        HighPrice: 3000,
        lowPrice: 0,

        search: "",



    })
    const { taxEligible, postTag, infinite, lowToHigh, highToLow, oldEst, newEst, leastFunded, mostFunded, HighPrice, lowPrice, search } = filters



    const [pricingFees, setPricingFees] = useState({
        platformFee: 0,
        transectionFee: 0,

    })

    const { platformFee, transectionFee } = pricingFees


    const getOrganizationList = async () => {
        const getOrganizationList = await adminCampaignApi.list(token)
        if (getOrganizationList.data.success === true) {
            setOrganizationList(getOrganizationList.data.data)
        }
    }

    const onClickFilter = (e) => {

        setfilters({
            ...filters,
            [e.target.name]: e.target.checked
        })
    }

    function showError(error) {
        if (error) {
            console.log(error)
            if (userAuthToken) {
                if (userData.country_id && userData.country_id !== null && userData.country_id > 0) {
                    dispatch(setUserCountry(userData.country_id))
                    let currencyData = {}
                    currencyData.currency = userData.currency
                    currencyData.currencySymbol = userData.symbol
                    dispatch(setCurrency(currencyData))
                } else {
                    dispatch(setUserCountry(233))


                }

            } else {
                if (CampaignAdmin.country_id && CampaignAdmin.country_id !== null && CampaignAdmin.country_id > 0) {
                    dispatch(setUserCountry(CampaignAdmin.country_id))
                } else {
                    dispatch(setUserCountry(233))

                }

                // dispatch(setUserCountry(CampaignAdmin.country_id))

            }
        }

    }



    async function showPosition(position) {

        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        if (latitude && longitude) {

            const getLocationByLatLong = await locationApi.getLocationByLatLong(latitude, longitude)
            if (getLocationByLatLong && getLocationByLatLong.data.status === "OK") {
                if (getLocationByLatLong.data.results.length > 0) {

                    let jsObjects = getLocationByLatLong.data.results[0].address_components
                    let tempObj = {}
                    tempObj.stateName = jsObjects.find(settings => settings.types[0] === 'administrative_area_level_1').long_name
                    tempObj.zip = jsObjects.find(settings => settings.types[0] === 'postal_code').long_name
                    tempObj.cityName = jsObjects.find(settings => settings.types[0] === 'administrative_area_level_2').long_name
                    tempObj.area = jsObjects.find(settings => settings.types[0] === 'route').long_name
                    tempObj.countryName = jsObjects.find(settings => settings.types[0] === 'country').long_name
                    dispatch(setUserAddress(tempObj))

                    jsObjects.filter(async obj => {
                        let tempObj = {}

                        if (obj.types[0] === 'country') {
                            let countryName = obj.long_name
                            tempObj.countryName = countryName

                            // setAddress({
                            //     ...address,
                            //     countryName: countryName
                            // })




                            const getCountryData = await locationApi.currencyByCountry(token, countryName)
                            if (getCountryData) {
                                if (getCountryData.data.success) {
                                    dispatch(setUserCountry(getCountryData.data.data.id))

                                    let currencyData = {}
                                    currencyData.currency = getCountryData.data.data.currency
                                    currencyData.currencySymbol = getCountryData.data.data.symbol
                                    dispatch(setCurrency(currencyData))

                                }
                            }

                        }

                    })


                }

            }
        }





    }

    const getHomePageAdList = async () => {
        const adList = await advertisementApi.listHomeAd(token)
        if (adList) {
            if (adList.data.success === true) {
                setAdvertisementList(adList.data.data)
            }

        }
    }




    useEffect(() => {
        (async () => {

            // function getLocation() {
            // console.log(user.xp)
            //   }
            setLoading(true)
            // const getproductList = await productApi.list(token);
            // if (getproductList.data.success === true) {
            //     setProductList(getproductList.data.data)
            // }
            setPricingFees({
                ...pricingFees,
                platformFee: user.platformFee,
                transectionFee: user.transectionFee
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
            await getHomePageAdList()

            const getCategoryList = await categoryApi.listCategory(token);
            if (getCategoryList.data.success === true) {
                // console.log(getCategoryList.data.data)
                setCategoryList(getCategoryList.data.data)
            }
            // await getOrganizationList()
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
        let data = {}
        data.productId = id
        const addItemToCart = await cartApi.add(userAuthToken, data);
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


    const onSelectCategory = async (e) => {

        if (e.target.checked) {
            setSeletedCategoryList([...seletedCategoryList, e.target.value])
            let data = {}
            // data.categoryId = [...seletedCategoryList, e.target.value]
            // await filterProduct(data)
        } else {

            let tempArry = [...seletedCategoryList]
            const index = tempArry.indexOf(e.target.value);
            if (index > -1) {
                tempArry.splice(index, 1);
                // let data = {}
                // data.categoryId = tempArry
                // await filterProduct(data)
            }

            setSeletedCategoryList(tempArry)

        }


    }

    const removeCatFromFilter = (id) => {
        let tempArry = [...seletedCategoryList]
        const index = tempArry.indexOf(id);
        if (index > -1) {
            tempArry.splice(index, 1);
        }
        setSeletedCategoryList(tempArry)
    }

    const onChangeFilterOption = (index) => {

        setSelectedKey(index)
        switch (index) {
            case 0:
                setfilters({
                    ...filters,
                    lowToHigh: true,
                    highToLow: false,
                    oldEst: false,
                    newEst: false,
                    leastFunded: false,
                    mostFunded: false,
                })

                break;
            case 1:

                setfilters({
                    ...filters,
                    lowToHigh: false,
                    highToLow: true,
                    oldEst: false,
                    newEst: false,
                    leastFunded: false,
                    mostFunded: false,
                })
                break;
            case 2:

                setfilters({
                    ...filters,
                    lowToHigh: false,
                    highToLow: false,
                    oldEst: true,
                    newEst: false,
                    leastFunded: false,
                    mostFunded: false,
                })
                break;
            case 3:

                setfilters({
                    ...filters,
                    lowToHigh: false,
                    highToLow: false,
                    oldEst: false,
                    newEst: true,
                    leastFunded: false,
                    mostFunded: false,
                })
                break;
            case 4:
                productList.sort(function (a, b) {
                    let firstPer = a.soldout / a.quantity * 100;
                    let secPer = b.soldout / b.quantity * 100;;
                    return firstPer - secPer;
                })

                setfilters({
                    ...filters,
                    lowToHigh: false,
                    highToLow: false,
                    oldEst: false,
                    newEst: false,
                    leastFunded: true,
                    mostFunded: false,
                })
                break;
            case 5:


                productList.sort(function (a, b) {
                    let firstPer = a.soldout / a.quantity * 100;
                    let secPer = b.soldout / b.quantity * 100;;
                    return secPer - firstPer;
                })

                setfilters({
                    ...filters,
                    lowToHigh: false,
                    highToLow: false,
                    oldEst: false,
                    newEst: false,
                    leastFunded: false,
                    mostFunded: true,
                })
                break;
            default:
                setfilters({
                    ...filters,
                    lowToHigh: false,
                    highToLow: false,
                    oldEst: false,
                    newEst: true,
                })
                break;

        }

    }

    const onChangePriceSlider = async (e) => {
        setfilters({
            ...filters,
            HighPrice: e[1],
            lowPrice: e[0]
        })
        // await filterProduct(e[0], e[1], search)
    }

    useEffect(() => {
        (async () => {
            if (user.countryId === null || user.countryId === undefined || user.countryId === "") {
                // console.log("user.countryId",user.countryId)

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(showPosition, showError);
                } else {
                    if (userAuthToken) {

                        dispatch(setUserCountry(userData.country_id))
                    } else {


                        dispatch(setUserCountry(CampaignAdmin.country_id))

                    }
                }
            } else {
                // console.log(user.countryId)

                setLoading(true)
                await filterProduct(lowPrice, HighPrice, search, user.countryId)
                setLoading(false)
            }


        })()
    }, [taxEligible, postTag, infinite, seletedCategoryList, lowToHigh, highToLow, oldEst, newEst, user.countryId, HighPrice, lowPrice])


    const filterProduct = async (low_price = lowPrice, high_price = HighPrice, search_product = search, userCountry = user.countryId) => {

        let data = {}

        data.search = search_product

        data.categoryId = seletedCategoryList

        data.tax = taxEligible
        data.postTag = postTag
        data.infinite = infinite

        data.lowToHigh = lowToHigh
        data.highToLow = highToLow
        data.oldEst = oldEst
        data.newEst = newEst

        data.userCountry = userCountry


        // data.leastFunded = leastFunded
        // data.mostFunded = mostFunded



        data.HighPrice = high_price
        data.lowPrice = low_price





        const getFilteredProductList = await productApi.productFilter(token, data);
        if (getFilteredProductList.data.success === true) {
            setProductList(getFilteredProductList.data.data)
            // if (getFilteredProductList.data.data.length > 0) {
            //     let tempArray = []
            //     getFilteredProductList.data.data.map((p, i) => {
            //         // if (p.campaignDetails.country_id === user.countryId) {

            //         tempArray.push(p)
            //         // }

            //     })
            //     setProductList(tempArray)

            // }
        } else {
            // setLoading(false)

        }
    }


    const onSearchProduct = async (e) => {
        let value = e.target.value
        setfilters({
            ...filters,
            search: value
        })

        await filterProduct(lowPrice, HighPrice, value)

    }

    return (
        <>
            {/* {console.log(user)} */}

            <FrontLoader loading={loading} />
            <Index
                productList={productList}
                addToCart={addToCart}
                removeCartItem={removeCartItem}
                checkItemInCart={checkItemInCart}
                pricingFees={pricingFees}
                organizationList={organizationList}
                categoryList={categoryList}
                onSelectCategory={onSelectCategory}
                seletedCategoryList={seletedCategoryList}
                removeCatFromFilter={removeCatFromFilter}
                filterProduct={filterProduct}
                setfilters={setfilters}
                filters={filters}
                onClickFilter={onClickFilter}
                selectedKey={selectedKey}
                setSelectedKey={setSelectedKey}
                onChangeFilterOption={onChangeFilterOption}
                onChangePriceSlider={onChangePriceSlider}
                onSearchProduct={onSearchProduct}
                advertisementList={advertisementList}



            />
        </>
    )

}