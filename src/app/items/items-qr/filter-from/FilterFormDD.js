import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Trans } from "react-i18next";

const labelStyle = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  lineHeight: "1.4",
};

// Options come from props.
// just select and tell what is selected
const FilterFormDD = (props) => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <Form.Group className="row mb-0">
      <label className="col-sm-3 text-right control-label" style={labelStyle}>
        <Trans> {props.label} </Trans>
      </label>
      <div className="col-sm-7">
        <Form.Control
          size="sm"
          onChange={onChangeHandler}
          className="form-select"
          as="select"
          value={value}
        >
          {props.options.map((el) => {
            return <option value={el.id}>{el.name}</option>;
          })}
        </Form.Control>
      </div>
      <hr className="my-3 " />
    </Form.Group>
  );
};
export default FilterFormDD;
