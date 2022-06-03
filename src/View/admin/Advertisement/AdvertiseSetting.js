import Dialog from '@mui/material/Dialog';
import React, { useEffect, useState } from 'react';

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
import { Button, Card } from '@mui/material';
import moment from 'moment';
import Label from '../../../components/Label';
// import helper from '../../../Common/Helper';
import helper, { priceFormat } from '../../../Common/Helper';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import plusFill from '@iconify/icons-eva/plus-fill';
import trash from '@iconify/icons-eva/trash-2-fill';
import editfill from '@iconify/icons-eva/edit-fill';
// import Label from '../../../components/Label';


const Transition = React.forwardRef(function Transition(propss, ref) {
    return <Slide direction="up" {...propss} />;
});
const DialogTransition = (props) => {
    return <Slide direction='up' {...props} />;
};
const AdvertiseSetting = (props) => {

    let advertisementDetails = {}
    advertisementDetails = props.advertisementDetails


    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <>
            <Dialog
                fullScreen
                open={props.settingModal}
                onClose={() => props.setSettingModal(false)}
                TransitionComponent={Transition}

            >



                <AppBar sx={{ position: 'relative', bgcolor: "#3773c6" }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => props.setSettingModal(false)}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            ADVERTISE ID : {advertisementDetails._id}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={() => props.setSettingModal(false)}>
                            Close
                        </Button>
                    </Toolbar>
                </AppBar>

                <div className="invoice invoice-content  px-5 pt-5" style={{ overflow: "auto" }}>
                    <div className="row">

                        <div className="col-sm-6">
                            <img src={helper.sponsorLogoResizePath + advertisementDetails.logo} alt='sponsor' style={{ width: "100px" }}></img>
                        </div>
                        <div className="col-sm-6">
                            <h1 style={{ float: "right", textTransform: "capitalize" }}>{advertisementDetails.name}</h1>
                        </div>
                    </div>

                </div>
                <div className="px-5 pt-3 mt-0 mb-2">
                    <div className="row" style={{ height: "5rem", border: "1px solid rgba(189, 193, 200, 0.5)" }}>
                        <div className="col-sm-6">
                            <h6 style={{ lineHeight: '5rem', color: '#bdc1c8', letterSpacing: ' 3.32px', fontWeight: '700' }}>HomePage</h6>
                        </div>

                        <div className="col-sm-6">
                            <label className="--switch mt-1" style={{ top: "18%", float: "right" }}>
                                <input type="checkbox" id="prioritySupport" name="BASIC" />
                                <span className="--slider">
                                    <i className="fa fa-check"></i>
                                    <i className="fa fa-times"></i>
                                </span>
                            </label>
                        </div>

                    </div>


                </div>

                <Box sx={{ width: '100%', typography: 'body1' }} className="px-5">
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Selected" value="1" />
                                <Tab label="All" value="2" />

                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {/* <OrganizationDonation organizationDonationList={props.organizationDonationList} /> */}
                        </TabPanel>
                        <TabPanel value="2">
                            {/* <ProjectDonation projectDonationList={props.projectDonationList} /> */}
                        </TabPanel>

                    </TabContext>
                </Box>




            </Dialog >
        </>

    )
}
export default AdvertiseSetting