import Index from "../../View/frontEnd/Layout/Home/Index";
// import productApi from "../../Api/admin/product";
import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import FrontLoader from "../../Common/FrontLoader";
import OrganisationDetail from "../../View/frontEnd/organisation-detail";
import organizationApi from "../../Api/frontEnd/organization";
import ItemDetail from "../../View/frontEnd/item-detail";
import productApi from "../../Api/frontEnd/product";


export default function ItemDetailsController() {

    const [productList, setProductList] = useState([])
    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const [loading, setLoading] = useState(false)
    const params = useParams();
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState({})

    useEffect(() => {
        (async () => {
            setLoading(true)
            // console.log(params.name)
            window.scrollTo(0, 0);
            let mydata = {}
            const getproductDetails = await productApi.details(params.name);
            // console.log(getproductDetails)
            if (getproductDetails.data.success === true) {
                if (getproductDetails.data.data.length) {
                    mydata = getproductDetails.data.data[0]
                    setProductDetails(mydata)
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
            {/* {console.log(productDetails)} */}
            <FrontLoader loading={loading} />
            <ItemDetail
                productDetails={productDetails}
            />
        </>
    )

}