import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useMemo, useState } from "react";
import SharedTable from "../shared/SharedTable";
import { useQuery } from "react-query";
import Spinner from "../shared/Spinner";
import EditIcon from "../shared/EditIcon";
import { Form } from "react-bootstrap";
import "../styles/table.scss";
import RelatedService from "../services/related.service";
import ItemsService from "../services/items.service";
import "../styles/inputs.scss";
import { useEffect } from "react";

const defaultValues = {
  name: "",
  code: "",
  enable: false,
};

function MaintenanceService() {
  const [selectedItemClassAndItemTypes, setSelectedItemClassAndItemTypes] =
    useState();
  const [selectedItemType, setSelectedItemType] = useState();
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedToEdit, setSelectedToEdit] = useState(defaultValues);

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

  useEffect(() => {
    if (selectedItemType && selectedItemClassAndItemTypes) {
      //TODO: get list
    }
  }, [selectedItemType]);

  const selectItemClassHandler = (e) => {
    setSelectedItemClassAndItemTypes(itemClassesWithItemTypes[e.target.value]);
    setSelectedItemType(itemClassesWithItemTypes.item_type?.[0]);
  };

  const selectItemTypeHandler = (e) => {
    setSelectedItemType(
      selectedItemClassAndItemTypes.item_type[e.target.value]
    );
  };

  const onAcceptHandler = async () => {
    const res = await RelatedService.putRelatedFacility(selectedToEdit);
    setSelectedToEdit(defaultValues);
    setIsEditMode(false);
  };

  if (isItemClassesLoading) {
    return <Spinner />;
  }

  console.log(selectedToEdit);

  return (
    <div>
      <h3 className="page-title mb-3">Maintenance Service</h3>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-12 col-lg-6">
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
              <div className="col-sm-12 col-lg-6">
                <Form.Group className="row">
                  <label className="col-sm-12">item category</label>
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
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <h3 className="page-title mb-3">
              {isEditMode
                ? "Edit Maintenance Service"
                : "New Maintenance Service"}
            </h3>
            <Form.Group className="row">
              <label
                className="col-sm-4"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                Service/ Maintenance items
              </label>
              <div className="col-sm-8">
                <Form.Control
                  onChange={(e) => {
                    e.persist();
                    setSelectedToEdit((preState) => ({
                      ...preState,
                      name: e.target.value,
                    }));
                  }}
                  className="form-control"
                  value={selectedToEdit?.name}
                />
              </div>
              <hr className="my-3" />
            </Form.Group>
            <Form.Group className="row">
              <label
                className="col-sm-4"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                Service Interval (day)
              </label>
              <div className="col-sm-8">
                <Form.Control
                  onChange={(e) => {
                    e.persist();
                    setSelectedToEdit((preState) => ({
                      ...preState,
                      code: e.target.value,
                    }));
                  }}
                  className="form-control"
                  value={selectedToEdit?.code}
                />
              </div>
              <hr className="my-3" />
            </Form.Group>
            <Form.Group className="row">
              <label
                className="col-sm-4"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                Enable
              </label>
              <div className="col-sm-8">
                <input
                  type="checkbox"
                  checked={selectedToEdit?.enable}
                  onChange={(e) => {
                    e.persist();
                    setSelectedToEdit((preState) => ({
                      ...preState,
                      enable: e.target.checked,
                    }));
                  }}
                />
              </div>
              <hr />
            </Form.Group>
            <div className="row">
              <div className="col-sm-1 mr-3">
                <button className="btn btn-primary" onClick={onAcceptHandler}>
                  Accept
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setSelectedToEdit(defaultValues);
                    setIsEditMode(false);
                  }}
                >
                  Return
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="card">
          <div className="card-body p-3">
            <div className="row">
              <div className="mt-5 table-container">
                <SharedTable>
                  <TableHead>
                    <TableRow>
                      <TableCell className="col-sm-8">
                        Service/ Maintenance items
                      </TableCell>
                      <TableCell className="col-sm-2">
                        Service Interval (day)
                      </TableCell>
                      <TableCell className="col-sm-1">Enable</TableCell>
                      <TableCell className="col-sm-1">Edit</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[]?.map((field) => {
                      return (
                        <TableRow key={field.id}>
                          <TableCell className="col-sm-8">
                            {field.name}
                          </TableCell>
                          <TableCell className="col-sm-2">
                            {field.code}
                          </TableCell>
                          <TableCell className="col-sm-1">
                            <input
                              type="checkbox"
                              disabled={true}
                              checked={field.enable}
                            />
                          </TableCell>
                          <TableCell className="col-sm-2">
                            <button
                              type="button"
                              className="edit-btn"
                              onClick={() => {
                                setSelectedToEdit(field);
                                setIsEditMode(true);
                              }}
                            >
                              <EditIcon />
                            </button>
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
    </div>
  );
}

export default MaintenanceService;
