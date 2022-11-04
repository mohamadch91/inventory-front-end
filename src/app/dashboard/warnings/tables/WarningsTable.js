import React from "react";
import WarningsTableCheckbox from "./WarningsTableCheckbox";
import { Trans } from "react-i18next";
/**
 * @param  {OBJECT} prop
 * component for show warning for each item
 */
const WarningsTable = (props) => {
  const { data, setState, state } = props;

  const checkedHandler = (e) => {
    const value = e.target.value;

    if (state.includes(value)) {
      setState((s) => s.filter((el) => el !== value));
    } else {
      setState((s) => [...s, value]);
    }
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
                  <th>
                    <Trans>#</Trans>{" "}
                  </th>
                  <th>
                    {" "}
                    <Trans>Maintenance</Trans>{" "}
                  </th>
                  <th>
                    {" "}
                    <Trans>Items category</Trans>{" "}
                  </th>
                  <th>
                    {" "}
                    <Trans>Code</Trans>{" "}
                  </th>
                  <th>
                    {" "}
                    <Trans>Deadline</Trans>{" "}
                  </th>
                  <th>
                    {" "}
                    <Trans>Service interval</Trans>{" "}
                  </th>
                  <th>
                    {" "}
                    <Trans>Done</Trans>{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((el, i) => {
                  return (
                    <tr key={el.id} className="table-danger">
                      <td key={el.id }> {i + 1} </td>
                      <td key={i + el.name}> {el.name} </td>
                      <td key={i + el.item_type}> {el.item_type} </td>

                      <td key={i + el.code}> {el.code} </td>
                      <td key={i + el.deadline}> {el.deadline} </td>
                      <td key={i + el.interval}> {el.interval} </td>
                      <td key={i + "A"}>
                        <WarningsTableCheckbox
                          onChange={checkedHandler}
                          value={el.id}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button
              type="button"
              className=" mt-3 btn btn-primary btn-fw"
              onClick={props.onSubmit}
            >
              <Trans>Mark as done</Trans>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningsTable;
