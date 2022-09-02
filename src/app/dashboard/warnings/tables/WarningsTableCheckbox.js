import React from "react";
import { Trans } from "react-i18next";

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
        <Trans>{props.label}</Trans>
      </label>
    </div>
  );
};

export default WarningsTableCheckbox;
