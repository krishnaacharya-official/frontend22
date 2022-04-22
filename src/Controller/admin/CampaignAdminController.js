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
import categoryApi from "../../Api/admin/category";
import authApi from "../../Api/admin/auth";
import { hasPermission } from "../../Common/Helper";


function CampaignAdminController() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [update, setUpdate] = useState(false)
    const [tempImg, setTempImg] = useState('')
    const [Img, setImg] = useState('')
    const [categoryList, setCategoryList] = useState([])
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
        country: "",
        city: "",
        stateid: "",
        address: "",
        category: "",
        error: [],
        slug: "",
        headline: "",
        promoVideo: "",
        status: 1
    })

    const {
        name, error, email, promoVideo, slug, password, id, status, headline, category, address, stateid, city, country, url, linkedin, facebook, twitter, description, logo
    } = state;

    const [countryList, setCountryList] = useState([])
    const [stateList, setStateList] = useState([])
    const [cityList, setCityList] = useState([])


    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const adminData = JSON.parse(localStorage.getItem('adminData'));

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
            country: "",
            city: "",
            stateid: "",
            address: "",
            category: "",
            error: [],
            slug: "",
            headline: "",
            promoVideo: "",
            status: 1
        })
    }
    const setOpenModal = () => {
        resetForm()
        setModal(true)
    }

    useEffect(() => {
        (async () => {

            if (!hasPermission(adminData.roleName, 'CAMPAIGN_ADMIN')) {
                navigate('/admin/dashboard')
            }

            const verifyUser = await authApi.verifyToken(adminAuthToken)
            if (!verifyUser.data.success) {
                localStorage.clear()
                navigate('/admin/login')
            }


            setLoading(true)
            const getCampaignAdminList = await adminCampaignApi.list(adminAuthToken)
            if (getCampaignAdminList.data.success) {
                setCampaignAdminList(getCampaignAdminList.data.data)
            }
            const getCategoryList = await categoryApi.listCategory(adminAuthToken);
            if (getCategoryList.data.success === true) {
                setCategoryList(getCategoryList.data.data)
            }

            const getCountryList = await adminCampaignApi.countryList(adminAuthToken);
            if (getCountryList.data.success === true) {
                setCountryList(getCountryList.data.data)
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
            country: "required",
            city: "required",
            stateid: "required",
            category: "required",
            slug: 'required',
            headline: 'required',
            promoVideo: 'required'





        }

        const message = {
            'email.required': 'Email is Required.',
            'name.required': 'Name is Required.',
            'email.email': 'please enter valid email.',
            'password.min': 'Password must be at least 6 characters',
            'password.required': 'Password is Required.',

            'logo.required': 'logo is Required.',
            'description.required': 'description is Required.',
            'twitter.required': 'Twitter is Required.',
            'facebook.required': 'Facebook is Required.',
            'linkedin.required': 'Linkedin is Required.',
            'url.required': 'Website is Required.',
            'address.required': 'Address is Required.',

            'category.required': 'Category is Required.',
            'country.required': 'Country is Required.',
            'city.required': 'City is Required.',
            'stateid.required': 'State is Required.',
            'slug.required': 'Slug is Required',
            'headline.required': 'Headline is Required',
            'promoVideo.required': 'Promo Video is Required',






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
            data.slug = slug
            data.headline = headline
            data.promoVideo = promoVideo



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

    const getUserRecord = async (data) => {
        if ((data) && data !== null && data !== '') {
            // }
            // console.log(data)
            setLoading(true)
            if (data.country_id && data.country_id !== null && data.country_id > 0) {
                const getCountryStateList = await adminCampaignApi.stateListByCountry(adminAuthToken, data.country_id);
                if (getCountryStateList.data.success === true) {
                    setStateList(getCountryStateList.data.data)
                }
            }
            if (data.state_id && data.state_id !== null && data.state_id > 0) {
                const getStateCityList = await adminCampaignApi.cityListByState(adminAuthToken, data.state_id);
                if (getStateCityList.data.success === true) {
                    setCityList(getStateCityList.data.data)
                }
            }


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
                slug: data.slug,
                headline: data.headline,
                promoVideo: data.promoVideo,
                error: [],
            })
            setLoading(false)
            setModal(true)
        }

    }


    const updateCampaignAdmin = () => {

        const rules = {
            name: "required",
            // description: "required",
            // twitter: "required",
            // facebook: "required",
            // linkedin: "required",
            // url: "required",
            // address: "required",

            // country: "required",
            // city: "required",
            // stateid: "required",
            category: "required",
            // headline: 'required',
            // promoVideo: 'required'





        }

        const message = {
            'email.required': 'Email is Required.',
            'name.required': 'Name is Required.',
            'email.email': 'please enter valid email.',
            'description.required': 'description is Required.',
            'twitter.required': 'Twitter is Required.',
            'facebook.required': 'Facebook is Required.',
            'linkedin.required': 'Linkedin is Required.',
            'url.required': 'Website is Required.',
            'address.required': 'Address is Required.',


            'category.required': 'Category is Required.',
            'country.required': 'Country is Required.',
            'city.required': 'City is Required.',
            'stateid.required': 'State is Required.',
            'headline.required': 'Headline is Required',
            'promoVideo.required': 'Promo Video is Required',


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
            data.headline = headline
            data.promoVideo = promoVideo




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


    const changevalue = async (e) => {
        let value = e.target.value;

        if (e.target.name === "country") {
            setLoading(true)
            const getCountryStateList = await adminCampaignApi.stateListByCountry(adminAuthToken, value);
            if (getCountryStateList.data.success === true) {
                setStateList(getCountryStateList.data.data)
            }

            setState({
                ...state,
                [e.target.name]: value
            })
            setLoading(false)

        } else if (e.target.name === "stateid") {
            setLoading(true)
            const getStateCityList = await adminCampaignApi.cityListByState(adminAuthToken, value);
            if (getStateCityList.data.success === true) {
                setCityList(getStateCityList.data.data)
            }

            setState({
                ...state,
                [e.target.name]: value
            })
            setLoading(false)
        } else if (e.target.name === "name") {
            if (id === "") {
                let organizationNameVar = value.toLowerCase();
                organizationNameVar = organizationNameVar.replace(/\s+/g, '-');
                setState({
                    ...state,
                    slug: organizationNameVar,
                    [e.target.name]: value
                })
            } else {
                setState({
                    ...state,
                    [e.target.name]: value
                })
            }

        } else if (e.target.name === "slug") {
            if (id === "") {
                let organizationNameVar = value.toLowerCase();
                organizationNameVar = organizationNameVar.replace(/\s+/g, '-');
                setState({
                    ...state,
                    slug: organizationNameVar,
                })
            }

        } else {
            setState({
                ...state,
                [e.target.name]: value
            })
        }



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
                categoryList={categoryList}
                countryList={countryList}
                stateList={stateList}
                cityList={cityList}

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