import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import FrontLoader from "../../Common/FrontLoader";
import orderApi from "../../Api/admin/order";
import { hasPermission } from "../../Common/Helper";
import authApi from "../../Api/admin/auth";
import Index from "../../View/admin/Order/Index";


export default function OrderController() {

    const [orderList, setOrderList] = useState([])
    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const adminData = JSON.parse(localStorage.getItem('adminData'));
    const [loading, setLoading] = useState(false)
    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        (async () => {
            setLoading(true)
            if (!hasPermission(adminData.roleName, 'ORDERS')) {
                navigate('/admin/dashboard')
            }
            const verifyUser = await authApi.verifyToken(adminAuthToken)
            if (!verifyUser.data.success) {
                localStorage.clear()
                navigate('/admin/login')
            }

            const orderList = await orderApi.list(adminAuthToken);
            if (orderList.data.success === true) {
                setOrderList(orderList.data.data)
            }
            setLoading(false)

        })()
    }, [])

    return (
        <>

            <FrontLoader loading={loading} />
            <Index
            orderList={orderList}
            />
            

        </>
    )

}