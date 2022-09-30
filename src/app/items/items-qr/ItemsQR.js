import React, { Fragment, useRef, useState } from "react";
import { Trans } from "react-i18next";

import FilterForm from "./filter-form/FilterForm";
import QRTable from "./table/QRTable";
import ReactToPrint from "react-to-print";

const ItemsQR = () => {
  const [queryString, setQueryString] = useState();
  const componentToPrintRef = useRef();

  const filterSubmitHandler = (filterStateData) => {
    let s = "";
    for (let key in filterStateData) {
      if (filterStateData[key] !== "-1" && filterStateData[key] !="") {
        s += key + "=" + filterStateData[key] + "&";
      }
    }
    setQueryString(s);
  };

  return (
    <Fragment>
      <FilterForm onSubmit={filterSubmitHandler} />

      {queryString && (
        <div>
          <ReactToPrint
            trigger={() => (
              <div className={"d-flex justify-content-center py-3"}>
                <button className={"btn btn-info btn-icon-text w-25  "}>
                  <Trans>Print</Trans>{" "}
                  <i className="mdi mdi-printer btn-icon-append" />
                </button>
              </div>
            )}
            content={() => componentToPrintRef.current}
            documentTitle={"IGA Reports"}
          />
          <QRTable ref={componentToPrintRef} queryString={queryString} />
        </div>
      )}
    </Fragment>
  );
};

export default ItemsQR;
