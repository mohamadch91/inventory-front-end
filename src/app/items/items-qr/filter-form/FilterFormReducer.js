import React from "react";

const filterFormReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      ...state,
      [action.field]: action.value,
    };
  }

  return {
    facilityId: -1,
    itemClassId: -1,
    itemTypeId: -1,
    physicalId: -1,
    workingId: -1,
    userId: -1,
    yearFrom: -1,
    yearTo: -1,
    functional: false,
  };
};
// const [filterState, dispatchFilterState] = useReducer(filterFormReducer, {
//     facilityId: null,
//     itemClassId: null,
//     itemTypeId: null,
//     physicalId: null,
//     workingId: null,
//     userId: null,
//     yearFrom: null,
//     yearTo: null,
//     functional: false,
// }, {});

export default filterFormReducer;
