import React, { useReducer, useState } from "react";
import FilterFormDD from "./FilterFormDD";
import FilterFormCheckbox from "./FilterFormCheckbox";
import FilterFormYearsInput from "./FilterFormYearsInput";
import FilterFormTextInput from "./FilterFormTextInput";
import { useQuery } from "react-query";
import ItemService from "../../../services/item.service";
import Spinner from "../../../shared/Spinner";
import filterFormReducer from "./FilterFormReducer";
import toast from "react-hot-toast";
import classes from "../ItemsQR.module.css";
import { Trans } from "react-i18next";
import EmptyDataBaseMessage from "../../../shared/UI/EmptyDataBaseMessage";

const FilterForm = (props) => {
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
  if (!formDataIsLoading && data.length === 0) {
    return (
      <EmptyDataBaseMessage
        message={"Data base responded with empty facilities information"}
      />
    );
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
      field: "facility",
      value: e.target.value,
    });
  };

  const itemClassDDHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "item_class",
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
      field: "item_type",
      value: e.target.value,
    });
  };
  const workingStatusDDHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "working",
      value: e.target.value,
    });
  };
  const physicalConditionDDHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "physical",
      value: e.target.value,
    });
  };
  const userChangeHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "user",
      value: e.target.value,
    });
  };
  const yearFromChangeHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "year_from",
      value: e.target.value,
    });
  };
  const yearToChangeHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "year_to",
      value: e.target.value,
    });
  };
  const itemCodeChangeHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "code",
      value: e.target.value,
    });
  };
  const functionalChangeHandler = (e) => {
    dispatchFilterState({
      type: "CHANGE",
      field: "func",
      value: e.target.checked,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (filterState.facility === undefined || filterState.facility === "-1") {
      toast.error(<Trans>Please select a facility</Trans>);
    }
    else{
    props.onSubmit(filterState);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="row mb-5">
        <div className="col-sm-7">
          <FilterFormDD
            key={"A"}
            isRequired={true}
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
            label={"Items category"}
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
            label={"Users"}
            options={usersOptions}
            onChange={userChangeHandler}
          />
        </div>

        <div className={`col-sm-4 `}>
          <div className={classes.inputResponsive}>
            <FilterFormYearsInput
              onFromChange={yearFromChangeHandler}
              from={filterState.year_from}
              onToChange={yearToChangeHandler}
            />
          </div>

          <hr className="my-1" />
          <div>
            <FilterFormTextInput
              onChange={itemCodeChangeHandler}
              className={classes.codeInputResponsive}
            />
          </div>

          <hr className="my-1" />
          <FilterFormCheckbox
            onChange={functionalChangeHandler}
            label={"Is functioning"}
          />

          <button
            // onClick={submitHandler}
            type="submit"
            className={`btn btn-primary btn-fw mt-3 font-weight-bold  ${classes.buttonResponsive}`}
          >
            <Trans>Search QR code</Trans>
          </button>
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
