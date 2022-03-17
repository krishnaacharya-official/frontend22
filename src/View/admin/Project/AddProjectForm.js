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
const productv = {
    cursor: 'pointer',
    display: 'block',
    position: 'absolute',
    top: "0px",
    left: "0px",
    opacity: "0",
    height: "100%",
    width: "100%"

}
let variantStyle = {
    fontSize: "14px",
    color: "#00ab55",
    textTransform: "uppercase",
    // cursor: "pointer",
    marginRight: "10px",
    display: "inline-block",
    // marginBottom: 0,
    border: "1px solid #9fbcc1",
    padding: "1px 28px 0px",
    borderRadius: "7px",
    marginBottom: "5px"
}

export default function AddProjectForm(props) {
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
                        {stateData?.id ? "Update Project" : "Add Project"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
       


        


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="btnWarning" className='btnDanger' onClick={() => props.setModal(false)}>Close</Button>&nbsp;
                    <Button variant="contained" onClick={() => props.submitProductForm()}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}