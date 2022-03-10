import Index from "../../View/admin/Setting/Index"
import React,{useEffect} from "react"
import { hasPermission } from "../../Common/Helper";
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';

function SettingController(){
    const navigate = useNavigate();
    const adminData = JSON.parse(localStorage.getItem('adminData'));
    useEffect(() => {

        if (!hasPermission(adminData.roleName, 'CAMPAIGN_ADMIN')) {
            navigate('/admin/dashboard')
        }
    }, [])
    

    return(
        <>
        <Index/>
        </>
    )

}
export default SettingController