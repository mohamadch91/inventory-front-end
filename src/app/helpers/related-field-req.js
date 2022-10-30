/**
 * related field of facility 
 * that measn if this fields are checekd show other fields
 */
export const relatedFields = {
  is_suitable: ["is_suitable_reason"],
  haveimmservice: [
    "typeimmservice",
    "numimmperweek",
    "coverageX1",
    "coverageX2",
    "coverageX3",
    "coverageX4",
    "individualsX1",
    "individualsX2",
    "individualsX3",
    "individualsX4",
  ],
  other_service: ["other_services"],
};
/**
 * @param  {String} currentFieldStateName name of field in json key send to api
 * @param  {} fieldsValue field value
 * this component just check if related field ok check for required
 */
export const isRelatedFieldOkReq = (currentFieldStateName, fieldsValue) => {
  for (const key in relatedFields) {
    const fields = relatedFields[key];

    if (fields.indexOf(currentFieldStateName) >= 0) {
      console.log(fieldsValue[key]);
       if (fieldsValue[key] !== undefined && fieldsValue[key] !== null) {
      if (key === "is_suitable") {
        return fieldsValue[key];
      }
      return !fieldsValue[key];
    }
    else{
      return true;
    }
  }
  }
  return false;
};
