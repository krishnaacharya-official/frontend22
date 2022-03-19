import React, { useState, useEffect } from "react"
import FrontLoader from "../../Common/FrontLoader"
import Index from "../../View/admin/Project/Index"
import authApi from "../../Api/admin/auth";
import { hasPermission } from "../../Common/Helper";
import projectApi from "../../Api/admin/project"
import productApi from "../../Api/admin/product";
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import AddProjectForm from "../../View/admin/Project/AddProjectForm";
import { validateAll } from "indicative/validator";
import ToastAlert from "../../Common/ToastAlert"
import { confirmAlert } from "react-confirm-alert"


function ProjectController() {
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [projectList, setProjectList] = useState([])
    const [update, setUpdate] = useState(false)
    const navigate = useNavigate();
    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const adminData = JSON.parse(localStorage.getItem('adminData'));
    const [productList, setProductList] = useState([])
    const [seletedProductList, setSeletedProductList] = useState([])
    const [tempImages, setTempImages] = useState([])
    const [projectImages, setProjectImages] = useState([])


    const [state, setstate] = useState({
        id: '',
        status: 1,
        name: '',
        headline: '',
        video: '',
        description: '',
        error: [],
        images: [],
    })

    const { id, status, name, headline, video, description, error, images } = state


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
            const getproductList = await productApi.list(adminAuthToken);
            if (getproductList.data.success === true) {
                setProductList(getproductList.data.data)
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
        resetForm()
    }

    const resetForm = () => {
        setSeletedProductList([])
        setProjectImages([])
        setTempImages([])
        setstate({
            id: '',
            status: 1,
            name: '',
            headline: '',
            video: '',
            description: '',
            error: [],
            images: [],
        });

    }

    const changefile = (e) => {

        let tempArry = []
        let tempObj = []
      

       if(e.target.files && e.target.files.length > 0)  {
        tempObj.push(e.target.files)
        for (let i = 0; i < tempObj[0].length; i++) {
            tempArry.push(URL.createObjectURL(tempObj[0][i]))
        }
        setTempImages(tempArry)

       }
        setstate({
            ...state,
            images: e.target.files
        })

    }

    const handleOnDiscriptionChangeValue = (e) => {
        setstate({
            ...state,
            'description': e
        })
    }

    const onSelectProduct = (e) => {

        if (e.target.checked) {
            setSeletedProductList([...seletedProductList, e.target.id])
        } else {

            let tempArry = [...seletedProductList]
            const index = tempArry.indexOf(e.target.id);
            if (index > -1) {
                tempArry.splice(index, 1);
            }
            setSeletedProductList(tempArry)

        }


    }


    const submitProjectForm = (e) => {

        const formaerrror = {}

        if (!id) {
            if (images.length <= 1) {
                formaerrror['images'] = "Please select more then one Image"
            }
        }

        if (seletedProductList.length === 0) {
            formaerrror['products'] = "Please select product"
        }


        const rules = {
            name: 'required',
            headline: 'required',
            video: 'required',
            description: 'required',
        }

        const message = {

            'name.required': 'Name is Required',
            'headline.required': 'Headline is Required',
            'description.required': 'Description is Required',
            'video.required': 'video is Required',
        }

        validateAll(state, rules, message).then(async () => {

            setstate({
                ...state,
                error: formaerrror
            })

            let data = {}

            data.name = name
            data.headline = headline
            data.video = video
            data.description = description
            data.products = seletedProductList
            if (images?.length) {
                data.images = images
            }



            if (Object.keys(formaerrror).length === 0) {

                // }

                let addProject;

                setLoading(true)
                if (id !== '') {
                    addProject = await projectApi.updateProject(adminAuthToken, data, id)
                } else {
                    addProject = await projectApi.add(adminAuthToken, data)
                }


                if (addProject) {
                    if (addProject.data.success === false) {
                        setLoading(false)
                        ToastAlert({ msg: addProject.data.message, msgType: 'error' });

                    } else {
                        if (addProject.data.success === true) {
                            resetForm()
                            setModal(false)
                            setLoading(false)
                            setUpdate(!update)
                            ToastAlert({ msg: addProject.data.message, msgType: 'success' });
                        }
                    }
                } else {
                    setLoading(false)
                    ToastAlert({ msg: 'Project not save', msgType: 'error' });
                }
            }

        }).catch(errors => {
            setLoading(false)
            console.log(errors)
            // const formaerrror = {};
            if (errors.length) {
                errors.forEach(element => {
                    formaerrror[element.field] = element.message
                });
            } else {
                ToastAlert({ msg: 'Something Went Wrong', msgType: 'error' });
            }

            setstate({
                ...state,
                error: formaerrror
            })

        });



    }

    const deleteProject = (id) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to delete Project.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: (async () => {
                        setLoading(true)
                        if (id !== '') {
                            const deleteProjectApi = await projectApi.deleteProject(adminAuthToken, id)
                            if (deleteProjectApi) {
                                if (deleteProjectApi.data.success === false) {
                                    setLoading(false)
                                    ToastAlert({ msg: deleteProjectApi.data.message, msgType: 'error' });
                                } else {
                                    if (deleteProjectApi.data.success === true) {
                                        setLoading(false)
                                        setUpdate(!update)
                                        ToastAlert({ msg: deleteProjectApi.data.message, msgType: 'success' });
                                    }
                                }
                            } else {
                                setLoading(false)
                                ToastAlert({ msg: 'Project not delete', msgType: 'error' });
                            }
                        } else {
                            setLoading(false)
                            ToastAlert({ msg: 'Project not delete id Not found', msgType: 'error' });
                        }
                    })
                },
                {
                    label: 'No',
                }
            ]
        });
    }

    const changevalue = async (e) => {
        let value = e.target.value;
        setstate({
            ...state,
            [e.target.name]: value
        })

    }

    const editProject = async (projectData) => {
    
        // setLoading(true)
        setModal(true);
        if ((projectData) && projectData !== null && projectData !== '') {

            setstate({
                id: projectData._id,
                headline: projectData.headline,
                name: projectData.name,
                description: projectData.description,
                video: projectData.video,

            });

            let tempProductArray = [];
            if (projectData.productDetails.length > 0) {
                projectData.productDetails.map((product, i) => {
                    tempProductArray.push(product.productId)
                })
                setSeletedProductList(tempProductArray)
            }

            let tempImgArray = []
            if (projectData.imageDetails.length > 0) {
                projectData.imageDetails.map((img, i) => {
                    tempImgArray.push(img.image)
                })
                setProjectImages(tempImgArray)
            }


        }
        // setModal(false);
    }




    return (
        <>
            <FrontLoader loading={loading} />
            <Index
                projectList={projectList}
                openModel={openModel}
                deleteProject={deleteProject}
                editProject={editProject}
            />
            <AddProjectForm
                setModal={setModal}
                modal={modal}
                stateData={state}
                changefile={changefile}
                handleOnDiscriptionChangeValue={handleOnDiscriptionChangeValue}
                productList={productList}
                seletedProductList={seletedProductList}
                onSelectProduct={onSelectProduct}
                submitProjectForm={submitProjectForm}
                changevalue={changevalue}
                tempImages={tempImages}
                projectImages={projectImages}

            />
        </>
    )

}
export default ProjectController