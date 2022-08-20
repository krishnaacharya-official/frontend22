// import React from "react";
import React,{ useState } from "react";
import ToggleSwitch from '../../atoms/toggle-switch'


import "./style.scss";

function NotificationSettings() {
  const [check1, setCheck1] = useState(0);
  const [check2, setCheck2] = useState(0);
  return (
    <div className="notifications-wrap">
      <div>
        <div className="menu__title">
          <h6 className="mb-0">Push Notifications</h6>
        </div>
        <ul className="notify-settings-list list-unstyled">
          <li className="notify__settings-item d-flex align-items-center">
            <div>
              Turn <strong className="text-dark">OFF</strong>&nbsp;all
              notifications
            </div>
            <div className="menu__toggle ms-auto">
              <ToggleSwitch
                isOn={check1}
                handleToggle={() => setCheck1(!check1)}
                colorOne="#efefef"
                colorTwo="#06D6A0"
              />
            </div>
          </li>
          <li className="notify__settings-item d-flex align-items-center">
            <div>Status updates on your purchases</div>
            <div className="menu__toggle ms-auto">
              <ToggleSwitch
                isOn={check2}
                handleToggle={() => setCheck2(!check2)}
                colorOne="#efefef"
                colorTwo="#06D6A0"
              />
            </div>
          </li>
          <li className="notify__settings-item d-flex align-items-center">
            <div>When new items are posted</div>
            <div className="menu__toggle ms-auto">
              <ToggleSwitch
                isOn={check2}
                handleToggle={() => setCheck2(!check2)}
                colorOne="#efefef"
                colorTwo="#06D6A0"
              />
            </div>
          </li>
          <li className="notify__settings-item d-flex align-items-center">
            <div>Milestones (funding, donations)</div>
            <div className="menu__toggle ms-auto">
              <ToggleSwitch
                isOn={check2}
                handleToggle={() => setCheck2(!check2)}
                colorOne="#efefef"
                colorTwo="#06D6A0"
              />
            </div>
          </li>
        </ul>
      </div>

      <div>
        <div className="menu__title">
          <h6 className="mb-0">Organizations</h6>
        </div>
        <ul className="notify-settings-list list-unstyled">
          <li className="notify__settings-item d-flex align-items-center">
            <div>When new items are posted</div>
            <div className="menu__toggle ms-auto">
              <ToggleSwitch
                isOn={check1}
                handleToggle={() => setCheck1(!check1)}
                colorOne="#efefef"
                colorTwo="#06D6A0"
              />
            </div>
          </li>
          <li className="notify__settings-item d-flex align-items-center">
            <div>Changes to Profile</div>
            <div className="menu__toggle ms-auto">
              <ToggleSwitch
                isOn={check2}
                handleToggle={() => setCheck2(!check2)}
                colorOne="#efefef"
                colorTwo="#06D6A0"
              />
            </div>
          </li>
        </ul>
      </div>

      <div>
        <div className="menu__title">
          <h6 className="mb-0">Projects</h6>
        </div>
        <ul className="notify-settings-list list-unstyled">
          <li className="notify__settings-item d-flex align-items-center">
            <div>When new items are posted</div>
            <div className="menu__toggle ms-auto">
              <ToggleSwitch
                isOn={check1}
                handleToggle={() => setCheck1(!check1)}
                colorOne="#efefef"
                colorTwo="#06D6A0"
              />
            </div>
          </li>
          <li className="notify__settings-item d-flex align-items-center">
            <div>When the project is fully funded</div>
            <div className="menu__toggle ms-auto">
              <ToggleSwitch
                isOn={check2}
                handleToggle={() => setCheck2(!check2)}
                colorOne="#efefef"
                colorTwo="#06D6A0"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NotificationSettings;
