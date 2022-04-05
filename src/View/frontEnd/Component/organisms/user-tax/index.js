
// import { LadderMenu, TaxTable } from "@components/organisms";

import LadderMenu from "../ladder-menu";
import TaxTable from "../tax-table";

import "./style.scss";

const UserTax = () => {
  return (
    <>
      <header className="py-sm-2 pb-2 w-100 d-sm-flex align-items-center">
        <div className="me-sm-2 flex-grow-1 mb-3 mb-sm-0">
          <h1 className="d-none d-sm-flex page__title fs-3 fw-bolder">
            Annual Tax Receipts
          </h1>
          <p className="d-none d-sm-block fs-6 text-light">
            Donorport sends you an email containing a .zip file of all tax
            deductibule receipts for donations you made each year. Resend this
            email or download your receipts here.
          </p>
        </div>
        <div className="ms-sm-auto">
          <LadderMenu />
        </div>
      </header>

      <TaxTable />
    </>
  );
};

export default UserTax;
