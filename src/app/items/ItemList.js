import React from "react";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../styles/table.scss";
import Spinner from "../shared/Spinner";
import { useQuery } from "react-query";
import SharedTable from "../shared/SharedTable";
import EditIcon from "../shared/EditIcon";
import { Link } from "react-router-dom";
import ItemService from "../services/item.service";

function ItemList() {
  const { data: items, isLoading: isItemsDefaultLoading } = useQuery(
    ["item-default-value"],
    async () => {
      const res = await ItemService.getItems();
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
        return res.data.filter((item) => item.item_type.length > 0);
      },
      {
        refetchOnMount: true,
      }
    );

  const convertDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  if (isItemsDefaultLoading || isItemClassesAndTypesLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="page-title mb-3">Item list</h3>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <div className="mt-5 table-container">
              <SharedTable>
                <TableHead>
                  <TableRow>
                    <TableCell className="col-sm-2">Item class</TableCell>
                    <TableCell className="col-sm-2">Item type</TableCell>
                    <TableCell className="col-sm-2">Code </TableCell>
                    <TableCell className="col-sm-2">Manufacturer</TableCell>
                    <TableCell className="col-sm-2">Last Changes On</TableCell>
                    <TableCell className="col-sm-2">Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items?.map((item) => {
                    const itemClass = itemClassesAndTypes?.find(
                      (itemC) => itemC.item_class.id === item.item_class
                    );
                    console.log(itemClass, "itemClass");
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
                            ? convertDate(itemType.updated_at)
                            : "-"}
                        </TableCell>
                        <TableCell className="col-sm-2">
                          <Link to={`/facilities/info/${item.id}`}>
                            <div style={{ width: "20px", height: "20px" }}>
                              <EditIcon />
                            </div>
                          </Link>
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
  );
}

export default ItemList;
