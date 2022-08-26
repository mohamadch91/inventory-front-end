export const relatedFields = {
  is_suitable: ["is_suitable_reason"],
  haveimmservice: ["typeimmservice", "numimmperweek"],
  other_service: ["other_services"],
  havecovid19service: [
    "coverageX1",
    "coverageX2",
    "coverageX3",
    "coverageX4",
    "individualsX1",
    "individualsX2",
    "individualsX3",
    "individualsX4",
  ],
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
