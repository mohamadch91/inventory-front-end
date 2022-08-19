import React, { useState } from "react";
import { useQuery } from "react-query";
import FacilitiesService from "../services/facilities.service";
import { useParams } from "react-router-dom";
import Spinner from "../shared/Spinner";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Form } from "react-bootstrap";

const FacilityInput = (props) => {
  const { field, onChangeHandler, defaultValue } = props;
  if (field.type === "select") {
    return (
      <Form.Control
        onChange={(e) => onChangeHandler(e, field)}
        defaultValue={defaultValue}
        className="form-control"
        as="select"
        disabled={field.disabled}
        id={`field-${field.id}`}
      >
        <option value="" selected disabled>
          Please select
        </option>
        {field.params.map((param) => (
          <option disabled={!param.enabled} value={param.id}>
            {param.name}
          </option>
        ))}
      </Form.Control>
    );
  }

  return (
    <Form.Control
      onChange={(e) => onChangeHandler(e, field)}
      defaultValue={defaultValue}
      className="form-control"
      id={`field-${field.id}`}
      type={field.type}
      disabled={field.disabled}
    />
  );
};

function Facility() {
  const [activeStep, setActiveStep] = useState(0);
  const [fieldsValue, setFieldValue] = useState({});
  const [fieldErrors, setFieldErrors] = useState([]);

  const { id } = useParams();

  const { isLoading: isFacilityDefaultLoading } = useQuery(
    ["facility-default-value", id],
    async () => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (id === "new") return { "parent-facility": user?.facility_id };

      const res = await FacilitiesService.getFacilities(id);
      res.data["parent-facility"] = user?.facility_id;
      return res.data;
    },
    {
      staleTime: Infinity,
      refetchOnMount: true,
      onSuccess(data) {
        setFieldValue(data);
      },
    }
  );

  const { data: facilityFields, isLoading: isFacilitiesFields } = useQuery(
    ["facility-fields"],
    async () => {
      const res = await FacilitiesService.getFacilityFields();
      const result = {};
      if (res.data) {
        for (const field of res.data.related) {
          const fieldTopicInResult = result[field.topic] ?? [];
          fieldTopicInResult.push(field);
          result[field.topic] = fieldTopicInResult;
        }
        const firstTopic = Object.keys(result)[0];
        //static fields
        result[firstTopic].unshift({
          id: "level",
          name: "Level",
          topic: firstTopic,
          type: "select",
          active: true,
          required: true,
          stateName: "level",
          params: res.data.levels.map((level) => ({
            id: level.id,
            name: level.name,
            order: 1,
            enabled: true,
            paramid: level.id,
          })),
        });
        result[firstTopic].unshift({
          id: "code",
          name: "Facility code:",
          topic: firstTopic,
          type: "text",
          active: true,
          disabled: true,
          required: false,
          stateName: "code",
          params: [],
        });
        result[firstTopic].unshift({
          id: "parent-facility",
          name: "Parent facility:",
          topic: firstTopic,
          type: "text",
          active: true,
          disabled: true,
          required: false,
          stateName: "parent-facility",
          params: [],
        });
      }
      return result;
    },
    {
      staleTime: Infinity,
      refetchOnMount: true,
    }
  );

  if (isFacilityDefaultLoading || isFacilitiesFields) {
    return <Spinner />;
  }

  const hasRequiredErrors = () => {
    const _fieldErrors = [];
    const currentStepFields = Object.values(facilityFields)[activeStep];
    currentStepFields.forEach((field) => {
      if (field.required && !fieldsValue[field.stateName]) {
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
    cloneFieldsValue[field.stateName] = value;
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
    const res = await (id === "new"
      ? FacilitiesService.postFacility(fieldsValue)
      : FacilitiesService.putFacility(fieldsValue));
  };

  return (
    <form onSubmit={onSaveHandler}>
      <h3 className="page-title mb-3">Facility information</h3>
      <div className="mt-3">
        <div className="card">
          <div className="card-body pb-3">
            <div className="row pb-4" style={{ overflow: "auto" }}>
              <Stepper activeStep={activeStep}>
                {Object.keys(facilityFields).map((topic, index) => {
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
                {activeStep === Object.keys(facilityFields).length - 1 ? (
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
            {Object.values(facilityFields)[activeStep]?.map((field) => {
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
                      <FacilityInput
                        field={field}
                        onChangeHandler={onChangeHandler}
                        defaultValue={fieldsValue[field.stateName]}
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

export default Facility;
