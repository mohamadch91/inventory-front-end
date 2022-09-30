import React from "react";
import { Form } from "react-bootstrap";
import { Trans } from "react-i18next";

const FilterFormTextInput = (props) => {
  return (
    <Form.Group className="ml-2 w-100">
      <label className="py-2">
        {" "}
        <Trans>Item code</Trans>{" "}
      </label>
      <Form.Control
        style={{ width: "50%" }}
        type="text"
        className=" mt-2 "
        aria-label="from-year"
        onChange={props.onChange}
      />
    </Form.Group>
  );
};

export default FilterFormTextInput;
