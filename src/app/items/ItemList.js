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

function ItemList() {
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const facility = params.get("facility");
const [openModal, setOpenModal] = React.useState(false);
const [itemId, setItemId] = React.useState(null);
const [resons, setResons] = React.useState([]);
const [reasonsLoding, setReasonsLoding] = React.useState(false);
const [reason, setReason] = React.useState("");
const [is_deleted, setIsDeleted] = React.useState(false);
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
        <div>
          <label className="mr-2 mb-1">
            {" "}
            <Trans>Deleted</Trans>{" "}
          </label>
          <input
            type="checkbox"
            checked={is_deleted}
            onChange={handledeletChange}
            className="mt-1 "
          />

          <button
            className="btn btn-success text-dark w-25  mb-2   "
            onClick={() => refetchItems()}
            style={{ marginLeft: "5%" }}
            type="submit"
          >
            <Trans>Filter</Trans>
          </button>
        </div>
        <div className="card">
          <div className="card-body">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
