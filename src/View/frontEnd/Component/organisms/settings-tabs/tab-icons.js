import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ProfileIcon = ({ active }) => {
  const icon = active ? (
    <FontAwesomeIcon icon={solid("circle-user")} />
  ) : (
    <FontAwesomeIcon icon={regular("circle-user")} />
  );
  return icon;
};

const AccountsIcon = ({ active }) => {
  const icon = active ? (
    <FontAwesomeIcon icon={solid("link")} />
  ) : (
    <FontAwesomeIcon icon={regular("link")} />
  );
  return icon;
};

const BillingIcon = ({ active }) => {
  const icon = active ? (
    <FontAwesomeIcon icon={solid("briefcase")} />
  ) : (
    <FontAwesomeIcon icon={regular("briefcase")} />
  );
  return icon;
};

const ControlsIcon = ({ active }) => {
  const icon = active ? (
    <FontAwesomeIcon icon={solid("toggle-on")} />
  ) : (
    <FontAwesomeIcon icon={regular("toggle-on")} />
  );
  return icon;
};

const AdministratorIcon = ({ active }) => {
  const icon = active ? (
    <FontAwesomeIcon icon={solid("shield")} />
  ) : (
    <FontAwesomeIcon icon={regular("shield")} />
  );
  return icon;
};


export {ProfileIcon, AccountsIcon, BillingIcon, ControlsIcon, AdministratorIcon};
