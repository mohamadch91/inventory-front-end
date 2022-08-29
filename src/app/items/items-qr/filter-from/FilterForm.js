import React from "react";
import FilterFormDD from "./FilterFormDD";
import FilterFormCheckbox from "./FilterFormCheckbox";
import FilterFormYearsInput from "./FilterFormYearsInput";
import FilterFromTextInput from "./FilterFromTextInput";

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
        <FilterFormDD label={"Working status"} options={dummyOptions} />
        <FilterFormDD label={"Physical condition"} options={dummyOptions} />
      </div>

      <div className="col-sm-3  ml-5">
        <FilterFormYearsInput />
        <hr className="my-1" />
        <FilterFromTextInput />
        <hr className="my-1" />
        <FilterFormCheckbox label={"Is functioning"} />

        <button type="button" className="btn btn-primary btn-fw mt-3 w-75">
          Search QR code
        </button>
      </div>
    </div>
  );
};

export default FilterForm;
