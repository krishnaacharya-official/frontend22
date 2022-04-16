// import ToggleSwitch from "@components/atoms/toggle-switch";
import ToggleSwitch from "../../atoms/toggle-switch";

import "./style.scss";

const AdminControl = () => {
  return (
    <>
      <div className="mb-5">
        <h4 className="fw-bolder">Notifciations</h4>
        <div className="text-subtext mb-3">Turn off / on notifications</div>
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="d-flex pe-2 py-1">
              <ToggleSwitch />
            </span>
            <span className="text-subtext fs-7">Notifications</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <span className="d-flex pe-2 py-1">
              <ToggleSwitch />
            </span>
            <span className="text-subtext fs-7">Email</span>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h4 className="fw-bolder">Alerts</h4>
        <div className="text-subtext mb-3">
          Notify you when there is activity on your organization account
        </div>
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="d-flex pe-2 py-1">
              <ToggleSwitch />
            </span>
            <span className="text-subtext fs-7">Your items are funded</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <span className="d-flex pe-2 py-1">
              <ToggleSwitch />
            </span>
            <span className="text-subtext fs-7">You receive a donation</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <span className="d-flex pe-2 py-1">
              <ToggleSwitch />
            </span>
            <span className="text-subtext fs-7">
              Someone follows your profile
            </span>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h4 className="fw-bolder">Orders</h4>
        <div className="text-subtext mb-3">
          Notify you when there is activity on items you post
        </div>
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="d-flex pe-2 py-1">
              <ToggleSwitch />
            </span>
            <span className="text-subtext fs-7">Sales on your posts</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <span className="d-flex pe-2 py-1">
              <ToggleSwitch />
            </span>
            <span className="text-subtext fs-7">Your item is 100% funded</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <span className="d-flex pe-2 py-1">
              <ToggleSwitch />
            </span>
            <span className="text-subtext fs-7">
              Your order is ready for purchase
            </span>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h4 className="fw-bolder">Billing</h4>
        <div className="text-subtext mb-3">Notify you when there are issues with your payments / saved cards</div>
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="d-flex pe-2 py-1">
              <ToggleSwitch />
            </span>
            <span className="text-subtext fs-7">There was a problem with your deposit</span>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h4 className="fw-bolder">Other</h4>
        <div className="text-subtext mb-3">Site functionality and more</div>
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="d-flex pe-2 py-1">
              <ToggleSwitch />
            </span>
            <span className="text-subtext fs-7">Keep profile privte</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminControl;
