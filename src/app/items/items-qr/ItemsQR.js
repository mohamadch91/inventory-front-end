import React, { Fragment } from "react";

import FilterForm from "./filter-form/FilterForm";
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
