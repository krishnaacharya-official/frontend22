import {Button} from 'react-bootstrap';
// import { LadderMenuXp, AdminTaxTable } from "@components/organisms";
import LadderMenuXp from '../ladder-menu-xp';
import AdminTaxTable from '../admin-tax-table';
import "./style.scss";

const AdminTax = () => {
  return (
    <>
      <header className="py-sm-2 pb-2 w-100 d-sm-flex align-items-center">
        <div className="d-flex align-items-center me-sm-2 flex-grow-1 mb-3 mb-sm-0">
          <h1 className="d-none d-sm-flex page__title mb-0 fs-3 fw-bolder me-2">
            Tax
          </h1>
          <span className="d-none d-sm-flex text-light fs-5 ml-2">(6)</span>
        </div>
        <div className="ms-sm-auto d-flex">
          <Button variant="info" size="lg" className='me-2 flex__1'>Download CSV</Button>
          <LadderMenuXp />
        </div>
      </header>

      <AdminTaxTable />
    </>
  );
};

export default AdminTax;
