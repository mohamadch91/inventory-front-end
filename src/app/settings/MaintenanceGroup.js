import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import SharedTable from "../shared/SharedTable";
import { useQuery } from "react-query";
import Spinner from "../shared/Spinner";
import EditIcon from "../shared/EditIcon";
import { Form } from "react-bootstrap";
import "../styles/table.scss";
import "../styles/inputs.scss";
import { useEffect } from "react";
import MaintenanceService from "../services/maintenance.service";

const defaultValues = {
  name: "",
  enable: false,
};

function MaintenanceGroupComponent() {
  const [selectedItemClassAndItemTypes, setSelectedItemClassAndItemTypes] =
    useState();
  const [selectedItemType, setSelectedItemType] = useState();
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedToEdit, setSelectedToEdit] = useState(defaultValues);

  const { data: itemClassesWithItemTypes, isLoading: isItemClassesLoading } =
    useQuery(
      ["active-item-classes-with-item-type"],
      async () => {
        const res = await MaintenanceService.getMaintenanceHelper();
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
    data: maintenances,
    isLoading: isMaintenancesLoading,
    refetch: fetchMaintenance,
  } = useQuery(
    [
      "get-maintenances-gp",
      selectedItemType?.id,
      selectedItemClassAndItemTypes?.item_class.id,
    ],
    async () => {
      const res = await MaintenanceService.getMaintenanceGp(
        selectedItemClassAndItemTypes?.item_class.id,
        selectedItemType?.id
      );
      return res.data;
    },
    { enabled: false }
  );

  useEffect(() => {
    if (selectedItemType && selectedItemClassAndItemTypes) {
      fetchMaintenance();
    }
  }, [selectedItemType]);

  const selectItemClassHandler = (e) => {
    setSelectedItemClassAndItemTypes(itemClassesWithItemTypes[e.target.value]);
    setSelectedItemType(
      itemClassesWithItemTypes[e.target.value].item_type?.[0]
    );
  };

  const selectItemTypeHandler = (e) => {
    setSelectedItemType(
      selectedItemClassAndItemTypes.item_type[e.target.value]
    );
  };

  const onAcceptHandler = async () => {
    const payload = {
      ...selectedToEdit,
      item_type: selectedItemType?.id,
      item_class: selectedItemClassAndItemTypes?.item_class.id,
    };
    const res = (await payload.id)
      ? MaintenanceService.putMaintenanceGp(payload)
      : MaintenanceService.postMaintenanceGp(payload);
    fetchMaintenance();
    setSelectedToEdit(defaultValues);
    setIsEditMode(false);
  };

  if (isItemClassesLoading || isMaintenancesLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="page-title mb-3">Maintenance Group</h3>
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
                  <label className="col-sm-12">item type</label>
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
              {isEditMode ? "Edit Maintenance Group" : "New Maintenance Group"}
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
                Service/ Maintenance Name
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
            </Form.Group>
            <div className="row">
              <div className="col-sm-1">
                <button
                  disabled={selectedToEdit === defaultValues}
                  className="btn btn-primary"
                  onClick={onAcceptHandler}
                >
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
                      <TableCell className="col-sm-9">
                        Service/ Maintenance items
                      </TableCell>
                      <TableCell className="col-sm-1">Enable</TableCell>
                      <TableCell className="col-sm-2">Edit</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {maintenances?.map((field) => {
                      return (
                        <TableRow key={field.id}>
                          <TableCell className="col-sm-9">
                            {field.name}
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
                                setSelectedToEdit({
                                  id: field.id,
                                  enable: field.enable,
                                  name: field.name,
                                });
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

export default MaintenanceGroupComponent;