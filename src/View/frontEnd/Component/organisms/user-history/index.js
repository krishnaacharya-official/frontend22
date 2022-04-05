import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";

import IconToggle from "../../atoms/icon-toggle";
// import { HistoryList } from "@components/organisms"
import HistoryList from "../history-list";

import "./style.scss";

const UserXp = () => {
  return (
    <>
      <header className="py-sm-2 pb-2 mb-3 w-100 d-sm-flex align-items-center">
        <h1 className="d-none d-sm-flex page__title mb-0 fs-3 fw-bolder me-2">
          Order History
        </h1>
        <span className="d-none d-sm-flex text-light fs-5 ml-2">(6)</span>

        <IconToggle
          className="text-info ms-2 d-none d-sm-block"
          icon={<FontAwesomeIcon icon={regular("maximize")} />}
          checkedIcon={<FontAwesomeIcon icon={regular("minimize")} />}
        />
      </header>

      <HistoryList />
    </>
  );
};

export default UserXp;
