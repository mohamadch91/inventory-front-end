import React from "react";

const FilterFormCheckbox = (props) => {
  return (
    <div className="form-check  ">
      <label className="form-check-label">
        <input type="checkbox" className="form-check-input" />
        <i className="input-helper"></i>
        {props.label}
      </label>
    </div>
  );
};

export default FilterFormCheckbox;
