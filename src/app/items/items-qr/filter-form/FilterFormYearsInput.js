import React from "react";
import { Form } from "react-bootstrap";
import { Trans } from "react-i18next";

const FilterFormYearsInput = (props) => {
  return (
    <Form.Group className="pt-1 row">
      <label className="py-2">
        {" "}
        <Trans>Year installed</Trans>:{" "}
      </label>
      <Form.Control
        style={{ width: "100%" }}
        type="number"
        className="form-control col-sm-3 mt-2 ml-3"
        placeholder="from"
        min={1990}
        aria-label="from-year"
        onChange={props.onFromChange}
      />
      <Form.Control
        style={{ width: "100%" }}
        type="number"
        className="form-control mt-2 col-sm-3 ml-3"
        placeholder="to"
        aria-label="from-year"
        min={props.from}
        onChange={props.onToChange}
      />
    </Form.Group>
  );
};
export default FilterFormYearsInput;
