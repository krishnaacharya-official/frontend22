import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Outlet, useOutletContext } from 'react-router-dom';
// import {
//   LadderMenuItems,
//   PostsTable,
//   AddPost,
// } from "@components/organisms";
import LadderMenuItems from "../ladder-menu-items";
import PostsTable from "../posts-table";
import AddPost from "../add-post";
// import productApi from "../../../../../Api/frontEnd/product";
import "./style.scss";
import FrontLoader from "../../../../../Common/FrontLoader";

import ToggleSwitch from "../../atoms/toggle-switch";
import FeedTag from "../../atoms/feed-tag";
import * as Icon from '../../atoms/category-icons';
// import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import categoryApi from '../../../../../Api/admin/category'
import projectApi from '../../../../../Api/admin/project'
import productApi from '../../../../../Api/admin/product'
import { WithContext as ReactTags } from "react-tag-input";
import noimg from "../../../../../assets/images/noimg.jpg"
import helper from "../../../../../Common/Helper";
import { validateAll } from "indicative/validator";
import ToastAlert from "../../../../../Common/ToastAlert"
import { confirmAlert } from "react-confirm-alert"

const AdminPosts = (props) => {
  const validExtensions = ['jpg', 'png', 'jpeg'];
  const [viewPost, createPost] = useState(false);
  // const [productList, setProductList] = useState([])
  // const [projectList, setProjectList] = useState([])
  // const [loading, setLoading] = useState(false)
  const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
  const type = localStorage.getItem('type');
  const tempCampaignAdminAuthToken = localStorage.getItem('tempCampaignAdminAuthToken');
  const token = type ? type === 'temp' ? tempCampaignAdminAuthToken : CampaignAdminAuthToken : CampaignAdminAuthToken
  const [data, setData] = useOutletContext();
  // const [update, setUpdate] = useState(false)


  // const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
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
  // const navigate = useNavigate();

  const [seletedProjectList, setSeletedProjectList] = useState([])


  const [moreTempImages, setMoreTempImages] = useState([])
  const [moreImages, setMoreImages] = useState([])

  const [gallaryTempImages, setGallaryTempImages] = useState([])
  const [gallaryImages, setGallaryImages] = useState([])

  const [pageNo, setPageNo] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalRecord, setTotalRecord] = useState(1)


  const [sortField, setSortField] = useState("created_at");
  const [order, setOrder] = useState("asc");


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
    address: '',
    lat: '',
    lng: '',
    unlimited: false,
    tax: false,
    postTag: false,
    media: false,
    policy: false,
    galleryImg: [],

  })
  const {
    id, status, title, subtitle, category, subcategory, description, price, image, quantity, organization, slug, error, moreImg, galleryUrl, headline, brand, needheadline, galleryImg, unlimited, tax, postTag, address, lat, lng, policy, media
  } = state;

  const [tags, setTags] = useState([]);
  let url = galleryUrl;
  let videoid = url?.split("?v=")[1];
  let embedlink = videoid ? "http://www.youtube.com/embed/" + videoid : "";

  useEffect(() => {
    (async () => {

      // console.log(data)
      // console.log(data.country_id)
      setLoading(false)
      const getcategoryList = await categoryApi.listCategory(token);
      if (getcategoryList.data.success === true) {
        setCategoryList(getcategoryList.data.data)
      }

      if (data._id) await orgProjectList()
      setLoading(false)

    })()
  }, [data._id])

  const orgProjectList = async () => {
    let formData = {}
    formData.filter = false
    formData.sortField = 'created_at'
    formData.sortType = 'asc'
    formData.organizationId = data._id
    formData.type = 'product'



    const getProjectList = await projectApi.projectListByOrganization(token, formData)
    if (getProjectList.data.success) {
      setProjectList(getProjectList.data.data)
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

  const changevalue = async (e) => {
    let value = e.target.value;
    // console.log(value)
    if (e.target.name === 'unlimited' || e.target.name === 'tax' || e.target.name === 'postTag' || e.target.name === 'policy' || e.target.name === 'media') {
      value = e.target.checked


    }
    if (e.target.name === 'price' || e.target.name === 'quantity') {
      value = e.target.value.replace(/[^\d.]|\.(?=.*\.)/g, "");
    }

    if (e.target.name === "category") {

      // setstate({
      //   ...state,
      //   'subcategory': ''
      // })

      // console.log(value)

      //get subCategory List on Category Change

      const getsubCategoryList = await categoryApi.listSubCategory(token, value);
      if (getsubCategoryList.data.success === true) {
        setSubCategoryList(getsubCategoryList.data.data)
        if (getsubCategoryList.data.data.length > 0) {
          setstate({
            ...state,
            subcategory: getsubCategoryList.data.data[0]._id,
            [e.target.name]: value
          })
        } else {
          setstate({
            ...state,
            subcategory: '',
            [e.target.name]: value
          })
        }
      } else {
        setstate({
          ...state,
          subcategory: '',
          [e.target.name]: value
        })
      }





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
      if (e.target.name === 'unlimited' && value === true) {
        // console.log('first') 
        setstate({
          ...state,
          quantity: '',
          [e.target.name]: value
        })
      } else {


        setstate({
          ...state,
          [e.target.name]: value
        })
      }
    }

  }

  const changefile = (e) => {
    // console.log('kkk')
    if (e.target.id === 'mainImg') {
      let file = e.target.files[0] ? e.target.files[0] : '';

      if (file) {
        let extension = file.name.substr(file.name.lastIndexOf('.') + 1)
        if (validExtensions.includes(extension)) {
          setTempImg(URL.createObjectURL(file))
          setstate({
            ...state,
            image: file
          })

        } else {
          setstate({
            ...state,
            image: ''
          })
        }

      } else {
        setstate({
          ...state,
          image: ''
        })
        setTempImg('')
      }
      // console.log(URL.createObjectURL(file))

    } else if (e.target.id === 'galleryImg') {

      let gImgtempArry = []
      let gImgtempObj = []
      let tempGallaryFileArry = []


      if (e.target.files && e.target.files.length > 0) {
        gImgtempObj.push(e.target.files)
        for (let i = 0; i < gImgtempObj[0].length; i++) {
          let extension = gImgtempObj[0][i].name.substr(gImgtempObj[0][i].name.lastIndexOf('.') + 1)
          if (validExtensions.includes(extension)) {

            tempGallaryFileArry.push(gImgtempObj[0][i])
            gImgtempArry.push(URL.createObjectURL(gImgtempObj[0][i]))
          }
        }
        setGallaryTempImages(gImgtempArry)
        setstate({
          ...state,
          galleryImg: tempGallaryFileArry
        })

      }



    } else {

      let mImgtempArry = []
      let mImgtempObj = []
      let tempMainFileArry = []


      if (e.target.files && e.target.files.length > 0) {
        mImgtempObj.push(e.target.files)
        for (let i = 0; i < mImgtempObj[0].length; i++) {
          let extension = mImgtempObj[0][i].name.substr(mImgtempObj[0][i].name.lastIndexOf('.') + 1)
          if (validExtensions.includes(extension)) {
            tempMainFileArry.push(mImgtempObj[0][i])
            mImgtempArry.push(URL.createObjectURL(mImgtempObj[0][i]))

          }
        }
        setMoreTempImages(mImgtempArry)
        setstate({
          ...state,
          moreImg: tempMainFileArry
        })

      }

    }

  }
  const resetForm = async (e) => {
    // setModal(false);
    setTags([])
    setTempImg('')
    setImg('')
    setMoreTempImages([])
    setMoreImages([])
    setGallaryTempImages([])
    setGallaryImages([])
    setSeletedProjectList([])
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
      address: '',
      lat: '',
      lng: '',
      unlimited: false,
      tax: false,
      postTag: false,
      policy: false,
      media: false,
      error: [],
    });

  }

  const submitProductForm = (s) => {
    window.scrollTo(0, 0);
    // console.log(tags)
    const formaerrror = {}
    if (tags.length === 0) {
      formaerrror['tags'] = "Please Enter Tags"
    }

    if (!unlimited && !quantity) {
      formaerrror['quantity'] = "Quantity is required"

    }

    if (!policy) {
      formaerrror['policy'] = "Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy."

    }
    // console.log(formaerrror)

    if (!id) {

      // if (moreImg?.length > 0 && moreImg.length <= 1) {
      //   formaerrror['moreImg'] = "Please select more then one image"
      // }
      // if (!galleryImg?.length) {
      //   formaerrror['galleryImg'] = "Please select more then one image"
      // }
      // if (galleryImg?.length <= 1) {
      //   formaerrror['galleryImg'] = "Please select more then one image"
      // }

    }

    let rules;
    if (id) {
      rules = {
        brand: 'required',
        needheadline: 'required',
        // galleryUrl: 'required',
        status: 'required',
        headline: 'required',
        category: 'required',
        subcategory: 'required',
        description: 'required',
        price: 'required',
        // quantity: 'required',
        organization: 'required',
        // policy: 'boolean',

        // slug: 'required'
      }
    } else {
      rules = {
        brand: 'required',
        needheadline: 'required',
        // galleryUrl: 'required',
        status: 'required',
        headline: 'required',
        category: 'required',
        subcategory: 'required',
        description: 'required',
        price: 'required',
        image: 'required',
        // quantity: 'required',
        slug: 'required',
        // policy: 'boolean',

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


      let formData = {}

      // data.title = title
      // data.subtitle = subtitle
      formData.status = s

      formData.brand = brand
      formData.needheadline = needheadline
      if (galleryUrl && galleryUrl !== '') {
        formData.galleryUrl = galleryUrl

      }
      formData.headline = headline
      formData.unlimited = unlimited
      formData.media = media

      formData.tax = tax
      formData.postTag = postTag


      if (image) {
        formData.image = image
      }

      formData.organizationId = data._id

      if (!id && id === '') {
        formData.productSlug = slug

      }
      let tagsArray = []
      if (tags.length > 0) {
        tags.map((ptage, i) => {
          tagsArray.push(ptage.id)
        })
      }

      if (moreImg?.length > 0) {
        formData.moreImg = moreImg
      }
      if (galleryImg?.length > 0) {
        formData.galleryImg = galleryImg
      }
      if (seletedProjectList?.length > 0) {
        formData.prjects = seletedProjectList

      }

      if (address) {
        formData.address = address
      }

      if (lat) {
        formData.lat = lat

      }

      if (lng) {
        formData.lng = lng

      }


      formData.organizationCountryId = data.country_id
      formData.price = price
      formData.description = description
      formData.category_id = category
      formData.subcategory_id = subcategory

      if (quantity) {
        formData.quantity = quantity
      }

      formData.tags = tagsArray

      // console.log(formData)

      if (Object.keys(formaerrror).length === 0) {

        // }

        let addProduct;
        // Api Call for update Profile
        setLoading(false)
        if (id !== '') {
          addProduct = await productApi.updateProduct(token, formData, id)
        } else {
          addProduct = await productApi.add(token, formData)
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
              createPost(false)
              ToastAlert({ msg: addProduct.data.message, msgType: 'success' });
            }
          }
        } else {
          setLoading(false)
          ToastAlert({ msg: 'Product not save', msgType: 'error' });
        }
      }

    }).catch(errors => {
      setLoading(false)
      // console.log(errors)
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
            setLoading(false)
            if (id !== '') {
              const deleteProductApi = await productApi.deleteProduct(token, id)
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

    setLoading(false)
    let formData = {}
    formData.productId = productData._id

    const getProductDetails = await productApi.productDetailsById(token, formData);
    if (getProductDetails.data.success === true) {
      setLoading(false)

      productData = getProductDetails.data.data[0]

      // console.log(productData)


      if ((productData) && productData !== null && productData !== '') {
        // console.log(productData)
        // 
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
          unlimited: productData.unlimited,
          tax: productData.tax,
          postTag: productData.postTag,
          address: productData.address ? productData.address : "",
          lat: productData.lat ? productData.lat : "",
          lng: productData.lng ? productData.lng : "",
          media: productData.media ? productData.media : false,

          policy: true,




        });

        let tempProjectArray = [];
        if (productData.projectDetails.length > 0) {
          productData.projectDetails.map((project, i) => {
            tempProjectArray.push(project.projectId)
          })
          setSeletedProjectList(tempProjectArray)
        } else {
          setSeletedProjectList([])

        }

        let tempMImgArray = []

        if (productData.imageDetails.length > 0) {
          productData.imageDetails.map((img, i) => {
            if (img.type === 'moreImage') {
              let tempObj = {}
              tempObj.img = img.image
              tempObj.id = img._id
              tempMImgArray.push(tempObj)
            }

          })
          setMoreImages(tempMImgArray)
        } else {
          setMoreImages([])

        }


        let tempGImgArray = []

        if (productData.imageDetails.length > 0) {
          productData.imageDetails.map((img, i) => {
            if (img.type === 'galleryImage') {
              let tempObj = {}
              tempObj.img = img.image
              tempObj.id = img._id
              tempGImgArray.push(tempObj)
            }

          })
          setGallaryImages(tempGImgArray)
        } else {
          setGallaryImages([])

        }

        let mytags = []
        let addedTags = [];
        if (productData.tags.length > 0) {
          addedTags = productData.tags

          addedTags.map((aadedTag, i) => {
            let tagsObj = {}
            tagsObj.id = aadedTag
            tagsObj.text = aadedTag
            mytags.push(tagsObj)
          })
          setTags(mytags)
        }
        setImg(productData.image)

        const getsubCategoryList = await categoryApi.listSubCategory(token, productData.categoryId);
        if (getsubCategoryList.data.success === true) {
          setSubCategoryList(getsubCategoryList.data.data)
        }
        createPost(true);
        setLoading(false)

      } else {
        setLoading(false)
        ToastAlert({ msg: 'Something went wrong category data not found please try again', msgType: 'error' });
      }
    }
  }

  const createNewPost = () => {
    resetForm()
    createPost(true)
  }

  const publishProduct = async (id) => {
    setLoading(false)
    const publish = await productApi.publishProduct(token, id)
    if (publish) {
      if (publish.data.success === false) {
        setLoading(false)
        ToastAlert({ msg: publish.data.message, msgType: 'error' });
      } else {
        if (publish.data.success === true) {
          setLoading(false)
          setUpdate(!update)
          ToastAlert({ msg: publish.data.message, msgType: 'success' });
        }
      }
    } else {
      setLoading(false)
      ToastAlert({ msg: 'Product not Published', msgType: 'error' });
    }

  }



  // console.log(data)
  const getProductList = async (page, field, type) => {
    setLoading(false)
    let formData = {}
    formData.organizationId = data._id
    formData.pageNo = page
    formData.sortField = field
    formData.sortType = type
    formData.filter = true
    formData.type = 'product'

    // console.log(data._id)


    const getOrganizationProducts = await productApi.listByOrganization(token, formData);
    if (getOrganizationProducts.data.success === true) {
      setProductList(getOrganizationProducts.data.data)
      setTotalPages(getOrganizationProducts.data.totalPages)
      setTotalRecord(getOrganizationProducts.data.totalRecord)
    }
    setLoading(false)


  }

  useEffect(() => {
    (async () => {

      await getProductList(pageNo, sortField, order)
      // console.log(data)

    })()
  }, [data._id, update])

  const handleClick = async (e, v) => {

    setPageNo(Number(v))
    await getProductList(Number(v), sortField, order)
  }


  const handleSortingChange = async (accessor) => {

    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    await getProductList(pageNo, accessor, sortOrder)


  };

  const deleteProductImage = async (id, type) => {
    setLoading(true)
    const deleteImg = await productApi.deleteProductImages(token, id)

    if (deleteImg.data.success) {
      if (type === 'More') {
        let imgs = [...moreImages]
        imgs = imgs.filter((item) => item.id !== id)
        setMoreImages(imgs)
      } else {
        let gImg = [...gallaryImages]
        gImg = gImg.filter((item) => item.id !== id)
        setGallaryImages(gImg)

      }

    }
    setLoading(false)
  }

  return (
    <>
      <FrontLoader loading={loading} />
      {!viewPost ? (
        <div>
          <header className="py-sm-2 mb-3 w-100 d-sm-flex align-items-center">
            <h1 className="d-none d-sm-flex page__title mb-0 fs-3 fw-bolder me-2">
              Posts
            </h1>
            <span className="d-none d-sm-flex text-light fs-5 ml-2">({totalRecord})</span>

            <div className="d-flex align-items-center ms-sm-auto">
              <Button variant="info" size="lg" className="me-2 fw-bold fs-6" onClick={() => createNewPost()}>Create New</Button>
              <LadderMenuItems />
            </div>
          </header>

          <PostsTable
            productList={productList}
            editProduct={editProduct}
            deleteProduct={deleteProduct}
            publishProduct={publishProduct}
            handleClick={handleClick}
            totalPages={totalPages}
            totalRecord={totalRecord}
            pageNo={pageNo}
            handleSortingChange={handleSortingChange}
            order={order}
            sortField={sortField}
            organizationDetails={data}

          />
        </div>
      ) :
        <AddPost
          createPost={createPost}
          organizationDetails={data}
          stateData={state}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          onClearAll={onClearAll}
          onTagUpdate={onTagUpdate}
          onSelectProject={onSelectProject}
          changevalue={changevalue}
          changefile={changefile}
          resetForm={resetForm}
          submitProductForm={submitProductForm}
          tags={tags}
          categoryList={categoryList}
          subcategoryList={subcategoryList}
          Img={Img}
          tempImg={tempImg}
          moreTempImages={moreTempImages}
          moreImages={moreImages}
          projectList={projectList}
          seletedProjectList={seletedProjectList}
          gallaryTempImages={gallaryTempImages}
          gallaryImages={gallaryImages}
          setstate={setstate}
          data={data}
          deleteProductImage={deleteProductImage}

        />}
    </>
  );
};

export default AdminPosts;
