import React from "react";

const WarningsTableCheckbox = (props) => {
  return (
    <div className="form-check pl-2 ">
      <label className="form-check-label">
        <input
          onChange={(e) => props.onChange(e)}
          type="checkbox"
          className="form-check-input"
          value={props.value}
        />
        <i className="input-helper" />
        {props.label}
      </label>
    </div>
  );
};

export default WarningsTableCheckbox;
