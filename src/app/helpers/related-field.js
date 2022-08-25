export const relatedFields = {
  is_suitable: ["is_suitable_reason"],
  haveimmservice: ["typeimmservice", "numimmperweek"],
  other_service: ["other_services"],
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
