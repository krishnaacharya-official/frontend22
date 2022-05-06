import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button, Modal } from "react-bootstrap";
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
    <Modal
      // {...props}
      show={props.show}
      onHide={() => props.setModalShow(false)}
      size="xxl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ opacity: 1 }}
      dialogClassName="my-modalbank"
    >
      <Modal.Body>
        <div className="pt-3p px-3p pb-20p d-flex align-items-center">

          <button type="button" onClick={() => props.setModalShow(false)} className="btn p-0 ms-auto" style={{ transition: "unset" }}>
            <ListItemImg
              size="30"
              className="rounded-pill"
              icon={
                <FontAwesomeIcon
                  icon={solid("close")}
                  className="fs-5 text-light p-1"
                />
              }
            />
          </button>
        </div>

        <div className="d-flex align-items-center mb-2">
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
            <h4 className="fw-bolder text-dark mb-0">Add Bank Account</h4>
            <div className="settings__description fs-7">
              Receive direct deposits for donations you receive.
            </div>
          </div>
        </div>


        <Box
          sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 1500 }}
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
            <Tab label="Item Three" {...a11yProps(2)} />
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
                  <label htmlFor="exampleFormControlInput1" className="form-label">Type of business</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    name="accountHolderType"
                    options={options}
                    onChange={(e) => props.setstate({ ...stateData, accountHolderType: e.value })}

                  />
                </div>

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



              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="container">
              <h1>Verify your personal details</h1>
              <span>Stripe collects this information to verify your identity and keep your account safe.
              </span>

              <div className="mt-5">

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
                </div>



              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
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

      </Modal.Body>
      <Modal.Footer className="p-0 border-0 overflow-hidden">
        <Button variant="info" onClick={props.addBankAccount} className="border-top-left-radius-0 py-20p flex__1 m-0 rounded-0">Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddBankModal;
