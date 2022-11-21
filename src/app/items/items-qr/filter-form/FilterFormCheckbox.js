import React from "react";
import { Trans } from "react-i18next";

const FilterFormCheckbox = (props) => {
  return (
    <div className="form-check pl-2 mx-3 ">
      <label className="form-check-label">
        <input
          onChange={props.onChange}
          type="checkbox"
          className="form-check-input"
        />
        <i className="input-helper" />
        <span className="ml-4">
          <Trans>{props.label}</Trans>
        </span>
      </label>
    </div>
  );
};

export default FilterFormCheckbox;
