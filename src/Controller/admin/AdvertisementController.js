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
import productApi from "../../Api/frontEnd/product";


export default function AdvertisementController() {

    const [advertiseList, setAdvertiseList] = useState([])
    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const adminData = JSON.parse(localStorage.getItem('adminData'));
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [tempImg, setTempImg] = useState('')
    const [Img, setImg] = useState('')
    const [advertisementDetails, setAdvertisementDetails] = useState({})
    const [settingModal, setSettingModal] = useState(false)
    const [productList, setProductList] = useState([])
    const [publisedProductList, setPublisedProductList] = useState([])
    const [publisedProductIds, setPublisedProductIds] = useState([])




    const params = useParams();
    const navigate = useNavigate();
    const [searchState, setSearchState] = useState({
        allSearch: '',
        MySearch: '',
        home: false,
    })
    const {
        allSearch, MySearch, home
    } = searchState;


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

    const getAdVertiseList = async () => {
        const AdList = await advertisementApi.list(adminAuthToken)
        if (AdList) {
            if (AdList.data.success === true) {
                setAdvertiseList(AdList.data.data)

            }
        }
    }
    const onSearch = async (e) => {
        let value = e.target.value
        setSearchState({
            ...searchState,
            allSearch: value
        })
        await filterProduct(value)
    }

    const filterProduct = async (val) => {

        let data = {}
        data.search = val

        if (val !== "") {



            const getFilteredProductList = await productApi.productFilter(adminAuthToken, data);
            if (getFilteredProductList.data.success === true) {
                // console.log(getFilteredProductList.data.data)
                setProductList(getFilteredProductList.data.data)
            }
        } else {
            setProductList([])
        }
    }

    const publishOrRemoveAdFromProduct = async (productId, advertisementId) => {
        setLoading(true)
        let data = {}
        data.productId = productId
        data.advertisementId = advertisementId

        await advertisementApi.publishAdd(adminAuthToken, data)
        if (advertisementApi) {
            await listPublishedAdProduct(advertisementId)

        }

        setLoading(false)

    }

    const listPublishedAdProduct = async (advertisementId) => {
        let data = {}
        data.advertisementId = advertisementId

        const getListPublishedAdProduct = await advertisementApi.listPublishedAdd(adminAuthToken, data)
        if (getListPublishedAdProduct) {
            if (getListPublishedAdProduct.data.success === true) {

                if (getListPublishedAdProduct.data.data.length > 0) {
                    let tempArr = []
                    getListPublishedAdProduct.data.data.map((p, i) => {
                        tempArr.push(p.productId)
                    })
                    await getPublishedProducts(tempArr)
                    setPublisedProductIds(tempArr)
                } else {
                    setPublisedProductIds([])
                    setPublisedProductList([])

                }
            }
        }
    }

    const getPublishedProducts = async (arry) => {
        let data = {}
        const getFilteredProductList = await productApi.productFilter(adminAuthToken, data);
        if (getFilteredProductList.data.success === true) {
            if (getFilteredProductList.data.data.length > 0) {
                let temp = []
                getFilteredProductList.data.data.map((p, i) => {
                    if (arry.includes(p._id)) {
                        temp.push(p)
                    }
                })
                setPublisedProductList(temp)
            }


        }
    }

    const onChangeHome = async (e, id) => {
        setLoading(true)
        let data = {}
        data.home = e.target.checked
        setSearchState({
            ...searchState,
            home: e.target.checked
        })
        const up = await advertisementApi.updatehome(adminAuthToken, data, id)

        if (up) {

            if (up.data.success === true) {
                await getAdVertiseList()
                // setAdvertisementDetails(up.data.data)
                // console.log(up.data.data)

            }

        }
        setLoading(false)


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
            await getAdVertiseList()



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
                        // await getDonationList()
                        await getAdVertiseList()
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
                                        await getAdVertiseList()
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


    const adSetting = async (data) => {
        setAdvertisementDetails(data)
        setLoading(true)
        await listPublishedAdProduct(data._id)
        setSearchState({
            ...searchState,
            home: data.home,
            allSearch: '',
            MySearch: '',
        })
        setLoading(false)
        setProductList([])
        setSettingModal(true)
    }

    return (
        <>

            <FrontLoader loading={loading} />
            <Index
                advertiseList={advertiseList}
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
                onSearch={onSearch}
                productList={productList}
                publishOrRemoveAdFromProduct={publishOrRemoveAdFromProduct}
                publisedProductIds={publisedProductIds}
                publisedProductList={publisedProductList}
                allSearch={allSearch}
                onChangeHome={onChangeHome}
                home={home}

            />


        </>
    )

}