import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import SharedTable from "../shared/SharedTable";
import { Form } from "react-bootstrap";
import ItemsService from "../services/items.service";
import { useQuery } from "react-query";
import Spinner from "../shared/Spinner";
import "../styles/table.scss";
import { Trans } from "react-i18next";

function ItemTypeLevel() {
  const [selectedItemClass, setSelectedItemClass] = useState();
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [fieldsValue, setFieldsValue] = useState([]);

  const { data: itemClassesWithItemTypes, isLoading: isItemClassesLoading } =
    useQuery(
      ["active-item-classes-with-item-type"],
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

  const { data: itemsTinLevel, isLoading: isItemTinLevelLoading } = useQuery(
    ["itemTinLevel", selectedLevel],
    async () => {
      const res = await ItemsService.getItemTinLevels(selectedLevel);
      const fieldsValueClone = [...fieldsValue];
      res.data.forEach((newField) => {
        if (
          !fieldsValue.find(
            (fieldValue) =>
              fieldValue.itemtypeid === newField.itemtype.id &&
              fieldValue.level === newField.level.id
          )
        ) {
          fieldsValueClone.push({
            itemtypeid: newField.itemtype.id,
            level: newField.level.id,
            active: newField.active,
            id: newField.id,
          });
        }
      });
      setFieldsValue(fieldsValueClone);
      return fieldsValueClone;
    },
    {
      refetchOnMount: true,
    }
  );

  //TODO: if levels doesn't exist, do what?
  const levels = JSON.parse(localStorage.getItem("country"))?.levels ?? 1;

  const selectItemClassHandler = (e) => {
    setSelectedItemClass(itemClassesWithItemTypes[e.target.value]);
  };

  const selectLevelHandler = (e) => {
    setSelectedLevel(+e.target.value);
  };

  const onEnableFieldHandler = (e, currentField) => {
    const checked = e.target.checked;
    const fieldValuesClone = [...fieldsValue];
    const fieldIndex = fieldsValue.findIndex(
      (field) =>
        field.itemtypeid === currentField.id && field.level === selectedLevel
    );
    if (fieldIndex === -1) {
      fieldValuesClone.push({
        itemtypeid: currentField.id,
        level: selectedLevel,
        active: checked,
      });
    } else {
      const currentFieldValue = fieldsValue[fieldIndex];
      fieldValuesClone[fieldIndex] = {
        ...currentFieldValue,
        active: !currentFieldValue.active,
        level: selectedLevel,
      };
    }
    setFieldsValue(fieldValuesClone);
  };

  const onSaveHandler = async () => {
    const payload = fieldsValue.filter(
      (field) =>
        !itemsTinLevel?.some(
          (item) =>
            item.itemtypeid === field.itemtypeid &&
            item.level === field.level &&
            item.active === field.active
        )
    );
    const res = await ItemsService.putItemTypeInClass(payload);
  };

  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Item categories in different levels</Trans>
      </h3>
      {isItemClassesLoading ? (
        <Spinner />
      ) : (
        <div className="mt-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12 col-lg-5">
                  <Form.Group className="row">
                    <label className="col-sm-12">
                      <Trans>Item class</Trans>
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
                <div className="col-sm-12 col-lg-5">
                  <Form.Group className="row">
                    <label className="col-sm-12">
                      <Trans>Levels</Trans>
                    </label>
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
                    <Trans>Save</Trans>
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
                    <TableCell className="col-sm-10">
                      <Trans>Items category</Trans>
                    </TableCell>
                    <TableCell>
                      <Trans>Enable</Trans>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedItemClass.item_type.map((item) => {
                    const isChecked = fieldsValue.find(
                      (field) =>
                        field.itemtypeid === item.id &&
                        field.level === selectedLevel
                    )?.active;
                    return (
                      <TableRow key={item.id}>
                        <TableCell className="col-sm-10">
                          {item.title}
                        </TableCell>
                        <TableCell>
                          <div class="form-check form-check-primary mt-3">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                disabled={isItemTinLevelLoading}
                                checked={!!isChecked}
                                onChange={(e) => onEnableFieldHandler(e, item)}
                              />
                              <i className="input-helper mt-3"></i>
                            </label>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
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
