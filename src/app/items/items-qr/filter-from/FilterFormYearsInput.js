import React from "react";
import { Form } from "react-bootstrap";

const FilterFormYearsInput = (props) => {
  return (
    <Form.Group className="pt-1 row">
      <label className="py-2"> Years Installed: </label>
      <Form.Control
        style={{ width: "30%" }}
        type="number"
        className="form-control col-sm-3 mt-2 ml-3"
        placeholder="from"
        aria-label="from-year"
      />
      <Form.Control
        style={{ width: "30%" }}
        type="number"
        className="form-control mt-2 col-sm-3 ml-3"
        placeholder="to"
        aria-label="from-year"
      />
    </Form.Group>
  );
};
export default FilterFormYearsInput;
