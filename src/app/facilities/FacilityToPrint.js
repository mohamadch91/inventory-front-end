import { forwardRef, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { Trans } from "react-i18next";
import FacilitiesService from "../services/facilities.service.js";
import Spinner from "../shared/Spinner";
import "./print.scss"

const FacilityToPrint = forwardRef((props, ref) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  function getData() {
    FacilitiesService.getFacilityFields1()
      .then((res) => {
        const data=res.data.related;
        data.unshift({
          name: "Facility code",
          params:[],
          type: "text",
        })
        let levels = res.data.levels;
        // change levels name to id
        levels = levels.map((level) => {
          return {
            id: level.id,
            name: level.id+" - "+ level.name,
          };
        });
        data.unshift({
          name: "Levels",
          params:levels,
        });
        setData(res.data.related);
        setIsLoading(false);
      })
      .catch(() => {
        toast.error("There is a problem loading data");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div ref={ref} className={"mx-5 my-5"} style={{ color: "#000" }}>
          <div className="container">
            <div className=" text-center my-4">
              <div className="">
                <h4>
                  <Trans>Inventory and Gap Analysis System</Trans> (IGA)
                </h4>
              </div>
              <div>
                <h4>
                  <Trans>Country</Trans>:{" "}
                  {JSON.parse(localStorage.getItem("country"))?.country}
                </h4>
              </div>
            </div>
            <h2 className="mb-4">
              {" "}
              {`${JSON.parse(localStorage.getItem("user"))?.facility_name}`}
              <Trans>Facility information</Trans>:
            </h2>
            <p>
              <Trans>Date</Trans>: -----------
            </p>
            <div className="wrapper p-1 mb-5">
              <Row>
                {data.map((item) => (
                  <>
                    <div style={{ width: "50%" }}>
                      <h6>
                        <Trans>{item.name}</Trans>
                      </h6>
                      <div
                        className="box mb-3 column"
                        style={{
                          border: "gray 1px solid",
                          padding: "1rem",
                          "border-radius": "5px",
                          marginButtom: "5px",
                          minHeight: "150px",
                        }}
                      >
                        {item.params.map((param) => (
                          <div className="param col-md-4 "
                          style={
                            {
                              display: "flex",
                              "align-items": "center",
                              flexdirection: "row",
                            }
                          }
                          >
                            <div class=" ">
                              <label className="">
                                <input
                               
                                  className="m-1"
                                  type="checkbox"
                                  checked={false}
                                  disabled
                                />

                                <i className=" mt-5">
                                  <span className="ml-4 mb-2">{param.name || param.describe}</span>
                                </i>
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ))}
              </Row>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default FacilityToPrint;
