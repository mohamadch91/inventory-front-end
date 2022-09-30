import * as React from "react";

import { Trans } from "react-i18next";
import { useReactToPrint } from "react-to-print";
import FacilityToPrint from "./FacilityToPrint";
import { Fragment } from "react";

const PrintFacility = () => {
  const componentRef = React.useRef(null);

  const onBeforeGetContentResolve = React.useRef(null);

  const [loading, setLoading] = React.useState(false);

  const handleOnBeforeGetContent = React.useCallback(() => {
    setLoading(true);

    return new Promise((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        resolve();
      }, 0);
    });
  }, [setLoading]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "AwesomeFileName",
    onBeforeGetContent: handleOnBeforeGetContent,
    removeAfterPrint: true,
  });

  React.useEffect(() => {
    if (typeof onBeforeGetContentResolve.current === "function") {
      onBeforeGetContentResolve.current();
    }
  }, [onBeforeGetContentResolve.current]);

  return (
    <Fragment>
      <button
        className="btn btn-info btn-icon-text px-3 pr-4"
        onClick={handlePrint}
      >
        <i className="mdi mdi-printer btn-icon-append " />
        {loading ? (
          <>
            <Trans>Loading</Trans> ...
          </>
        ) : (
          <Trans>Print</Trans>
        )}
      </button>

      <FacilityToPrint ref={componentRef} />
    </Fragment>
  );
};

export default PrintFacility;
