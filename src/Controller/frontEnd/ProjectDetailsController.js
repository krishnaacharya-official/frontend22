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

    const getAllProjectList = async () => {
        const getProjectList = await projectApi.list(token);
        if (getProjectList.data.success === true) {
            setProjectList(getProjectList.data.data)
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
            let orgdata = {}
            const getProjectDetails = await projectApi.details(token, params.name);
            if (getProjectDetails.data.success === true) {
                // console.log(getProjectDetails.data.data[0]) 
                if (getProjectDetails.data.data.length) {
                    orgdata = getProjectDetails.data.data[0]
                    setProjectDetails(orgdata)
                    await getAllProjectList()
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
            />
       
        </>
    )

}