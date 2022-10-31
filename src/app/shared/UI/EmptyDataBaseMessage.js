import React from "react";
import { Trans } from "react-i18next";
/**
 *
 * return empty data base message
 *
 * @param  {} props
 */
const EmptyDataBaseMessage = (props) => {
  return (
    <div
      className="alert alert-danger w-100 mb-5 text-center m-auto"
      role="alert"
    >
      <p className="display-4">
        <Trans>We've been looking everywhere, nothing was found ...</Trans> 😟
      </p>
      {props.message && <p>{<Trans>{props.message}</Trans>}</p>}
    </div>
  );
};

export default EmptyDataBaseMessage;
