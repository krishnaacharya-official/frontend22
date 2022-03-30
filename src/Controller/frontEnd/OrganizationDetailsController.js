import Index from "../../View/frontEnd/Layout/Home/Index";
import productApi from "../../Api/admin/product";
import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import FrontLoader from "../../Common/FrontLoader";
import OrganisationDetail from "../../View/frontEnd/organisation-detail";
import organizationApi from "../../Api/frontEnd/organization";


export default function OrganizationDetailsController() {
    const [productList, setProductList] = useState([])
    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const [loading, setLoading] = useState(false)
    const params = useParams();

    useEffect(() => {
        (async () => {
            setLoading(true)
            console.log(params.name)
            const getporganizationDetails = await organizationApi.details(params.name);
            if (getporganizationDetails.data.success === true) {
                console.log(getporganizationDetails)

            }
            setLoading(false)

        })()
    }, [])
    return (
        <>
            <FrontLoader loading={loading} />
            <OrganisationDetail/>
            {/* <Index productList={productList} /> */}
        </>
    )

}