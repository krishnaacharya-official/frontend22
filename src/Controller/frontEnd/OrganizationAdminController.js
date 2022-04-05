import Index from "../../View/frontEnd/Layout/Home/Index";
import productApi from "../../Api/admin/product";
import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import FrontLoader from "../../Common/FrontLoader";
import OrganisationDetail from "../../View/frontEnd/organisation-detail";
import organizationApi from "../../Api/frontEnd/organization";
import AdminDetail from "../../View/frontEnd/admin-detail/index";


export default function OrganizationAdminController() {
    const [productList, setProductList] = useState([])
    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const [loading, setLoading] = useState(false)
    const params = useParams();
    const navigate = useNavigate();
    const [organizationDetails, setOrganizationDetails] = useState({})
    const adminData = JSON.parse(localStorage.getItem('adminData'));

    useEffect(() => {
        (async () => {
            setLoading(true)
            // console.log(params.name)
            if(adminData && adminData.slug ===params.name ){
            let orgdata = {}
            const getOrganizationDetails = await organizationApi.details(params.name);
            if (getOrganizationDetails.data.success === true) {
                if (getOrganizationDetails.data.data.length) {
                    orgdata = getOrganizationDetails.data.data[0]
                    setOrganizationDetails(orgdata)
                } else {
                    navigate('/')
                }
            } else {
                navigate('/')
            }
            setLoading(false)
        }else{
            navigate('/')

        }

        })()
    }, [])
    return (
        <>
            <FrontLoader loading={loading} />
            <AdminDetail organizationDetails={organizationDetails} />
        </>
    )

}