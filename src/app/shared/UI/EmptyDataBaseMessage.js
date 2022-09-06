import React from "react";

const EmptyDataBaseMessage = (props) => {
  return (
    <div
      className={"m-auto w-50 text-center p-5 text-black rounded"}
      style={{ backgroundColor: "rgba(255,57,57,0.61)" }}
    >
      <h2>We've been looking everywhere, nothing was found ... 😟 </h2>
      {props.message && <p>{props.message}</p>}
    </div>
  );
};

export default EmptyDataBaseMessage;
