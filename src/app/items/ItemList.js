import React from "react";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import "../styles/table.scss";
import Spinner from "../shared/Spinner";
import { useMutation, useQuery } from "react-query";
import SharedTable from "../shared/SharedTable";
import EditIcon from "../shared/EditIcon";
import { Link, useHistory } from "react-router-dom";
import ItemService from "../services/item.service";
import { Translation,Trans } from "react-i18next";
import TrashIcon from "../shared/TrashIcon";
import Modal from "react-bootstrap/Modal";
import InformationIcon from "../shared/InformationIcon";
import { Form } from "react-bootstrap";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
const defaultValues = {
  name: "",
  code: "",
  level: "-1",
  type: "-1",
  power: "-1",
  func: "-1",
  gfrom: "",
  gto: "",
  underfrom: "",
  underto: "",
  isDel: false,
};
function ItemList() {
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const facility = params.get("facility");
const [openModal, setOpenModal] = React.useState(false);
const [itemId, setItemId] = React.useState(null);
const [resons, setResons] = React.useState([]);
const [reasonsLoding, setReasonsLoding] = React.useState(false);
const [reason, setReason] = React.useState("");
const [itemModalOpen, setItemModalOpen] = React.useState(false);
const [itemModalInfo, setItemModalInfo] = React.useState(null);
const [is_deleted, setIsDeleted] = React.useState(false);
  const [filterValues, setFilterValues] = React.useState(defaultValues);

  const {
    data: items,
    isLoading: isItemsDefaultLoading,
    refetch: refetchItems,
  } = useQuery(
    ["item-default-value", facility],
    async () => {
      const res = await ItemService.getItems(undefined, facility,is_deleted);
      return res.data;
    },
    {
      refetchOnMount: true,
    }
  );

  const { data: itemClassesAndTypes, isLoading: isItemClassesAndTypesLoading } =
    useQuery(
      ["item-classes-and-types"],
      async () => {
        const res = await ItemService.getItemClassesAndTypes();
        return res.data.data.filter((item) => item.item_type.length > 0);
      },
      {
        refetchOnMount: true,
      }
    );
 const { data: facSegHelper, isLoading: isFacSegHelperLoading } = useQuery(
   ["fac-seg-helper"],
   async () => {
     const res = await ItemService.getQrHelper();
     return res.data;
   }
 );
  const { isLoading: isDeleteLoading, mutateAsync: deleteItem } = useMutation({
    mutationFn: async (id) => {
      const res = await ItemService.deleteItem(id);
      return res;
    },
    onSuccess() {
      refetchItems();
    },
  });

  const convertDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  if (isItemsDefaultLoading || isItemClassesAndTypesLoading) {
    return <Spinner />;
  }
 const openDeleteModal = (id) => {
   setReasonsLoding(true);
   ItemService.deleteitemparam(id).then((res) => {
     setResons(res.data);
     setReasonsLoding(false);
   });

   setItemId(id);
   setOpenModal(true);
   setReasonsLoding(false);
 };
 const printFilterValues = () => {
   let filter = "";
   for (const key in filterValues) {
     const value = filterValues[key];
     if (value.length > 0 && value !== "-1") {
       if (key === "power") {
         // find power whith value=id
         const power = facSegHelper.power.find((p) => p.id === parseInt(value));
         filter += `Power source: ${power.name}, `;
       } else if (key === "func") {
         // find func whith value=id
         console.log(value);
         if (value === "true") {
           filter += `Function: Working, `;
         } else {
           filter += `Function: Not working, `;
         }
       } else if (key === "type") {
         // find type whith value=id
         const type = facSegHelper.type.find((t) => t.id === parseInt(value));
         filter += `Type: ${type.name}, `;
       } else if (key === "level") {
         // find level whith value=id
         const level = facSegHelper.level.find((l) => l.id === parseInt(value));
         filter += `Level: ${level.id} - ${level.name} , `;
       } else if (key === "gfrom") {
         filter += `General population from: ${value}, `;
       } else if (key === "gto") {
         filter += `General population to: ${value}, `;
       } else if (key === "underfrom") {
         filter += `Under 1 population from: ${value}, `;
       } else if (key === "underto") {
         filter += `Under 1 population to: ${value}, `;
       } else if (key === "is_deleted") {
         if (value) {
           filter += `Deleted: Yes, `;
         } else {
           filter += `Deleted: No, `;
         }
       } else {
         filter += `${key}=${value}, `;
       }
     }
   }
   return filter;
 };
 const handledeletChange =()=>{
    setIsDeleted(!is_deleted)
 }
 const deletefac = () => {
   const data = {
     id: itemId,
     delete_reason: reason,
     isDel: true,
   };
   const res = ItemService.deleteitem(data);
   setOpenModal(false);
   refetchItems();
 };
 if (reasonsLoding) {
   return <Spinner />;
 }
  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Item list</Trans>
      </h3>
      <div className="mt-3">
        <div className="card">
          <div className="card-body py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                refetchItems();
              }}
            >
              <h4>
                <Trans>Filter</Trans>
              </h4>
              <div className="row mt-5">
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4 d-flex justify-content-center mt-1  align-items-center">
                      <Trans>Facility Name</Trans>:
                    </label>
                    <Form.Control
                      className="form-control  col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          name: value,
                        }));
                      }}
                      value={filterValues.name}
                    />
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4 d-flex justify-content-center mt-1  align-items-center">
                      <Trans>Code</Trans>:
                    </label>
                    <Form.Control
                      className="form-control col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          code: value,
                        }));
                      }}
                      value={filterValues.code}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4 d-flex justify-content-center mt-1  align-items-center">
                      <Trans>Levels</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          level: value,
                        }));
                      }}
                      value={filterValues.level}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {facSegHelper?.level.map((lev) => (
                        <option key={lev.id} value={lev.id}>
                          {`${lev.id} - ${lev.name}`}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4 d-flex justify-content-center mt-1  align-items-center">
                      <Trans>Type</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          type: value,
                        }));
                      }}
                      value={filterValues.type}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {facSegHelper?.type.map((ty) => (
                        <option key={ty.id} value={ty.id}>
                          {ty.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4 d-flex justify-content-center mt-1  align-items-center">
                      <Trans>Power source</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          power: value,
                        }));
                      }}
                      value={filterValues.power}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {facSegHelper?.power.map((pow) => (
                        <option key={pow.id} value={pow.id}>
                          {pow.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4 d-flex justify-content-center mt-1  align-items-center">
                      <Trans>Functioning Status</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          func: value,
                        }));
                      }}
                      value={filterValues.func}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      <option value={true}>Working</option>
                      <option value={false}>Not working</option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-12">
                  <Form.Group className="row">
                    <label className="label col-sm-2">
                      <Trans>General populations</Trans>:
                    </label>
                    <label className="label col-sm-1">
                      <Trans>from</Trans>:
                    </label>
                    <Form.Control
                      className="form-control col-sm-4"
                      type="number"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          gfrom: value,
                        }));
                      }}
                      value={filterValues.gfrom}
                    />
                    <label className="label col-sm-1">
                      <Trans>to</Trans>:
                    </label>
                    <Form.Control
                      className="form-control col-sm-4"
                      type="number"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          gto: value,
                        }));
                      }}
                      value={filterValues.gto}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-12">
                  <Form.Group className="row">
                    <label className="label col-sm-2">
                      <Trans>Under-1 Populations</Trans>:
                    </label>
                    <label className="label col-sm-1">
                      <Trans>from</Trans>:
                    </label>
                    <Form.Control
                      className="form-control col-sm-4"
                      type="number"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          underfrom: value,
                        }));
                      }}
                      value={filterValues.underfrom}
                    />
                    <label className="label col-sm-1">
                      <Trans>to</Trans>:
                    </label>
                    <Form.Control
                      className="form-control col-sm-4"
                      type="number"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          underto: value,
                        }));
                      }}
                      value={filterValues.underto}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4 d-flex justify-content-center mt-1  align-items-center">
                      <Trans>Deleted</Trans>
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          is_deleted: value,
                        }));
                      }}
                      value={filterValues.is_deleted}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      <option value={true}>Yes</option>
                      <option value={false} selected>
                        No
                      </option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-2 ">
                  <button type="submit" className="btn btn-primary fs-5">
                    <Trans>Filter</Trans>
                  </button>
                </div>
                <div className="col-sm-3">
                  <button
                    type="button"
                    className="btn btn-primary fs-5 mt-1 "
                    onClick={() => {
                      setFilterValues(defaultValues);
                      refetchItems();
                    }}
                  >
                    <Trans>Clear Filter</Trans>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            {isBrowser ? (
              <div className="mt-5 table-container">
                <SharedTable>
                  <TableHead>
                    <TableRow>
                      <TableCell className="col-sm-2">
                        <Trans>Item class</Trans>
                      </TableCell>
                      <TableCell className="col-sm-2">
                        <Trans>Items category</Trans>
                      </TableCell>
                      <TableCell className="col-sm-2">
                        <Trans>Code</Trans>
                      </TableCell>
                      <TableCell className="col-sm-2">
                        <Trans>Manufacturer</Trans>
                      </TableCell>
                      <TableCell className="col-sm-2">
                        <Trans>Last Changed on</Trans>
                      </TableCell>
                      <TableCell className="col-sm-2">
                        <Trans>Edit</Trans>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items?.map((item) => {
                      const itemClass = itemClassesAndTypes?.find(
                        (itemC) => itemC.item_class.id === item.item_class
                      );
                      const itemType = itemClass?.item_type.find(
                        (itemT) => itemT.id === item.item_type
                      );
                      return (
                        <TableRow key={item.id}>
                          <TableCell className="col-sm-2">
                            {itemClass?.item_class.title ?? "-"}
                          </TableCell>
                          <TableCell className="col-sm-2">
                            {itemType?.title ?? "-"}
                          </TableCell>
                          <TableCell className="col-sm-2">
                            {item.code ?? "-"}
                          </TableCell>
                          <TableCell className="col-sm-2">
                            {item.Manufacturer ?? "-"}
                          </TableCell>
                          <TableCell className="col-sm-2">
                            {item?.updated_at
                              ? convertDate(item.updated_at)
                              : "-"}
                          </TableCell>
                          <TableCell className="col-sm-2">
                            <Link to={`/items/info/${item.id}`}>
                              <div style={{ width: "20px", height: "20px" }}>
                                <EditIcon />
                              </div>
                            </Link>
                            <Tooltip title={<Trans>Delete item</Trans>}>
                              <button
                                className="edit-btn"
                                disabled={isDeleteLoading}
                                onClick={() => openDeleteModal(item.id)}
                              >
                                <TrashIcon />
                              </button>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </SharedTable>
                <Modal show={openModal} onHide={() => setOpenModal(false)}>
                  <form onSubmit={deletefac}>
                    <h1
                      className="mb-1 mr-3  mt-5 mb-5 text-black"
                      style={{ marginLeft: "33%" }}
                    >
                      <Trans>Delete item</Trans>
                    </h1>
                    <div className="d-flex flex-column align-items-center"></div>
                    <div className="d-flex flex-column align-items-center"></div>
                    <div className="d-flex flex-column align-items-center"></div>
                    <div className="d-flex flex-column align-items-center"></div>

                    <div className="d-flex flex-column align-items-center w-100">
                      <label>
                        <Trans>Delete reasons</Trans>
                      </label>
                      <select
                        name="Delete reasons"
                        onChange={(event) => {
                          setReason(event.target.value);
                        }}
                        // value={editFormData?.facility}
                      >
                        <Translation>
                          {(t, { i18n }) => (
                            <option i18n value="-1" selected>
                              {t("Please select")}
                            </option>
                          )}
                        </Translation>
                        {resons?.map((item, index) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      className="btn btn-success text-dark w-50 mt-4 mb-2   "
                      style={{ marginLeft: "24%" }}
                      type="submit"
                    >
                      <Trans>Delete item</Trans>
                    </button>
                    <button
                      className="btn btn-danger text-dark w-50 mt-4 mb-2   "
                      style={{ marginLeft: "24%" }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setOpenModal(false);
                      }}
                    >
                      <Trans>Cancel</Trans>
                    </button>
                  </form>
                </Modal>
              </div>
            ) : (
              <div className="mt-5 table-container">
                <SharedTable>
                  <TableHead>
                    <TableRow>
                      <TableCell className="col-sm-2">
                        <Trans>Code</Trans>
                      </TableCell>
                      <TableCell className="col-sm-1">
                        <Trans>Information</Trans>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items?.map((item) => {
                      const itemClass = itemClassesAndTypes?.find(
                        (itemC) => itemC.item_class.id === item.item_class
                      );
                      const itemType = itemClass?.item_type.find(
                        (itemT) => itemT.id === item.item_type
                      );
                      return (
                        <TableRow key={item.id}>
                          <TableCell className="col-sm-2">
                            {item.code ?? "-"}
                          </TableCell>
                          <TableCell className="col-sm-2">
                            <button
                              className="edit-btn"
                              style={{ marginLeft: "24%" }}
                              onClick={(e) => {
                                e.preventDefault();
                                setItemModalOpen(true);
                                setItemModalInfo(item);
                              }}
                            >
                              <InformationIcon />
                            </button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </SharedTable>
                <Modal
                  id={`item-modal`}
                  show={itemModalOpen}
                  onHide={() => {
                    setItemModalOpen(false);
                    setItemModalInfo(null);
                  }}
                >
                  <div className="column">
                    <div className="row">
                      <div className="col-6">
                        <h4 className="text-center text-black">
                          <Trans>Item class</Trans>
                        </h4>
                      </div>
                      <div className="col-6">
                        <h4 className="text-center text-black">
                          {itemClassesAndTypes?.find(
                            (itemC) =>
                              itemC.item_class.id === itemModalInfo?.item_class
                          )?.item_class.title ?? "-"}
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h4 className="text-center text-black">
                          <Trans>Items category</Trans>
                        </h4>
                      </div>
                      <div className="col-6 align-items-center d-flex justify-content-center">
                        <h4 className="text-center align-center text-black">
                          {itemClassesAndTypes
                            ?.find(
                              (itemC) =>
                                itemC.item_class.id ===
                                itemModalInfo?.item_class
                            )
                            ?.item_type.find(
                              (itemT) => itemT.id === itemModalInfo?.item_type
                            )?.title ?? "-"}
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h4 className="text-center text-black">
                          <Trans>Manufacturer</Trans>
                        </h4>
                      </div>
                      <div className="col-6 ">
                        <h4 className="text-center text-black">
                          {itemModalInfo?.Manufacturer ?? "-"}
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h4 className="text-center text-black">
                          <Trans>Last Changed on</Trans>
                        </h4>
                      </div>
                      <div className="col-6">
                        <h4 className="text-center text-black">
                          {itemModalInfo?.updated_at
                            ? convertDate(itemModalInfo?.updated_at)
                            : "-"}
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h4 className="text-center text-black">
                          <Trans>Tool box</Trans>blank
                        </h4>
                      </div>
                      <div className="col-6">
                        <h4 className="text-center text-black">
                          <Link to={`/items/info/${itemModalInfo?.id}`}>
                            <EditIcon />
                          </Link>
                          <Tooltip title={<Trans>Delete item</Trans>}>
                            <button
                              className="edit-btn"
                              disabled={isDeleteLoading}
                              onClick={() => openDeleteModal(itemModalInfo?.id)}
                            >
                              <TrashIcon />
                            </button>
                          </Tooltip>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ">
                    <button
                      className="btn btn-danger text-dark w-50 mt-4 mb-2   "
                      style={{ marginLeft: "24%" }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setItemModalOpen(false);
                        setItemModalInfo(null);
                      }}
                    >
                      <Trans>Close</Trans>
                    </button>
                  </div>
                </Modal>
                <Modal show={openModal} onHide={() => setOpenModal(false)}>
                  <form onSubmit={deletefac}>
                    <h1
                      className="mb-1 mr-3  mt-5 mb-5 text-black"
                      style={{ marginLeft: "33%" }}
                    >
                      <Trans>Delete item</Trans>
                    </h1>
                    <div className="d-flex flex-column align-items-center"></div>
                    <div className="d-flex flex-column align-items-center"></div>
                    <div className="d-flex flex-column align-items-center"></div>
                    <div className="d-flex flex-column align-items-center"></div>

                    <div className="d-flex flex-column align-items-center w-100">
                      <label>
                        <Trans>Delete reasons</Trans>
                      </label>
                      <select
                        name="Delete reasons"
                        onChange={(event) => {
                          setReason(event.target.value);
                        }}
                        // value={editFormData?.facility}
                      >
                        <Translation>
                          {(t, { i18n }) => (
                            <option i18n value="-1" selected>
                              {t("Please select")}
                            </option>
                          )}
                        </Translation>
                        {resons?.map((item, index) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      className="btn btn-success text-dark w-50 mt-4 mb-2   "
                      style={{ marginLeft: "24%" }}
                      type="submit"
                    >
                      <Trans>Delete item</Trans>
                    </button>
                    <button
                      className="btn btn-danger text-dark w-50 mt-4 mb-2   "
                      style={{ marginLeft: "24%" }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setOpenModal(false);
                      }}
                    >
                      <Trans>Cancel</Trans>
                    </button>
                  </form>
                </Modal>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
