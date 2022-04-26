import {
    Card,
    Table,
    Stack,
    Avatar,
    Button,
    Checkbox,
    TableRow,
    TableBody,
    TableCell,
    Container,
    Typography,
    TableContainer,
    TablePagination
} from '@mui/material';
import plusFill from '@iconify/icons-eva/plus-fill';
import trash from '@iconify/icons-eva/trash-2-fill';
import editfill from '@iconify/icons-eva/edit-fill';
import Label from '../../../components/Label';
import { Icon } from '@iconify/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Page from '../../../components/Page';
import backfill from '@iconify/icons-eva/arrow-left-fill';
import settingApi from '../../../Api/admin/setting';
import React, { useEffect, useState } from 'react';
import FrontLoader from '../../../Common/FrontLoader';
import ToastAlert from '../../../Common/ToastAlert';
import { hasPermission } from '../../../Common/Helper';
import { validateAll } from "indicative/validator";
import Select from 'react-select'
import adminCampaignApi from "../../../Api/admin/adminCampaign"
import { CleanHands } from '@mui/icons-material';
import pricingFeesApi from '../../../Api/admin/pricingFees';

export default function PricingFees(props) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const adminData = JSON.parse(localStorage.getItem('adminData'));
    const [error, setError] = useState([])
    const [countryList, setCountryList] = useState([])
    const [defaultValue, setDefaultValue] = useState([])

    const [state, setState] = useState({
        platformFees: 0,
        transectionFees: 0,

    })
    const { platformFees, transectionFees } = state

    const [changePlatform, setChangePlatform] = useState(false)
    const [changeTransaction, setChangeTransaction] = useState(false)
    const [totalFees, setTotalFees] = useState(Number(platformFees) + Number(transectionFees))
    const [update, setUpdate] = useState(false)
    const [country, setCountry] = useState(39)


    const [pf, setPf] = useState(0)
    const [tf, setTf] = useState(0)




    const editPrice = (type) => {
        setError([])
        setState({
            ...state,
            platformFees: pf,
            transectionFees: tf
        })
        setChangePlatform(type === 'PLATFORM')
        setChangeTransaction(type === 'TRANSECTION')

    }

    const savePricingFeeSettings = async (type) => {
        let rules;
        if (type === 'PLATFORM') {
            rules = {

                platformFees: "required",
            }
        } else {
            rules = {
                transectionFees: "required",
            }
        }
        // const rules = {
        //     platformFees: "required",
        //     transectionFees: "required",

        // }

        const message = {
            'platformFees.required': 'Platform Fee is Required.',
            'transectionFees.required': 'STransection Fee is Required.',

        }

        validateAll(state, rules, message).then(async () => {
            const formaerrror = {};
            setError(
                ...error,
                formaerrror
            )
            let tempData = {}
            tempData.platformFees = platformFees
            tempData.transectionFees = transectionFees
            tempData.countryId = country

            setLoading(true)
            const saveSettingsValue = await pricingFeesApi.save(adminAuthToken, tempData);
            if (saveSettingsValue.data.success === true) {
                setLoading(false)
                ToastAlert({ msg: saveSettingsValue.data.message, msgType: 'success' });
                setChangePlatform(false)
                setChangeTransaction(false)
                setUpdate(!update)
            } else {
                setLoading(false)
            }

        }).catch(errors => {
            // console.log(errors)
            setLoading(false)
            const formaerrror = {};
            if (errors.length) {
                errors.forEach(element => {
                    formaerrror[element.field] = element.message
                });
            } else {
                ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
            }

            setError(
                // ...error,
                formaerrror
            )

        });

    }

    const changevalue = async (e) => {
        let value = e.target.value.replace(/[^\d.]|\.(?=.*\.)/g, "");
        setState({
            ...state,
            [e.target.name]: value
        })
        // setTotalFees(Number(platformFees) + Number(transectionFees))
    }

    const getCountryList = async () => {
        let tempArray = []
        let tempArray2 = []



        const getCountryList = await adminCampaignApi.countryList(adminAuthToken);
        if (getCountryList) {
            if (getCountryList.data.success) {
                if (getCountryList.data.data.length > 0) {
                    getCountryList.data.data.map((country, i) => {
                        let Obj = {}
                        Obj.value = country.id
                        Obj.label = country.country
                        tempArray.push(Obj)
                        // if (country.country === 'Canada') {
                        //     tempArray2.push(Obj)
                        //     setDefaultValue(tempArray2)
                        // }

                    })
                    setCountryList(tempArray)
                }
            }
        }
    }

    const onChangeCountry = async (e) => {
        let tempD = {}
        tempD.countryId = e.value
        setCountry(e.value)
        const getSettingsValue = await pricingFeesApi.list(adminAuthToken, tempD);
        if (getSettingsValue.data.success) {

            setState({
                ...state,
                platformFees: getSettingsValue.data.data.platformFees,
                transectionFees: getSettingsValue.data.data.transectionFees
            })
            setPf(getSettingsValue.data.data.platformFees)
            setTf(getSettingsValue.data.data.transectionFees)
            setTotalFees(Number(getSettingsValue.data.data.platformFees) + Number(getSettingsValue.data.data.transectionFees))


        }
    }


    useEffect(() => {
        (async () => {
            if (!hasPermission(adminData.roleName, 'SETTING')) {
                navigate('/admin/dashboard')
            }
            setLoading(true)
            await getCountryList()
            let tempD = {}
            tempD.countryId = country
            const getSettingsValue = await pricingFeesApi.list(adminAuthToken, tempD);
            if (getSettingsValue.data.success) {
                // console.log(getSettingsValue.data.data)

                setState({
                    ...state,
                    platformFees: getSettingsValue.data.data.platformFees,
                    transectionFees: getSettingsValue.data.data.transectionFees
                })
                setPf(getSettingsValue.data.data.platformFees)
                setTf(getSettingsValue.data.data.transectionFees)
                setTotalFees(Number(getSettingsValue.data.data.platformFees) + Number(getSettingsValue.data.data.transectionFees))

                // let data = {}

                // getSettingsValue.data.data.map((d, i) => {
                //     data[d.name] = d.value
                // })


                // if (data.platformFees || data.transectionFees) {
                //     setPf(data.platformFees)
                //     setTf(data.transectionFees)
                //     setTotalFees(Number(data.platformFees) + Number(data.transectionFees))

                // } else {
                //     setTotalFees(0)
                // }
            }
            setLoading(false)



        })()
    }, [update])

    useEffect(() => {
        (async () => {
            // let Canada = countryList.find(x => x.label === 'Canada');
            // setDefaultValue(Canada)
            // console.log(Canada)
            // if(country.country === 'Canada'){
            //    
            // }
            // if (platformFees && transectionFees) {

            setTotalFees(Number(platformFees) + Number(transectionFees))

            // } else {
            //     setTotalFees(0)
            // }


        })()
    }, [update, platformFees, transectionFees])

    const lineStyle = {

        // display:" -webkit-box",
        // display: "-webkit-flex",
        // display: "-ms-flexbox",
        display: "flex",
        width: "0px",
        marginRight: "16px",
        marginLeft: "16px",
        "-webkit-box-pack": "center",
        "-webkit-justify-content": "center",
        "-ms-flex-pack": "center",
        justifyContent: "center",
        "-webkit-box-align": "center",
        "-webkit-align-items": "center",
        "-ms-flex-align": "center",
        /* align-items: center, */
        border: "1px solid #e6e6e6",
        // fontFamily: 'Font awesome 5 pro solid 900',
        padding: 'unset',
        fontSize: 'xx-large',
        fontWeight: 700,
    }

    const syStyle = {


        // display: -webkit-box,
        // display: -webkit-flex,
        // display: -ms-flexbox,
        display: "flex",
        width: " 32px",
        height: "42px",
        minHeight: "42px",
        minWidth: " 32px",
        "-webkit-box-pack": "center",
        "-webkit-justify-content": "center",
        "-ms-flex-pack": "center",
        justifyContent: "center",
        "-webkit-box-align": "center",
        "-webkit-align-items": "center",
        "-ms-flex-align": "center",
        alignItems: "center",
        borderRadius: "50%",
        backgroundColor: "#fff",
        fontSize: 'xx-large',
        fontWeight: 700,
        color: "#e6e6e6"


    }

    const options = [
        { value: 39, label: 'Canada' },
    ]

    return (
        <>
            <FrontLoader loading={loading} />
            <Page title="Pricing | Minimal-UI">

                <Container>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                        <Typography variant="h4" gutterBottom>
                            Pricing Settings
                        </Typography>
                        <Button
                            variant="contained"
                            startIcon={<Icon icon={backfill} />}
                            onClick={() => navigate('/admin/setting')}
                        >
                            Back
                        </Button>
                    </Stack>
                    <Card>
                        <div className='row container'>

                            <div className="row py-4">
                                <div className='pb-4 d-flex'>
                                    <h2 className='mr-2'>Pricing and Fees in</h2>
                                    <div style={{width:"30%"}}> 
                                        <Select
                                            isClearable={false}
                                            defaultValue={options[0]}
                                            options={countryList}
                                            onChange={onChangeCountry}

                                        />
                                    </div>
                                </div>
                                <div className="col-sm-4 mb-3 mb-md-0">
                                    <div className=" text-center h-100">


                                        <div className="card-body d-flex flex-column">
                                            <div className="mb-4">
                                                <h5>Platform Fee</h5>
                                                {
                                                    changePlatform ?
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="platformFees"
                                                            name="platformFees"
                                                            value={platformFees}
                                                            onChange={(e) => changevalue(e)}
                                                        />
                                                        :
                                                        <span className="display-4">{platformFees}%</span>
                                                }
                                                {error && error.platformFees && <p className="error">{error ? error.platformFees ? error.platformFees : "" : ""}</p>}



                                            </div>

                                            <p>
                                                Charged to the Donor at checkout to keep Donorport 100% for Organizations
                                            </p>

                                        </div>
                                        <div className="mt-auto">
                                            {
                                                changePlatform ?
                                                    <button className="btn btn-lg btn-outline-primary" onClick={() => savePricingFeeSettings('PLATFORM')}>Save</button> :
                                                    <button className="btn btn-lg btn-outline-primary" onClick={() => editPrice('PLATFORM')}>Change</button>

                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-1 " style={lineStyle}><div className="s" style={syStyle}>+</div></div>

                                <div className="col-sm-4 mb-3 mb-md-0">
                                    <div className=" text-center h-100">
                                        <div className="card-body d-flex flex-column">
                                            <div className="mb-4">
                                                <h5>Transaction Fees</h5>
                                                {
                                                    changeTransaction ?
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="transectionFees"
                                                            name="transectionFees"
                                                            value={transectionFees}
                                                            onChange={(e) => changevalue(e)}
                                                        />
                                                        :
                                                        <span className="display-4">{transectionFees}%</span>
                                                }
                                                {error && error.transectionFees && <p className="error">{error ? error.transectionFees ? error.transectionFees : "" : ""}</p>}
                                            </div>

                                            <p>
                                                + $0.30 per item donated
                                                *including debit and credit card charges
                                            </p>

                                        </div>
                                        <div className="mt-auto">
                                            {
                                                changeTransaction ?
                                                    <button className="btn btn-lg btn-outline-primary" onClick={() => savePricingFeeSettings('TRANSECTION')}>Save</button> :
                                                    <button className="btn btn-lg btn-outline-primary" onClick={() => editPrice('TRANSECTION')}>Change</button>

                                            }
                                        </div>
                                    </div>

                                </div>
                                <div className="col-sm-1 " style={lineStyle}><div className="s" style={syStyle}>=</div></div>



                                <div className="col-sm-3 mb-3 mb-md-0">
                                    <div className=" text-center h-100">
                                        <div className="card-body d-flex flex-column">
                                            <div className="mb-4">
                                                <h5>Total</h5>
                                                <span className="display-4">{isNaN(totalFees) ? 0 : totalFees.toFixed(1)}%</span>
                                            </div>

                                            <p>
                                                Paid by the Donor at checkout
                                            </p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>





                    </Card>
                </Container>
            </Page>

        </>
    )

}