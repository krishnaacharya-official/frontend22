import React, { useState, useEffect } from "react"
import FrontLoader from "../../Common/FrontLoader"
import { validateAll } from "indicative/validator";
import ToastAlert from "../../Common/ToastAlert"
import { confirmAlert } from "react-confirm-alert"
import Index from "../../View/admin/CampaignAdmin/Index"
import adminCampaignApi from "../../Api/admin/adminCampaign";
import CampaignAdminForm from "../../View/admin/CampaignAdmin/CampaignAdminForm";
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import { fa } from "faker/lib/locales";

function CampaignAdminController() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [update, setUpdate] = useState(false)
    const [tempImg, setTempImg] = useState('')
    const [Img, setImg] = useState('')
    const [campaignAdminList, setCampaignAdminList] = useState([])
    const [state, setState] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        logo: "",
        description: "",
        twitter: "",
        facebook: "",
        linkedin: "",
        url: "",
        country: 1,
        city: 1,
        stateid: 1,
        address: "",
        category: 1,
        error: [],
        status: 1
    })

    const {
        name, error, email, password, id, status, category, address, stateid, city, country, url, linkedin, facebook, twitter, description, logo
    } = state;

    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');

    const resetForm = () => {
        setTempImg('')
        setImg('')
        setState({
            ...state,
            id: "",
            name: "",
            email: "",
            password: "",
            logo: "",
            description: "",
            twitter: "",
            facebook: "",
            linkedin: "",
            url: "",
            country: 1,
            city: 1,
            stateid: 1,
            address: "",
            category: 1,
            error: [],
            status: 1
        })
    }
    const setOpenModal = () => {
        resetForm()
        setModal(true)
    }

    useEffect(() => {
        (async () => {
            if (CampaignAdminAuthToken) {
                navigate('/admin/Dashboard', { replace: true })
            }
            setLoading(true)
            const getcampaignAdminList = await adminCampaignApi.list(adminAuthToken)
            if (getcampaignAdminList.data.success) {
                setCampaignAdminList(getcampaignAdminList.data.data)
            }
            setLoading(false)
        })()
    }, [update])

    const changefile = (e) => {
        let file = e.target.files[0] ? e.target.files[0] : '';
        setImg(URL.createObjectURL(file))

        setState({
            ...state,
            logo: file
        })
    }


    const addCampaignAdmin = () => {
        const rules = {
            name: "required",
            email: 'required|email',
            password: 'required|min:6',
            logo: "required",
            description: "required",
            twitter: "required",
            facebook: "required",
            linkedin: "required",
            url: "required",
            address: "required",

        }

        const message = {
            'email.required': 'Email is Requied.',
            'name.required': 'Name is Requied.',
            'email.email': 'please enter valid email.',
            'password.min': 'Password must be at least 6 characters',
            'password.required': 'Password is Requied.',

            'logo.required': 'logo is Requied.',
            'description.required': 'description is Requied.',
            'twitter.required': 'Twitter is Requied.',
            'facebook.required': 'Facebook is Requied.',
            'linkedin.required': 'Linkedin is Requied.',
            'url.required': 'Website is Requied.',
            'address.required': 'Address is Requied.',


        }
        validateAll(state, rules, message).then(async () => {
            const formaerrror = {};
            setState({
                ...state,
                error: formaerrror
            })
            let data = {}
            data.name = name
            data.email = email
            data.status = status
            data.password = password
            data.logo = logo
            data.description = description
            data.twitter = twitter
            data.facebook = facebook
            data.linkedin = linkedin
            data.url = url
            data.country_id = country
            data.city_id = city
            data.state_id = stateid
            data.address = address
            data.category_id = category

            setLoading(true)
            const addUser = await adminCampaignApi.add(adminAuthToken, data)
            if (addUser) {
                if (!addUser.data.success) {
                    setLoading(false)
                    ToastAlert({ msg: addUser.data.message, msgType: 'error' });
                } else {
                    setUpdate(!update)
                    setLoading(false)
                    ToastAlert({ msg: addUser.data.message, msgType: 'success' });
                    setModal(false)
                    resetForm()

                }

            } else {
                setLoading(false)
                ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
            }


        }).catch(errors => {

            setLoading(false)
            const formaerrror = {};
            if (errors.length) {
                errors.forEach(element => {
                    formaerrror[element.field] = element.message
                });
            } else {
                ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
            }

            setState({
                ...state,
                error: formaerrror
            })

        });

    }

    const deleteCampaignAdmin = (id) => {

        confirmAlert({
            title: 'Delete Record',
            message: 'Are you sure ?',
            buttons: [
                {
                    label: 'Yes',

                    onClick: async () => {
                        setLoading(true)
                        const deleteUser = await adminCampaignApi.deleteCampaignAdmin(adminAuthToken, id)
                        if (deleteUser) {
                            if (!deleteUser.data.success) {
                                setLoading(false)
                                ToastAlert({ msg: deleteUser.data.message, msgType: 'error' });
                            } else {
                                setUpdate(!update)
                                setLoading(false)
                                ToastAlert({ msg: deleteUser.data.message, msgType: 'success' });

                            }

                        } else {
                            setLoading(false)
                            ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
                        }

                    }
                },
                {
                    label: 'No',
                }
            ]
        });


    }

    const getUserRecord = (data) => {
        // console.log(data)
        setTempImg(data.logo)
        setState({
            ...state,
            id: data._id,
            name: data.name,
            email: data.email,
            status: data.status,
            description: data.description,
            twitter: data.twitter,
            facebook: data.facebook,
            linkedin: data.linkedin,
            url: data.url,
            country: data.country_id,
            city: data.city_id,
            stateid: data.state_id,
            address: data.address,
            category: data.category_id,
        })
        setModal(true)

    }


    const updateCampaignAdmin = () => {

        const rules = {
            name: "required",
            description: "required",
            twitter: "required",
            facebook: "required",
            linkedin: "required",
            url: "required",
            address: "required",



        }

        const message = {
            'email.required': 'Email is Requied.',
            'name.required': 'Name is Requied.',
            'email.email': 'please enter valid email.',
            'description.required': 'description is Requied.',
            'twitter.required': 'Twitter is Requied.',
            'facebook.required': 'Facebook is Requied.',
            'linkedin.required': 'Linkedin is Requied.',
            'url.required': 'Website is Requied.',
            'address.required': 'Address is Requied.',

        }
        validateAll(state, rules, message).then(async () => {
            const formaerrror = {};
            setState({
                ...state,
                error: formaerrror
            })
            let data = {}
            data.name = name
            data.status = status
            if (password && password !== "") {
                data.password = password
            }
            if (logo && logo !== "") {
                data.logo = logo
            }

            data.description = description
            data.twitter = twitter
            data.facebook = facebook
            data.linkedin = linkedin
            data.url = url
            data.country_id = country
            data.city_id = city
            data.state_id = stateid
            data.address = address
            data.category_id = category
            // data.status = status


            setLoading(true)
            const updateCampaignAdmin = await adminCampaignApi.updateCampaignAdmin(adminAuthToken, data, id)
            if (updateCampaignAdmin) {
                if (!updateCampaignAdmin.data.success) {
                    setLoading(false)
                    ToastAlert({ msg: updateCampaignAdmin.data.message, msgType: 'error' });
                } else {
                    setUpdate(!update)
                    setLoading(false)
                    ToastAlert({ msg: updateCampaignAdmin.data.message, msgType: 'success' });
                    setModal(false)
                    resetForm()

                }

            } else {
                setLoading(false)
                ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
            }


        }).catch(errors => {
            console.log(errors)
            setLoading(false)
            const formaerrror = {};
            if (errors.length) {
                errors.forEach(element => {
                    formaerrror[element.field] = element.message
                });
            } else {
                ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
            }

            setState({
                ...state,
                error: formaerrror
            })

        });

    }


    const changevalue = (e) => {
        let value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        })


    }


    return (
        <>
            <FrontLoader loading={loading} />
            <CampaignAdminForm
                modal={modal}
                setModal={setModal}
                changevalue={changevalue}
                stateData={state}
                addCampaignAdmin={addCampaignAdmin}
                updateCampaignAdmin={updateCampaignAdmin}
                changefile={changefile}
                tempImg={tempImg}
                Img={Img}
            />
            <Index
                campaignAdminList={campaignAdminList}
                setOpenModal={setOpenModal}
                deleteCampaignAdmin={deleteCampaignAdmin}
                getUserRecord={getUserRecord}

            />
        </>
    )

}
export default CampaignAdminController