import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../shared/Spinner";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Form } from "react-bootstrap";
import ItemService from "../services/item.service";
import DynamicInput from "../components/DynamicInput";
import { fromPQSFields } from "../constants/item";
import { hasValidationError } from "../helpers/validation-checker";
import { Trans } from "react-i18next";
import Select from "react-select";
import StepOperations from "../components/StepOperations";

const facilityField = {
  id: "facility",
  type: "text",
  active: false,
  disabled: true,
  state: "facility",
  name: "",
};

function Item() {
  const [activeStep, setActiveStep] = useState(0);
  const [fieldsValue, setFieldValue] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});
  const [selectedItemClass, setSelectedItemClass] = useState(null);
  const [selectedItemType, setSelectedItemType] = useState(null);
  const [isFromPQS, setIsFromPQS] = useState(false);

  const { id } = useParams();

  const { isLoading: isItemDefaultLoading } = useQuery(
    ["item-default-value", id],
    async () => {
      const defaultData = {
        code: "uniqe code",
      };

      if (id === "new") return defaultData;

      const res = await ItemService.getItems(id);
      return { ...res.data[1], ...defaultData };
    },
    {
      refetchOnMount: true,
      onSuccess(data) {
        setFieldValue(data);
      },
    }
  );

  const { data: itemClassesAndTypes, isLoading: isItemClassesAndTypesLoading } =
    useQuery(
      ["item-classes-and-types"],
      async () => {
        const res = await ItemService.getItemClassesAndTypes();
        setFieldValue((preValues) => ({
          ...preValues,
          facility: res.data.facility,
        }));
        return res.data.data.filter((item) => item.item_type.length > 0);
      },
      {
        refetchOnMount: true,
        onSuccess(data) {
          setSelectedItemClass(data[0]);
          setSelectedItemType(data[0]?.item_type?.[0]);
        },
      }
    );

  const { data: pqsData, isLoading: isPqsLoading } = useQuery(
    ["pqs", selectedItemType?.id],
    async () => {
      const res = await ItemService.getPQS(selectedItemType?.id);
      return res.data.map((item) => ({
        label: item.pqsnumber ?? item.pqscode,
        value: item,
      }));
    },
    {
      refetchOnMount: true,
    }
  );

  const {
    data: itemFields,
    isLoading: isItemsFieldsLoading,
    isIdle: isItemsFieldsIdle,
    refetch: refetchItemFields,
  } = useQuery(
    ["item-fields", selectedItemClass?.item_class.id, selectedItemType?.id],
    async () => {
      const res = await ItemService.getItemFields(
        selectedItemClass.item_class.id,
        selectedItemType.id
      );
      const result = {};
      if (res.data) {
        for (const field of res.data) {
          const fieldTopicInResult = result[field.field.topic] ?? [];
          fieldTopicInResult.push(field.field);
          result[field.field.topic] = fieldTopicInResult;
        }
        const firstTopic = Object.keys(result)[0] ?? "Type";
        if (result[firstTopic] === undefined) {
          result[firstTopic] = [];
        }
        //static fields
        result[firstTopic].unshift({
          id: "code",
          name: "Item code:",
          topic: firstTopic,
          type: "text",
          active: false,
          disabled: true,
          required: false,
          state: "code",
          params: [],
        });
      }
      return result;
    },
    {
      enabled: !!selectedItemType,
    }
  );

  useEffect(() => {
    if (selectedItemType) refetchItemFields();
  }, [selectedItemType]);

  const hasRequiredErrors = () => {
    const _fieldErrors = { ...fieldErrors };
    const currentStepFields = Object.values(itemFields)[activeStep];
    currentStepFields.forEach((field) => {
      if (field.required && !fieldsValue[field.state]) {
        _fieldErrors[field.state] = "this field is required!";
      }
    });
    setFieldErrors(_fieldErrors);
    return Object.keys(_fieldErrors).length > 0;
  };

  const handleNext = () => {
    if (!hasRequiredErrors()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onChangeHandler = (value, field) => {
    const validationErr = hasValidationError(value, field.validation?.[0]);
    const cloneFieldsValue = { ...fieldsValue };
    cloneFieldsValue[field.state] = value;
    setFieldValue(cloneFieldsValue);
    //check validation and required
    const _fieldErrors = { ...fieldErrors };
    if (validationErr) {
      _fieldErrors[field.state] = validationErr;
    } else {
      delete _fieldErrors[field.state];
    }
    setFieldErrors(_fieldErrors);
  };

  const onSaveHandler = async (e) => {
    e.preventDefault();
    if (hasRequiredErrors()) {
      return;
    }
    const _fieldsValue = { ...fieldsValue };
    if (!isFromPQS) {
      for (const key in fieldsValue) {
        if (fromPQSFields.find((pqsField) => pqsField.state === key)) {
          delete _fieldsValue[key];
        }
      }
    }
    _fieldsValue["item_class"] = selectedItemClass.item_class.id;
    _fieldsValue["item_type"] = selectedItemType.id;
    _fieldsValue["facility"] = _fieldsValue["facility"].id;
    const res = await (id === "new"
      ? ItemService.postItem(_fieldsValue)
      : ItemService.putItem(_fieldsValue));

    setFieldValue(_fieldsValue);
  };

  const selectItemClassHandler = (e) => {
    setSelectedItemClass(itemClassesAndTypes[e.target.value]);
    setSelectedItemType(selectedItemClass.item_type[0]);
  };

  const selectItemTypeHandler = (e) => {
    setSelectedItemType(selectedItemClass.item_type[e.target.value]);
  };

  const onIsFromPQSChange = () => {
    setIsFromPQS((preChecked) => !preChecked);
  };

  const selectPQSHandler = () => {
    const value = pqsData.find(
      (pqs) => pqs.label === fieldsValue["PQSPISCode"]
    )?.value;
    if (value === undefined) {
      //TODO: show a correct massage to user
      return;
    }
    const cloneFieldsValue = { ...fieldsValue };
    const selectedPqs = pqsData.find((pqs) => pqs.id === value);
    cloneFieldsValue["PQSPISType"] = selectedPqs?.model;
    cloneFieldsValue["PQSPISManufacturer"] =
      selectedPqs?.manufacturer ?? selectedPqs?.make;
    cloneFieldsValue["PQSPISRefrigerantGas"] = selectedPqs?.refrigerant;
    setFieldValue(cloneFieldsValue);
  };

  if (
    isItemDefaultLoading ||
    isItemClassesAndTypesLoading ||
    isItemsFieldsLoading ||
    isItemsFieldsIdle ||
    isPqsLoading
  ) {
    return <Spinner />;
  }

  return (
    <form onSubmit={onSaveHandler}>
      <h3 className="page-title mb-3">
        <Trans>Item information</Trans>
      </h3>
      <div className="mt-3">
        <div className="card">
          <div className="card-body pb-3">
            <div className="row pb-4" style={{ overflow: "auto" }}>
              <Stepper activeStep={activeStep}>
                {Object.keys(itemFields).map((topic) => {
                  return (
                    <Step key={topic}>
                      <StepLabel style={{ width: "max-content" }}>
                        {topic}
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </div>
            <StepOperations
              handleBack={handleBack}
              handleNext={handleNext}
              activeStep={activeStep}
              stepsLength={Object.keys(itemFields).length - 1}
              isNextDisabled={Object.keys(fieldErrors).length > 0}
            />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="card">
          <div className="card-body pb-3">
            <div className="row">
              <Form.Group className="row mb-0">
                <label
                  className={`col-sm-4 text-right`}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    lineHeight: "1.4",
                    textAlign: "right",
                  }}
                >
                  Facility Name:
                </label>
                <div className={"col-sm-8"}>
                  <DynamicInput
                    field={facilityField}
                    defaultValue={fieldsValue["facility"].name}
                  />
                </div>
              </Form.Group>
            </div>
            <div className="row mt-3">
              <Form.Group className="row mb-0">
                <label
                  className={`col-sm-4 text-left control-label`}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    lineHeight: "1.4",
                    textAlign: "right",
                  }}
                >
                  <Trans>Item class</Trans>
                </label>
                <div className="col-sm-8">
                  <Form.Control
                    onChange={selectItemClassHandler}
                    className="form-select"
                    as="select"
                    value={itemClassesAndTypes?.findIndex(
                      (i) =>
                        i?.item_class.id === selectedItemClass?.item_class.id
                    )}
                    disabled={activeStep !== 0}
                  >
                    {itemClassesAndTypes.map((itemClass, index) => (
                      <option value={index}>
                        {itemClass.item_class.title}
                      </option>
                    ))}
                  </Form.Control>
                </div>
              </Form.Group>
            </div>
            <div className="row mt-3">
              <Form.Group className="row mb-0">
                <label
                  className={`col-sm-4 text-right control-label`}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    lineHeight: "1.4",
                    textAlign: "right",
                  }}
                >
                  <Trans>Item Category</Trans>
                </label>
                <div className="col-sm-8">
                  <Form.Control
                    onChange={selectItemTypeHandler}
                    className="form-select"
                    as="select"
                    value={selectedItemClass?.item_type.findIndex(
                      (i) => i?.id === selectedItemType?.id
                    )}
                    disabled={activeStep !== 0}
                  >
                    {selectedItemClass?.item_type.map((itemType, index) => (
                      <option value={index}>{itemType.title}</option>
                    ))}
                  </Form.Control>
                </div>
              </Form.Group>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            {activeStep === 0 && (
              <>
                {selectedItemType.havepqs && (
                  <>
                    <div className="row">
                      <Form.Group className="row mb-0">
                        <label
                          className={`col-sm-4 text-right`}
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            lineHeight: "1.4",
                            textAlign: "right",
                          }}
                        >
                          <Trans>Is this item from PQS/PIS list?</Trans>
                        </label>
                        <div className="col-sm-6">
                          <input
                            name="is-from-pqs"
                            type="checkbox"
                            onChange={onIsFromPQSChange}
                            checked={isFromPQS}
                          />
                        </div>
                        <hr className="my-3" />
                      </Form.Group>
                    </div>
                    {isFromPQS &&
                      fromPQSFields.map((pqsField) => (
                        <div className="row" key={pqsField.name}>
                          <Form.Group className="row mb-0">
                            <label
                              className={`col-sm-4 text-right ${
                                pqsField.required ? "control-label" : ""
                              }`}
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                lineHeight: "1.4",
                                textAlign: "right",
                              }}
                            >
                              {pqsField.name}
                            </label>

                            <div
                              className={`${
                                pqsField.state === "PQSPISCode"
                                  ? "col-sm-7"
                                  : "col-sm-8"
                              }`}
                            >
                              {pqsData && pqsField.state === "PQSPISCode" ? (
                                <Select
                                  options={pqsData}
                                  onChange={(e) => {
                                    onChangeHandler(e.label, pqsField);
                                  }}
                                  value={{
                                    label: fieldsValue["PQSPISCode"],
                                    value: pqsData.find(
                                      (pqs) =>
                                        pqs.label === fieldsValue["PQSPISCode"]
                                    )?.value,
                                  }}
                                  onBlur={(e) => {
                                    const value = e.target.value;
                                    if (value.length > 0) {
                                      onChangeHandler(value, pqsField);
                                    }
                                  }}
                                />
                              ) : (
                                // <DynamicInput
                                //   field={{
                                //     ...pqsField,
                                //     type: "select",
                                //     params: pqsData,
                                //   }}
                                //   onChangeHandler={(value, field) => {
                                //     onChangeHandler(value, field);
                                //     selectPQSHandler(value);
                                //   }}
                                //   defaultValue={fieldsValue[pqsField.state]}
                                // />
                                <DynamicInput
                                  field={pqsField}
                                  onChangeHandler={onChangeHandler}
                                  defaultValue={fieldsValue[pqsField.state]}
                                />
                              )}
                            </div>
                            {pqsField.state === "PQSPISCode" && (
                              <div className="col-sm-1">
                                <button
                                  className="btn btn-primary w-100 h-100"
                                  onClick={selectPQSHandler}
                                  type="button"
                                >
                                  <Trans>Load</Trans>
                                </button>
                              </div>
                            )}
                            <hr className="my-3" />
                          </Form.Group>
                        </div>
                      ))}
                  </>
                )}
              </>
            )}
            {Object.values(itemFields)[activeStep]?.map((field) => {
              const hasRequiredError = !!fieldErrors[field.state];
              return (
                <div className="row" key={field.name}>
                  <Form.Group className="row mb-0">
                    <label
                      className={`col-sm-4 text-right ${
                        field.required ? "control-label" : ""
                      }`}
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        lineHeight: "1.4",
                        textAlign: "right",
                      }}
                    >
                      {field.name}
                    </label>
                    <div className="col-sm-8">
                      <DynamicInput
                        field={field}
                        onChangeHandler={onChangeHandler}
                        defaultValue={fieldsValue[field.state]}
                      />
                    </div>
                    {hasRequiredError && (
                      <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-8">
                          <p className="my-1 ml-2 text-danger">
                            {fieldErrors[field.state]}
                          </p>
                        </div>
                      </div>
                    )}
                    <hr className="my-3" />
                  </Form.Group>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="card">
          <div className="card-body py-3">
            <StepOperations
              handleBack={handleBack}
              handleNext={handleNext}
              activeStep={activeStep}
              stepsLength={Object.keys(itemFields).length - 1}
              isNextDisabled={Object.keys(fieldErrors).length > 0}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Item;
