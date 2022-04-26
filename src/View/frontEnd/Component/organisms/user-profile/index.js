import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { validateAll } from "indicative/validator";
import ToastAlert from "../../../../../Common/ToastAlert"
// import { ToggleSwitch } from "@components/atoms";
// import { LadderMenu } from "@components/organisms";
import ToggleSwitch from "../../atoms/toggle-switch";
import LadderMenu from "../ladder-menu";
import { Outlet, Link, useLocation, useOutletContext } from "react-router-dom";
import FrontLoader from "../../../../../Common/FrontLoader";
import Select from "react-select"
import locationApi from "../../../../../Api/frontEnd/location";
import userApi from "../../../../../Api/frontEnd/user";
import { UserContext } from '../../../../../App';
import { Button } from "react-bootstrap";



import "./style.scss";

const UserProfile = (props) => {
  const user = useContext(UserContext)
  const userAuthToken = localStorage.getItem('userAuthToken');
  const [update, setUpdate] = useState(false)
  const [data, setData] = useOutletContext();
  const [countryList, setCountryList] = useState([])
  const [stateList, setStateList] = useState([])
  const [cityList, setCityList] = useState([])

  const [defaultCountry, setDefaultCountry] = useState([])
  const [defaultState, setDefaultState] = useState([])
  const [defaultCity, setDefaultCity] = useState([])



  const [loading, setLoading] = useState(false)
  const [state, setState] = useState({
    id: "",
    name: "",
    email: "",
    street: "",
    city: "",
    stateId: "",
    country: "",
    zip: "",
    error: []
  })
  const { name, email, street, city, stateId, country, zip, error } = state
  const [check, setCheck] = useState(false);

  const getCountryList = async () => {
    let tempArray = []

    const getCountryList = await locationApi.countryList(userAuthToken);
    if (getCountryList) {
      if (getCountryList.data.success) {
        if (getCountryList.data.data.length > 0) {
          getCountryList.data.data.map((country, i) => {
            let Obj = {}
            Obj.value = country.id
            Obj.label = country.country
            tempArray.push(Obj)
          })
          setCountryList(tempArray)
        }
      }
    }
  }
  const onChangeCountry = async (e) => {

    let tempArray = []

    setState({
      ...state,
      country: e.value
    })

    const getCountryStateList = await locationApi.stateListByCountry(userAuthToken, e.value);
    if (getCountryStateList) {
      if (getCountryStateList.data.success) {
        if (getCountryStateList.data.data.length > 0) {
          getCountryStateList.data.data.map((state, i) => {
            let Obj = {}
            Obj.value = state.id
            Obj.label = state.state
            tempArray.push(Obj)
          })
          setStateList(tempArray)
        }
      }
    }

  }
  const onChangeState = async (e) => {

    let tempArray = []
    setState({
      ...state,
      stateId: e.value
    })
    const getStateCityList = await locationApi.cityListByState(userAuthToken, e.value);
    if (getStateCityList) {
      if (getStateCityList.data.success) {
        if (getStateCityList.data.data.length > 0) {
          getStateCityList.data.data.map((city, i) => {
            let Obj = {}
            Obj.value = city.id
            Obj.label = city.city
            tempArray.push(Obj)
          })
          setCityList(tempArray)
        }
      }
    }

  }

  const changevalue = async (e) => {
    let value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    })
    // setTotalFees(Number(platformFees) + Number(transectionFees))
  }

  const onClickCity = async (e) => {
    setState({
      ...state,
      city: e.value
    })
  }

  useEffect(() => {
    (async () => {
      setLoading(true)
      await getCountryList()
      // console.log(data)
      setState({
        ...state,
        name: data.name,
        email: data.email,
        city: data.city_id,
        country: data.country_id,
        stateId: data.state_id,
        street: data.street,
        zip: data.zip,
      })
      // setDefaultCountry(countryList.find(x => x.value === data.country_id));
      // console.log(countryList.find(x => x.value === data.country_id))
      setLoading(false)
    })()
  }, [data._id])

  useEffect(() => {
    setDefaultCountry(countryList.find(x => x.value === data.country_id));
    // setDefaultState(stateList.find(x => x.value === data.state_id));
    // setDefaultCity(cityList.find(x => x.value === data.city_id));

  }, [countryList, data._id])


  const updateProfile = () => {
    const rules = {
      name: "required",
      street: "required",
      zip: "required",
    }

    const message = {
      'name.required': 'Name is Required.',
      'street.required': 'Street is Required.',
      'zip.required': 'zip is Required.',
    }

    validateAll(state, rules, message).then(async () => {
      const formaerrror = {};
      setState({
        ...state,
        error: formaerrror
      })
      let fdata = {}
      fdata.name = name
      fdata.street = street
      fdata.zip = zip
      fdata.city_id = city
      fdata.state_id = stateId
      fdata.country_id = country

      setLoading(true)
      const addUser = await userApi.updateProfile(userAuthToken, fdata, data._id)
      if (addUser) {
        if (!addUser.data.success) {
          setLoading(false)
          ToastAlert({ msg: addUser.data.message, msgType: 'error' });
        } else {
          setUpdate(!update)
          user.setUpdateOrg(!user.isUpdateOrg)
          setData(fdata)
          setLoading(false)
          ToastAlert({ msg: addUser.data.message, msgType: 'success' });

        }

      } else {
        setLoading(false)
        ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
      }


    }).catch(errors => {
      console.log(errors)
      setLoading(false)
      const formaerrror = {};
      if (errors.length) {
        errors.forEach(element => {
          formaerrror[element.field] = element.message
        });
      } else {
        ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
      }

      setState({
        ...state,
        error: formaerrror
      })

    });

  }


  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]

  // console.log(defaultCountry)
  return (
    <>
      <FrontLoader loading={loading} />
      <div className="mb-5">
        <h4 className="fw-bolder">Personal</h4>
        <div className="text-subtext mb-3">
          This info is only shared with the Organizations you donate to
        </div>

        <div className="input__wrap d-flex">
          <label className="input__label flex__1">
            <input type="text" name="name" value={name} onChange={(e) => changevalue(e)} />
            <span className="input__span">Name</span>
          </label>
        </div>
        {error && error.name && <p className="error">{error.name}</p>}


        <div className="input__wrap d-flex">
          <label className="input__label flex__1">
            <input type="text" value={email} disabled />
            <span className="input__span">Email</span>
          </label>
        </div>

        <div className="d-flex align-items-center py-3">
          <ToggleSwitch
            isOn={check}
            handleToggle={() => setCheck(!check)}
            colorOne="#06D6A0"
            colorTwo="#efefef"
          />{" "}
          <span className="fs-7 text-subtext ms-2">
            Hide your order history on public posts for items & organizations
            you donate to.
          </span>
          <FontAwesomeIcon
            icon={solid("eye-slash")}
            className="icon__hide fs-4 ms-2"
          />
        </div>
      </div>

      <div className="mb-5">
        <h4 className="fw-bolder">Address</h4>
        <div className="text-subtext mb-3">For invoices & tax receipts</div>
        <div className="note note--inputs">
          Your personal information is secured and not shared with anyone. We
          use this information to process tax receipts for your donations.
        </div>
        <div className="input__wrap d-flex">
          <label className="input__label flex__1">
            <input type="text" name="street" value={street} onChange={(e) => changevalue(e)} />
            <span className="input__span">Street Name</span>
          </label>
        </div>
        {error && error.street && <p className="error">{error.street}</p>}

        <div className="input__wrap d-flex">
          <label className="input__label flex__1">
            {/* <input type="text" value='' /> */}
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={defaultCountry}
              name="country"
              options={countryList}
              onChange={onChangeCountry}
            />
            <span className="input__span">Country</span>
          </label>
        </div>

        <div className="input__wrap d-flex">
          <label className="input__label flex__1">
            {/* <input type="text" value='' /> */}
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={defaultState}
              name="state"
              options={stateList}
              onChange={onChangeState}

            />
            <span className="input__span">State/Province</span>
          </label>
        </div>

        <div className="input__wrap d-flex">
          <label className="input__label flex__1">
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={defaultCity} 
              name="city"
              options={cityList}
              onChange={onClickCity}

            />
            <span className="input__span">City</span>
          </label>
        </div>





        <div className="input__wrap d-flex">
          <label className="input__label flex__1">
            <input type="text" name="zip" value={zip} onChange={(e) => changevalue(e)} />
            <span className="input__span">Zipcode</span>
          </label>
        </div>
        {error && error.zip && <p className="error">{error.zip}</p>}

      </div>
      <Button variant="info" className="mb-3" onClick={() => updateProfile()}>Save Details</Button>
      <div className="mb-5">
        <h4 className="fw-bolder">Language & Currency</h4>
        <div className="text-subtext mb-3">
          Set and change your default location, language and currency
        </div>
        <div className="w-400">
          <div className="mb-2">
            <LadderMenu items={["English", "French", "Manderin"]} />
          </div>
          <LadderMenu items={["USD", "CAD", "Yen"]} />
        </div>
      </div>

      <div className="mb-5">
        <h4 className="fw-bolder">Account Deactivation</h4>
        <div className="text-subtext mb-3">
          Permanently delete your Donorport account
        </div>
        <div className="w-400">
          <div className="deactivate">
            <h5>Do you really want to leave us?</h5>
            <ul className="list list--deactivate">
              <li className="list__item">
                <div>
                  All account information will be lost including order history
                  and payment information.
                </div>
              </li>
              <li className="list__item">
                <div>Active orders will be cancelled.</div>
              </li>
              <li className="list__item">
                <div>This cannot be undone.</div>
              </li>
            </ul>
            <a href="#" className="btn btn--deactivate">
              Deactivate
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
