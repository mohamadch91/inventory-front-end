import React from "react";
import { Form } from "react-bootstrap";

const FilterFormTextInput = (props) => {
  return (
    <Form.Group className="ml-2">
      <label className="py-2"> Item Code </label>
      <Form.Control
        style={{ width: "50%" }}
        type="number"
        className="form-control mt-2 "
        placeholder="12345..."
        aria-label="from-year"
        onChange={props.onChange}
      />
    </Form.Group>
  );
};

export default FilterFormTextInput;
