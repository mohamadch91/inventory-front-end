import { Form } from "react-bootstrap";
import { separator as thousandSeparator } from "../helpers/separator";

const numericKeys = "0123456789.:";
const num1 = "0123456789";
const DynamicInput = (props) => {
  const { field, onChangeHandler, defaultValue, separator } = props;
  if (field.type === "select") {
    return (
      <Form.Control
        onChange={(e) => onChangeHandler(e.target.value, field)}
        defaultValue={defaultValue}
        className="form-control"
        multiple={field.stateName === "other_services" ? true : false}
        as="select"
        disabled={field.active ? !field.active : field.disabled}
        id={`field-${field.id}`}
      >
        <option value="" selected disabled>
          Please select
        </option>
        {field.params.map((param) => (
          <option
            disabled={
              param.enabled
                ? !param.enabled
                : param.active
                ? !param.active
                : !param.enable
            }
            value={param.id}
          >
            {param.name || param.describe}
          </option>
        ))}
      </Form.Control>
    );
  }

  if (field.type === "bool") {
   
    return (
      <>
        <input
          
          type="checkbox"
          defaultChecked={defaultValue}
          onChange={(e) => onChangeHandler(e.target.checked, field)}
          disabled={field.active ? !field.active : field.disabled}
        />
        <i style={{ marginLeft: "5px" }}> checked: yes </i>
      </>
    );
  }

  const validation = field.validation?.[0];
  return (
    <Form.Control
      onKeyPress={(e) => {
        e.persist();
        if (field.type === "number") {
          if (validation && validation?.float) {
            if (numericKeys.indexOf(e.key) === -1) {
              e.preventDefault();
              return;
            }
          } else if (validation && validation?.float === false) {
            if (num1.indexOf(e.key) === -1) {
              e.preventDefault();
              return;
            }
          }
        }
        onChangeHandler(e.target.value, field);
      }}
      onChange={(e) => onChangeHandler(e.target.value, field)}
      value={defaultValue}
      className="form-control"
      id={`field-${field.id}`}
      disabled={field.active ? !field.active : field.disabled}
      min={validation && validation?.min !== -1 ? validation.min : undefined}
      max={validation && validation?.max !== -1 ? validation.max : undefined}
      step={
        validation && validation?.float
          ? Math.pow(0.1, validation.floating).toFixed(validation.floating)
          : undefined
      }
      maxLength={
        validation && validation?.digits !== -1 ? validation.digits : undefined
      }
      onBlur={(e) => {
        e.persist();
        if (separator) {
          const formatted = thousandSeparator(e.target.value);
          onChangeHandler(formatted, field);
        }
      }}
    />
  );
};

export default DynamicInput;
