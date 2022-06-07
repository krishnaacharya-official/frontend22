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
import { TabContainer } from "react-bootstrap";
import PaymentsIcon from '@mui/icons-material/Payments';
import ReceiptIcon from '@mui/icons-material/Receipt';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';

const Transition = React.forwardRef(function Transition(propss, ref) {
    return <Slide direction="up" {...propss} />;
});
const DialogTransition = (props) => {
    return <Slide direction='up' {...props} />;
};
const Payout = (props) => {

    const [value, setValue] = useState(0);

    const goToBack = (key) => {
        setValue(key);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        // setTempImg('')
        // setTempImgName('')
        // setstate({
        //   ...state,
        //   identityDocumentImage: ''
        // })
    };



    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }


    let organizationDetails = props.organizationDetails

    return (
        <>
            <Dialog
                fullScreen
                open={props.payoutModal}
                onClose={() => props.setPayoutModal(false)}
                TransitionComponent={Transition}

            >



                <AppBar sx={{ position: 'relative', bgcolor: "#3773c6" }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => props.setPayoutModal(false)}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {organizationDetails.name}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={() => props.setPayoutModal(false)}>
                            Close
                        </Button>
                    </Toolbar>
                </AppBar>
                <Box
                    sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 1500 }}
                    className="mt-0"

                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider',bgcolor:'#e7ebf0' }}
                        textColor="secondary"
                        indicatorColor="secondary"
                    >
                        <Tab  icon={<PaymentsIcon />} iconPosition="start" label="Payout" {...a11yProps(0)}  />
                        <Tab icon={<ReceiptIcon />} iconPosition="start" label="Payment History" {...a11yProps(1)} />
                        {/* <Tab label="Business details" {...a11yProps(2)} />
                    <Tab label="Bank details" {...a11yProps(3)} />
                    <Tab label="Identity document" {...a11yProps(4)} />
                    <Tab label="Upload document" {...a11yProps(5)} /> */}
                    </Tabs>
                    <div className="invoice invoice-content  px-5 pt-5" >
                        {/* <div className="row">

                        <div className="col-sm-6">
                            <img src={helper.CampaignAdminLogoPath + organizationDetails.logo} alt='sponsor' style={{ width: "100px" }}></img>
                        </div>
                        <div className="col-sm-6">
                 
                        </div>
                    </div> */}

                    </div>

                </Box>


            </Dialog >
        </>

    )
}
export default Payout