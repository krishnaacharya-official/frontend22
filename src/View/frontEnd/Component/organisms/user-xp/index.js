import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import IconButton from "@components/molecules/icon-button";

// import { LadderMenuXp, XpTable, ShareWidget } from "@components/organisms";
import ShareWidget from "../share-widget";
import LadderMenuXp from "../ladder-menu-xp";
import XpTable from "../xp-table";
import Avatar from "../../atoms/avatar";
import AvatarImg from "../../../../../assets/images/avatar.jpeg";

import "./style.scss";

const UserItems = () => {
  return (
    <>
      <header className="py-sm-2 pb-2 w-100 d-sm-flex align-items-center">
        <div className="d-flex align-items-center me-sm-2 flex-grow-1 mb-3 mb-sm-0">
          <h1 className="d-none d-sm-flex page__title mb-0 fs-3 fw-bolder me-2">
            My XP
          </h1>
          <Avatar
            size={35}
            avatarUrl={AvatarImg}
            border={0}
            shadow={false}
            className="mr-12p"
          />

          <span className="fs-7 text-light mr-2">Your Rank</span>

          <IconButton
            bgColor="#a278fc"
            className="btn__xs rounded-pill ms-2"
            icon={<FontAwesomeIcon icon={solid("narwhal")} />}
          >
            Norwhal
          </IconButton>
          <a href="/" className="text-info fw-bold fs-5 ms-auto me-1">
            3,340 xp
          </a>
          <ShareWidget />
        </div>
        <div className="ms-sm-auto">
          
          <LadderMenuXp />
        </div>
      </header>

      <XpTable />
    </>
  );
};

export default UserItems;
