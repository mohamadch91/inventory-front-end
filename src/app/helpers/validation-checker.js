import { separator } from "../helpers/separator";
import { seperator } from "../helpers/seperator";
/**
 * @param  {*} value value of field
 * @param  {JSON} validation validation object get from api
 * check field is valid or not
 */
export const hasValidationError = (value, validation) => {
  if (typeof value !== "string" && typeof value !== "number") return false;

  const _value = value.replaceAll(" ", "");
  if (validation === undefined || !_value) return false;
  if (validation.min !== -1 && validation.min > _value) {
    return `value must greater than ${separator(validation.min)}`;
  }
  if (validation.max !== -1 && validation.max < _value) {
    return `value must less than ${separator(validation.max)}`;
  }
 console.log(_value.split("."));
  if (
    validation.float &&
    _value.includes(seperator()) &&
    _value.split(seperator())[1].length > validation.floating
  ) {
    return `value must has ${validation.floating} decimals`;
  }

  return false;
};
/**
 * @param  {String} value
 * check time in hh:mm format or not
 */
export const timeValidationError = (value) => {
  const isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(
    value
  );

  if (isValid) {
    return false;
  }
  return "value must be in (hh:mm) format!";
};
