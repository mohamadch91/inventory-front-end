export const relatedFields = {
  IsItFunctioning: ["ReasonsForNotFunctioning", "NotInUseSince"],
};
/**
 * 
 * @param {*} currentFieldStateName 
 * @param {*} fieldsValue 
 * @returns Boolean if related checked return true
 */
export const isRelatedFieldOkReq = (currentFieldStateName, fieldsValue) => {
  for (const key in relatedFields) {
    const fields = relatedFields[key];
    if (fields.indexOf(currentFieldStateName) >= 0) {
      if (fieldsValue[key] !== undefined && fieldsValue[key] !== null ) {return fieldsValue[key];}
      else{
        return false;
      }
    }
  }
  return false;
};
