import { useState } from "react";
import ToggleSwitch from "../../atoms/toggle-switch";

import "./style.scss";

const UserControl = () => {
  const [check, setCheck] = useState(false);
  return (
    <>
      <div className="mb-5">
        <h4 className="fw-bolder">Notifciations</h4>
        <div className="text-subtext mb-3">Turn off / on notifications</div>
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="d-flex p-2">
              <ToggleSwitch
                isOn={check}
                handleToggle={() => setCheck(!check)}
                colorOne="#efefef"
                colorTwo="#06D6A0"
              />
            </span>
            <span className="text-subtext fs-7">Push Notifications</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <span className="d-flex p-2">
              <ToggleSwitch
                isOn={check}
                handleToggle={() => setCheck(!check)}
                colorOne="#efefef"
                colorTwo="#06D6A0"
              />
            </span>
            <span className="text-subtext fs-7">Email Notifications</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <span className="d-flex p-2">
              <ToggleSwitch
                isOn={check}
                handleToggle={() => setCheck(!check)}
                colorOne="#efefef"
                colorTwo="#06D6A0"
              />
            </span>
            <span className="text-subtext fs-7">
              Projects / Organizations you Follow
            </span>
          </div>

          <div className="d-flex align-items-center mb-2">
            <span className="d-flex p-2">
              <ToggleSwitch
                isOn={check}
                handleToggle={() => setCheck(!check)}
                colorOne="#efefef"
                colorTwo="#06D6A0"
              />
            </span>
            <span className="text-subtext fs-7">Order Updates</span>
          </div>

          <div className="d-flex align-items-center mb-2">
            <span className="d-flex p-2">
              <ToggleSwitch
                isOn={check}
                handleToggle={() => setCheck(!check)}
                colorOne="#efefef"
                colorTwo="#06D6A0"
              />
            </span>
            <span className="text-subtext fs-7">Media Updates</span>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h4 className="fw-bolder">Account</h4>
        <div className="text-subtext mb-3">
          Customize your account to suite your needs
        </div>
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="d-flex p-2">
              <ToggleSwitch
                isOn={check}
                handleToggle={() => setCheck(!check)}
                colorOne="#efefef"
                colorTwo="#06D6A0"
              />
            </span>
            <span className="text-subtext fs-7">Hide sold items</span>
          </div>
        </div>
      </div>

      <div className="">
        <h4 className="fw-bolder">Orders</h4>
        <div className="text-subtext mb-3">Settings related to your orders</div>
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="d-flex p-2">
              <ToggleSwitch
                isOn={check}
                handleToggle={() => setCheck(!check)}
                colorOne="#efefef"
                colorTwo="#06D6A0"
              />
            </span>
            <span className="text-subtext fs-7">
              Always collapse Order History
            </span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <span className="d-flex p-2">
              <ToggleSwitch
                isOn={check}
                handleToggle={() => setCheck(!check)}
                colorOne="#efefef"
                colorTwo="#06D6A0"
              />
            </span>
            <span className="text-subtext fs-7">
              Notify me if there are issues processing a payment
            </span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <span className="d-flex p-2">
              <ToggleSwitch
                isOn={check}
                handleToggle={() => setCheck(!check)}
                colorOne="#efefef"
                colorTwo="#06D6A0"
              />
            </span>
            <span className="text-subtext fs-7">
              Only show me items that are tax deductible
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserControl;
