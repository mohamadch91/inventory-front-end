import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { Trans } from "react-i18next";
import { useReactToPrint } from "react-to-print";
import ItemToPrint from "./ItemToPrint";
import "./print.scss";

const PrintItem = () => {
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
    <div className="print-page">
      <Row className="justify-content-center ml-5  mb-4">
        <Col md={6} className="ml-5 justify-content-center">
          <button className="ml-5 pl w-50" onClick={handlePrint}>
            {loading ? <Trans>Loading...</Trans> : <Trans>Print</Trans>}
          </button>
        </Col>
      </Row>
      <ItemToPrint ref={componentRef} />
    </div>
  );
};

export default PrintItem;
