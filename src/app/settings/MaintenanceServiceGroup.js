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
import { Trans } from "react-i18next";

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
    const value = +e.target.value;
    const item = itemClassesWithItemTypes.find(
      (item) => item.item_class.id === value
    );
    setSelectedItemClassAndItemTypes(item);
    setSelectedItemType(item.item_type?.[0]);
    setSelectedGp(item.item_type?.[0]?.maintancegp?.[0]);
  };

  const selectItemTypeHandler = (e) => {
    const value = +e.target.value;
    const item = selectedItemClassAndItemTypes.item_type.find(
      (item) => item.id === value
    );
    setSelectedItemType(item);
    setSelectedGp(item.maintancegp?.[0]);
  };

  const selectGpHandler = (e) => {
    const value = +e.target.value;
    const item = selectedItemType.maintancegp.find((item) => item.id === value);
    setSelectedGp(item);
  };

  const onAcceptHandler = async () => {
    const res = await MaintenanceService.postMaintenanceActive(editedFields);
    fetchMaintenance();
    setEditedFields([]);
  };

  if (isItemClassesLoading || isMaintenancesLoading) {
    return <Spinner />;
  }

  console.log(selectedItemType);

  return (
    <div>
      <h3 className="page-title mb-3"><Trans>Maintenance Service Group Assignment</Trans></h3>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-12 col-lg-4">
                <Form.Group className="row">
                  <label className="col-sm-12"><Trans>Item class</Trans></label>
                  <div className="col-sm-12">
                    <Form.Control
                      onChange={selectItemClassHandler}
                      className="form-select"
                      as="select"
                      value={selectedItemClassAndItemTypes?.item_class.id}
                    >
                      {itemClassesWithItemTypes.map((itemClass) => (
                        <option
                          key={itemClass.item_class.id}
                          value={itemClass.item_class.id}
                        >
                          {itemClass.item_class.title}
                        </option>
                      ))}
                    </Form.Control>
                  </div>
                </Form.Group>
              </div>
              <div className="col-sm-12 col-lg-4">
                <Form.Group className="row">
                  <label className="col-sm-12"><Trans>Items category</Trans></label>
                  <div className="col-sm-12">
                    <Form.Control
                      onChange={selectItemTypeHandler}
                      className="form-select"
                      disabled={selectedItemClassAndItemTypes === null}
                      as="select"
                      value={selectedItemType?.id}
                    >
                      {selectedItemClassAndItemTypes?.item_type.map(
                        (itemType) => (
                          <option key={itemType.id} value={itemType.id}>
                            {itemType.title}
                          </option>
                        )
                      )}
                    </Form.Control>
                  </div>
                </Form.Group>
              </div>
              <div className="col-sm-12 col-lg-4">
                <Form.Group className="row">
                  <label className="col-sm-12"><Trans>Maintenance group</Trans></label>
                  <div className="col-sm-12">
                    <Form.Control
                      onChange={selectGpHandler}
                      className="form-select"
                      disabled={selectedItemType === null}
                      as="select"
                      value={selectedGp?.id}
                    >
                      {selectedItemType?.maintancegp.map((gp) => (
                        <option value={gp.id} key={gp.id} disabled={!gp.enable}>
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
                  <Trans>Save changes</Trans>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="mt-3 table-container">
                <SharedTable>
                  <TableHead>
                    <TableRow>
                      <TableCell className="col-sm-10">
                        <Trans>Service/ Maintenance items</Trans>
                      </TableCell>
                      <TableCell className="col-sm-2"><Trans>Enable</Trans></TableCell>
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
                            <div class="form-check form-check-primary mt-3">
                              <label className="form-check-label">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaintenanceServiceGroup;
