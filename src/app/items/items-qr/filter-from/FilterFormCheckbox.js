import React from "react";

const FilterFormCheckbox = (props) => {
  return (
    <div className="form-check pl-2 ">
      <label className="form-check-label">
        <input type="checkbox" className="form-check-input" />
        <i className="input-helper" />
        {props.label}
      </label>
    </div>
  );
};

export default FilterFormCheckbox;
