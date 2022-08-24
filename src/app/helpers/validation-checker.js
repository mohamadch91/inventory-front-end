export const hasValidationError = (value, validation) => {
  if (validation === undefined) return false;

  if (validation.min !== -1 && validation.min > value) {
    return `value must greater than ${validation.min}`;
  }
  if (validation.max !== -1 && validation.max < value) {
    return `value must less than ${validation.max}`;
  }
  if (
    validation.digits !== -1 &&
    value.toString().length !== validation.digits
  ) {
    return `value must be ${validation.digits} digits`;
  }
  if (validation.float && (+value).toFixed(validation.floating) !== value) {
    return `value must has ${validation.digits} decimals`;
  }
  return false;
};
