import React from "react";
import { Trans } from "react-i18next";

const EmptyDataBaseMessage = (props) => {
  return (
    <div className="alert alert-danger w-50 text-center m-auto" role="alert">
      <p className="display-4">
        <Trans>We've been looking everywhere, nothing was found ... 😟</Trans>
      </p>
      {props.message && <p>{props.message}</p>}
    </div>
  );
};

export default EmptyDataBaseMessage;
