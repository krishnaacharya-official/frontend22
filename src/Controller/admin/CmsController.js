import React, { useEffect, useState } from "react"
import { hasPermission } from "../../Common/Helper";
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import authApi from "../../Api/admin/auth";
import Index from "../../View/admin/Cms/Index";
import AddCmsForm from "../../View/admin/Cms/AddCmsForm";


function CmsController() {
    const navigate = useNavigate();
    const adminData = JSON.parse(localStorage.getItem('adminData'));
    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const [modal, setModal] = useState(false)
    const [state, setstate] = useState({
        id: '',
        status: 1,
        name: '',
        error: [],
    })



    useEffect(() => {
        (async () => {

            if (!hasPermission(adminData.roleName, 'SETTING')) {
                navigate('/admin/dashboard')
            }

            const verifyUser = await authApi.verifyToken(adminAuthToken)
            if (!verifyUser.data.success) {
                localStorage.clear()
                navigate('/admin/login')
            }

        })()
    }, [])

    const changevalue = (e) => {
        let value = e.target.value;
        setstate({
            ...state,
            [e.target.name]: value
        })
    }

    const resetForm = (e) => {
        setstate({
            ...state,
            id: '',
            status: 1,
            name: '',
        });

    }
    const openModal = () => {
        resetForm()
        setModal(true);

    }


    return (
        <>
            <Index
                openModal={openModal} />
            <AddCmsForm
                stateData={state}
                modal={modal}
                setModal={setModal}
            />
        </>
    )

}
export default CmsController