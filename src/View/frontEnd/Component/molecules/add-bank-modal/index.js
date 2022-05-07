import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { Button, Modal } from "react-bootstrap";
import { Button, Card } from '@mui/material';

// import ListItemImg from "@components/atoms/list-item-img";
import ListItemImg from "../../atoms/list-item-img";
import Select from 'react-select'
import "./style.scss";
import React, { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';



const Transition = React.forwardRef(function Transition(propss, ref) {
  return <Slide direction="up" {...propss} />;
});

const AddBankModal = (props) => {
  let stateData = props.stateData
  const [value, setValue] = useState(0);
  const options = [
    { value: 'individual ', label: 'Individual ' },
    { value: 'company', label: 'Company' },
    { value: 'nonprofit', label: 'Non-profit' },

  ]
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Dialog
      fullScreen
      open={props.show}
      onClose={() => props.setModalShow(false)}
      TransitionComponent={Transition}

    >



      <AppBar sx={{ position: 'relative', bgcolor: "#3773c6" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => props.setModalShow(false)}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            <div className="d-flex align-items-center">
              <ListItemImg
                size="52"
                className="rounded-pill mr-12p"
                icon={
                  <FontAwesomeIcon
                    icon={solid("building-columns")}
                    className="fs-4 text-subtext"
                  />
                }
              />
              <div className="bank__title">
                <h4 className="fw-bolder mb-0">Add Bank Account</h4>
                <div className="settings__description fs-7">
                  Receive direct deposits for donations you receive.
                </div>
              </div>
            </div>
          </Typography>
          <Button autoFocus color="inherit" onClick={() => props.setModalShow(false)}>
            Close
          </Button>
        </Toolbar>
      </AppBar>


      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 1500 }}
        className=" mt-4"
      // style={{overflow:"auto"}}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Business type" {...a11yProps(0)} />
          <Tab label="Personal details" {...a11yProps(1)} />
          <Tab label="Business details" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className="container">
            <h1>Let’s start with some basics</h1>
            <span>Choose your location and business type to get started.</span>

            <div className="mt-5">

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Registered business address</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  name="accountHolderType"
                  options={options}
                  onChange={(e) => props.setstate({ ...stateData, accountHolderType: e.value })}

                />
              </div>


              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1 " className="form-label ">Type of business</label>
                <div className="row ssnlable ">
                  <div className="col-sm-6  ">
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      name="accountHolderType"
                      options={options}
                      onChange={(e) => props.setstate({ ...stateData, accountHolderType: e.value })}

                    />
                  </div>
                  <div className="col-sm-6  ">
                    <p className="text-light">If you have not filed paperwork to register as a business entity, <br />then your business type is likely to be Individual.</p>
                  </div>

                </div>
              </div>






            </div>
            <button type="button" className="btn btn-xg btn-primary">continue
              &nbsp;
              <FontAwesomeIcon
                icon={solid("arrow-right-long")}
                className=" text-white ml-5"
              />
            </button>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1} style={{ width: "100%" }} >
          <div className="container">
            <h1>Verify your personal details</h1>
            <span>Stripe collects this information to verify your identity and keep your account safe.
            </span>

            <div className="row mt-5">
              <div className="col-sm-6">


                <div className="mb-3 ">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Legal name of person</label>
                  <input type="text" name="accountHolderName" className="form-control" value={stateData.accountHolderName} onChange={props.changevalue} placeholder="First name" />
                  <input type="text" name="accountHolderName " className="form-control mt-2" value={stateData.accountHolderName} onChange={props.changevalue} placeholder="Last name" />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="text" name="accountHolderName" className="form-control" value={stateData.accountHolderName} onChange={props.changevalue} placeholder="you@example.com" />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Date of birth</label>
                  <input type="date" name="accountHolderName" className="form-control" onChange={props.changevalue} placeholder="you@example.com" />
                </div>


                <label htmlFor="exampleFormControlInput1" className="form-label">Phone number</label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">+1</span>
                  <input type="text" className="form-control" placeholder="(201) 555-0123" aria-label="Username" aria-describedby="basic-addon1" />
                </div>



                <label htmlFor="exampleFormControlInput1" className="form-label ">Last 4 digits of Social Security number</label>
                <div className="row ssnlable">
                  <div className="col-sm-6 ">

                    <div className="input-group mb-3 ">

                      <span className="input-group-text" id="basic-addon1">••• – •• –</span>
                      <input type="text" className="form-control" placeholder="8888" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <p className="ssninstruction text-light">The last 4 digits of your SSN are only used to verify your identity—no credit checks.</p>
                  </div>

                </div>




              </div>

              <div className="col-sm-6">

                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Home address</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    name="accountHolderType"
                    options={options}
                    onChange={(e) => props.setstate({ ...stateData, accountHolderType: e.value })}

                  />


                  <input type="text" name="accountHolderName" className="form-control mt-3" value={stateData.accountHolderName} onChange={props.changevalue} placeholder="Address line 1" />
                  <input type="text" name="accountHolderName " className="form-control mt-2" value={stateData.accountHolderName} onChange={props.changevalue} placeholder="Address line 1" />
                  <input type="text" name="accountHolderName " className="form-control mt-2" value={stateData.accountHolderName} onChange={props.changevalue} placeholder="City" />
                  <Select
                    className="basic-single mt-2"
                    classNamePrefix="select "
                    name="accountHolderType"
                    options={options}
                    placeholder="select City"
                    onChange={(e) => props.setstate({ ...stateData, accountHolderType: e.value })}

                  />
                  <input type="text" name="accountHolderName " className="form-control mt-2" value={stateData.accountHolderName} onChange={props.changevalue} placeholder="Zip" />




                </div>



              </div>


            </div>
            <br />
            <button type="button" className="btn btn-xg btn-primary">continue
              &nbsp;
              <FontAwesomeIcon
                icon={solid("arrow-right-long")}
                className=" text-white ml-5"
              /></button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="container">
            <h1>Tell us more about your business</h1>
            <span>Choose your location and business type to get started.</span>

            <div className="mt-5">

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Industry</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  name="accountHolderType"
                  options={options}
                  onChange={(e) => props.setstate({ ...stateData, accountHolderType: e.value })}

                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Business website</label>
                <input type="text" name="accountHolderName" className="form-control" value={stateData.accountHolderName} onChange={props.changevalue} placeholder="https://example.com" />
              </div>

              <div className="mb-3">

                <label htmlFor="exampleFormControlInput1" className="form-label">Business website</label>
                <div className="row ssnlable">
                  <div className="col-sm-6">
                    <textarea name="accountHolderName" className="form-control" value={stateData.accountHolderName} rows="5" cols="" onChange={props.changevalue} ></textarea>
                  </div>
                  <div className="col-sm-6 ssninstruction text-light">
                    Provide a 1-2 sentence description.<br /> Make sure to note when you typically charge your customers <br />(i.e. during checkout or 3 days later). This helps us better understand your business.
                  </div>

                </div>
              </div>



            </div>
            <button type="button" className="btn btn-xg btn-primary">continue
              &nbsp;
              <FontAwesomeIcon
                icon={solid("arrow-right-long")}
                className=" text-white ml-5"
              /></button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>

      {/* </Modal.Body> */}
      {/* <Modal.Footer className="p-0 border-0 overflow-hidden">
        <Button variant="info" onClick={props.addBankAccount} className="border-top-left-radius-0 py-20p flex__1 m-0 rounded-0">Save</Button>
      </Modal.Footer>
    </Modal> */}
    </Dialog >

  );
};

export default AddBankModal;
