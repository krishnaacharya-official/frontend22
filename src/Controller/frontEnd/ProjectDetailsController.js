import Index from "../../View/frontEnd/Layout/Home/Index";
import productApi from "../../Api/admin/product";
import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import FrontLoader from "../../Common/FrontLoader";
import OrganisationDetail from "../../View/frontEnd/organisation-detail";
import organizationApi from "../../Api/frontEnd/organization";
import ProjectDetail from "../../View/frontEnd/project-detail";
import projectApi from "../../Api/frontEnd/project";
import cartApi from "../../Api/frontEnd/cart";
import ToastAlert from "../../Common/ToastAlert";
import { useSelector, useDispatch } from "react-redux";




export default function ProjectDetailsController() {
    const [productList, setProductList] = useState([])
    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const [loading, setLoading] = useState(false)
    const params = useParams();
    const navigate = useNavigate();
    const [projectDetails, setProjectDetails] = useState({})
    const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
    const userAuthToken = localStorage.getItem('userAuthToken');
    const token = userAuthToken ? userAuthToken : CampaignAdminAuthToken
    const [projectList, setProjectList] = useState([])
    const [purchasedItemList, setPurchasedItemList] = useState([])
    const user = useSelector((state) => state.user);


    const getAllProjectList = async () => {
        let data = {}
        data.userCountry = user.countryId
        const getProjectList = await projectApi.list(token, data);
        if (getProjectList.data.success === true) {
            setProjectList(getProjectList.data.data)
        }

    }

    const getPurchasedItems = async (id) => {
        const getPurchasedItems = await projectApi.projectItemPurchasedHistory(userAuthToken ? userAuthToken : CampaignAdminAuthToken, id);
        if (getPurchasedItems.data.success === true) {
            setPurchasedItemList(getPurchasedItems.data.data)
        }
    }



    const addToCart = async (id, quantity) => {

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


    useEffect(() => {
        (async () => {
            setLoading(true)
            // console.log(params.name)
            let projdata = {}
            const getProjectDetails = await projectApi.details(token, params.name);
            if (getProjectDetails.data.success === true) {
                // console.log(getProjectDetails.data.data[0]) 
                if (getProjectDetails.data.data.length) {
                    projdata = getProjectDetails.data.data[0]
                    if (projdata.campaignDetails.country_id !== user.countryId) {
                        navigate('/')
                    }
                    setProjectDetails(projdata)
                    await getAllProjectList()
                    await getPurchasedItems(projdata._id)
                } else {
                    navigate('/')
                }
            } else {
                // navigate('/')
                console.log('first')
            }
            setLoading(false)

        })()
    }, [params.name])
    return (
        <>
            <FrontLoader loading={loading} />
            <ProjectDetail
                projectDetails={projectDetails}
                projectList={projectList}
                addToCart={addToCart}
                checkItemInCart={checkItemInCart}
                purchasedItemList={purchasedItemList}
            />

        </>
    )

}