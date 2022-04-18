import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// import { ToggleSwitch } from "@components/atoms";
// import { LadderMenu } from "@components/organisms";
import ToggleSwitch from "../../atoms/toggle-switch";
import LadderMenu from "../ladder-menu";
import { Outlet, Link, useLocation, useOutletContext } from "react-router-dom";
import FrontLoader from "../../../../../Common/FrontLoader";


import "./style.scss";

const UserProfile = (props) => {
  const [data, setData] = useOutletContext();
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState({
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


  useEffect(() => {
    // console.log(data)
    setLoading(true)
    setState({
      ...state,
      name:data.name,
      email:data.email,
      city:data.city_id,
      country:data.country_id,
      stateId:data.state_id,
      street:data.street,
      zip:data.zip,
    })

    setLoading(false)

}, [data._id])
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
            <input type="text" value={name} />
            <span className="input__span">Name</span>
          </label>
        </div>

        <div className="input__wrap d-flex">
          <label className="input__label flex__1">
            <input type="text" value={email} />
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
            <input type="text" value={street} />
            <span className="input__span">Street Name</span>
          </label>
        </div>

        <div className="input__wrap d-flex">
          <label className="input__label flex__1">
            <input type="text" value='' />
            <span className="input__span">City</span>
          </label>
        </div>

        <div className="input__wrap d-flex">
          <label className="input__label flex__1">
            <input type="text" value='' />
            <span className="input__span">State/Province</span>
          </label>
        </div>

        <div className="input__wrap d-flex">
          <label className="input__label flex__1">
            <input type="text" value='' />
            <span className="input__span">Country</span>
          </label>
        </div>

        <div className="input__wrap d-flex">
          <label className="input__label flex__1">
            <input type="text" />
            <span className="input__span">Zipcode</span>
          </label>
        </div>
      </div>

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
