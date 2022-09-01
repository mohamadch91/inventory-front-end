import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import SharedTable from "../shared/SharedTable";
import { useQuery } from "react-query";
import Spinner from "../shared/Spinner";
import { Form } from "react-bootstrap";
import "../styles/table.scss";
import "../styles/inputs.scss";
import { useEffect } from "react";
import MaintenanceService from "../services/maintenance.service";

function MaintenanceServiceGroup() {
  const [selectedItemClassAndItemTypes, setSelectedItemClassAndItemTypes] =
    useState();
  const [selectedItemType, setSelectedItemType] = useState();
  const [selectedGp, setSelectedGp] = useState();
  const [editedFields, setEditedFields] = useState([]);
  
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
          setSelectedGp(data[0].item_type[0].maintancegp[0]);
        },
      }
    );

  const {
    data: maintenances,
    isLoading: isMaintenancesLoading,
    refetch: fetchMaintenance,
  } = useQuery(
    [
      "get-maintenances",
      selectedItemType?.id,
      selectedItemClassAndItemTypes?.item_class.id,
      selectedGp?.id,
    ],
    async () => {
      const res = await MaintenanceService.getMaintenanceActive(
        selectedItemClassAndItemTypes?.item_class.id,
        selectedItemType?.id,
        selectedGp?.id
      );
      console.log(res.data);
      return res.data;
    },
    { enabled: false, cacheTime: 0 }
  );

  useEffect(() => {
    if (selectedItemType && selectedItemClassAndItemTypes && selectedGp) {
      fetchMaintenance();
    }
  }, [selectedGp]);

  const selectItemClassHandler = (e) => {
    setSelectedItemClassAndItemTypes(itemClassesWithItemTypes[e.target.value]);
    setSelectedItemType(
      itemClassesWithItemTypes[e.target.value].item_type?.[0]
    );
    setSelectedGp(
      itemClassesWithItemTypes[e.target.value].item_type?.[0]?.maintancegp?.[0]
    );
  };

  const selectItemTypeHandler = (e) => {
    setSelectedItemType(
      selectedItemClassAndItemTypes.item_type[e.target.value]
    );
    setSelectedGp(
      selectedItemClassAndItemTypes.item_type[e.target.value].maintancegp?.[0]
    );
  };

  const selectGpHandler = (e) => {
    console.log(selectedItemType.maintancegp[e.target.value]);
    setSelectedGp(selectedItemType.maintancegp[e.target.value]);
  };

  const onAcceptHandler = async () => {
    const res = await MaintenanceService.postMaintenanceActive(editedFields);
    fetchMaintenance();
    setEditedFields([]);
  };

  if (isItemClassesLoading || isMaintenancesLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="page-title mb-3">Maintenance Service Group Assignment</h3>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-12 col-lg-4">
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
              <div className="col-sm-12 col-lg-4">
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
              <div className="col-sm-12 col-lg-4">
                <Form.Group className="row">
                  <label className="col-sm-12">Maintenance Group</label>
                  <div className="col-sm-12">
                    <Form.Control
                      onChange={selectGpHandler}
                      className="form-select"
                      disabled={selectedItemType === null}
                      as="select"
                    >
                      {selectedItemType?.maintancegp.map((gp, index) => (
                        <option value={index} key={gp.id} disabled={!gp.enable}>
                          {gp.name}
                        </option>
                      ))}
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
          <div className="card-body p-3">
            <div
              className="row"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <div className="col-sm-2">
                <button
                  disabled={editedFields.length === 0}
                  className="btn btn-primary"
                  onClick={onAcceptHandler}
                >
                  Save changes
                </button>
              </div>
            </div>
            <div className="row">
              <div className="mt-3 table-container">
                <SharedTable>
                  <TableHead>
                    <TableRow>
                      <TableCell className="col-sm-10">
                        Service/ Maintenance items
                      </TableCell>
                      <TableCell className="col-sm-2">Enable</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                   
                    {maintenances?.map((field) => {
                      return (
                        <TableRow
                          key={
                            field.assigned ? field.id : field.maintance?.name
                          }
                        >
                          <TableCell className="col-sm-10">
                            {field.maintance?.name}
                          </TableCell>
                          <TableCell className="col-sm-2">
                            <input
                              type="checkbox"
                              defaultChecked={field.assigned}
                              onChange={(e) => {
                                const checked = e.target.checked;
                                const _fieldsClone = [...editedFields];
                                const index = _fieldsClone.findIndex(
                                  (f) => f.id === field.id
                                );
                                if (index >= 0) {
                                  _fieldsClone[index].enable = checked;
                                } else {
                                  _fieldsClone.push({
                                    id: field.maintance.id,
                                    gp: selectedGp.id,
                                    enable: checked,
                                  });
                                }
                                setEditedFields(_fieldsClone);
                              }}
                            />
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

export default MaintenanceServiceGroup;
