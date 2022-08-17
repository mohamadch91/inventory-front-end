import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useMemo, useState } from "react";
import SharedTable from "../shared/SharedTable";
import { Form } from "react-bootstrap";
import ItemsService from "../services/items.service";
import { useQuery } from "react-query";
import Spinner from "../shared/Spinner";
import EditIcon from "../shared/EditIcon";
import CloseIcon from "../shared/CloseIcon";
import "../styles/table.scss";

function FieldsOfItemT() {
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
      const res = await ItemsService.getItemFields();
      return res.data;
    },
    {
      staleTime: Infinity,
    }
  );

  const { data: relatedItemType } = useQuery(
    ["related-item-type", selectedItemType?.id],
    async () => {
      const res = await ItemsService.getRelatedItemType(selectedItemType.id);
      const fieldsValueClone = [...fieldsValue];
      res.data.forEach((newField) => {
        if (
          !fieldsValue.find(
            (fieldValue) =>
              fieldValue.fieldid === newField.field.id &&
              fieldValue.itemtypeid === newField.itemtype.id
          )
        ) {
          fieldsValueClone.push({
            fieldid: newField.field.id,
            itemtypeid: newField.itemtype.id,
            enable: true,
            required: newField.required,
          });
        }
      });
      setFieldsValue(fieldsValueClone);
      return fieldsValueClone;
    },
    {
      enabled: !isItemClassesLoading,
      staleTime: 5 * 60 * 1000, // cache data about 5 minutes
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
    console.log(fieldValuesClone);
    if (fieldIndex === -1) {
      fieldValuesClone.push({
        itemtypeid: selectedItemType.id,
        fieldid: currentField.id,
        required: kind === "required" ? checked : false,
        enable: kind === "enable" ? checked : false,
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
    const res = await ItemsService.putItemFields({
      ...editedField,
      name: newFieldName,
    });
    refetchRelatedItemFields();
    setEditedField(null);
    setNewFieldName("");
  };

  const onSaveHandler = async () => {
    const payload = fieldsValue.filter(
      (field) =>
        !relatedItemType?.some(
          (rItem) =>
            rItem.itemtypeid === field.itemtypeid &&
            rItem.fieldid === field.fieldid &&
            rItem.required === field.required &&
            rItem.enable === field.enable
        )
    );
    const res = await ItemsService.putRelatedItemType(payload);
  };

  return (
    <div>
      <h3 className="page-title mb-3">Fields of "Item type"</h3>
      {isItemClassesLoading ? (
        <Spinner />
      ) : (
        <div className="mt-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12 col-lg-5">
                  <Form.Group className="row">
                    <label className="col-sm-12">Item class</label>
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
                <div className="col-sm-12 col-lg-5">
                  <Form.Group className="row">
                    <label className="col-sm-12">Item type</label>
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
                <div className="col-sm-12 col-lg-2">
                  <button
                    className="btn btn-primary w-100 mt-4"
                    onClick={onSaveHandler}
                  >
                    Save
                  </button>
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
          {Object.keys(fieldsCategories).map((topic) => (
            <div className="mt-3" key={topic}>
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <h4>{topic}</h4>
                    <div className="mt-5 table-container">
                      <SharedTable>
                        <TableHead>
                          <TableRow>
                            <TableCell className="col-sm-4">
                              Field name
                            </TableCell>
                            <TableCell className="col-sm-2">Enable</TableCell>
                            <TableCell className="col-sm-4">
                              Is this required field for item type?
                            </TableCell>
                            <TableCell className="col-sm-2">Edit</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {fieldsCategories[topic].map((field) => {
                            const isEnable = fieldsValue.find(
                              (fieldValue) =>
                                fieldValue.fieldid === field.id &&
                                fieldValue.itemtypeid === selectedItemType.id
                            )?.enable;
                            const isRequired = fieldsValue.find(
                              (fieldValue) =>
                                fieldValue.fieldid === field.id &&
                                fieldValue.itemtypeid === selectedItemType.id
                            )?.required;
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
                                  <input
                                    type="checkbox"
                                    disabled={!relatedItemType}
                                    checked={isEnable}
                                    onChange={(e) =>
                                      onFieldChangeHandler(e, field, "enable")
                                    }
                                  />
                                </TableCell>
                                <TableCell className="col-sm-4">
                                  <input
                                    type="checkbox"
                                    disabled={!isEnable}
                                    checked={isRequired}
                                    onChange={(e) =>
                                      onFieldChangeHandler(e, field, "required")
                                    }
                                  />
                                </TableCell>
                                <TableCell className="col-sm-2">
                                  {editedField?.id === field.id ? (
                                    <>
                                      <button
                                        className="save-btn"
                                        onClick={handleSubmitEdit}
                                      >
                                        Save
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
                          })}
                        </TableBody>
                      </SharedTable>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default FieldsOfItemT;
