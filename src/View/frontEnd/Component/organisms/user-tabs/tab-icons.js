import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const DashboardIcon = ({ active }) => {
  const icon = active ? (
    <FontAwesomeIcon icon={solid("desktop")} />
  ) : (
    <FontAwesomeIcon icon={regular("desktop")} />
  );
  return icon;
};

const ItemsIcon = ({ active }) => {
  const icon = active ? (
    <FontAwesomeIcon icon={solid("piggy-bank")} />
  ) : (
    <FontAwesomeIcon icon={regular("piggy-bank")} />
  );
  return icon;
};

const XpIcon = ({ active }) => {
  const icon = active ? (
    <FontAwesomeIcon icon={solid("sparkles")} />
  ) : (
    <FontAwesomeIcon icon={regular("sparkles")} />
  );
  return icon;
};

const TaxIcon = ({ active }) => {
  const icon = active ? (
    <FontAwesomeIcon icon={solid("money-bill-1-wave")} />
  ) : (
    <FontAwesomeIcon icon={regular("money-bill-1-wave")} />
  );
  return icon;
};

const HistoryIcon = ({ active }) => {
  const icon = active ? (
    <FontAwesomeIcon icon={solid("clock")} />
  ) : (
    <FontAwesomeIcon icon={regular("clock")} />
  );
  return icon;
};

const SettingsIcon = ({ active }) => {
  const icon = active ? (
    <FontAwesomeIcon icon={solid("gear")} />
  ) : (
    <FontAwesomeIcon icon={regular("gear")} />
  );
  return icon;
};

export {DashboardIcon, ItemsIcon, XpIcon, HistoryIcon, TaxIcon, SettingsIcon};
