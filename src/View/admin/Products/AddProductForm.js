import React from 'react';

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { Modal } from "react-bootstrap"
import { Button, Card } from '@mui/material';
import helper from '../../../Common/Helper';
import noimg from "../../../assets/images/noimg.jpg"
import { unescape } from 'lodash';

// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { WithContext as ReactTags } from "react-tag-input";
// import helper from '../../../Common/Helper';
import Chip from '@mui/material/Chip';


// const Transition = React.forwardRef(function Transition(propss, ref) {
//     return <Slide direction="up" {...propss} />;
// });
// const DialogTransition = (props) => {
//     return <Slide direction='up' {...props} />;
// };

export default function AddProductForm(props) {
    let stateData = props.stateData
    const adminData = JSON.parse(localStorage.getItem('adminData'));
    return (
        <>
            <Modal
                size="lg"
                show={props.modal}
                onHide={() => props.setModal(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                animation={false}
                style={{ zIndex: "999999" }}

            >
                <Modal.Header >
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {stateData?.id ? "Update Product" : "Add Product"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {adminData.roleName === 'ADMIN' &&
                        <div className="form-group row">
                            <label className="col-form-label col-sm-2 ">Organization</label>
                            <div className="col-sm-10">
                                <select className="form-control" onChange={(e) => { props.changevalue(e) }} id="organization" name="organization">
                                    <option selected disabled value="">Select Organization</option>
                                    {
                                        props.campaignAdminList.length > 0 &&
                                        props.campaignAdminList.map((admin, i) => {
                                            return (
                                                admin.status === 1 &&
                                                <option value={admin._id} selected={stateData.organization === admin._id}>{admin.name}</option>
                                            )
                                        })

                                    }
                                </select>

                                {stateData.error && stateData.error.organization && <p className="error">{stateData.error ? stateData.error.organization ? stateData.error.organization : "" : ""}</p>}
                            </div>
                        </div>

                    }


                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Headline</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-plaintext" name='headline' id="headline" value={stateData.headline} onChange={(e) => { props.changevalue(e) }} />

                            {stateData.error && stateData.error.headline && <p className="error">{stateData.error ? stateData.error.headline ? stateData.error.headline : "" : ""}</p>}
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Brand</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-plaintext" name='brand' id="brand" value={stateData.brand} onChange={(e) => { props.changevalue(e) }} />

                            {stateData.error && stateData.error.brand && <p className="error">{stateData.error ? stateData.error.brand ? stateData.error.brand : "" : ""}</p>}
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Slug</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-plaintext" disabled={stateData?.id ? true : false} name='slug' id="slug" value={stateData.slug} onChange={(e) => { props.changevalue(e) }} />

                            {stateData.error && stateData.error.slug && <p className="error">{stateData.error ? stateData.error.slug ? stateData.error.slug : "" : ""}</p>}
                        </div>
                    </div>




                    <div className="form-group row">
                        <label className="col-form-label col-sm-2" htmlFor="inputstock">Main Image</label>
                        <div className="col-sm-10">
                            <input type="file" className={stateData.error?.image ? "inputerror custom-file-input form-control" : " custom-file-input form-control"} id="mainImg" name='mainImg' accept="image/*" onChange={(e) => { props.changefile(e) }} />
                            <label className="custom-file-label" htmlFor="customFile" style={{ margin: "0px 10px 0px 10px" }}> Choose file </label>
                            <p className='error'>{stateData.error ? stateData.error.image ? stateData.error.image : "" : ""}</p>
                            {props.Img || props.tempImg ? <img src={props.tempImg ? props.tempImg : props.Img ? props.Img !== "" ? helper.CampaignProductImagePath + props.Img : noimg : noimg} alt="lk" style={{ width: "100px", height: "100px" }} /> : ""}

                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-form-label col-sm-2" htmlFor="inputstock">More of Product
                            (optional)</label>
                        <div className="col-sm-10">
                            <input className='custom-file-input form-control' name='moreImg[]' id='moreImg'  type="file" accept=".jpg,.gif,.png" multiple onChange={(e) => { props.changefile(e) }} />
                            <label className="custom-file-label" htmlFor="customFile" style={{ margin: "0px 10px 0px 10px" }}> Choose files </label>


                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Price</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-plaintext" name='price' id="price" value={stateData.price} onChange={(e) => { props.changevalue(e) }} />

                            {stateData.error && stateData.error.price && <p className="error">{stateData.error ? stateData.error.price ? stateData.error.price : "" : ""}</p>}
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Quantity</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-plaintext" name='quantity' id="quantity" value={stateData.quantity} onChange={(e) => { props.changevalue(e) }} />

                            {stateData.error && stateData.error.quantity && <p className="error">{stateData.error ? stateData.error.quantity ? stateData.error.quantity : "" : ""}</p>}
                        </div>
                    </div>





                    <div className="form-group row">
                        <div className="col-sm-2">
                            <label htmlFor="category">Category</label>
                        </div>
                        <div className="col-sm-10">
                            <select className="form-control" onChange={(e) => { props.changevalue(e) }} id="category" name="category">
                                <option selected disabled value=" ">select Category</option>
                                {props.categoryList.length > 0 &&
                                    props.categoryList.map((cat, i) => {

                                        return (
                                            cat.status === 1 &&
                                            <option value={cat._id} selected={stateData.category === cat._id}>{cat.name}</option>
                                        )

                                    })

                                }

                            </select>
                            <p className='error'>{stateData.error ? stateData.error.category ? stateData.error.category : "" : ""}</p>

                        </div>

                    </div>

                    <div className="form-group row">
                        <div className="col-sm-2">
                            <label htmlFor="category">SubCategory</label>
                        </div>
                        <div className="col-sm-10">
                            <select className="form-control" onChange={(e) => { props.changevalue(e) }} id="subcategory" name="subcategory">
                                <option selected disabled value=" ">select SubCategory</option>
                                {props.subcategoryList.length > 0 &&
                                    props.subcategoryList.map((cat, i) => {

                                        return (
                                            cat.status === 1 &&
                                            <option value={cat._id} selected={stateData.subcategory === cat._id}>{cat.name}</option>
                                        )

                                    })

                                }
                            </select>
                            <p className='error'>{stateData.error ? stateData.error.subcategory ? stateData.error.subcategory : "" : ""}</p>

                        </div>

                    </div>

                    <div className="form-group row">
                        <div className="col-sm-2">
                            <label htmlFor="tags">Tags</label>
                        </div>
                        {/* <label className="col-form-label col-2 text-sm-right" htmlFor="inputstock">Tags</label> */}
                        <div className="col-sm-10">
                            {/* {console.log(variants)} */}
                            <ReactTags
                                handleDelete={props.handleDelete}
                                handleAddition={props.handleAddition}
                                handleDrag={props.handleDrag}
                                delimiters={props.delimiters}
                                handleTagClick={props.handleTagClick}
                                onClearAll={props.onClearAll}
                                onTagUpdate={props.onTagUpdate}

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
                                tags={props.tags}
                            />
                            <p className='error'>{stateData.error ? stateData.error.tags ? stateData.error.tags : "" : ""}</p>

                        </div>
                    </div>

                    <Divider className='p-4'>
                        <Chip label="Need Details" />
                    </Divider>

                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Need Headline</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-plaintext" name='needheadline' id="needheadline" value={stateData.needheadline} onChange={(e) => { props.changevalue(e) }} />

                            {stateData.error && stateData.error.needheadline && <p className="error">{stateData.error ? stateData.error.needheadline ? stateData.error.needheadline : "" : ""}</p>}
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Need Gallery <small>(optional)</small></label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-plaintext" name='galleryUrl' id="galleryUrl" value={stateData.galleryUrl} onChange={(e) => { props.changevalue(e) }} />

                            {stateData.error && stateData.error.galleryUrl && <p className="error">{stateData.error ? stateData.error.galleryUrl ? stateData.error.galleryUrl : "" : ""}</p>}
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-form-label col-sm-2" htmlFor="inputstock">Need Description</label>
                        <div className="col-sm-10">
                            <ReactQuill
                                theme='snow'
                                value={stateData.description}
                                onChange={(e) => props.handleOnDiscriptionChangeValue(e)}
                                style={{ height: '240px', marginBottom: "50px" }}
                                name="description"
                            />
                            <p className='error'>{stateData.error ? stateData.error.description ? stateData.error.description : "" : ""}</p>

                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-sm-2" htmlFor="inputstock">Gallery Iamges</label>
                        <div className="col-sm-10">
                            <input className='custom-file-input form-control' name='galleryImg[]' id='galleryImg' type="file" accept=".jpg,.gif,.png" multiple onChange={(e) => { props.changefile(e) }} />
                            <label className="custom-file-label" htmlFor="customFile" style={{ margin: "0px 10px 0px 10px" }}> Choose files </label>


                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-form-label col-sm-2 ">Status</label>
                        <div className="col-sm-10">
                            <select className="form-control" onChange={(e) => { props.changevalue(e) }} id="status" name="status">
                                <option selected={stateData ? stateData.status === 1 ? "selected" : "" : ""} value="1">Active</option>
                                <option selected={stateData ? stateData.status === 0 ? "selected" : "" : ""} value="0">InActive</option>
                            </select>

                            {stateData.error && stateData.error.status && <p className="error">{stateData.error ? stateData.error.status ? stateData.error.status : "" : ""}</p>}
                        </div>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="btnWarning" className='btnDanger' onClick={() => props.setModal(false)}>Close</Button>&nbsp;
                    <Button variant="contained" onClick={() => props.submitProductForm()}>Save</Button>
                </Modal.Footer>
            </Modal>



            {/* <Dialog
                fullScreen
                open={props.modal}
                onClose={() => props.setModal(false)}
                TransitionComponent={Transition}
     
            >



                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => props.setModal(false)}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {stateData?.id ? "Update Product" : "Add Product"}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={() => props.setModal(false)}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
    

               <div className='container-fluid pt-5'>

                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-plaintext" name='name' id="name" value={stateData.name} onChange={(e) => { props.changevalue(e) }} />

                            {stateData.error && stateData.error.name && <p className="error">{stateData.error ? stateData.error.name ? stateData.error.name : "" : ""}</p>}
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-form-label col-sm-2" htmlFor="inputstock">Image</label>
                        <div className="col-sm-10">
                            <input type="file" className={stateData.error.image ? "inputerror custom-file-input form-control" : " custom-file-input form-control"} id="image" accept="image/*" onChange={(e) => { props.changefile(e) }} />
                            <label className="custom-file-label" htmlFor="customFile" style={{ margin: "0px 10px 0px 10px" }}> Choose file </label>
                            <p className='error'>{stateData.error ? stateData.error.image ? stateData.error.image : "" : ""}</p>

                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Price</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-plaintext" name='price' id="price" value={stateData.price} onChange={(e) => { props.changevalue(e) }} />

                            {stateData.error && stateData.error.price && <p className="error">{stateData.error ? stateData.error.price ? stateData.error.price : "" : ""}</p>}
                        </div>
                    </div>


                   <div className="form-group row">
                        <label className="col-form-label col-sm-2" htmlFor="inputstock">Description</label>
                        <div className="col-sm-10">
                            <ReactQuill
                                theme='snow'
                                value={stateData.description}
                                onChange={(e) =>console.log(e)}
                                style={{ height: '240px', marginBottom: "50px" }}
                                name="description"
                            />
                            <p className='error'>{stateData.error ? stateData.error.description ? stateData.error.description : "" : ""}</p>

                        </div>
                    </div>


                     <div className="form-group row">
                        <div className="col-sm-2">
                            <label htmlFor="category">Category & SubCategory :</label>
                        </div>
                        <div className="col-sm-5">
                            <select className="form-control" onChange={(e) => { props.changevalue(e) }} id="category" name="category">
                                <option selected={stateData ? stateData.status === 1 ? "selected" : "" : ""} value="1">Active</option>
                                <option selected={stateData ? stateData.status === 0 ? "selected" : "" : ""} value="0">InActive</option>
                            </select>
                            <p className='error'>{stateData.error ? stateData.error.category ? stateData.error.category : "" : ""}</p>

                        </div>
                        <div className="col-sm-5">
                            <select className="form-control" onChange={(e) => { props.changevalue(e) }} id="subcategory" name="subcategory">
                                <option selected={stateData ? stateData.status === 1 ? "selected" : "" : ""} value="1">Active</option>
                                <option selected={stateData ? stateData.status === 0 ? "selected" : "" : ""} value="0">InActive</option>
                            </select>
                            <p className='error'>{stateData.error ? stateData.error.subcategory ? stateData.error.subcategory : "" : ""}</p>

                        </div>
                    </div>






                    <div className="form-group row">
                        <label className="col-form-label col-sm-2 ">Status</label>
                        <div className="col-sm-10">
                            <select className="form-control" onChange={(e) => { props.changevalue(e) }} id="status" name="status">
                                <option selected={stateData ? stateData.status === 1 ? "selected" : "" : ""} value="1">Active</option>
                                <option selected={stateData ? stateData.status === 0 ? "selected" : "" : ""} value="0">InActive</option>
                            </select>

                            {stateData.error && stateData.error.status && <p className="error">{stateData.error ? stateData.error.status ? stateData.error.status : "" : ""}</p>}
                        </div>
                    </div>


                </div> 
                {/* </Card> */}

        </>
    )


}