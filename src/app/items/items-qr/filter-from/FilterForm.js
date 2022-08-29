import React from "react";
import FilterFormDD from "./FilterFormDD";
import FilterFormCheckbox from "./FilterFormCheckbox";
import FilterFormYearsInput from "./FilterFormYearsInput";

const dummyOptions = [
  {
    id: 1,
    name: "Central 1",
  },
  {
    id: 2,
    name: "jvnsd",
  },
];

const FilterForm = () => {
  return (
    <div className="row">
      <div className="col-sm-7">
        <FilterFormDD label={"Main Facility"} options={dummyOptions} />
        <FilterFormDD label={"Item type"} options={dummyOptions} />
        <FilterFormDD label={"Item class"} options={dummyOptions} />
      </div>

      <div className="col-sm-3  ml-5">
        <FilterFormCheckbox label={"Is functioning"} />
        <FilterFormCheckbox label={"Working"} />
        <FilterFormCheckbox label={"Good physical condition"} />
        <hr className="my-3" />
        <FilterFormYearsInput />
      </div>
    </div>
  );
};

export default FilterForm;
