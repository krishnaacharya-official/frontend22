import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState, useEffect } from "react";

// import { ListItemImg, ToggleSwitch } from "@components/atoms";

import ListItemImg from "../../atoms/list-item-img";
import ToggleSwitch from "../../atoms/toggle-switch";
import { Link } from "react-router-dom";
import AddBankModal from "../../molecules/add-bank-modal";
import "./style.scss";
import adminCampaignApi from "../../../../../Api/admin/adminCampaign";
import FrontLoader from "../../../../../Common/FrontLoader";

import { validateAll } from "indicative/validator";
import ToastAlert from "../../../../../Common/ToastAlert"
import { confirmAlert } from "react-confirm-alert"
import { encryptData, decryptData } from "../../../../../Common/Helper";

const PaymentMethod = () => {
  const [modalShow, setModalShow] = useState(false);
  const [bankAccountList, setBankAccountList] = useState([]);
  const CampaignAdminAuthToken = localStorage.getItem('CampaignAdminAuthToken');
  const [loading, setLoading] = useState(false)
  const [update, setUpdate] = useState(false)


  const [state, setstate] = useState({
    accountHolderName: '',
    status: 1,
    accountHolderType: '',
    routingNumber: '',
    accountNumber: '',
    error: [],
  })
  const {
    status, accountHolderName, accountHolderType, routingNumber, error, accountNumber
  } = state;

  useEffect(() => {
    (async () => {



      setLoading(true)
      const getAccountList = await adminCampaignApi.listBankAccount(CampaignAdminAuthToken);
      if (getAccountList.data.success === true) {
        // console.log(getAccountList)
        setBankAccountList(getAccountList.data.data)
      }

      setLoading(false)

    })()
  }, [update])

  const changevalue = (e) => {
    let value = e.target.value;

    if (e.target.name === 'routingNumber' || e.target.name === 'accountNumber') {
      value = e.target.value.replace(/[^\d.]|\.(?=.*\.)/g, "");
    }
    setstate({
      ...state,
      [e.target.name]: value
    })
  }

  const resetForm = () => {
    setModalShow(false);
    setstate({
      ...state,
      accountHolderName: '',
      status: 1,
      accountHolderType: '',
      RoutingNumber: '',
      accountNumber: '',
      error: [],
    });

  }
  const openModel = () => {
    setModalShow(true);
    setstate({
      ...state,
      accountHolderName: '',
      status: 1,
      accountHolderType: '',
      routingNumber: '',
      accountNumber: '',
      error: [],
    });
  }

  const addBankAccount = (e) => {
    // console.log(status)
    const rules = {
      accountHolderName: 'required',
      accountHolderType: 'required',
      routingNumber: 'required',
      accountNumber: 'required',


    }
    const message = {
      'accountHolderType.required': 'AccountHolder Type is Required.',
      'accountHolderName.required': 'Category accountHolderName is Required.',
      'routingNumber.required': 'Routing Number is Required.',
      'accountNumber.required': 'Account Number is Required.',

    }
    validateAll(state, rules, message).then(async () => {
      const formaerrror = {};
      setstate({
        ...state,
        error: formaerrror
      })

      let data = {}
      data.accountHolderName = encryptData(accountHolderName)
      data.accountHolderType = encryptData(accountHolderType)
      data.status = status
      data.routingNumber = encryptData(routingNumber.toString())
      data.accountNumber = encryptData(accountNumber.toString())



      // Api Call for update Profile
      setLoading(true)
      const addBank = await adminCampaignApi.addBankAccount(CampaignAdminAuthToken, data)


      if (addBank) {
        if (addBank.data.success === false) {
          setLoading(false)
          ToastAlert({ msg: addBank.data.message, msgType: 'error' });

        } else {
          if (addBank.data.success === true) {
            resetForm()
            setLoading(false)
            setUpdate(!update)
            ToastAlert({ msg: addBank.data.message, msgType: 'success' });
          }
        }
      } else {
        setLoading(false)
        ToastAlert({ msg: 'Bank Account Not Added', msgType: 'error' });
      }

    }).catch(errors => {
      // console.log(errors)
      setLoading(false)
      const formaerrror = {};
      if (errors && errors.length) {
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

  const removeBank = (id) => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to Remove Account.',
      buttons: [
        {
          label: 'Yes',
          onClick: (async () => {
            setLoading(true)
            if (id !== '') {
              const removeBank = await adminCampaignApi.deleteBankAccount(CampaignAdminAuthToken, id)
              if (removeBank) {
                if (removeBank.data.success === false) {
                  setLoading(false)
                  ToastAlert({ msg: removeBank.data.message, msgType: 'error' });
                } else {
                  if (removeBank.data.success === true) {
                    setLoading(false)
                    setUpdate(!update)
                    ToastAlert({ msg: removeBank.data.message, msgType: 'success' });
                  }
                }
              } else {
                setLoading(false)
                ToastAlert({ msg: 'Account not Removed', msgType: 'error' });
              }
            } else {
              setLoading(false)
              ToastAlert({ msg: 'Account not Removed id Not found', msgType: 'error' });
            }
          })
        },
        {
          label: 'No',
          // onClick: () => alert('Click No')
        }
      ]
    });
  }


  return (
    <div className="mw-600">
      <div className="mb-5">
        <h4 className="fw-bolder">Saved Payment Methods</h4>
        <div className="text-subtext mb-3">
          Credit Cards you saved when donating
        </div>

        <div className="linked__list d-flex flex-column">
          <div className="linked__item d-flex align-items-center p-1 border">
            <div className="accounts__icon">
              <ListItemImg
                size={75}
                className="bg-white"
                imgSrc="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/62277f679099844cc42cc1d1_5b5e656493af1e0441cd892a_mc_vrt_pos.svg"
              />
            </div>
            <div className=" flex__1 mx-2 text-break">
              <div className="accounts__email fw-bold">Ending in 7709</div>
              <div className="fs-7 mb-3p">Mastercard</div>
              <div className="fs-7 text-subtext">8 / 2019</div>
            </div>
            <Button variant="link" className="text-danger fs-7">
              remove
            </Button>
          </div>

          <div className="linked__item d-flex align-items-center p-1 border">
            <div className="accounts__icon">
              <ListItemImg
                size={75}
                className="rounded-circle"
                imgSrc="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5b5e7b0e93af1ec003cd9a58_paypal-seeklogo.com.svg"
              />
            </div>
            <div className="accounts__email fw-bolder flex__1 mx-2 text-break">
              k************l@gmail.com
            </div>
            <Button variant="link" className="text-danger fs-7">
              remove
            </Button>
          </div>

          <div className="fs-7">
            <FontAwesomeIcon
              icon={regular("info-circle")}
              className="mr-3p text-info"
            />
            <span className="text-light">
              To change your password click here
            </span>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h4 className="fw-bolder">Direct Deposit Accounts</h4>
        <div className="d-flex align-items-center mb-3">
          <span className="text-subtext flex__1">
            Direct Deposit information for contributions from your donors
          </span>
          <Button variant="info" onClick={() => openModel()}>Add Bank</Button>
          <AddBankModal show={modalShow} onHide={() => setModalShow(false)} changevalue={changevalue} stateData={state} setstate={setstate} addBankAccount={addBankAccount} />
        </div>
        {bankAccountList.length > 0 &&
          bankAccountList.map((list, i) => {
            return (
              <div className="linked__list d-flex flex-column">
                <div className="linked__item d-flex align-items-center p-2 border">
                  <div className="accounts__icon">
                    <ListItemImg
                      className="bg-white"
                      icon={
                        <FontAwesomeIcon
                          icon={regular("building-columns")}
                          className="fs-3 text-subtext"
                        />
                      }
                    />
                  </div>
                  <div className=" flex__1 mx-2 text-break">
                    <div className="accounts__email fw-bold">{decryptData(list.accountNumber)}</div>
                    {/* <div className="fs-7 mb-3p">TD Bank</div> */}
                    {/* <div className="fs-7 text-subtext">11456 - 009</div> */}
                  </div>

                  <div className="flex__1">
                    <FontAwesomeIcon
                      icon={solid("shield-halved")}
                      className="fs-3 text-primary"
                    />
                  </div>
                  <Button variant="link" className="text-danger" onClick={() => removeBank(list._id)}>
                    unlink
                  </Button>
                </div>
              </div>
            )
          })

        }


        <div className="px-1 py-20p mt-1 mb-20p fs-7 text-subtext">
          <FontAwesomeIcon
            icon={solid("shield-halved")}
            className="fs-5 text-primary me-2"
          />
          This method will be used for deposits from donations / items you post.
        </div>

        <div className="note text-dark">
          Funds will be deposited into this account when items you post are
          fully funded or you receive donations from users (both one-time &
          recurring).
        </div>
      </div>

      <div className="mb-5">
        <h4 className="fw-bolder">Cryptocurrencyies</h4>
        <div className="text-subtext mb-4">
          Allow your donors to send funds via cryptocurrency. Choose the coins
          you wish to accept. These payment options will be presented to the
          donor at checkout.
        </div>

        <ul className="list-unstyled crypto__list">
          <li className="list__item d-flex align-items-center py-1">
            <span className="crypto__icon">
              <img
                className="img-fluid"
                src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620e5ca7ee8035585abb93b9_usd-coin-usdc-logo.svg"
                alt=""
              />
            </span>
            <span className="fs-5 fw-semibold text-subtext flex__1">
              USD Coin
            </span>
            <ToggleSwitch />
          </li>
          <li className="list__item d-flex align-items-center py-1">
            <span className="crypto__icon">
              <img
                className="img-fluid"
                src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620e5d4c36e4c982f37e9894_Bitcoin.svg"
                alt=""
              />
            </span>
            <span className="fs-5 fw-semibold text-subtext flex__1">
              Bitcoin
            </span>
            <ToggleSwitch />
          </li>
          <li className="list__item d-flex align-items-center py-1">
            <span className="crypto__icon">
              <img
                className="img-fluid"
                src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/620e5d6c9582b74e722c3122_ethereum-eth.svg"
                alt=""
              />
            </span>
            <span className="fs-5 fw-semibold text-subtext flex__1">
              Ethereum
            </span>
            <ToggleSwitch />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentMethod;
