import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import './style.scss';

const LadderMenuXp = (props) => {
  const [active, setActive] = useState(0);

  const handleClose = () => {
    setActive(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div className="ladder__menu position-relative">
        <div className="ladder__dropdown--selected" onClick={() => setActive(true)}>
          <div className="ladder__selected">
            <div className="ladder__icon">
              {props.listBy !== 'ALL' ? (
                <img alt="" src={props.urlIcon} />
              ) : (
                <FontAwesomeIcon icon={solid('arrow-down-long')} className="icon icon--showall" />
              )}
            </div>
            <span style={{ textTransform: 'capitalize' }}>
              {props.listBy === 'ALL'
                ? 'Show All'
                : props.listBy === 'DONATED'
                ? 'Donated'
                : props.listBy === 'FOLLOWED'
                ? 'Followed'
                : props.listBy === 'SHARED'
                ? 'Shared'
                : props.listBy === 'BOUGHT'
                ? 'Bought'
                : ''}
            </span>
          </div>
          <FontAwesomeIcon icon={solid('chevron-down')} className="icon chevron__icon" />
        </div>

        <ul className={`ladder__ul ladder__ul--listing ${active ? 'active' : ''}`}>
          <li
            className="ladder__menu-item"
            onClick={() => {
              setActive(false);
              props.onChangeDropdown('ALL', '');
            }}
          >
            <div className="ladder__icon">
              <FontAwesomeIcon icon={solid('arrow-down-long')} className="icon icon--showall" />
            </div>
            Show All
          </li>

          <li
            className="ladder__menu-item"
            onClick={() => {
              setActive(false);
              props.onChangeDropdown(
                'DONATED',
                'https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/60088347cb80b5186f9e1ead_donate.svg'
              );
            }}
          >
            <div className="ladder__icon">
              <img
                alt=""
                src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/60088347cb80b5186f9e1ead_donate.svg"
              />
            </div>
            Donated
          </li>
          <li
            className="ladder__menu-item "
            onClick={() => {
              setActive(false);
              props.onChangeDropdown(
                'FOLLOWED',
                'https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ef6176ab4ea47d76444346c_speech-bubble.svg'
              );
            }}
          >
            <div className="ladder__icon">
              <img
                alt=""
                src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ef6176ab4ea47d76444346c_speech-bubble.svg"
              />
            </div>
            Followed
          </li>
          <li
            className="ladder__menu-item"
            onClick={() => {
              setActive(false);
              props.onChangeDropdown(
                'SHARED',
                'https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ef61ef15babc48a50bd2bd5_share.svg'
              );
            }}
          >
            <div className="ladder__icon">
              <img
                alt=""
                src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5ef61ef15babc48a50bd2bd5_share.svg"
              />
            </div>
            Shared
          </li>
          <li
            className="ladder__menu-item"
            onClick={() => {
              setActive(false);
              props.onChangeDropdown(
                'BOUGHT',
                'https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5e4c2ff23144db148fd45b43_wallet.svg'
              );
            }}
          >
            <div className="ladder__icon">
              <img
                alt=""
                src="https://uploads-ssl.webflow.com/59de7f3f07bb6700016482bc/5e4c2ff23144db148fd45b43_wallet.svg"
              />
            </div>
            Bought
          </li>
        </ul>
      </div>
    </ClickAwayListener>
  );
};

export default LadderMenuXp;
