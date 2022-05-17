import Index from "../../View/frontEnd/Layout/Home/Index";
import productApi from "../../Api/admin/product";
import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import FrontLoader from "../../Common/FrontLoader";
import OrganisationDetail from "../../View/frontEnd/organisation-detail";
import organizationApi from "../../Api/frontEnd/organization";
import projectApi from "../../Api/admin/project";


export default function OrganizationDetailsController() {
    const [productList, setProductList] = useState([])
    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
    const userAuthToken = localStorage.getItem('userAuthToken');

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

    useEffect(() => {
        (async () => {
            setLoading(true)
            // console.log(params.name)
            let orgdata = {}
            const getOrganizationDetails = await organizationApi.details(params.name);
            if (getOrganizationDetails.data.success === true) {
                if (getOrganizationDetails.data.data.length) {
                    orgdata = getOrganizationDetails.data.data[0]
                    setOrganizationDetails(orgdata)
                    await orgProjectList(orgdata._id)
                } else {
                    navigate('/')
                }
            } else {
                navigate('/')
            }
            setLoading(false)

        })()
    }, [])
    return (
        <>
            <FrontLoader loading={loading} />
            <OrganisationDetail
                organizationDetails={organizationDetails}
                projectList={projectList}
            />
            {/* <Index productList={productList} /> */}
        </>
    )

}