import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useEffect, useState, useContext } from "react";
import "./style.scss";
import {
  Button,
  Accordion,
  AccordionContext,
  useAccordionButton,
  Card,
  Col,
  Row,
  Dropdown,
} from "react-bootstrap";

// import { ToggleSwitch, FeedTag } from "@components/atoms";
import ToggleSwitch from "../../atoms/toggle-switch";
import FeedTag from "../../atoms/feed-tag";
import * as Icon from '../../atoms/category-icons';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import categoryApi from '../../../../../Api/admin/category'
import projectApi from '../../../../../Api/admin/project'
import productApi from '../../../../../Api/admin/product'
import { WithContext as ReactTags } from "react-tag-input";
import noimg from "../../../../../assets/images/noimg.jpg"
import helper from "../../../../../Common/Helper";
import { validateAll } from "indicative/validator";
import ToastAlert from "../../../../../Common/ToastAlert"
import { confirmAlert } from "react-confirm-alert"



function AccordionToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;


  return (
    <div className="accordion__btn" onClick={decoratedOnClick}>
      <div className="d-flex aling-items-center">
        {children}
        <FontAwesomeIcon
          icon={solid("angle-right")}
          className={`accordion__icon ms-2 fs-4 ${isCurrentEventKey ? "rotate-90" : ""
            }`}
        />
      </div>
    </div>
  );
}

