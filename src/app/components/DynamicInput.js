import { Form } from "react-bootstrap";

const DynamicInput = (props) => {
  const { field, onChangeHandler, defaultValue } = props;
  if (field.type === "select") {
    return (
      <Form.Control
        onSelect={(e) => onChangeHandler(e, field)}
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
        onChange={(e) => onChangeHandler(e, field)}
        disabled={field.active ? !field.active : field.disabled}
      />
    );
  }

  return (
    <Form.Control
      onChange={(e) => onChangeHandler(e, field)}
      defaultValue={defaultValue}
      className="form-control"
      id={`field-${field.id}`}
      type={field.type}
      disabled={field.active ? !field.active : field.disabled}
      min={0}
    />
  );
};

export default DynamicInput;
