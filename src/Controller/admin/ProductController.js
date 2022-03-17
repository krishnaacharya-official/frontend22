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
import projectApi from "../../Api/admin/project"





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
    const [projectList, setProjectList] = useState([])
    const [update, setUpdate] = useState(false)
    const navigate = useNavigate();

    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const adminData = JSON.parse(localStorage.getItem('adminData'));
    const [seletedProjectList, setSeletedProjectList] = useState([])
    // const [productImages, setproductImages] = useState([])


    const [state, setstate] = useState({
        id: '',
        status: 1,
        title: '',
        subtitle: '',
        headline: '',
        brand: '',
        category: '',
        subcategory: '',
        description: '',
        price: '',
        image: '',
        quantity: '',
        organization: '',
        slug: '',
        error: [],
        moreImg: [],
        galleryUrl: '',
        needheadline: '',
        galleryImg: [],



    })
    const {
        id, status, title, subtitle, category, subcategory, description, price, image, quantity, organization, slug, error, moreImg, galleryUrl, headline, brand, needheadline, galleryImg
    } = state;

    const [tags, setTags] = useState([]);

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

            //Project List
            //--------------------------------------
            const getProjectList = await projectApi.list(adminAuthToken)
            if (getProjectList.data.success) {
                setProjectList(getProjectList.data.data)
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

        } else if (e.target.name === "headline") {
            if (id === "") {
                let productNameVar = value.toLowerCase();
                productNameVar = productNameVar.replace(/\s+/g, '-');
                setstate({
                    ...state,
                    slug: productNameVar,
                    [e.target.name]: value
                })
            } else {
                setstate({
                    ...state,
                    [e.target.name]: value
                })
            }
        } else if (e.target.name === "slug") {
            if (id === "") {
                let productNameVar = value.toLowerCase();
                productNameVar = productNameVar.replace(/\s+/g, '-');
                setstate({
                    ...state,
                    slug: productNameVar,
                })
            }

        } else {
            setstate({
                ...state,
                [e.target.name]: value
            })
        }

    }

    const changefile = (e) => {
        if (e.target.id === 'mainImg') {
            let file = e.target.files[0] ? e.target.files[0] : '';
            setTempImg(URL.createObjectURL(file))

            setstate({
                ...state,
                image: file
            })
        } else if (e.target.id === 'galleryImg') {

            setstate({
                ...state,
                galleryImg: e.target.files
            })

        } else {
            setstate({
                ...state,
                moreImg: e.target.files
            })
        }

    }

    const handleOnDiscriptionChangeValue = (e) => {
        setstate({
            ...state,
            'description': e
        })
    }

    const resetForm = (e) => {
        setModal(false);
        setTags([])
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
            slug: '',
            error: [],
        });

    }
    const openModel = () => {
        setTempImg('')
        setSeletedProjectList([])
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
            slug: '',
            error: [],
        });

    }

    const submitProductForm = (e) => {
        // console.log(tags)
        const formaerrror = {}
        if (tags.length === 0) {
            formaerrror['tags'] = "Please Enter Tags"

        }
        let rules;
        if (id) {
            rules = {
                brand: 'required',
                needheadline: 'required',
                galleryUrl: 'required',
                status: 'required',
                headline: 'required',
                category: 'required',
                subcategory: 'required',
                description: 'required',
                price: 'required',
                quantity: 'required',
                organization: 'required',
                // slug: 'required'
            }
        } else {
            if (adminData.roleName === 'CAMPAIGN_ADMIN') {
                rules = {
                    brand: 'required',
                    needheadline: 'required',
                    galleryUrl: 'required',
                    status: 'required',
                    headline: 'required',
                    category: 'required',
                    subcategory: 'required',
                    description: 'required',
                    price: 'required',
                    image: 'required',
                    quantity: 'required',
                    slug: 'required'
                }


            } else {
                rules = {
                    brand: 'required',
                    needheadline: 'required',
                    galleryUrl: 'required',
                    status: 'required',
                    headline: 'required',
                    category: 'required',
                    subcategory: 'required',
                    description: 'required',
                    price: 'required',
                    image: 'required',
                    quantity: 'required',
                    organization: 'required',
                    slug: 'required'

                }
            }

        }

        const message = {
            'status.required': 'Status is Required',
            'needheadline.required': 'Need Headline is Required',
            'galleryUrl.required': 'gallery Url is Required',

            'brand.required': 'Brand is Required',
            'headline.required': 'Headline is Required',
            'category.required': 'Category is Required',
            'subcategory.required': 'Subcategory is Required',
            'description.required': 'Description is Required',
            'price.required': 'Price is Required',
            'image.required': 'image is Required',
            'quantity.required': 'Quantity is Required',
            'organization.required': 'Organization is Required',
            'slug.required': 'Slug is Required',




        }

        validateAll(state, rules, message).then(async () => {
            // const formaerrror = {};
            setstate({
                ...state,
                error: formaerrror
            })

            let data = {}

            // data.title = title
            // data.subtitle = subtitle
            data.status = status

            data.brand = brand
            data.needheadline = needheadline
            data.galleryUrl = galleryUrl
            data.headline = headline





            if (image) {
                data.image = image
            }
            if (adminData.roleName === 'CAMPAIGN_ADMIN') {
                data.organizationId = adminData.id
            } else {
                data.organizationId = organization
            }
            if (!id && id === '') {
                data.productSlug = slug

            }
            let tagsArray = []
            if (tags.length > 0) {
                tags.map((ptage, i) => {
                    tagsArray.push(ptage.id)
                })
            }

            if (moreImg?.length > 0) {
                data.moreImg = moreImg
            }
            if (galleryImg?.length > 0) {
                data.galleryImg = galleryImg
            }
            if(seletedProjectList?.length > 0){
                data.prjects = seletedProjectList

            }




            data.price = price
            data.description = description
            data.category_id = category
            data.subcategory_id = subcategory
            data.quantity = quantity
            data.tags = tagsArray

            if (Object.keys(formaerrror).length === 0) {

                // }

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
                headline: productData.headline,
                brand: productData.brand,
                category: productData.categoryId,
                subcategory: productData.subcategoryId,
                description: productData.description,
                price: productData.price,
                quantity: productData.quantity,
                organization: productData.organizationId,
                slug: productData.slug,
                needheadline: productData.needheadline,
                galleryUrl: productData.galleryUrl,

            });

            let tempProjectArray = [];
            if(productData.projectDetails.length > 0 ){
                productData.projectDetails.map((project,i)=>{
                    tempProjectArray.push(project.projectId)  
                })
                setSeletedProjectList(tempProjectArray)
            }

            let mytags = []
            let addedTags = [];
            if (productData.tags !== null && productData.tags !== '' && productData.tags !== undefined) {
                addedTags = productData.tags.split(',');
            }
            addedTags.map((aadedTag, i) => {
                let tagsObj = {}
                tagsObj.id = aadedTag
                tagsObj.text = aadedTag
                mytags.push(tagsObj)
            })
            setTags(mytags)
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
    
    const handleDelete = (i) => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = (tag) => {
        setTags([...tags, tag]);
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = [...tags].slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        setTags(newTags);
    };

    const handleTagClick = (index) => {
        console.log("The tag at index " + index + " was clicked");
    };

    const onClearAll = () => {
        setTags([]);
    };
    const onTagUpdate = (i, newTag) => {
        const updatedTags = tags.slice();
        updatedTags.splice(i, 1, newTag);
        setTags(updatedTags);
    };

    const onSelectProject = (e) => {

        if (e.target.checked) {
            setSeletedProjectList([...seletedProjectList, e.target.id])
        } else {

            let tempArry = [...seletedProjectList]
            const index = tempArry.indexOf(e.target.id);
            if (index > -1) {
                tempArry.splice(index, 1);
            }
            setSeletedProjectList(tempArry)

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
                projectList={projectList}
                onSelectProject={onSelectProject}
                seletedProjectList={seletedProjectList}



                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                handleTagClick={handleTagClick}
                onClearAll={onClearAll}
                onTagUpdate={onTagUpdate}
                tags={tags}
            />



        </>
    )
}
export default ProductController;