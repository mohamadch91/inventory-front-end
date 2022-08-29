export const hasValidationError = (value, validation) => {
  if (validation === undefined || !value) return false;
  if (validation.min !== -1 && validation.min > value) {
    return `value must greater than ${validation.min}`;
  }
  if (validation.max !== -1 && validation.max < value) {
    return `value must less than ${validation.max}`;
  }

  if (
    validation.float &&
    value.includes(".") &&
    (+value).toFixed(validation.floating) > value
  ) {
    return `value must has ${validation.floating} decimals`;
  }
  if (
    validation.digits !== -1 &&
    value.toString().replaceAll(",", "").replaceAll(".", "").replaceAll(":", "")
      .length >
      validation.digits + (validation.floating > 0 ? validation.floating : 0)
  ) {
    return `value must be ${validation.digits} digits`;
  }
  return false;
};
