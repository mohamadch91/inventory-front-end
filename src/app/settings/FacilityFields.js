import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useMemo, useState } from "react";
import SharedTable from "../shared/SharedTable";
import { useQuery } from "react-query";
import Spinner from "../shared/Spinner";
import EditIcon from "../shared/EditIcon";
import CloseIcon from "../shared/CloseIcon";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import StepButton from "@mui/material/StepButton";
import "../styles/table.scss";
import RelatedService from "../services/related.service";
import "../styles/inputs.scss";
import { Trans } from "react-i18next";
import LeftArrowIcon from "../shared/LeftArrowIcon";
import RightArrowIcon from "../shared/RightArrowIcon";

function FieldsFacility() {
  const [activeStep, setActiveStep] = useState(0);
  const [fieldsValue, setFieldsValue] = useState([]);
  const [editedField, setEditedField] = useState(null);
  const [newFieldName, setNewFieldName] = useState("");

  const {
    data: relatedFacility,
    isLoading: isRelatedFacilityLoading,
    refetch: refetchRelatedFacility,
  } = useQuery(
    ["related-facility"],
    async () => {
      const res = await RelatedService.getRelatedFacility();
      return res.data;
    },
    {
      refetchOnMount: true,
    }
  );

  const fieldsCategories = useMemo(() => {
    const result = {};
    if (relatedFacility) {
      for (const field of relatedFacility) {
        const fieldTopicInResult = result[field.topic] ?? [];
        fieldTopicInResult.push(field);
        result[field.topic] = fieldTopicInResult;
      }
    }
    return result;
  }, [relatedFacility]);

  const onFieldChangeHandler = (e, currentField, kind) => {
    const checked = e.target.checked;
    const fieldValuesClone = [...fieldsValue];
    const fieldIndex = fieldsValue.findIndex(
      (field) => field.id === currentField.id
    );
    if (fieldIndex === -1) {
      //for the first time
      fieldValuesClone.push({
        ...currentField,
        required: kind === "required" ? checked : false,
        active: kind === "enable" ? checked : true,
      });
    } else {
      const currentFieldValue = fieldsValue[fieldIndex];
      fieldValuesClone[fieldIndex] = {
        ...currentFieldValue,
        required: kind === "required" ? checked : currentFieldValue.required,
        active: kind === "enable" ? checked : currentFieldValue.active,
      };
    }
    setFieldsValue(fieldValuesClone);
  };

  const handleSubmitEdit = async () => {
    const res = await RelatedService.putRelatedFacility([
      {
        ...editedField,
        name: newFieldName,
      },
    ]);
    refetchRelatedFacility();
    setEditedField(null);
    setNewFieldName("");
  };

  const onSaveHandler = async () => {
    const res = await RelatedService.putRelatedFacility(fieldsValue);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Fields related to facilities</Trans>
      </h3>
      {isRelatedFacilityLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="mt-3">
            <div className="card">
              <div className="card-body pb-3">
                <div className="row pb-4" style={{ overflow: "auto" }}>
                  <Stepper activeStep={activeStep}>
                    {Object.keys(fieldsCategories).map((topic, index) => {
                      return (
                        <Step key={topic} onClick={() => handleStep(index)}>
                          <StepButton
                            color="inherit"
                            style={{ width: "max-content" }}
                          >
                            <Trans>{topic}</Trans>
                          </StepButton>
                        </Step>
                      );
                    })}
                  </Stepper>
                </div>
                <div className="row mt-2">
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      <LeftArrowIcon style={{ marginRight: 2 }} />

                      <Trans>Back</Trans>
                    </Button>
                    <Box sx={{ flex: "0.48 0.4 auto" }} />

                    <button
                      className="btn btn-primary "
                      onClick={onSaveHandler}
                    >
                      <Trans>Save all</Trans>
                    </button>
                    <Box sx={{ flex: "0.5 0.5 auto" }} />
                    <Button
                      disabled={
                        activeStep === Object.keys(fieldsCategories).length - 1
                      }
                      onClick={handleNext}
                      sx={{ mr: 1 }}
                    >
                      <Trans>Next</Trans>
                      <RightArrowIcon />
                    </Button>
                  </Box>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <h4>
                    {" "}
                    <Trans>{Object.keys(fieldsCategories)[activeStep]}</Trans>
                  </h4>
                  <div className="mt-5 table-container">
                    <SharedTable>
                      <TableHead>
                        <TableRow>
                          <TableCell className="col-sm-4">
                            <Trans>Field name</Trans>
                          </TableCell>
                          <TableCell className="col-sm-2">
                            <Trans>Enable</Trans>
                          </TableCell>
                          <TableCell className="col-sm-4">
                            <Trans>Is this required for facility?</Trans>
                          </TableCell>
                          <TableCell className="col-sm-2">
                            <Trans>Edit</Trans>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Object.values(fieldsCategories)[activeStep]?.map(
                          (field) => {
                            const fieldValue =
                              fieldsValue.find(
                                (fieldValue) => fieldValue.id === field.id
                              ) ??
                              relatedFacility?.find(
                                (rItem) => field.id === rItem.id
                              );
                            console.log(fieldValue);
                            return (
                              <TableRow key={field.id}>
                                <TableCell className="col-sm-4">
                                  {editedField?.id === field.id ? (
                                    <input
                                      name="field-name"
                                      type="text"
                                      onChange={(e) =>
                                        setNewFieldName(e.target.value)
                                      }
                                      defaultValue={field.name}
                                    />
                                  ) : (
                                    field.name
                                  )}
                                </TableCell>
                                <TableCell className="col-sm-2">
                                  <div class="form-check form-check-primary mt-3">
                                    <label className="form-check-label">
                                      <input
                                        type="checkbox"
                                        disabled={fieldValue?.disabled}
                                        checked={fieldValue?.active}
                                        onChange={(e) =>
                                          onFieldChangeHandler(
                                            e,
                                            field,
                                            "enable"
                                          )
                                        }
                                      />
                                      <i className="input-helper mt-3"></i>
                                    </label>
                                  </div>
                                </TableCell>
                                <TableCell className="col-sm-4">
                                  <div class="form-check form-check-primary mt-3">
                                    <label className="form-check-label">
                                      <input
                                        type="checkbox"
                                        disabled={
                                          fieldValue?.disabled ||
                                          !fieldValue?.active
                                        }
                                        checked={fieldValue?.required}
                                        onChange={(e) =>
                                          onFieldChangeHandler(
                                            e,
                                            field,
                                            "required"
                                          )
                                        }
                                      />
                                      <i className="input-helper mt-3"></i>
                                    </label>
                                  </div>
                                </TableCell>
                                <TableCell className="col-sm-2">
                                  {editedField?.id === field.id ? (
                                    <>
                                      <button
                                        className="save-btn"
                                        onClick={handleSubmitEdit}
                                      >
                                        <Trans>Save</Trans>
                                      </button>
                                      <button
                                        className="close-btn"
                                        onClick={() => {
                                          setEditedField(null);
                                          setNewFieldName("");
                                        }}
                                      >
                                        <CloseIcon />
                                      </button>
                                    </>
                                  ) : (
                                    <button
                                      className="edit-btn"
                                      onClick={() => {
                                        setEditedField(field);
                                        setNewFieldName(field.name);
                                      }}
                                    >
                                      <EditIcon />
                                    </button>
                                  )}
                                </TableCell>
                              </TableRow>
                            );
                          }
                        )}
                      </TableBody>
                    </SharedTable>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FieldsFacility;
