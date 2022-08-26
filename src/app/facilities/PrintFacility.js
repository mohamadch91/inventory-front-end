import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { Trans } from "react-i18next";
import { useReactToPrint } from "react-to-print";
import FacilityToPrint from "./FacilityToPrint";
import "./print.scss";

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

  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called"); // tslint:disable-line no-console
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("`onBeforePrint` called"); // tslint:disable-line no-console
  }, []);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "AwesomeFileName",
    onBeforeGetContent: handleOnBeforeGetContent,
    onBeforePrint: handleBeforePrint,
    onAfterPrint: handleAfterPrint,
    removeAfterPrint: true,
  });

  React.useEffect(() => {
    if (typeof onBeforeGetContentResolve.current === "function") {
      onBeforeGetContentResolve.current();
    }
  }, [onBeforeGetContentResolve.current]);

  return (
    <div className="print-page">
      <Row className="justify-content-center mb-4">
        <Col md={6} className="justify-content-center">
          <button className="w-100" onClick={handlePrint}>
            {loading ? <Trans>Loading...</Trans> : <Trans>Print</Trans>}
          </button>
        </Col>
      </Row>
      <FacilityToPrint ref={componentRef} />
    </div>
  );
};

export default PrintFacility;
