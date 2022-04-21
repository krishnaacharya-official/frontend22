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

const Apply = () => {
  const [selected, setSelected] = useState("charity");
  const [loading, setLoading] = useState(false)

  const [code1, setCode1] = useState('')
  const [code2, setCode2] = useState('')
  const [code3, setCode3] = useState('')
  const [code4, setCode4] = useState('')

  const setCode = (e,i) => {
    let index =i+1

      setCode1(e.target.value)
    

  }

  const [state, setstate] = useState({
    name: "",
    organization: "",
    ein: "",
    email: "",
    confirmEmail: "",
    error: [],
  })

  const {
    error, name, organization, ein, email, confirmEmail
  } = state;

  const resetForm = () => {
    setstate({
      ...state,
      name: "",
      organization: "",
      ein: "",
      email: "",
      confirmEmail: "",
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
    return (
      <input
        className="activate__input block"
        data-index={props.index}
        ref={ref}
        maxLength={1}
        onChange={(e) =>setCode(e,props.index)}
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

    }

    const message = {
      'name.required': 'name is Required.',
      'organization.required': 'organization is Required.',
      'ein.required': 'Ein Number is Required.',
      'email.required': 'email is Required.',
      'email.email': 'please enter valid email.',
      'confirmEmail.same': 'Email and Confirm Email Must be same.',

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



  return (
    <div className="frontend_pages">
    {/* {console.log(code1+code2+code3+code4)} */}
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
                <Button variant="info" size="lg" className="ms-2 fw-bold fs-6">
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
                      <input type="text" name="email" value={email} onChange={(e) => changevalue(e)} />
                      <span className="input__span">Email</span>
                    </label>

                  </div>
                  {error && error.email && <p className="error">{error ? error.email ? error.email : "" : ""}</p>}

                  <div className="input__wrap d-flex mb-3">
                    <label className="input__label flex__1">
                      <input type="text" name="confirmEmail" value={confirmEmail} onChange={(e) => changevalue(e)} />
                      <span className="input__span" name="confirmEmail">Confirm Email</span>
                    </label>

                  </div>
                  {error && error.confirmEmail && <p className="error">{error ? error.confirmEmail ? error.confirmEmail : "" : ""}</p>}

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
