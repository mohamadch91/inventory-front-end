import { Form } from "react-bootstrap";

const DynamicInput = (props) => {
  const { field, onChangeHandler, defaultValue } = props;
  if (field.type === "select") {
    return (
      <Form.Control
        onChange={(e) => onChangeHandler(e, field)}
        defaultValue={defaultValue}
        className="form-control"
        as="select"
        disabled={field.disabled}
        id={`field-${field.id}`}
      >
        <option value="" selected disabled>
          Please select
        </option>
        {field.params.map((param) => (
          <option disabled={!param.enabled} value={param.id}>
            {param.name || param.describe}
          </option>
        ))}
      </Form.Control>
    );
  }

  return (
    <Form.Control
      onChange={(e) => onChangeHandler(e, field)}
      defaultValue={defaultValue}
      className="form-control"
      id={`field-${field.id}`}
      type={field.type}
      disabled={field.disabled}
    />
  );
};

export default DynamicInput;
