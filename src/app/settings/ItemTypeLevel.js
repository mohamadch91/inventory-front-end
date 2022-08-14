import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import SharedTable from "../shared/SharedTable";
import { Form } from "react-bootstrap";
import ItemsService from "../services/items.service";
import { useQuery } from "react-query";
import Spinner from "../shared/Spinner";
import "../styles/table.scss";

function ItemTypeLevel() {
  const [selectedItemClass, setSelectedItemClass] = useState();
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [fieldsValue, setFieldsValue] = useState([]);

  const { data: itemClassesWithFields, isLoading: isItemClassesLoading } =
    useQuery(
      ["active-item-classes-with-fields"],
      async () => {
        const res = await ItemsService.getActiveItemClassesWithFields();
        return res.data;
      },
      {
        onSuccess(data) {
          setSelectedItemClass(data[0]);
        },
      }
    );

  const { isLoading: isItemTinLevelLoading } = useQuery(
    ["itemTinLevel", selectedLevel],
    async () => {
      const res = await ItemsService.getItemTinLevels(selectedLevel);
      return res.data;
    },
    {
      onSuccess(data) {
        setFieldsValue((preFields) => [...preFields, ...data]);
      },
    }
  );

  //TODO: if levels doesn't exist, do what?
  const levels = JSON.parse(localStorage.getItem("country"))?.levels ?? 1;

  const selectItemClassHandler = (e) => {
    setSelectedItemClass(itemClassesWithFields[e.target.value]);
  };

  const selectLevelHandler = (e) => {
    setSelectedLevel(e.target.value);
  };

  const onEnableFieldHandler = (e, currentField) => {
    const fieldValuesClone = [...fieldsValue];
    const fieldIndex = fieldsValue.findIndex(
      (field) => field.itemtypeid === currentField.id
    );
    if (fieldIndex === -1) {
      fieldValuesClone.push({
        itemtypeid: currentField.id,
        level: selectedLevel,
        active: true,
      });
    } else {
      const currentFieldValue = fieldsValue[fieldIndex];
      fieldValuesClone[fieldIndex] = {
        ...currentFieldValue,
        active: !currentFieldValue,
      };
    }
    setFieldsValue(fieldValuesClone);
  };

  const onSaveHandler = async () => {
    ItemsService.putItemTypeInClass(fieldsValue);
  };

  return (
    <div>
      <h3 className="page-title mb-3">"Item type" In different levels</h3>
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
                        {itemClassesWithFields.map((itemClass, index) => (
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
                    <label className="col-sm-12">Level</label>
                    <div className="col-sm-12">
                      <Form.Control
                        onChange={selectLevelHandler}
                        value={selectedLevel}
                        className="form-select"
                        as="select"
                      >
                        {Array.from({ length: levels }).map((_, index) => (
                          <option value={index + 1}>{index + 1}</option>
                        ))}
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
          {selectedItemClass?.item_type.length > 0 && (
            <div className="mt-5 table-container">
              <SharedTable>
                <TableHead>
                  <TableRow>
                    <TableCell className="col-sm-10">Title</TableCell>
                    <TableCell>Enable</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedItemClass.item_type.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="col-sm-10">{item.title}</TableCell>
                      <TableCell>
                        <input
                          type="checkbox"
                          disabled={isItemTinLevelLoading}
                          defaultChecked={
                            !!fieldsValue.find(
                              (field) => field.itemtypeid === item.id
                            )
                          }
                          onChange={(e) => onEnableFieldHandler(e, item)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </SharedTable>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ItemTypeLevel;
