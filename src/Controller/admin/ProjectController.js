import React, { useState, useEffect } from "react"
import FrontLoader from "../../Common/FrontLoader"
import Index from "../../View/admin/Project/Index"
import authApi from "../../Api/admin/auth";
import { hasPermission } from "../../Common/Helper";
import projectApi from "../../Api/admin/project"
import productApi from "../../Api/admin/product";
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import AddProjectForm from "../../View/admin/Project/AddProjectForm";


function ProjectController() {
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [projectList, setProjectList] = useState([])
    const [update, setUpdate] = useState(false)
    const navigate = useNavigate();
    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const adminData = JSON.parse(localStorage.getItem('adminData'));
    const [productList, setProductList] = useState([])


    useEffect(() => {
        (async () => {
            setLoading(true)

            if (!hasPermission(adminData.roleName, 'PROJECT')) {
                navigate('/admin/dashboard')
            }



            const verifyUser = await authApi.verifyToken(adminAuthToken)
            if (!verifyUser.data.success) {
                localStorage.clear()
                navigate('/admin/login')
            }

            //Product List
            //----------------------------------
            let temp = []
            const getproductList = await productApi.list(adminAuthToken);
            if (getproductList.data.success === true) {
                if (adminData.roleName === 'CAMPAIGN_ADMIN') {
                    if (getproductList.data.data.length > 0) {
                        getproductList.data.data.map((p, i) => {
                            if (p.organizationId === adminData.id) {
                                temp.push(p)
                            }


                        })
                        setProductList(temp)
                    }


                } else {
                    setProductList(getproductList.data.data)
                }

            }
            // setUpdate(true) 



            //Project List
            //--------------------------------------
            const getProjectList = await projectApi.list(adminAuthToken)
            if (getProjectList.data.success) {
                setProjectList(getProjectList.data.data)
            }

            setLoading(false)

        })()
    }, [update])

    const openModel = () => {
        setModal(true);


    }




    return (
        <>
            <FrontLoader loading={loading} />
            <Index
                projectList={projectList}
                openModel={openModel}
            />
            <AddProjectForm
                setModal={setModal}
                modal={modal}
            />
        </>
    )

}
export default ProjectController