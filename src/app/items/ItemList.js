import React from "react";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../styles/table.scss";
import Spinner from "../shared/Spinner";
import { useQuery } from "react-query";
import SharedTable from "../shared/SharedTable";
import EditIcon from "../shared/EditIcon";
import { Link, useHistory } from "react-router-dom";
import ItemService from "../services/item.service";
import { Trans } from "react-i18next";

function ItemList() {
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const facility = params.get("facility");

  const { data: items, isLoading: isItemsDefaultLoading } = useQuery(
    ["item-default-value", facility],
    async () => {
      const res = await ItemService.getItems(undefined, facility);
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

  const convertDate = (date) => {
    console.log(date);
    return new Date(date).toISOString().split("T")[0];
  };

  if (isItemsDefaultLoading || isItemClassesAndTypesLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Item list</Trans>
      </h3>
      <div className="mt-3">
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
                      <Trans>Item category</Trans>
                    </TableCell>
                    <TableCell className="col-sm-2">
                      <Trans>Code</Trans>
                    </TableCell>
                    <TableCell className="col-sm-2">
                      <Trans>Manufacturer</Trans>
                    </TableCell>
                    <TableCell className="col-sm-2">
                      <Trans>Last Changes On</Trans>
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
                    console.log(itemClass, "itemClass");
                    const itemType = itemClass?.item_type.find(
                      (itemT) => itemT.id === item.item_type
                    );
                    console.log(itemType);
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
