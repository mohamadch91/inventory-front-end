import React, { Fragment } from "react";

import FilterForm from "./filter-from/FilterForm";
import QRTable from "./table/QRTable";

const ItemsQR = () => {
  return (
    <Fragment>
      <FilterForm />
      <QRTable />
    </Fragment>
  );
};

export default ItemsQR;
