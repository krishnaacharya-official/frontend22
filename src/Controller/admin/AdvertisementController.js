import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import FrontLoader from "../../Common/FrontLoader";
import orderApi from "../../Api/admin/order";
import { hasPermission } from "../../Common/Helper";
import authApi from "../../Api/admin/auth";
import Index from "../../View/admin/Advertisement/index";
import CreateAdForm from "../../View/admin/Advertisement/CreateAdForm";
import { validateAll } from "indicative/validator";
import advertisementApi from "../../Api/admin/advertisement";
import ToastAlert from "../../Common/ToastAlert"
import { confirmAlert } from "react-confirm-alert"
import AdvertiseSetting from "../../View/admin/Advertisement/AdvertiseSetting";


export default function AdvertisementController() {

    const [donationList, setDonationList] = useState([])
    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const adminData = JSON.parse(localStorage.getItem('adminData'));
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [tempImg, setTempImg] = useState('')
    const [Img, setImg] = useState('')
    const [advertisementDetails, setAdvertisementDetails] = useState({})
    const [settingModal, setSettingModal] = useState(false)

    const params = useParams();
    const navigate = useNavigate();




    const [state, setstate] = useState({
        id: '',
        name: '',
        website: '',
        logo: '',
        status: 1,
        error: [],
    })
    const {
        id, status, name, website, logo, error
    } = state;

    const getDonationList = async () => {
        const donationList = await advertisementApi.list(adminAuthToken)
        if (donationList) {
            if (donationList.data.success === true) {
                setDonationList(donationList.data.data)
            }
        }
    }


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
            await getDonationList()

            setLoading(false)

        })()
    }, [])


    const changevalue = (e) => {
        let value = e.target.value;
        setstate({
            ...state,
            [e.target.name]: value
        })
    }


    const changefile = (e) => {
        let file = e.target.files[0] ? e.target.files[0] : '';
        setTempImg(URL.createObjectURL(file))

        setstate({
            ...state,
            logo: file
        })
    }

    const resetForm = () => {
        setImg('')
        setTempImg('')
        setstate({
            ...state,
            id: '',
            name: '',
            website: '',
            logo: '',
            status: 1,
            error: [],
        });

    }

    const openModel = () => {
        resetForm()
        setModal(true);

    }

    const submitAdForm = (e) => {
        // console.log(status)
        let rules;
        if (!id) {
            rules = {
                name: 'required',
                status: 'required',
                website: 'required',
                logo: 'required'
            }
        } else {
            rules = {
                name: 'required',
                status: 'required',
                website: 'required',
            }
        }

        const message = {
            'status.required': 'Status is Required.',
            'name.required': 'Name is Required.',
            'website.required': 'Website is Required.',
            'logo.required': 'Logo is Required.',



        }
        validateAll(state, rules, message).then(async () => {
            const formaerrror = {};
            setstate({
                ...state,
                error: formaerrror
            })

            let data = {}
            data.name = name
            data.website = website
            data.status = status
            if (logo && logo !== "") {
                data.logo = logo

            }


            let createAd;
            // Api Call for update Profile
            setLoading(true)
            if (id !== '') {
                createAd = await advertisementApi.updateAdvertisement(adminAuthToken, data, id)
            } else {
                createAd = await advertisementApi.add(adminAuthToken, data)
            }


            if (createAd) {
                if (createAd.data.success === false) {
                    setLoading(false)
                    ToastAlert({ msg: createAd.data.message, msgType: 'error' });

                } else {
                    if (createAd.data.success === true) {
                        setModal(false)
                        resetForm()
                        await getDonationList()
                        setLoading(false)
                        ToastAlert({ msg: createAd.data.message, msgType: 'success' });
                    }
                }
            } else {
                setLoading(false)
                ToastAlert({ msg: 'Category not save', msgType: 'error' });
            }

        }).catch(errors => {
            setLoading(false)
            const formaerrror = {};
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

    const editAd = (data) => {
        setLoading(true)
        if ((data) && data !== null && data !== '') {
            setstate({
                ...state,
                id: data._id,
                name: data.name,
                website: data.website,
                status: data.status,
                error: [],
            });

            setImg(data.logo)
            setModal(true)

        }
        setLoading(false)


    }

    const deleteAd = (id) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to delete Advertisement.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: (async () => {
                        setLoading(true)
                        if (id !== '') {
                            const deleteAd = await advertisementApi.deleteAdvertisement(adminAuthToken, id)
                            if (deleteAd) {
                                if (deleteAd.data.success === false) {
                                    setLoading(false)
                                    ToastAlert({ msg: deleteAd.data.message, msgType: 'error' });
                                } else {
                                    if (deleteAd.data.success === true) {
                                        setLoading(false)
                                        ToastAlert({ msg: deleteAd.data.message, msgType: 'success' });
                                    }
                                }
                            } else {
                                setLoading(false)
                                ToastAlert({ msg: 'Advertsiement not delete', msgType: 'error' });
                            }
                        } else {
                            setLoading(false)
                            ToastAlert({ msg: 'Advertsiement not delete id Not found', msgType: 'error' });
                        }
                    })
                },
                {
                    label: 'No',
                }
            ]
        });
    }


    const adSetting = (data) => {
        setAdvertisementDetails(data)
        setSettingModal(true)
    }

    return (
        <>

            <FrontLoader loading={loading} />
            <Index
                donationList={donationList}
                openModel={openModel}
                editAd={editAd}
                deleteAd={deleteAd}
                adSetting={adSetting}

            />
            <CreateAdForm
                stateData={state}
                setModal={setModal}
                modal={modal}
                changevalue={changevalue}
                changefile={changefile}
                tempImg={tempImg}
                Img={Img}
                submitAdForm={submitAdForm}


            />
            <AdvertiseSetting
                advertisementDetails={advertisementDetails}
                settingModal={settingModal}
                setSettingModal={setSettingModal}
            />


        </>
    )

}