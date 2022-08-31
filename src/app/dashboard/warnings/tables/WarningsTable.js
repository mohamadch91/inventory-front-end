import React from "react";
import WarningsTableCheckbox from "./WarningsTableCheckbox";

const WarningsTable = (props) => {
  const checkedHandler = (e) => {
    // tell reducer to update state
    console.log("checked box with value " + e.target.value);
  };

  return (
    <div className="col-lg-12 stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Warnings Info</h4>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th> # </th>
                  <th> Item Type </th>
                  <th> Code </th>
                  <th> Deadline </th>
                  <th> Service interval </th>
                  <th> Done </th>
                </tr>
              </thead>
              <tbody>
                {props.data.map((el, i) => {
                  return (
                    <tr key={el.id} className="table-danger">
                      <td key={i + i + 1}> {i + 1} </td>
                      <td key={i + el.name}> {el.name} </td>
                      <td key={i + el.code}> {el.code} </td>
                      <td key={i + el.deadline}> {el.deadline} </td>
                      <td key={i + el.interval}> {el.interval} </td>
                      <td key={i + "A"}>
                        <WarningsTableCheckbox onChange={checkedHandler} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button type="button" className=" mt-3 btn btn-primary btn-fw">
              Mark as done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningsTable;
