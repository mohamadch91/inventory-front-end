import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useMemo, useState } from "react";
import SharedTable from "../shared/SharedTable";
import { Form } from "react-bootstrap";
import ItemsService from "../services/items.service";
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


function FieldsOfItemT() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedItemClassAndItemTypes, setSelectedItemClassAndItemTypes] =
    useState();
  const [selectedItemType, setSelectedItemType] = useState();
  const [fieldsValue, setFieldsValue] = useState([]);
  const [editedField, setEditedField] = useState(null);
  const [newFieldName, setNewFieldName] = useState("");

  const { data: itemClassesWithItemTypes, isLoading: isItemClassesLoading } =
    useQuery(
      ["active-item-classes-with-item-type"],
      async () => {
        const res = await ItemsService.getActiveItemClassesWithFields();
        return res.data;
      },
      {
        onSuccess(data) {
          setSelectedItemClassAndItemTypes(data[0]);
          setSelectedItemType(data[0].item_type[0]);
        },
      }
    );

  const {
    data: relatedItemFields,
    isLoading: isRelatedItemFieldsLoading,
    refetch: refetchRelatedItemFields,
  } = useQuery(
    ["related-item-fields"],
    async () => {
      const res = await RelatedService.getItemFields();
      return res.data;
    },
    {}
  );

  const { data: relatedItemType, refetch: refetchRelatedx } = useQuery(
    ["related-item-type", selectedItemType?.id],
    async () => {
      const res = await RelatedService.getRelatedItemType(selectedItemType.id);
      return res.data;
    },
    {
      enabled: !isItemClassesLoading,
    }
  );

  const fieldsCategories = useMemo(() => {
    const result = {};
    if (relatedItemFields) {
      for (const field of relatedItemFields) {
        const fieldTopicInResult = result[field.topic] ?? [];
        fieldTopicInResult.push(field);
        result[field.topic] = fieldTopicInResult;
      }
    }
    return result;
  }, [relatedItemFields]);

  const selectItemClassHandler = (e) => {
    setSelectedItemClassAndItemTypes(itemClassesWithItemTypes[e.target.value]);
    setSelectedItemType(itemClassesWithItemTypes[e.target.value].item_type[0]);
  };

  const selectItemTypeHandler = (e) => {
    setSelectedItemType(
      selectedItemClassAndItemTypes.item_type[e.target.value]
    );
  };

  const onFieldChangeHandler = (e, currentField, kind) => {
    const checked = e.target.checked;
    const fieldValuesClone = [...fieldsValue];
    const fieldIndex = fieldsValue.findIndex(
      (field) =>
        field.itemtypeid === selectedItemType.id &&
        field.fieldid === currentField.id
    );
    console.log(kind);
    if (fieldIndex === -1) {
      //for the first time
      fieldValuesClone.push({
        itemtypeid: selectedItemType.id,
        fieldid: currentField.id,
        required: kind === "required" ? checked : false,
        enable: kind === "enable" ? checked : true,
      });
    } else {
      const currentFieldValue = fieldsValue[fieldIndex];
      fieldValuesClone[fieldIndex] = {
        ...currentFieldValue,
        required: kind === "required" ? checked : currentFieldValue.required,
        enable: kind === "enable" ? checked : currentFieldValue.enable,
      };
    }
    setFieldsValue(fieldValuesClone);
  };

  const handleSubmitEdit = async () => {
    const res = await RelatedService.putItemFields({
      ...editedField,
      name: newFieldName,
    });
    refetchRelatedItemFields();
    setEditedField(null);
    setNewFieldName("");
  };

  const onSaveHandler = async () => {
    const res = await RelatedService.putRelatedItemType(fieldsValue);
    refetchRelatedx();
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
        <Trans>Fields of Items categories</Trans>
      </h3>
      {isItemClassesLoading ? (
        <Spinner />
      ) : (
        <div className="mt-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="col-sm-12">
                      <Trans>Item class</Trans>{" "}
                    </label>
                    <div className="col-sm-12">
                      <Form.Control
                        onChange={selectItemClassHandler}
                        className="form-select"
                        as="select"
                      >
                        {itemClassesWithItemTypes.map((itemClass, index) => (
                          <option value={index}>
                            {itemClass.item_class.title}
                          </option>
                        ))}
                      </Form.Control>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="col-sm-12">
                      <Trans>Items category</Trans>
                    </label>
                    <div className="col-sm-12">
                      <Form.Control
                        onChange={selectItemTypeHandler}
                        className="form-select"
                        disabled={selectedItemClassAndItemTypes === null}
                        as="select"
                      >
                        {selectedItemClassAndItemTypes?.item_type.map(
                          (itemType, index) => (
                            <option value={index}>{itemType.title}</option>
                          )
                        )}
                      </Form.Control>
                    </div>
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isRelatedItemFieldsLoading ? (
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
                      sx={{ ml: 1,pl:1 }}
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
                            <Trans>
                              Is this field required for this item category?
                            </Trans>
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
                                (fieldValue) =>
                                  fieldValue.fieldid === field.id &&
                                  fieldValue.itemtypeid === selectedItemType.id
                              ) ??
                              relatedItemType?.find(
                                (rItem) =>
                                  field.id === rItem.field.id &&
                                  selectedItemType.id === rItem.itemtype.id
                              );
                            const isEnable = fieldValue?.enable ?? !!fieldValue;
                            const isRequired = fieldValue?.required;
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
                                        disabled={!relatedItemType}
                                        checked={isEnable}
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
                                        disabled={!isEnable}
                                        checked={isRequired}
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

                                {editedField?.id === field.id ? (
                                  <TableCell className="col-sm-2">
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
                                  </TableCell>
                                ) : (
                                  <TableCell className="col-sm-2">
                                    <button
                                      className="edit-btn"
                                      onClick={() => {
                                        setEditedField(field);
                                        setNewFieldName(field.name);
                                      }}
                                    >
                                      <EditIcon sx={{ marginLeft: "0" }} />
                                    </button>
                                  </TableCell>
                                )}
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

export default FieldsOfItemT;
