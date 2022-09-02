import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import ResultTable from "./ResultTable";
import adapter from "webrtc-adapter";

const ScanQR = () => {
  const [QRString, setQRString] = useState();
  const [cameraAvailable, setCameraAvailable] = useState(true);
  const [showResult, setShowResult] = useState(false);

  const scanHandler = (result, error) => {
    if (!!result) {
      setQRString(result?.text);
      setCameraAvailable(false);
    }

    if (!!error) {
      console.log(error);
    }
  };
  const submitHandler = () => {
    setShowResult(true);
  };
  const refreshHandler = () => {
    setQRString(null);
    setCameraAvailable(true);
    setShowResult(false);
  };

  return (
    <div className={"card px-5 py-5 w-75 m-auto "}>
      <button
        onClick={submitHandler}
        type="button"
        className="btn btn-primary btn-fw mt-3 w-75 m-auto"
      >
        Search QR code
      </button>

      {cameraAvailable && (
        <QrReader
          className={"w-75 m-auto "}
          onResult={scanHandler}
          scanDelay={3000}
        />
      )}
      {QRString && !cameraAvailable && (
        <div className="w-75 m-auto pt-3 text-center">
          <h3 className="display-4">Code Scanned Successfully</h3>
        </div>
      )}

      {showResult && (
        <div>
          <ResultTable QRString={QRString} />
          <button
            onClick={refreshHandler}
            type="button"
            className="btn btn-light btn-fw mt-3 w-25  "
          >
            Search QR code
          </button>
        </div>
      )}
    </div>
  );
};

export default ScanQR;