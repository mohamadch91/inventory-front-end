import React from "react";

const filterFormReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      ...state,
      [action.field]: action.value,
    };
  }

  return {
    facility: -1,
    item_class: -1,
    item_type: -1,
    physical: -1,
    working: -1,
    user: -1,
    year_from: -1,
    year_to: -1,
    code: -1,
    func: false,
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
