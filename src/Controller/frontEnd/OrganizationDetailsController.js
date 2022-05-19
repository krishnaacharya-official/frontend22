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
        const getOrganizationList = await adminCampaignApi.list(token)
        if (getOrganizationList.data.success === true) {
            setOrganizationList(getOrganizationList.data.data)
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

            let orgdata = {}
            const getOrganizationDetails = await organizationApi.details(params.name);
            if (getOrganizationDetails.data.success === true) {
                if (getOrganizationDetails.data.data.length) {
                    orgdata = getOrganizationDetails.data.data[0]
                    setOrganizationDetails(orgdata)
                    await orgProjectList(orgdata._id)
                    await getOrganizationList()
                } else {
                    navigate('/')
                }
            } else {
                navigate('/')
            }
            setLoading(false)

        })()
    }, [params.name])
    return (
        <>
            <FrontLoader loading={loading} />
            <OrganisationDetail
                organizationDetails={organizationDetails}
                projectList={projectList}
                organizationList={organizationList}
                addToCart={addToCart}
                checkItemInCart={checkItemInCart}
            />

        </>
    )

}