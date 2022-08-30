import React, { Fragment, useState } from "react";

import FilterForm from "./filter-form/FilterForm";
import QRTable from "./table/QRTable";

const ItemsQR = () => {
  const [queryString, setQueryString] = useState();

  const filterSubmitHandler = (filterStateData) => {
    let s = "";
    for (let key in filterStateData) {
      if (filterStateData[key] !== "-1") {
        s += key + "=" + filterStateData[key] + "&";
      }
    }
    setQueryString(s);
  };

  return (
    <Fragment>
      <FilterForm onSubmit={filterSubmitHandler} />
      {queryString && <QRTable query={queryString} />}
    </Fragment>
  );
};

export default ItemsQR;
