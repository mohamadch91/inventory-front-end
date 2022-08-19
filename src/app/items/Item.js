import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../shared/Spinner";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Form } from "react-bootstrap";
import ItemService from "../services/item.service";
import DynamicInput from "../components/DynamicInput";
import { fromPQSFields } from "../constants/item";

function Item() {
  const [activeStep, setActiveStep] = useState(0);
  const [fieldsValue, setFieldValue] = useState({});
  const [fieldErrors, setFieldErrors] = useState([]);
  const [selectedItemClass, setSelectedItemClass] = useState(null);
  const [selectedItemType, setSelectedItemType] = useState(null);
  const [isFromPQS, setIsFromPQS] = useState(false);

  const { id } = useParams();

  const { isLoading: isItemDefaultLoading } = useQuery(
    ["item-default-value", id],
    async () => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (id === "new") return { "facility-name": user?.facility_id };

      const res = await ItemService.getItems(id);
      res.data[0]["facility-name"] = user?.facility_id;
      return res.data[0];
    },
    {
      staleTime: Infinity,
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
        return res.data.filter((item) => item.item_type.length > 0);
      },
      {
        staleTime: Infinity,
        refetchOnMount: true,
        onSuccess(data) {
          setSelectedItemClass(data[0]);
          setSelectedItemType(data[0]?.item_type?.[0]);
        },
      }
    );

  const {
    data: itemFields,
    isLoading: isItemsFieldsLoading,
    isIdle: isItemsFieldsIdle,
    refetch: refetchItemFields,
  } = useQuery(
    ["item-fields", selectedItemClass, selectedItemType],
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
        const firstTopic = Object.keys(result)[0];
        //static fields

        result[firstTopic].unshift({
          id: "code",
          name: "Item code:",
          topic: firstTopic,
          type: "text",
          active: true,
          disabled: true,
          required: false,
          state: "code",
          params: [],
        });
        result[firstTopic].unshift({
          id: "facility-name",
          name: "Facility Name:",
          topic: firstTopic,
          type: "text",
          active: true,
          disabled: true,
          required: false,
          state: "facility-name",
          params: [],
        });
      }
      return result;
    },
    {
      staleTime: Infinity,
      enabled: !!selectedItemType,
    }
  );

  useEffect(() => {
    if (selectedItemType) refetchItemFields();
  }, [selectedItemType]);

  const hasRequiredErrors = () => {
    const _fieldErrors = [];
    const currentStepFields = Object.values(itemFields)[activeStep];
    currentStepFields.forEach((field) => {
      if (field.required && !fieldsValue[field.state]) {
        _fieldErrors.push(field.id);
      }
    });
    setFieldErrors(_fieldErrors);
    return _fieldErrors.length > 0;
  };

  const handleNext = () => {
    if (!hasRequiredErrors()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => {
    setActiveStep(step);
  };

  const onChangeHandler = (e, field) => {
    const value = e.target.value;
    const cloneFieldsValue = { ...fieldsValue };
    cloneFieldsValue[field.state] = value;
    setFieldValue(cloneFieldsValue);
    if (value && fieldErrors.indexOf(field.id) >= 0) {
      setFieldErrors((preState) =>
        preState.filter((fieldEId) => fieldEId !== field.id)
      );
    }
  };

  const onSaveHandler = async (e) => {
    e.preventDefault();
    if (hasRequiredErrors()) {
      return;
    }
    const _fieldsValue = { ...fieldsValue };
    for (const key in fieldsValue) {
      if (fromPQSFields.find((pqsField) => pqsField.state === key)) {
        delete _fieldsValue[key];
      }
    }
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

  if (
    isItemDefaultLoading ||
    isItemClassesAndTypesLoading ||
    isItemsFieldsLoading ||
    isItemsFieldsIdle
  ) {
    return <Spinner />;
  }

  return (
    <form onSubmit={onSaveHandler}>
      <h3 className="page-title mb-3">Item information</h3>
      <div className="mt-3">
        <div className="card">
          <div className="card-body pb-3">
            <div className="row pb-4" style={{ overflow: "auto" }}>
              <Stepper activeStep={activeStep}>
                {Object.keys(itemFields).map((topic, index) => {
                  return (
                    <Step key={topic} onClick={() => handleStep(index)}>
                      <StepLabel style={{ width: "max-content" }}>
                        {topic}
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </div>
            <div className="row mt-2">
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  type="button"
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {activeStep === Object.keys(itemFields).length - 1 ? (
                  <button className="btn btn-primary ">Save</button>
                ) : (
                  <Button
                    disabled={fieldErrors.length > 0}
                    onClick={handleNext}
                    type="button"
                    sx={{ mr: 1 }}
                  >
                    Next
                  </Button>
                )}
              </Box>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            {activeStep === 0 && (
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
                      }}
                    >
                      Item class
                    </label>
                    <div className="col-sm-8">
                      <Form.Control
                        onChange={selectItemClassHandler}
                        className="form-select"
                        as="select"
                      >
                        {itemClassesAndTypes.map((itemClass, index) => (
                          <option value={index}>
                            {itemClass.item_class.title}
                          </option>
                        ))}
                      </Form.Control>
                    </div>
                    <hr className="my-3" />
                  </Form.Group>
                </div>
                <div className="row">
                  <Form.Group className="row mb-0">
                    <label
                      className={`col-sm-4 text-right`}
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        lineHeight: "1.4",
                      }}
                    >
                      Item Type
                    </label>
                    <div className="col-sm-6">
                      <Form.Control
                        onChange={selectItemTypeHandler}
                        className="form-select"
                        as="select"
                      >
                        {selectedItemClass?.item_type.map((itemType, index) => (
                          <option value={index}>{itemType.title}</option>
                        ))}
                      </Form.Control>
                    </div>
                    <hr className="my-3" />
                  </Form.Group>
                </div>
                {!selectedItemType.havepqs && (
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
                          }}
                        >
                          Is this item from PQS/PIS list?
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
                              }}
                            >
                              {pqsField.name}
                            </label>
                            <div className="col-sm-8">
                              <DynamicInput
                                field={pqsField}
                                onChangeHandler={onChangeHandler}
                                defaultValue={fieldsValue[pqsField.state]}
                              />
                            </div>
                            <hr className="my-3" />
                          </Form.Group>
                        </div>
                      ))}
                  </>
                )}
              </>
            )}
            {Object.values(itemFields)[activeStep]?.map((field) => {
              const hasRequiredError = fieldErrors.indexOf(field.id) >= 0;
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
                            this field is required!
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
    </form>
  );
}

export default Item;