const AddPost = (props) => {
  let organizationDetails = props.organizationDetails
  let stateData = props.stateData

  const {
    id, status, title, subtitle, category, subcategory, description, price, image, quantity, organization, slug, error, moreImg, galleryUrl, headline, brand, needheadline, galleryImg, unlimited, tax, postTag
  } = props.stateData;

  let submitProductForm = props.submitProductForm
  let changevalue = props.changevalue
  let handleDelete = props.handleDelete
  let handleAddition = props.handleAddition
  let handleDrag = props.handleDrag
  let handleTagClick = props.handleTagClick
  let onClearAll = props.onClearAll
  let onTagUpdate = props.onTagUpdate
  let tags = props.tags
  let categoryList = props.categoryList
  let subcategoryList = props.subcategoryList
  let Img = props.Img
  let tempImg = props.tempImg
  let changefile = props.changefile
  let moreTempImages = props.moreTempImages
  let moreImages = props.moreImages
  let projectList = props.projectList
  let onSelectProject = props.onSelectProject
  let seletedProjectList = props.seletedProjectList
  let gallaryTempImages = props.gallaryTempImages
  let gallaryImages = props.gallaryImages

  let url = galleryUrl;
  let videoid = url?.split("?v=")[1];
  let embedlink = videoid ? "http://www.youtube.com/embed/" + videoid : "";

















  // const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
  // const [loading, setLoading] = useState(false)
  // const [categoryList, setCategoryList] = useState([])
  // const [subcategoryList, setSubCategoryList] = useState([])
  // const [campaignAdminList, setCampaignAdminList] = useState([])
  // const [tempImg, setTempImg] = useState('')
  // const [Img, setImg] = useState('')
  // const [productList, setProductList] = useState([])
  // const [iconList, setIconList] = useState([])
  // const [projectList, setProjectList] = useState([])
  // const [update, setUpdate] = useState(false)
  // const navigate = useNavigate();

  // const [seletedProjectList, setSeletedProjectList] = useState([])


  // const [moreTempImages, setMoreTempImages] = useState([])
  // const [moreImages, setMoreImages] = useState([])

  // const [gallaryTempImages, setGallaryTempImages] = useState([])
  // const [gallaryImages, setGallaryImages] = useState([])


  // const [state, setstate] = useState({
  //   id: '',
  //   status: 1,
  //   title: '',
  //   subtitle: '',
  //   headline: '',
  //   brand: '',
  //   category: '',
  //   subcategory: '',
  //   description: '',
  //   price: '',
  //   image: '',
  //   quantity: '',
  //   organization: '',
  //   slug: '',
  //   error: [],
  //   moreImg: [],
  //   galleryUrl: '',
  //   needheadline: '',
  //   unlimited: false,
  //   tax: false,
  //   postTag: false,
  //   galleryImg: [],

  // })
  // const {
  //   id, status, title, subtitle, category, subcategory, description, price, image, quantity, organization, slug, error, moreImg, galleryUrl, headline, brand, needheadline, galleryImg, unlimited, tax, postTag
  // } = state;

  // const [tags, setTags] = useState([]);
  // let url = galleryUrl;
  // let videoid = url?.split("?v=")[1];
  // let embedlink = videoid ? "http://www.youtube.com/embed/" + videoid : "";

  // useEffect(() => {
  //   (async () => {
  //     setLoading(true)
  //     const getcategoryList = await categoryApi.listCategory(CampaignAdminAuthToken);
  //     if (getcategoryList.data.success === true) {
  //       setCategoryList(getcategoryList.data.data)
  //     }

  //     const getProjectList = await projectApi.list(CampaignAdminAuthToken)
  //     if (getProjectList.data.success) {
  //       setProjectList(getProjectList.data.data)
  //     }
  //     setLoading(false)

  //   })()
  // }, [])

  // const handleDelete = (i) => {
  //   setTags(tags.filter((tag, index) => index !== i));
  // };

  // const handleAddition = (tag) => {
  //   setTags([...tags, tag]);
  // };

  // const handleDrag = (tag, currPos, newPos) => {
  //   const newTags = [...tags].slice();

  //   newTags.splice(currPos, 1);
  //   newTags.splice(newPos, 0, tag);

  //   setTags(newTags);
  // };

  // const handleTagClick = (index) => {
  //   console.log("The tag at index " + index + " was clicked");
  // };

  // const onClearAll = () => {
  //   setTags([]);
  // };

  // const onTagUpdate = (i, newTag) => {
  //   const updatedTags = tags.slice();
  //   updatedTags.splice(i, 1, newTag);
  //   setTags(updatedTags);
  // };

  // const onSelectProject = (e) => {

  //   if (e.target.checked) {
  //     setSeletedProjectList([...seletedProjectList, e.target.id])
  //   } else {

  //     let tempArry = [...seletedProjectList]
  //     const index = tempArry.indexOf(e.target.id);
  //     if (index > -1) {
  //       tempArry.splice(index, 1);
  //     }
  //     setSeletedProjectList(tempArry)

  //   }


  // }

  // const changevalue = async (e) => {
  //   let value = e.target.value;
  //   // console.log(value)
  //   if (e.target.name === 'unlimited' || e.target.name === 'tax' || e.target.name === 'postTag') {
  //     value = e.target.checked
  //     // console.log(value)
  //   }
  //   if (e.target.name === 'price' || e.target.name === 'quantity') {
  //     value = e.target.value.replace(/[^\d.]|\.(?=.*\.)/g, "");
  //   }

  //   if (e.target.name === "category") {

  //     //get subCategory List on Category Change

  //     const getsubCategoryList = await categoryApi.listSubCategory(CampaignAdminAuthToken, value);
  //     if (getsubCategoryList.data.success === true) {
  //       setSubCategoryList(getsubCategoryList.data.data)
  //     }

  //     setstate({
  //       ...state,
  //       [e.target.name]: value
  //     })

  //   } else if (e.target.name === "headline") {
  //     if (id === "") {
  //       let productNameVar = value.toLowerCase();
  //       productNameVar = productNameVar.replace(/\s+/g, '-');
  //       setstate({
  //         ...state,
  //         slug: productNameVar,
  //         [e.target.name]: value
  //       })
  //     } else {
  //       setstate({
  //         ...state,
  //         [e.target.name]: value
  //       })
  //     }
  //   } else if (e.target.name === "slug") {
  //     if (id === "") {
  //       let productNameVar = value.toLowerCase();
  //       productNameVar = productNameVar.replace(/\s+/g, '-');
  //       setstate({
  //         ...state,
  //         slug: productNameVar,
  //       })
  //     }

  //   } else {
  //     setstate({
  //       ...state,
  //       [e.target.name]: value
  //     })
  //   }

  // }

  // const changefile = (e) => {
  //   // console.log('kkk')
  //   if (e.target.id === 'mainImg') {
  //     let file = e.target.files[0] ? e.target.files[0] : '';
  //     setTempImg(URL.createObjectURL(file))
  //     // console.log(URL.createObjectURL(file))
  //     setstate({
  //       ...state,
  //       image: file
  //     })
  //   } else if (e.target.id === 'galleryImg') {

  //     let gImgtempArry = []
  //     let gImgtempObj = []

  //     if (e.target.files && e.target.files.length > 0) {
  //       gImgtempObj.push(e.target.files)
  //       for (let i = 0; i < gImgtempObj[0].length; i++) {
  //         gImgtempArry.push(URL.createObjectURL(gImgtempObj[0][i]))
  //       }
  //       setGallaryTempImages(gImgtempArry)

  //     }

  //     setstate({
  //       ...state,
  //       galleryImg: e.target.files
  //     })

  //   } else {

  //     let mImgtempArry = []
  //     let mImgtempObj = []

  //     if (e.target.files && e.target.files.length > 0) {
  //       mImgtempObj.push(e.target.files)
  //       for (let i = 0; i < mImgtempObj[0].length; i++) {
  //         mImgtempArry.push(URL.createObjectURL(mImgtempObj[0][i]))
  //       }
  //       setMoreTempImages(mImgtempArry)

  //     }
  //     setstate({
  //       ...state,
  //       moreImg: e.target.files
  //     })
  //   }

  // }
  // const resetForm = (e) => {
  //   // setModal(false);
  //   setTags([])
  //   setTempImg('')

  //   setMoreTempImages([])
  //   setMoreImages([])
  //   setGallaryTempImages([])
  //   setGallaryImages([])

  //   setstate({
  //     id: '',
  //     status: 1,
  //     title: '',
  //     sub_title: '',
  //     category_id: '',
  //     subcategory_id: '',
  //     description: '',
  //     price: '',
  //     image: '',
  //     quantity: '',
  //     slug: '',
  //     unlimited: false,
  //     tax: false,
  //     postTag: false,
  //     error: [],
  //   });

  // }

  // const submitProductForm = (s) => {
  //   // console.log(tags)
  //   const formaerrror = {}
  //   if (tags.length === 0) {
  //     formaerrror['tags'] = "Please Enter Tags"
  //   }
  //   if (!id) {

  //     if (moreImg?.length > 0 && moreImg.length <= 1) {
  //       formaerrror['moreImg'] = "Please select more then one image"
  //     }
  //     if (!galleryImg?.length) {
  //       formaerrror['galleryImg'] = "Please select more then one image"
  //     }
  //     if (galleryImg?.length <= 1) {
  //       formaerrror['galleryImg'] = "Please select more then one image"
  //     }

  //   }

  //   let rules;
  //   if (id) {
  //     rules = {
  //       brand: 'required',
  //       needheadline: 'required',
  //       galleryUrl: 'required',
  //       status: 'required',
  //       headline: 'required',
  //       category: 'required',
  //       subcategory: 'required',
  //       description: 'required',
  //       price: 'required',
  //       quantity: 'required',
  //       organization: 'required',
  //       // slug: 'required'
  //     }
  //   } else {
  //     rules = {
  //       brand: 'required',
  //       needheadline: 'required',
  //       galleryUrl: 'required',
  //       status: 'required',
  //       headline: 'required',
  //       category: 'required',
  //       subcategory: 'required',
  //       description: 'required',
  //       price: 'required',
  //       image: 'required',
  //       quantity: 'required',
  //       slug: 'required'
  //     }

  //   }

  //   const message = {
  //     'status.required': 'Status is Required',
  //     'needheadline.required': 'Need Headline is Required',
  //     'galleryUrl.required': 'gallery Url is Required',

  //     'brand.required': 'Brand is Required',
  //     'headline.required': 'Headline is Required',
  //     'category.required': 'Category is Required',
  //     'subcategory.required': 'Subcategory is Required',
  //     'description.required': 'Description is Required',
  //     'price.required': 'Price is Required',
  //     'image.required': 'image is Required',
  //     'quantity.required': 'Quantity is Required',
  //     'organization.required': 'Organization is Required',
  //     'slug.required': 'Slug is Required',


  //   }

  //   validateAll(state, rules, message).then(async () => {
  //     // const formaerrror = {};
  //     setstate({
  //       ...state,
  //       error: formaerrror
  //     })

  //     let data = {}

  //     // data.title = title
  //     // data.subtitle = subtitle
  //     data.status = s

  //     data.brand = brand
  //     data.needheadline = needheadline
  //     data.galleryUrl = galleryUrl
  //     data.headline = headline
  //     data.unlimited = unlimited
  //     data.tax = tax
  //     data.postTag = postTag


  //     if (image) {
  //       data.image = image
  //     }
  //     // if (adminData.roleName === 'CAMPAIGN_ADMIN') {
  //     //   data.organizationId = adminData.id
  //     // } else {
  //     //   data.organizationId = organization
  //     // }
  //     data.organizationId = organizationDetails._id

  //     if (!id && id === '') {
  //       data.productSlug = slug

  //     }
  //     let tagsArray = []
  //     if (tags.length > 0) {
  //       tags.map((ptage, i) => {
  //         tagsArray.push(ptage.id)
  //       })
  //     }

  //     if (moreImg?.length > 0) {
  //       data.moreImg = moreImg
  //     }
  //     if (galleryImg?.length > 0) {
  //       data.galleryImg = galleryImg
  //     }
  //     if (seletedProjectList?.length > 0) {
  //       data.prjects = seletedProjectList

  //     }




  //     data.price = price
  //     data.description = description
  //     data.category_id = category
  //     data.subcategory_id = subcategory
  //     data.quantity = quantity
  //     data.tags = tagsArray

  //     if (Object.keys(formaerrror).length === 0) {

  //       // }

  //       let addProduct;
  //       // Api Call for update Profile
  //       setLoading(true)
  //       if (id !== '') {
  //         addProduct = await productApi.updateProduct(CampaignAdminAuthToken, data, id)
  //       } else {
  //         addProduct = await productApi.add(CampaignAdminAuthToken, data)
  //       }


  //       if (addProduct) {
  //         if (addProduct.data.success === false) {
  //           setLoading(false)
  //           ToastAlert({ msg: addProduct.data.message, msgType: 'error' });

  //         } else {
  //           if (addProduct.data.success === true) {
  //             resetForm()
  //             setLoading(false)
  //             props.setUpdate(!props.update)
  //             props.createPost(false)
  //             ToastAlert({ msg: addProduct.data.message, msgType: 'success' });
  //           }
  //         }
  //       } else {
  //         setLoading(false)
  //         ToastAlert({ msg: 'Product not save', msgType: 'error' });
  //       }
  //     }

  //   }).catch(errors => {
  //     setLoading(false)
  //     console.log(errors)
  //     // const formaerrror = {};
  //     if (errors.length) {
  //       errors.forEach(element => {
  //         formaerrror[element.field] = element.message
  //       });
  //     } else {
  //       ToastAlert({ msg: 'Something Went Wrong', msgType: 'error' });
  //     }

  //     setstate({
  //       ...state,
  //       error: formaerrror
  //     })

  //   });



  // }


  return (
    <div className="add-post">
      <div className="d-flex align-items-center flex-grow-1 pb-20p mb-3 border-bottom">
        <Button variant="link" className="me-sm-2 me-1" onClick={() => props.createPost(false)}>
          <FontAwesomeIcon
            icon={solid("angle-left")}
            className="text-subtext fs-3"
          />
        </Button>
        <div className="fs-3 fw-bolder me-sm-3 flex__1">Create Item</div>

        <div className="ms-auto">
          <Button
            variant="warning"
            size="lg"
            className="text-white fw-bold fs-6"
            onClick={() => submitProductForm(-1)}
          >
            Save as Draft
          </Button>
        </div>
      </div>
      <div className="studio__note d-sm-flex align-items-center py-2 px-3 border rounded mb-5">
        <div className="studio__thumb p-1 mr-20p d-none d-sm-block">
          <img
            className="img-fluid"
            alt=""
            src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5f47d53860aae8b7569f45a7_rocket.svg"
          />
        </div>
        <div className="flex__1 text-light mb-2 text-center text-sm-start">
          <div className="fs-5">
            This category has a free posting limit of 3.
          </div>
          <a
            href="/"
            className="studio__url mt-6p d-flex text-light justify-content-center justify-content-sm-start"
          >
            <FontAwesomeIcon
              icon={regular("circle-location-arrow")}
              className="me-1"
            />
            <div className="fw-semibold fs-7">You have 3 posts remaining</div>
          </a>
        </div>
        <div className="d-grid">
          <Button variant="info" className="btn__upgrade fs-7">
            Upgrade
          </Button>
        </div>
      </div>

      <div>
        <Accordion defaultActiveKey="2" className="mb-5 pb-5">
          <Card>
            <Card.Header className="post__accordion-header">
              <AccordionToggle eventKey="0">
                <span className="fs-3 fw-bolder text-dark">Post Location</span>
              </AccordionToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0" className="py-5" >
              <Row className="mw-850 ml-5">
                <Col lg="6">
                  <div className="post-location-wrap">
                    <div className="px-3 py-20p bg-lighter rounded-3 mb-20p">
                      <div className="d-flex align-items-center">
                        <div className="icon-wrap mr-20p">
                          <FontAwesomeIcon
                            icon={solid("location-dot")}
                            className="fs-3 text-primary"
                          />
                        </div>
                        <div className="info-wrap">
                          <div className="fs-6 mb-3p">
                            Your post will be posted in
                          </div>
                          <h3 className="mb-0 fs-4 fw-bolder">New York, NY</h3>
                        </div>
                      </div>
                    </div>
                    <div className="note note--clear">
                      <FontAwesomeIcon
                        icon={regular("circle-info")}
                        className="text-info mr-3p"
                      />
                      <span>
                        Not the city you want to post in? Try using the search
                        bar to choose another location.
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header className="post__accordion-header">
              <AccordionToggle eventKey="1">
                <span className="fs-3 fw-bolder text-dark">
                  Product Details
                </span>
              </AccordionToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1" className="py-5" >
              <>
                <Row className="mw-850 ml-5 mb-5">
                  <div className="col-lg-6 mb-5 mb-sm-0">
                    <form className="profile-detail-form">
                      <div className="form-group border-bottom mb-2">
                        <label htmlFor="headlineInput" className="form__label">
                          Headline
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg mb-2"
                          // id="headlineInput"
                          placeholder="Ex: Children's Bicycle"
                          name='headline' id="headline" value={headline} onChange={(e) => { changevalue(e) }}
                        />

                        <div className="text-light fs-8 pb-2 mb-1">
                          <span>120</span> chars remaining
                        </div>
                        {error && error.headline && <p className="error">{error ? error.headline ? error.headline : "" : ""}</p>}
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="brandInput" className="form__label">
                          Brand
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          // id="brandInput"
                          placeholder="Hasbro ®"
                          name='brand' id="brand" value={brand} onChange={(e) => { changevalue(e) }}
                        />
                        {/* <p className="error">Required</p> */}
                        {error && error.brand && <p className="error">{error ? error.brand ? error.brand : "" : ""}</p>}

                      </div>
                      <div className="price-group-wrap d-flex align-items-center gap-2 mb-3">
                        <div className="form-group">
                          <label htmlFor="priceInput" className="form__label">
                            Price
                          </label>
                          <input
                            type="text"
                            placeholder="$0"
                            className="form-control form-control-lg"
                            // id="priceInput"
                            name='price' id="price" value={price} onChange={(e) => { changevalue(e) }}
                          />

                          {error && error.price && <p className="error">{error ? error.price ? error.price : "" : ""}</p>}
                        </div>
                        <div className="form-group quantity-from-group">
                          <label
                            htmlFor="quantityInput"
                            className="form__label"
                          >
                            Quantity
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg studio__input--quantity"
                            // id="quantityInput"
                            placeholder="12"
                            name='quantity' id="quantity" value={quantity} onChange={(e) => { changevalue(e) }}
                          />
                          {error && error.quantity && <p className="error">{error ? error.quantity ? error.quantity : "" : ""}</p>}
                        </div>
                        <div className="form-group unlimited-switch-wrap">
                          <div className="bg-purple text-nowrap fs-8 fw-semibold rounded-3 p-6p text-white">
                            Unlimited
                            <FontAwesomeIcon
                              icon={solid("infinity")}
                              className="ml-3p"
                            />
                          </div>
                          <ToggleSwitch id="unlimited" checked={unlimited} name="unlimited" changevalue={changevalue} />
                        </div>
                      </div>
                      <div className="keyword-tags-wrap">
                        <div className="form-group">
                          <label
                            htmlFor="keywordsInput"
                            className="form__label"
                          >
                            <FontAwesomeIcon
                              icon={solid("magnifying-glass")}
                              className="me-2 text-primary"
                            />
                            Keywords Tags
                            <span className="fs-8 ms-1 text-light fw-normal">
                              (up to 3)
                            </span>
                          </label>
                          {/* <input
                            type="text"
                            className="form-control form-control-lg"
                            id="keywordsInput"
                            placeholder="Keywords..."
                          /> */}
                          <ReactTags

                            handleDelete={handleDelete}
                            handleAddition={handleAddition}
                            handleDrag={handleDrag}
                            // delimiters={[188,3]}
                            handleTagClick={handleTagClick}
                            onClearAll={onClearAll}
                            onTagUpdate={onTagUpdate}

                            placeholder="Enter Tags..."
                            // minQueryLength={10}
                            // maxLength={15}
                            autofocus={false}
                            allowDeleteFromEmptyInput
                            autocomplete
                            readOnly={false}
                            allowUnique
                            allowDragDrop
                            inline
                            allowAdditionFromPaste
                            editable
                            clearAll
                            tags={tags}
                          />

                          {error && error.tags && <p className='error'>{error ? error.tags ? error.tags : "" : ""}</p>}
                        </div>
                      </div>
                      <div className="post-type-wrap">
                        <label className="form__label">
                          Post Type
                          <span className="fs-7 text-light ms-1 fw-normal">
                            (optional)
                          </span>
                        </label>
                        <div className="d-flex gap-2">
                          <div className="d-flex align-items-center">
                            <FontAwesomeIcon
                              className="fs-3 text-info"
                              icon={solid("calculator-simple")}
                            />
                            <div className="d-flex py-12p px-18p">
                              <ToggleSwitch id="tax" checked={tax} name="tax" changevalue={changevalue} />
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <FontAwesomeIcon
                              className="fs-3 text-primary"
                              icon={solid("tag")}
                            />
                            <div className="d-flex py-12p px-18p">
                              <ToggleSwitch id="postTag" checked={postTag} name="postTag" changevalue={changevalue} />
                            </div>
                          </div>
                          {/* <div className="d-flex align-items-center image__switch-wrap">
                            <FontAwesomeIcon
                              className="fs-3 text-info"
                              icon={solid("image")}
                            />
                            <div className="d-flex py-12p px-18p">
                              <ToggleSwitch />
                            </div>
                          </div> */}
                        </div>
                        <div className="post-type-note p-18p bg-lighter rounded-3 text-light mb-4">
                          Will you be uploading media after you have purchased
                          the items? Posts that upload pictures / videos of the
                          proceeds tend to get funded quicker.
                        </div>
                      </div>

                      <div className="item-category-select">
                        <span className="title">Item Category</span>
                        <div className="d-flex gap-2">
                          {/* <Dropdown className="d-flex" autoClose="outside">
                            <Dropdown.Toggle variant="outline-light" size="lg">
                              Category
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="w-100">
                              {
                                categoryList.length > 0 &&
                                categoryList.map((item, idx) => (
                                  <Dropdown.Item
                                    key={`cat_${idx}`}
                                    className="py-18p px-12p border-bottom fw-semibold text-dark"
                                    value={category}
                                  >
                                    {item.name}
                                  </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                          </Dropdown> */}
                          <div className="form-group">

                            <div className="">
                              <select className="form-control" onChange={(e) => { changevalue(e) }} id="category" name="category">
                                <option selected disabled value=" ">Select Category</option>
                                {categoryList.length > 0 &&
                                  categoryList.map((cat, i) => {

                                    return (
                                      cat.status === 1 &&
                                      <option value={cat._id} selected={category === cat._id}>{cat.name}</option>
                                    )

                                  })

                                }

                              </select>
                              <p className='error'>{error ? error.category ? error.category : "" : ""}</p>

                            </div>

                          </div>

                          <div className="form-group ">

                            <div className="">
                              <select className="form-control" onChange={(e) => { changevalue(e) }} id="subcategory" name="subcategory">
                                <option selected disabled value=" ">Select SubCategory</option>
                                {subcategoryList.length > 0 &&
                                  subcategoryList.map((cat, i) => {

                                    return (
                                      cat.status === 1 &&
                                      <option value={cat._id} selected={subcategory === cat._id}>{cat.name}</option>
                                    )

                                  })

                                }
                              </select>
                              <p className='error'>{error ? error.subcategory ? error.subcategory : "" : ""}</p>

                            </div>

                          </div>
                          {/* <Dropdown className="d-flex" autoClose="outside">
                            <Dropdown.Toggle variant="outline-light" size="lg">
                              Subcategory
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="w-100">
                              {
                                subcategoryList.length > 0 &&
                                subcategoryList.map((item, idx) => (
                                  <Dropdown.Item
                                    key={`sub_cat_${idx}`}
                                    className="d-flex align-items-center py-18p px-12p border-bottom fw-semibold text-dark"
                                  >
                                    {item.name}
                                    <div className="ms-auto">{item.icon}</div>
                                  </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                          </Dropdown> */}
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form className="video-detail-form">
                      <div className="main-upload-image-wrap">
                        <div className="form__label">Main Image</div>
                        <div className="upload-wrap mb-3">
                          {/* <FontAwesomeIcon
                            icon={solid("cloud-arrow-up")}
                            className="icon-cloud"
                          /> */}
                          {Img || tempImg ?
                            <img src={tempImg ? tempImg : Img ? Img !== "" ? helper.CampaignProductImagePath + Img : noimg : noimg} alt="lk" className="" style={{ width: "unset" }} />
                            :
                            <FontAwesomeIcon
                              icon={solid("cloud-arrow-up")}
                              className="icon-cloud"
                            />}
                          <label >
                            <input type="file" id="mainImg" name='mainImg' onChange={(e) => { changefile(e) }} />
                          </label>
                        </div>
                        <p className='error'>{error ? error.image ? error.image : "" : ""}</p>

                      </div>
                      <div className="note note--info mb-3">
                        <FontAwesomeIcon
                          icon={regular("circle-info")}
                          className="text-info icon-method mr-3p"
                        />
                        <span className="text-dark">
                          Upload a transparent image of the item. See the how-to
                          guide <a href="#">here</a> if you aren't sure how to
                          make your image transparent.
                        </span>
                      </div>
                      <div className="">
                        <div className="project-tilte-optional">
                          <div className="form__label">
                            More of Product
                            <span className="fs-7 text-light ms-1 fw-normal">
                              (optional)
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap gap-2 mb-3">
                          <div className="upload-wrap" style={{ width: "100%" }}>
                            <FontAwesomeIcon
                              icon={solid("cloud-arrow-up")}
                              className="icon-cloud"
                            />
                            <label >
                              <input name='moreImg[]' id='moreImg' type="file" accept=".jpg,.gif,.png" multiple onChange={(e) => { changefile(e) }} />
                            </label>
                          </div>
                          {error && error.moreImg && <p className='error'>{error ? error.moreImg ? error.moreImg : "" : ""}</p>}
                          <div className='grid mt-3 mb-3' style={{ display: "contents" }}>
                            {moreTempImages?.length ?
                              moreTempImages.map((img, key) => {
                                return (
                                  <img src={img ? img : noimg} alt="lk" style={{ width: "100px", height: "100px" }} />
                                )

                              })

                              :
                              moreImages?.length ?
                                moreImages.map((img, key) => {
                                  return (
                                    <img src={img ? img !== "" ? helper.CampaignProductImagePath + img : noimg : noimg} alt="lk" style={{ width: "100px", height: "100px" }} />
                                  )

                                })
                                : ""

                            }

                          </div>

                          {/* <p className='error'>{stateData.error ? stateData.error.moreImg ? stateData.error.moreImg : "" : ""}</p> */}

                          {/* <div className="upload-wrap">
                            <img
                              className="img-fluid"
                              src="https://i1.wp.com/lanecdr.org/wp-content/uploads/2019/08/placeholder.png?w=1200&ssl=1"
                              alt="img"
                            />
                            <label htmlFor="videoPicture2">
                              <input id="videoPicture2" type="file" />
                            </label>
                          </div>
                          <div className="upload-wrap">
                            <FontAwesomeIcon
                              icon={solid("cloud-arrow-up")}
                              className="icon-cloud"
                            />
                            <label htmlFor="videoPicture3">
                              <input id="videoPicture3" type="file" />
                            </label>
                          </div>
                          <div className="upload-wrap">
                            <FontAwesomeIcon
                              icon={solid("cloud-arrow-up")}
                              className="icon-cloud"
                            />
                            <label htmlFor="videoPicture3">
                              <input id="videoPicture3" type="file" />
                            </label>
                          </div>
                          <div className="upload-wrap">
                            <FontAwesomeIcon
                              icon={solid("cloud-arrow-up")}
                              className="icon-cloud"
                            />
                            <label htmlFor="videoPicture3">
                              <input id="videoPicture3" type="file" />
                            </label>
                          </div> */}
                        </div>

                        {/* <div className="d-grid">
                          <Button
                            variant="info"
                            className="fs-7 fw-bold"
                            size="lg"
                          >
                            Upload from File
                          </Button>
                        </div> */}
                      </div>
                    </form>
                  </div>
                </Row>
                <div className="select-projects-option mb-5">
                  <div className="fw-bold mb-3">
                    Project
                    <FontAwesomeIcon
                      icon={solid("bolt")}
                      className="text-primary ms-1 me-2"
                    />
                    <span className="fs-7 text-light  ms-1 fw-normal">
                      (optional)
                    </span>
                  </div>

                  <div className="d-flex flex-wrap mb-3">

                    {
                      projectList.length > 0 &&
                      projectList.map((project, i) => {
                        return (
                          <FeedTag project={project} onSelectProject={onSelectProject} seletedProjectList={seletedProjectList} />

                        )
                      })

                    }
                    {/* <FeedTag />
                    <FeedTag />
                    <FeedTag /> */}
                  </div>

                  <div className="manage-post-type">
                    <strong>Y</strong>ou can add this product to any of your
                    existing projects. To manage your projects &nbsp;{" "}
                    <a href="./" className="link">
                      click here
                    </a>
                  </div>
                </div>
              </>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header className="post__accordion-header">
              <AccordionToggle eventKey="3">
                <span className="fs-3 fw-bolder text-dark">Need Headline</span>
              </AccordionToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3" className="py-5" >
              <Row className="mw-850 ml-5">
                <Col lg="6">
                  <form className="profile-detail-form">
                    <div className="form-group mb-5 border-bottom pb-5">
                      <label className="form__label">Need Headline</label>
                      <input
                        type="text"
                        className="form-control form-control-lg mb-2"
                        placeholder="Ex: For inner city kids in Colorado"
                        name='needheadline' id="needheadline" value={needheadline} onChange={(e) => { changevalue(e) }}

                      />
                      {error && error.needheadline && <p className="error">{error ? error.needheadline ? error.needheadline : "" : ""}</p>}
                      <div className="text-light fs-8">
                        <span>120</span> chars remaining
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="needDescriptionTextarea"
                        className="form__label"
                      >
                        Need Description
                      </label>

                      <textarea
                        className="form-control form-control-lg mb-2"
                        // id="needDescriptionTextarea"
                        rows="1"
                        data-length="240"
                        placeholder="Enter some details about your need"
                        name='description' id="description" value={description} onChange={(e) => { changevalue(e) }}
                      ></textarea>
                      {error && error.description && <p className="error">{error ? error.description ? error.description : "" : ""}</p>}

                      <div className="text-light fs-8 pb-2 mb-1">
                        <span>120</span> chars remaining
                      </div>
                    </div>
                  </form>
                </Col>
                <Col lg="6">
                  <form className="video-detail-form">
                    <div className="form-group mb-2">
                      <label htmlFor="videoInput" className="form__label">
                        Need Gallery
                        <span className="post-type-text">(optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        // id="videoInput"
                        placeholder="Video URL"
                        name='galleryUrl' id="galleryUrl" value={galleryUrl} onChange={(e) => { changevalue(e) }}
                      />
                    </div>
                    <div className="project-video-wrap mb-4">
                      <iframe src={embedlink} title="YouTube video player"></iframe>
                    </div>
                    <div className="">
                      <div className="upload-picture-video-block mb-2">
                        <div className="upload-wrap" style={{ width: "100%" }}>
                          <FontAwesomeIcon
                            icon={solid("cloud-arrow-up")}
                            className="icon-cloud"
                          />
                          <label>
                            <input name='galleryImg[]' id='galleryImg' type="file" accept=".jpg,.gif,.png" multiple onChange={(e) => { changefile(e) }} />
                          </label>
                        </div>

                        <div className='grid mt-3 mb-3' style={{ display: "contents" }}>
                          {gallaryTempImages?.length ?
                            gallaryTempImages.map((img, key) => {
                              return (
                                <img src={img ? img : noimg} alt="lk" style={{ width: "100px", height: "100px" }} />
                              )

                            })

                            :
                            gallaryImages?.length ?
                              gallaryImages.map((img, key) => {
                                return (
                                  <img src={img ? img !== "" ? helper.CampaignProductImagePath + img : noimg : noimg} alt="lk" style={{ width: "100px", height: "100px" }} />
                                )

                              })
                              : ""

                          }

                        </div>

                        {error && error.galleryImg && <p className='error'>{error ? error.galleryImg ? error.galleryImg : "" : ""}</p>}
                        {/* <div className="upload-wrap">
                          <img src="../img/user2.jpeg" alt="img" />
                          <FontAwesomeIcon
                            icon={solid("cloud-arrow-up")}
                            className="icon-cloud"
                          />
                          <label htmlFor="videoPicture2">
                            <input id="videoPicture2" type="file" />
                          </label>
                        </div>
                        <div className="upload-wrap">
                          <FontAwesomeIcon
                            icon={solid("cloud-arrow-up")}
                            className="icon-cloud"
                          />
                          <label htmlFor="videoPicture3">
                            <input id="videoPicture3" type="file" />
                          </label>
                        </div>
                        <div className="upload-wrap">
                          <FontAwesomeIcon
                            icon={solid("cloud-arrow-up")}
                            className="icon-cloud"
                          />
                          <label htmlFor="videoPicture3">
                            <input id="videoPicture3" type="file" />
                          </label>
                        </div>
                        <div className="upload-wrap">
                          <FontAwesomeIcon
                            icon={solid("cloud-arrow-up")}
                            className="icon-cloud"
                          />
                          <label htmlFor="videoPicture3">
                            <input id="videoPicture3" type="file" />
                          </label>
                        </div> */}
                      </div>
                      {/* <div className="d-grid">
                        <Button
                          variant="info"
                          className="fs-7 fw-bold"
                          size="lg"
                        >
                          Upload from File
                        </Button>
                      </div> */}
                    </div>
                  </form>
                </Col>
              </Row>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <div className="fulfilling-check-wrap">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="fulfillingCheck"
            />
            <label className="form-check-label" htmlFor="fulfillingCheck">
              By posting your ad, you are agreeing to our{" "}
              <a href="#" target="_blank">
                <strong>terms of use</strong>
              </a>
              ,{" "}
              <a href="#" target="_blank">
                <strong>privacy policy</strong>
              </a>{" "}
              and{" "}
              <a href="#" target="_blank">
                <strong>site policies</strong>
              </a>
              . Please do not post duplicate ads. You may not edit your post
              after it has received funding. If you delete your post after it
              has received donations, the donors will receive a full refund and
              the post will be closed.
            </label>
          </div>
        </div>
        <div className="products-detial-footer py-5">
          <Button variant="info" size="lg" className="fw-bold fs-6">Preview</Button>
          <Button variant="success" size="lg" className="fw-bold fs-6" onClick={() => submitProductForm(1)}>Post Ad</Button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
