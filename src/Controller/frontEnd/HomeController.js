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


import { useSelector, useDispatch } from "react-redux";
// import { setFees, setIsUpdateCart } from "../../user/user.action";



export default function HomeController() {
    const [productList, setProductList] = useState([])
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



    const [filters, setfilters] = useState({
        taxEligible: false,
        postTag: false,
        infinite: false,

        lowToHigh: false,
        highToLow: false,
        oldEst: false,
        newEst: false,

        HighPrice: 3000,
        lowPrice: 0



    })
    const { taxEligible, postTag, infinite, lowToHigh, highToLow, oldEst, newEst,HighPrice,lowPrice } = filters



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




    useEffect(() => {
        (async () => {
            setLoading(true)
            const getproductList = await productApi.list(token);
            if (getproductList.data.success === true) {
                setProductList(getproductList.data.data)
            }
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
                })

                break;
            case 1:

                setfilters({
                    ...filters,
                    lowToHigh: false,
                    highToLow: true,
                    oldEst: false,
                    newEst: false,
                })
                break;
            case 2:

                setfilters({
                    ...filters,
                    lowToHigh: false,
                    highToLow: false,
                    oldEst: true,
                    newEst: false,
                })
                break;
            case 3:

                setfilters({
                    ...filters,
                    lowToHigh: false,
                    highToLow: false,
                    oldEst: false,
                    newEst: true,
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

    const onChangePriceSlider =(e)=>{
        setfilters({
            ...filters,
            HighPrice: e[1],
            lowPrice: e[0]
        })

    }

    useEffect(() => {
        (async () => {
            await filterProduct()
        })()
    }, [taxEligible, postTag, infinite, seletedCategoryList, lowToHigh, highToLow, oldEst, newEst,HighPrice,lowPrice])


    const filterProduct = async () => {
        setLoading(true)
        let data = {}
        data.categoryId = seletedCategoryList
        data.tax = taxEligible
        data.postTag = postTag
        data.infinite = infinite

        data.lowToHigh = lowToHigh
        data.highToLow = highToLow
        data.oldEst = oldEst
        data.newEst = newEst

        data.HighPrice = HighPrice
        data.lowPrice = lowPrice



        const getFilteredProductList = await productApi.productFilter(token, data);
        setLoading(false)
        if (getFilteredProductList.data.success === true) {
            setProductList(getFilteredProductList.data.data)
        } else {
            // setLoading(false)

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



            />
        </>
    )

}