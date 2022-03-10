import React, { useState, useEffect } from "react"
import FrontLoader from "../../Common/FrontLoader"
import { validateAll } from "indicative/validator";
import ToastAlert from "../../Common/ToastAlert"
import { confirmAlert } from "react-confirm-alert"
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import categoryApi from "../../Api/admin/category";
import Index from "../../View/admin/Products/Index";
import AddProductForm from "../../View/admin/Products/AddProductForm";
import adminCampaignApi from "../../Api/admin/adminCampaign";
import productApi from "../../Api/admin/product";
import authApi from "../../Api/admin/auth";
import { hasPermission } from "../../Common/Helper";





function ProductController() {
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [categoryList, setCategoryList] = useState([])
    const [subcategoryList, setSubCategoryList] = useState([])
    const [campaignAdminList, setCampaignAdminList] = useState([])
    const [tempImg, setTempImg] = useState('')
    const [Img, setImg] = useState('')
    const [productList, setProductList] = useState([])
    const [iconList, setIconList] = useState([])
    const [update, setUpdate] = useState(false)
    const navigate = useNavigate();

    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const adminData = JSON.parse(localStorage.getItem('adminData'));

    const [state, setstate] = useState({
        id: '',
        status: 1,
        title: '',
        subtitle: '',
        category: '',
        subcategory: '',
        description: '',
        price: '',
        image: '',
        quantity: '',
        organization: '',
        error: [],
    })
    const {
        id, status, title, subtitle, category, subcategory, description, price, image, quantity, organization, error
    } = state;

    useEffect(() => {
        (async () => {
            setLoading(true)

            if (!hasPermission(adminData.roleName, 'PRODUCT')) {
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

            //Category List
            //----------------------------------
            const getcategoryList = await categoryApi.listCategory(adminAuthToken);
            if (getcategoryList.data.success === true) {
                setCategoryList(getcategoryList.data.data)
            }

            //Admin Campaign (Organization) List
            //----------------------------------
            const getcampaignAdminList = await adminCampaignApi.list(adminAuthToken)
            if (getcampaignAdminList.data.success) {
                setCampaignAdminList(getcampaignAdminList.data.data)
            }

            setLoading(false)

        })()
    }, [update])


    const changevalue = async (e) => {
        let value = e.target.value;

        if (e.target.name === "category") {

            //get subCategory List on Category Change

            const getsubCategoryList = await categoryApi.listSubCategory(adminAuthToken, value);
            if (getsubCategoryList.data.success === true) {
                setSubCategoryList(getsubCategoryList.data.data)
            }

            setstate({
                ...state,
                [e.target.name]: value
            })

        } else {
            setstate({
                ...state,
                [e.target.name]: value
            })
        }

    }

    const changefile = (e) => {
        let file = e.target.files[0] ? e.target.files[0] : '';
        setTempImg(URL.createObjectURL(file))

        setstate({
            ...state,
            image: file
        })
    }

    const handleOnDiscriptionChangeValue = (e) => {
        setstate({
            ...state,
            'description': e
        })
    }

    const resetForm = (e) => {
        setModal(false);
        setTempImg('')
        setstate({
            id: '',
            status: 1,
            title: '',
            sub_title: '',
            category_id: '',
            subcategory_id: '',
            description: '',
            price: '',
            image: '',
            quantity: '',
            error: [],
        });

    }
    const openModel = () => {
        setTempImg('')
        setImg('')
        setModal(true);
        setstate({
            id: '',
            status: 1,
            title: '',
            sub_title: '',
            category_id: '',
            subcategory_id: '',
            description: '',
            price: '',
            image: '',
            quantity: '',
            error: [],
        });

    }

    const submitProductForm = (e) => {
        let rules;
        if (id) {
            rules = {
                title: 'required',
                status: 'required',
                subtitle: 'required',
                category: 'required',
                subcategory: 'required',
                description: 'required',
                price: 'required',
                quantity: 'required',
                organization: 'required',
            }
        } else {
            rules = {
                title: 'required',
                status: 'required',
                subtitle: 'required',
                category: 'required',
                subcategory: 'required',
                description: 'required',
                price: 'required',
                image: 'required',
                quantity: 'required',
                organization: 'required',
            }
        }

        const message = {
            'status.required': 'Status is Requied',
            'title.required': 'Title is Requied',
            'subtitle.required': 'SubTitle is Requied',
            'category.required': 'Category is Required',
            'subcategory.required': 'Subcategory is Required',
            'description.required': 'Description is Required',
            'price.required': 'Price is Required',
            'image.required': 'image is Required',
            'quantity.required': 'Quantity is Required',
            'organization.required': 'Organization is Required',



        }
  
        validateAll(state, rules, message).then(async () => {
            const formaerrror = {};
            setstate({
                ...state,
                error: formaerrror
            })
        
            let data = {}
            data.title = title
            data.subtitle = subtitle
            data.status = status
            if (image) {
                data.image = image
            }

            data.organizationId = organization
            data.price = price
            data.description = description
            data.category_id = category
            data.subcategory_id = subcategory
            data.quantity = quantity



            let addProduct;
            // Api Call for update Profile
            setLoading(true)
            if (id !== '') {
                addProduct = await productApi.updateProduct(adminAuthToken, data, id)
            } else {
                addProduct = await productApi.add(adminAuthToken, data)
            }


            if (addProduct) {
                if (addProduct.data.success === false) {
                    setLoading(false)
                    ToastAlert({ msg: addProduct.data.message, msgType: 'error' });

                } else {
                    if (addProduct.data.success === true) {
                        resetForm()
                        setLoading(false)
                        setUpdate(!update)
                        ToastAlert({ msg: addProduct.data.message, msgType: 'success' });
                    }
                }
            } else {
                setLoading(false)
                ToastAlert({ msg: 'Category not save', msgType: 'error' });
            }

        }).catch(errors => {
            setLoading(false)
            console.log(errors)
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

    const deleteProduct = (id) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to delete Product.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: (async () => {
                        setLoading(true)
                        if (id !== '') {
                            const deleteProductApi = await productApi.deleteProduct(adminAuthToken, id)
                            if (deleteProductApi) {
                                if (deleteProductApi.data.success === false) {
                                    setLoading(false)
                                    ToastAlert({ msg: deleteProductApi.data.message, msgType: 'error' });
                                } else {
                                    if (deleteProductApi.data.success === true) {
                                        setLoading(false)
                                        setUpdate(!update)
                                        ToastAlert({ msg: deleteProductApi.data.message, msgType: 'success' });
                                    }
                                }
                            } else {
                                setLoading(false)
                                ToastAlert({ msg: 'Product not delete', msgType: 'error' });
                            }
                        } else {
                            setLoading(false)
                            ToastAlert({ msg: 'Product not delete id Not found', msgType: 'error' });
                        }
                    })
                },
                {
                    label: 'No',
                }
            ]
        });
    }

    const editProduct = async (productData) => {
        setLoading(true)
        if ((productData) && productData !== null && productData !== '') {
            setModal(true);
            setstate({
                id: productData._id,
                status: productData.status,
                title: productData.title,
                subtitle: productData.subtitle,
                category: productData.categoryId,
                subcategory: productData.subcategoryId,
                description: productData.description,
                price: productData.price,
                // image: productData.image,
                quantity: productData.quantity,
                organization: productData.organizationId,
            });
            setImg(productData.image)

            const getsubCategoryList = await categoryApi.listSubCategory(adminAuthToken, productData.categoryId);
            if (getsubCategoryList.data.success === true) {
                setSubCategoryList(getsubCategoryList.data.data)
            }
            setLoading(false)
        } else {
            setLoading(false)
            ToastAlert({ msg: 'Something went wrong category data not found please try again', msgType: 'error' });
        }
    }



    return (
        <>
            <FrontLoader loading={loading} />
            <Index
                openModel={openModel}
                productList={productList}
                deleteProduct={deleteProduct}
                editProduct={editProduct}
            />
            <AddProductForm
                stateData={state}
                setModal={setModal}
                modal={modal}
                changevalue={changevalue}
                handleOnDiscriptionChangeValue={handleOnDiscriptionChangeValue}
                changefile={changefile}
                categoryList={categoryList}
                subcategoryList={subcategoryList}
                tempImg={tempImg}
                submitProductForm={submitProductForm}
                campaignAdminList={campaignAdminList}
                Img={Img}
            />



        </>
    )
}
export default ProductController;