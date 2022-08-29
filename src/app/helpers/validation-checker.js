import { separator } from "../helpers/separator";

export const hasValidationError = (value, validation) => {
  const _value = value.replaceAll(" ", "");
  console.log(_value);
  console.log(validation);
  if (validation === undefined || !_value) return false;
  if (validation.min !== -1 && validation.min > _value) {
    return `value must greater than ${separator(validation.min)}`;
  }
  if (validation.max !== -1 && validation.max < _value) {
    return `value must less than ${separator(validation.max)}`;
  }

  if (
    validation.float &&
    _value.includes(".") &&
    (+_value).toFixed(validation.floating) > _value
  ) {
    return `value must has ${validation.floating} decimals`;
  }
  if (
    validation.digits !== -1 &&
    _value
      .toString()
      .replaceAll(",", "")
      .replaceAll(".", "")
      .replaceAll(":", "").length >
      validation.digits + (validation.floating > 0 ? validation.floating : 0)
  ) {
    return `value must be ${validation.digits} digits`;
  }
  return false;
};
