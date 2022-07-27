import Index from "../../View/frontEnd/Layout/Home/Index";
import productApi from "../../Api/admin/product";
import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import FrontLoader from "../../Common/FrontLoader";
import OrganisationDetail from "../../View/frontEnd/organisation-detail";
import organizationApi from "../../Api/frontEnd/organization";
import projectApi from "../../Api/admin/project";
import adminCampaignApi from "../../Api/admin/adminCampaign";
import cartApi from "../../Api/frontEnd/cart";
import ToastAlert from "../../Common/ToastAlert";
import { useSelector, useDispatch } from "react-redux";
import { validateAll } from "indicative/validator";
import { setUserXp, setUserRank } from "../../user/user.action"
import userApi from "../../Api/frontEnd/user";
import helper from "../../Common/Helper";




export default function OrganizationDetailsController() {
    const [productList, setProductList] = useState([])
    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
    const userAuthToken = localStorage.getItem('userAuthToken');
    const [organizationList, setOrganizationList] = useState([])
    const token = CampaignAdminAuthToken ? CampaignAdminAuthToken : userAuthToken

    const [loading, setLoading] = useState(false)
    const params = useParams();
    const navigate = useNavigate();
    const [organizationDetails, setOrganizationDetails] = useState({})
    const [projectList, setProjectList] = useState([])
    const [purchasedItemList, setPurchasedItemList] = useState([])
    const user = useSelector((state) => state.user);
    const userData = JSON.parse(localStorage.getItem('userData'));
    const [selectedValue, setSelectedValue] = useState(25);
    const [donationList, setDonationList] = useState([])
    const dispatch = useDispatch()




    const [state, setstate] = useState({
        name: "",
        email: "",
        phone: "",
        stateName: "",
        city: "",
        country: "",
        zip: "",
        line1: "",
        cardNumber: "",
        month: "",
        year: "",
        cvv: "",
        error: []
    })
    const {
        name, cardNumber, month, year, cvv, error,
    } = state;

    const [cardNumberWithSpace, setCardNumberWithSpace] = useState("")


    const getUserRank = async () => {
        const getRank = await userApi.getUserRank(userAuthToken)
        if (getRank) {
            if (getRank.data.success) {
                dispatch(setUserRank(getRank.data.rank))
            }
        }
    }


    const changevalue = (e) => {
        let value = e.target.value;
        if (e.target.name === "cardNumber") {
            let cardVal = e.target.value;
            setCardNumberWithSpace(cardVal.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim())
            setstate({
                ...state,
                [e.target.name]: value
            })
        } else {
            setstate({
                ...state,
                [e.target.name]: value
            })
        }

    }

    const orgProjectList = async (orgId) => {
        let formData = {}
        formData.filter = false
        formData.sortField = 'created_at'
        formData.sortType = 'asc'
        formData.organizationId = orgId

        const getProjectList = await projectApi.projectListByOrganization(token, formData)
        if (getProjectList.data.success) {
            setProjectList(getProjectList.data.data)
        }

    }

    const getOrganizationList = async () => {
        let data = {}
        data.userCountry = user.countryId
        const getOrganizationList = await adminCampaignApi.list(token, data)
        if (getOrganizationList.data.success === true) {
            setOrganizationList(getOrganizationList.data.data)
        }
    }
    const getPurchasedItems = async (id) => {
        const getPurchasedItems = await organizationApi.organizationPurchasedItemHistory(userAuthToken ? userAuthToken : CampaignAdminAuthToken, id);
        if (getPurchasedItems.data.success === true) {
            setPurchasedItemList(getPurchasedItems.data.data)
        }
    }
    const getDonationList = async (id) => {
        const getDonationList = await organizationApi.organizationDonatedItemHistory(userAuthToken ? userAuthToken : CampaignAdminAuthToken, id);
        if (getDonationList.data.success === true) {
            setDonationList(getDonationList.data.data)
        }
    }

    const addToCart = async (id, quantity) => {
        if (token) {


            setLoading(true)
            let data = {}
            data.productId = id
            data.quantity = quantity

            const addItemToCart = await cartApi.add(userAuthToken, data);
            if (addItemToCart) {
                if (!addItemToCart.data.success) {
                    setLoading(false)
                    ToastAlert({ msg: addItemToCart.data.message, msgType: 'error' });
                } else {
                    ToastAlert({ msg: addItemToCart.data.message, msgType: 'success' });
                    setLoading(false)
                }

            } else {
                setLoading(false)
                ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
            }
        } else {
            navigate('/signin')
        }
    }


    const checkItemInCart = async (id) => {
        setLoading(true)
        let res;
        const checkItemInCart = await cartApi.checkItemInCart(userAuthToken, id);
        if (checkItemInCart) {
            setLoading(false)
            if (checkItemInCart.data.success) {
                res = true
            } else {
                res = false
            }

        } else {
            setLoading(false)
            res = false
        }
        return res;
    }

    const donate = async () => {
        if (token) {
            const rules = {
                name: 'required',
                cardNumber: 'required|number',
                month: 'required',
                year: 'required',
                cvv: 'required|number',


            }
            const message = {
                'name.required': 'Card holder name is Required.',
                'cardNumber.required': 'Card number is Required.',
                'cardNumber.number': 'Card number can not be string.',
                'month.required': 'Month is Required.',
                'year.required': 'Year number is Required.',
                'cvv.required': 'cvv is Required.',
                'cvv.number': 'cvv can not be string.',

            }
            validateAll(state, rules, message).then(async () => {
                const formaerrror = {};
                setstate({
                    ...state,
                    error: formaerrror
                })
                setLoading(true)
                let data = {}
                data.name = userData.name
                data.email = userData.email
                data.city = user.cityName
                data.state = user.stateName
                data.line1 = user.area
                data.country = user.countryName
                data.amount = selectedValue
                data.cardNumber = cardNumber
                data.cardExpMonth = month
                data.cardExpYear = year
                data.cardCVC = cvv
                data.postalCode = user.zip
                data.currency = user.currency
                data.currencySymbol = user.currencySymbol
                data.organizationId = organizationDetails._id
                data.organizationLogo = helper.CampaignAdminLogoPath + organizationDetails.logo
                data.organizationName = organizationDetails.name


                // console.log(data)






                const donateToOrganization = await organizationApi.donate(userAuthToken, data);
                if (donateToOrganization) {
                    if (!donateToOrganization.data.success) {
                        setLoading(false)
                        ToastAlert({ msg: donateToOrganization.data.message, msgType: 'error' });
                    } else {
                        // if (userAuthToken) {
                        //     //    await getUserRank()
                        // }
                        let addXp = Number(selectedValue * 10)
                        dispatch(setUserXp(user.xp + addXp))
                        ToastAlert({ msg: donateToOrganization.data.message, msgType: 'success' });
                        setLoading(false)
                        navigate('/donate/'+donateToOrganization.data.donationId)
                    }

                } else {
                    setLoading(false)
                    ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
                }






            }).catch(errors => {
                setLoading(false)
                const formaerrror = {};
                if (errors.length) {
                    errors.forEach(element => {
                        formaerrror[element.field] = element.message
                    });
                } else {
                    ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
                }

                setstate({
                    ...state,
                    error: formaerrror
                })

            });
        } else {
            navigate('/signin')

        }

    }

    useEffect(() => {
        (async () => {
            setLoading(true)

            let orgdata = {}
            const getOrganizationDetails = await organizationApi.details(params.name);
            if (getOrganizationDetails.data.success === true) {
                if (getOrganizationDetails.data.data.length) {
                    orgdata = getOrganizationDetails.data.data[0]
                    if (user.countryId && user.countryId > 0) {
                        if (orgdata.country_id !== user.countryId) {
                            navigate('/')
                        }
                    }

                    setOrganizationDetails(orgdata)
                    await orgProjectList(orgdata._id)
                    await getOrganizationList()
                    await getPurchasedItems(orgdata._id)
                    await getDonationList(orgdata._id)

                } else {
                    navigate('/')
                }
            } else {
                navigate('/')
            }
            setLoading(false)

        })()
    }, [params.name, user])
    return (
        <>
            {/* {console.log(user)} */}
            <FrontLoader loading={loading} />
            <OrganisationDetail
                organizationDetails={organizationDetails}
                projectList={projectList}
                organizationList={organizationList}
                addToCart={addToCart}
                checkItemInCart={checkItemInCart}
                purchasedItemList={purchasedItemList}
                stateData={state}
                cardNumberWithSpace={cardNumberWithSpace}
                changevalue={changevalue}
                donate={donate}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                donationList={donationList}
            />

        </>
    )

}