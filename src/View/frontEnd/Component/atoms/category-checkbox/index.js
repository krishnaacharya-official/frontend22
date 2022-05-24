import { useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";

const propTypes = {
  checked: PropTypes.bool,
  categoryColor: PropTypes.string,
  imgUrl: PropTypes.string,
};

const defaultProps = {
  checked: false,
};

function CategoryCheckbox({ checked, imgUrl, name, categoryColor }) {
  const [_checked, setChecked] = useState(checked);
  return (
    <div className="category__item">
      <label
        className={`category__label fw-semibold m-1 d-flex flex-column rounded align-items-center justify-content-center ${_checked ? 'active': ''}`}
        htmlFor={name.toLowerCase()}
        style={{
          backgroundColor: _checked && categoryColor ? categoryColor : "",
        }}
      >
        <input
          className="filter__btn filter__btn--category"
          type="checkbox"
          name="category"
          checked={_checked}
          id={name.toLowerCase()}
          value={name.toLowerCase()}
          onChange={() => setChecked(!_checked)}
        />
        {_checked ? (
          ""
        ) : (
          <img className="category__icon" alt={name} src={imgUrl} />
        )}
        <div className="category__text lh-1">{name}</div>
      </label>
    </div>
  );
}

CategoryCheckbox.defaultProps = defaultProps;
CategoryCheckbox.propTypes = propTypes;

export default CategoryCheckbox;
