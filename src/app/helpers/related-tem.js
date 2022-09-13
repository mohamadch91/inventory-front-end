export const relatedFields = {
  IsItFunctioning: ["ReasonsForNotFunctioning"],
};

export const isRelatedFieldOk = (currentFieldStateName, fieldsValue) => {
  for (const key in relatedFields) {
    const fields = relatedFields[key];
    if (fields.indexOf(currentFieldStateName) >= 0) {
    
      return fieldsValue[key];
    }
  }
  return true;
};
