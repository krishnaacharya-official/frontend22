import React, { useState } from "react";
import { Button, InputGroup, Container, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { RadioToggle } from "@components/atoms";
// import DefaultLayout from "@templates/default-layout";
import "./style.scss";
import DefaultLayout from "../Component/templates/default-layout";
import RadioToggle from "../Component/atoms/radio-toggle";
import ToastAlert from "../../../Common/ToastAlert";
import { validateAll } from "indicative/validator";
import { useParams, useNavigate } from "react-router-dom";
import adminCampaignApi from "../../../Api/admin/adminCampaign";
import FrontLoader from "../../../Common/FrontLoader";
import helper, { getCookie, setCookie, deleteCookie } from "../../../Common/Helper";
import CryptoJS from 'crypto-js';
// import adminCampaignApi from "../../../Api/admin/adminCampaign";


const Apply = () => {
  const [selected, setSelected] = useState("charity");
  const [loading, setLoading] = useState(false)
  const [showPassword, togglePassword] = useState(false);
  const [showCPassword, toggleCPassword] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const [state, setstate] = useState({
    name: "",
    organization: "",
    ein: "",
    email: "",
    confirmEmail: "",
    password: "",
    cpassword: "",
    error: [],
  })

  const {
    error, name, organization, ein, email, confirmEmail, password, cpassword
  } = state;

  function replaceAll(string, search, replace) {
    return string.split(search).join(replace)
  }

  const resetForm = () => {
    setstate({
      ...state,
      name: "",
      organization: "",
      ein: "",
      email: "",
      confirmEmail: "",
      password: "",
      cpassword: "",
      error: [],
    })
  }

  const changevalue = (e) => {
    let value = e.target.value;

    if (e.target.name === 'ein') {
      value = e.target.value.replace(/[^\d.]|\.(?=.*\.)/g, "");
    }
    setstate({
      ...state,
      [e.target.name]: value
    })
  }

  const onValueChange = (e) => {
    setSelected(e.target.name);
  };
  const inputStyle = {
    backgroundColor: "#f8fafd"
  }




  const elemRefs = [];

  const autoTab = (e, i) => {
    // console.log(e.target.name,e.target.value)
    setCookie(e.target.name, e.target.value.replace(/[^\d.]|\.(?=.*\.)/g, ""), 1)
    // setActivationCode({
    //   ...activationCode,
    //   [e.target.name]:e.target.value
    // })
    // setCode(e, i)
    const BACKSPACE_KEY = 8;
    const DELETE_KEY = 46;
    let tabindex = i || 0;
    tabindex = Number(tabindex);
    let elem = null;
    if (e.keyCode === BACKSPACE_KEY) {
      elem = tabindex > 0 && elemRefs[tabindex - 1];
    } else if (e.keyCode !== DELETE_KEY) {
      elem = tabindex < elemRefs.length - 1 && elemRefs[tabindex + 1];
    }
    if (elem) {
      elem.current.focus();
    }

  };

  const Input = (props) => {
    const ref = React.createRef();
    elemRefs.push(ref);
    // let val;
    // if (props.index + 1 === 1) {
    //   val = code1
    // } else if (props.index + 1 === 2) {
    //   val = code2
    // } else if (props.index + 1 === 3) {
    //   val = code3
    // } else {
    //   val = code4
    // }
    return (
      <input
        className="activate__input block"
        data-index={props.index}
        ref={ref}
        maxLength={1}
        name={"code" + (props.index + 1)}
        // value={val}
        // onChange={(e) => setCode(e, props.index)}
        onKeyUp={(e) => props.autoTab(e, props.index)}
        style={inputStyle}
      />
    );
  };

  const blocks = Array.from({ length: 4 }, (element, index) => (
    <Input key={index} index={index} autoTab={autoTab} />
  ));

  const apply = () => {

    const rules = {
      name: 'required',
      organization: 'required',
      ein: 'required',
      email: 'required|email',
      confirmEmail: 'required|same:email',
      password: 'required|min:6',
      cpassword: 'required|same:password',


    }

    const message = {
      'name.required': 'name is Required.',
      'organization.required': 'organization is Required.',
      'ein.required': 'Ein Number is Required.',
      'email.required': 'email is Required.',
      'email.email': 'please enter valid email.',
      'confirmEmail.same': 'Email and Confirm Email Must be same.',
      'password.min': 'Password must be at least 6 characters',
      'password.required': 'Password is Required.',
      'cpassword.required': 'Confirm Password is Required.',
      'cpassword.same': 'Password and ConfirmPassword Must be same.',

    }
    validateAll(state, rules, message).then(async () => {
      const formaerrror = {};
      setstate({
        ...state,
        error: formaerrror
      })
      setLoading(true)
      let data = {}
      data.name = name
      data.email = email
      data.type = selected
      data.ein = ein
      data.organization = organization
      data.password = password



      const applyCampaignAdmin = await adminCampaignApi.applyCampaignAdmin(data)
      if (applyCampaignAdmin) {
        if (!applyCampaignAdmin.data.success) {
          setLoading(false)
          ToastAlert({ msg: applyCampaignAdmin.data.message, msgType: 'error' });
        } else {
          setLoading(false)
          ToastAlert({ msg: applyCampaignAdmin.data.message, msgType: 'success' });
          // navigate('/admin/login', { replace: true });
          resetForm()
        }
      } else {
        setLoading(false)
        ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
      }




    }).catch(errors => {

      setLoading(false)
      const formaerrror = {};
      if (errors.length) {
        errors.forEach(element => {
          formaerrror[element.field] = element.message
        });
      } else {
        ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
      }

      setstate({
        ...state,
        error: formaerrror
      })

    });

  }


  const ActivateCode = async () => {
    let code1 = getCookie("code1")
    let code2 = getCookie("code2")
    let code3 = getCookie("code3")
    let code4 = getCookie("code4")



    // if (params.email) {
    // let decEmail = replaceAll(params.email, "DONORPORT", "/")
    // let bytes = CryptoJS.AES.decrypt(decEmail, 'my-secret-key@123');
    // let decryptedData = bytes.toString(CryptoJS.enc.Utf8);


    if (code1 && code2 && code3 && code4) {
      let finalCode = code1 + code2 + code3 + code4
      // alert(finalCode)

      let data = {}
      // data.email = decryptedData
      data.otp = Number(finalCode)
      setLoading(true)
      const verifyOtp = await adminCampaignApi.VerifyOtpCampaignAdmin(data)
      deleteCookie("code1")
      deleteCookie("code2")
      deleteCookie("code3")
      deleteCookie("code4")
      if (verifyOtp) {

        if (!verifyOtp.data.success) {

          setLoading(false)
          ToastAlert({ msg: verifyOtp.data.message, msgType: 'error' });
        } else {

          setLoading(false)
          ToastAlert({ msg: verifyOtp.data.message, msgType: 'success' });
          navigate('/', { replace: true });
        }
      } else {
        setLoading(false)
        ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
      }
    } else {

      deleteCookie("code1")
      deleteCookie("code2")
      deleteCookie("code3")
      deleteCookie("code4")

      ToastAlert({ msg: 'Please Enter Valid an Activation Code', msgType: 'error' });
    }
    // } else {
    //   setLoading(false)
    //   ToastAlert({ msg: 'Click Email Activation Link for Active Account', msgType: 'error' });
    // }
  }



  return (
    <div className="frontend_pages">
      {/* {console.log(code1 + code2 + code3 + code4)} */}
      <FrontLoader loading={loading} />
      <DefaultLayout>
        <div className="password-reset position-relative ">
          <div className="page__banner"></div>
          <Container fluid className="position-relative pb-5 pt-3">
            <div className="mw-600">
              <h1 className="fs-2 text-dark fw-bolder mb-6p">
                New Organizations
              </h1>
              <div className="fs-5 fw-semibold text-light mb-4">
                Active your account to create your organization's administration
                page or apply to receive your activation code.
              </div>

              <div className="activate mw-400 pb-5 mb-5">
                <div className="activate__icon">
                  <FontAwesomeIcon icon={regular("fingerprint")} />
                </div>
                <div className="activate__code d-flex flex__1 justify-content-around">
                  {blocks}
                </div>
                <Button variant="info" size="lg" className="ms-2 fw-bold fs-6" onClick={() => ActivateCode()}>
                  Activate
                </Button>
              </div>

              <div className="mw-400">
                <h4 className="fw-bolder text-dark">Apply for an account</h4>
                <div className="text-light mb-2">
                  Let us know if you want to post on Donorport. For more
                  information about the application process click here
                </div>
                <Form className="mb-5">
                  <div className="py-1 d-flex justify-content-between fs-4 mb-3">
                    <RadioToggle
                      outline={true}
                      checked={selected === "charity"}
                      value="charity"
                      className="rounded-pill"
                      name="app"
                      onChange={onValueChange}
                    >
                      Charity
                    </RadioToggle>
                    <RadioToggle
                      outline={true}
                      checked={selected === "nonprofit"}
                      value="nonprofit"
                      className="rounded-pill"
                      name="app"
                      onChange={onValueChange}
                    >
                      Nonprofit
                    </RadioToggle>
                    <RadioToggle
                      outline={true}
                      checked={selected === "bcorp"}
                      value="bcorp"
                      className="rounded-pill"
                      name="app"
                      onChange={onValueChange}
                    >
                      B Corp
                    </RadioToggle>
                  </div>

                  <div className="input__wrap d-flex">
                    <label className="input__label flex__1">
                      <input type="text" name="name" value={name} onChange={(e) => changevalue(e)} />
                      <span className="input__span" >Name</span>
                    </label>


                  </div>
                  {error && error.name && <p className="error">{error ? error.name ? error.name : "" : ""}</p>}

                  <div className="input__wrap d-flex">
                    <label className="input__label flex__1">
                      <input type="text" name="organization" value={organization} onChange={(e) => changevalue(e)} />
                      <span className="input__span">Organization</span>
                    </label>
                  </div>
                  {error && error.organization && <p className="error">{error ? error.organization ? error.organization : "" : ""}</p>}

                  <div className="input__wrap d-flex">
                    <label className="input__label flex__1">
                      <input type="text" name="ein" value={ein} onChange={(e) => changevalue(e)} />
                      <span className="input__span">
                        Employer Identification Number (EIN)
                      </span>
                    </label>

                  </div>
                  {error && error.ein && <p className="error">{error ? error.ein ? error.ein : "" : ""}</p>}

                  <div className="input__wrap d-flex">
                    <label className="input__label flex__1">
                      <input type="email" name="email" value={email} onChange={(e) => changevalue(e)} />
                      <span className="input__span">Email</span>
                    </label>

                  </div>
                  {error && error.email && <p className="error">{error ? error.email ? error.email : "" : ""}</p>}

                  <div className="input__wrap d-flex mb-3">
                    <label className="input__label flex__1">
                      <input type="email" name="confirmEmail" value={confirmEmail} onChange={(e) => changevalue(e)} />
                      <span className="input__span" name="confirmEmail">Confirm Email</span>
                    </label>

                  </div>
                  {error && error.confirmEmail && <p className="error">{error ? error.confirmEmail ? error.confirmEmail : "" : ""}</p>}

                  <div className="input__wrap d-flex mb-3">
                    <label className="input__label flex__1">
                      <input type="password" name="password" value={password} onChange={(e) => changevalue(e)} />
                      <span className="input__span" name="password">Password</span>
                    </label>

                  </div>
                  {error && error.password && <p className="error">{error ? error.password ? error.password : "" : ""}</p>}


                  <div className="input__wrap d-flex mb-3">
                    <label className="input__label flex__1">
                      <input type="password" name="cpassword" value={cpassword} onChange={(e) => changevalue(e)} />
                      <span className="input__span" name="cpassword">Confirm Password</span>
                    </label>

                  </div>
                  {error && error.cpassword && <p className="error">{error ? error.cpassword ? error.cpassword : "" : ""}</p>}


                  <Button variant="info" size="lg" className="fw-bold px-4" onClick={() => apply()}>
                    Submit
                  </Button>
                </Form>
              </div>

              <h3 className="fw-bolder text-dark">Why Donorport?</h3>

              <div className="fee__list d-sm-flex fs-5 text-light">
                <div className="">
                  <div className="d-flex align-items-center my-2">
                    <FontAwesomeIcon
                      icon={solid("check")}
                      className="fs-4 me-3"
                    />
                    <span>Organization keeps 100% of the proceeds</span>
                  </div>
                  <div className="d-flex align-items-center my-2">
                    <FontAwesomeIcon
                      icon={solid("check")}
                      className="fs-4 me-3"
                    />
                    <span>Manage all of your tax receipts on one place</span>
                  </div>
                  <div className="d-flex align-items-center my-2">
                    <FontAwesomeIcon
                      icon={solid("check")}
                      className="fs-4 me-3"
                    />
                    <span>
                      Scale your donations using the donation amount tool
                    </span>
                  </div>
                </div>

                <div>
                  <div className="d-flex align-items-center my-2">
                    <FontAwesomeIcon
                      icon={solid("check")}
                      className="fs-4 me-3"
                    />
                    <span>
                      Completely transparent; Sales receipts, need media
                    </span>
                  </div>
                  <div className="d-flex align-items-center my-2">
                    <FontAwesomeIcon
                      icon={solid("check")}
                      className="fs-4 me-3"
                    />
                    <span>Money back guaranteed for unfunded items</span>
                  </div>
                  <div className="d-flex align-items-center my-2">
                    <FontAwesomeIcon
                      icon={solid("check")}
                      className="fs-4 me-3"
                    />
                    <span>24/7 Support for Organizations and Donors</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Apply;
