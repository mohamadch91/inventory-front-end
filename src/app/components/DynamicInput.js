import { Form } from "react-bootstrap";

const DynamicInput = (props) => {
  const { field, onChangeHandler, defaultValue } = props;
  if (field.type === "select") {
    return (
      <Form.Control
        onChange={(e) => onChangeHandler(e.target.value, field)}
        defaultValue={defaultValue}
        className="form-control"
        as="select"
        disabled={field.active ? !field.active : field.disabled}
        id={`field-${field.id}`}
      >
        <option value="" selected disabled>
          Please select
        </option>
        {field.params.map((param) => (
          <option
            disabled={param.enabled ? !param.enabled : !param.active}
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
      <input
        type="checkbox"
        defaultChecked={defaultValue}
        onChange={(e) => onChangeHandler(e.target.checked, field)}
        disabled={field.active ? !field.active : field.disabled}
      />
    );
  }

  const validation = field.validation?.[0];
  return (
    <Form.Control
      onChange={(e) => onChangeHandler(e.target.value, field)}
      defaultValue={defaultValue}
      className="form-control"
      id={`field-${field.id}`}
      type={field.type}
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
    />
  );
};

export default DynamicInput;
