import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button, Modal } from "react-bootstrap";
// import ListItemImg from "@components/atoms/list-item-img";
import ListItemImg from "../../atoms/list-item-img";
import Select from 'react-select'
import "./style.scss";

const AddBankModal = (props) => {
  let stateData = props.stateData
  const options = [
    { value: 'individual ', label: 'Individual ' },
    { value: 'company', label: 'Company' },
  ]
  // console.log(stateData)
  // accountHolderName: '',
  // status: 1,
  // accountHolderType: '',
  // routingNumber: '',
  // accountNumber: '',
  // error: [],
  return (
    <Modal
      {...props}
      // show={props.modalShow} onHide={() => props.setModalShow(false)}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ opacity: 1 }}
      dialogClassName="my-modalbank"
    >
      <Modal.Body>
        <div className="pt-3p px-3p pb-20p d-flex align-items-center">
          <Button variant="link" onClick={props.onHide} className="p-0 ms-auto">
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
          </Button>
        </div>
        <div className="px-2">
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
          <div>
            <div className="input__wrap d-flex">
              <label className="input__label flex__1">
                <input type="text" name="accountNumber" value={stateData.accountNumber} onChange={props.changevalue} />
                <span className="input__span">Account Number</span>
              </label>
            </div>
            {stateData.error && stateData.error.accountNumber && <p className="error">{stateData.error.accountNumber}</p>}
            <div className="input__wrap d-flex">
              <label className="input__label flex__1">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  name="accountHolderType"
                  options={options}
                  onChange={(e) => props.setstate({ ...stateData, accountHolderType: e.value })}

                />
                <span className="input__span">AccountHolder Type</span>
              </label>

            </div>
            {stateData.error && stateData.error.accountHolderType && <p className="error">{stateData.error.accountHolderType}</p>}
            {/* <div className="input__wrap d-flex">
              <label className="input__label flex__1">
                <input type="text" name="routingNumber" value={stateData.routingNumber} onChange={props.changevalue} />
                <span className="input__span">Routing Number</span>
              </label>
            </div>
            {stateData.error && stateData.error.routingNumber && <p className="error">{stateData.error.routingNumber}</p>} */}

            <div className="input__wrap d-flex">
              <label className="input__label flex__1">
                <input type="text" name="accountHolderName" value={stateData.accountHolderName} onChange={props.changevalue} />
                <span className="input__span">AccountHolder Name</span>
              </label>
            </div>
            {stateData.error && stateData.error.accountHolderName && <p className="error">{stateData.error.accountHolderName}</p>}

            <div className="input__wrap d-flex">
              <label className="input__label flex__1">
                <input type="text" name="routingNumber" value={stateData.routingNumber} onChange={props.changevalue} />
                <span className="input__span">Routing Number</span>
              </label>
            </div>
            {stateData.error && stateData.error.routingNumber && <p className="error">{stateData.error.routingNumber}</p>}

            <div className="note text-dark my-2">
              <p>
                Donorport will store this information for deposits and
                withdrawals and share it with payment processors.
              </p>
              <a href="/terms">
                <span className="link text-light">Trust &amp; Security</span>
              </a>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="p-0 border-0 overflow-hidden">
        <Button variant="info" onClick={props.addBankAccount} className="border-top-left-radius-0 py-20p flex__1 m-0 rounded-0">Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddBankModal;
