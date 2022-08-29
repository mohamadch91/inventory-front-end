import React, { useReducer, useState } from "react";
import FilterFormDD from "./FilterFormDD";
import FilterFormCheckbox from "./FilterFormCheckbox";
import FilterFormYearsInput from "./FilterFormYearsInput";
import FilterFormTextInput from "./FilterFormTextInput";
import { useQuery } from "react-query";
import ItemService from "../../../services/item.service";
import Spinner from "../../../shared/Spinner";
import filterFormReducer from "./FilterFormReducer";

const FilterForm = () => {
  const [itemTypeOptions, setItemTypeOptions] = useState([]);

  const [filterState, dispatchFilterState] = useReducer(filterFormReducer, {});

  // fetching data for dropdowns
  const { data, isLoading: formDataIsLoading } = useQuery(
    [],
    async () => {
      const res = await ItemService.getQrHelper();
      return res.data;
    },
    {
      refetchOnMount: true,
    }
  );

  if (formDataIsLoading) {
    return <Spinner />;
  }

  // ------------ feeding data to app
  const facilityOptions = data.facility.map((el) => {
    return { id: el.id, op: el.name };
  });
  const itemClassOptions = data.items.map((el) => {
    return { id: el.item_class.id, op: el.item_class.title };
  });
  const workingStatusOptions = data.working.map((el) => {
    return { id: el.id, op: el.name };
  });
  const physicalStatusOptions = data.physical.map((el) => {
    return { id: el.id, op: el.name };
  });
  const usersOptions = data.users.map((el) => {
    return { id: el.id, op: el.name };
  });
  // Handlers
  const mainFacilityDDHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "facilityId",
      value: e.target.value,
    });
  };

  const itemClassDDHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "itemClassId",
      value: e.target.value,
    });

    let tmp = [];
    const classId = e.target.value;

    data.items.map((el) => {
      if (el.item_class.id === +classId) {
        el.item_type.map((el) => {
          tmp.push({ id: el.id, op: el.title });
        });
      }
    });
    setItemTypeOptions(tmp);
  };

  const itemTypeDDHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "itemTypeId",
      value: e.target.value,
    });
  };
  const workingStatusDDHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "workingId",
      value: e.target.value,
    });
  };
  const physicalConditionDDHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "physicalId",
      value: e.target.value,
    });
  };
  const userChangeHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "userId",
      value: e.target.value,
    });
  };
  const yearFromChangeHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "yearFrom",
      value: e.target.value,
    });
  };
  const yearToChangeHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "yearTo",
      value: e.target.value,
    });
  };
  const itemCodeChangeHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "itemCode",
      value: e.target.value,
    });
  };
  const functionalChangeHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "functional",
      value: e.target.checked,
    });
  };

  console.log(filterState);

  return (
    <div className="row">
      <div className="col-sm-7">
        <FilterFormDD
          key={"A"}
          label={"Main Facility"}
          options={facilityOptions}
          onChange={mainFacilityDDHandler}
        />
        <FilterFormDD
          key={"B"}
          label={"Item class"}
          options={itemClassOptions}
          onChange={itemClassDDHandler}
        />
        <FilterFormDD
          key={"C"}
          label={"Item type"}
          options={itemTypeOptions}
          onChange={itemTypeDDHandler}
        />
        <FilterFormDD
          key={"D"}
          label={"Working status"}
          options={workingStatusOptions}
          onChange={workingStatusDDHandler}
        />
        <FilterFormDD
          key={"E"}
          label={"Physical condition"}
          options={physicalStatusOptions}
          onChange={physicalConditionDDHandler}
        />
        <FilterFormDD
          key={"F"}
          label={"User"}
          options={usersOptions}
          onChange={userChangeHandler}
        />
      </div>

      <div className="col-sm-3 ml-5">
        <FilterFormYearsInput
          onFromChange={yearFromChangeHandler}
          onToChange={yearToChangeHandler}
        />
        <hr className="my-1" />
        <FilterFormTextInput onChange={itemCodeChangeHandler} />
        <hr className="my-1" />
        <FilterFormCheckbox
          onChange={functionalChangeHandler}
          label={"Is functioning"}
        />

        <button type="button" className="btn btn-primary btn-fw mt-3 w-75">
          Search QR code
        </button>
      </div>
    </div>
  );
};

export default FilterForm;
