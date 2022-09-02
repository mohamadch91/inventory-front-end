import { forwardRef, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { Trans } from "react-i18next";
import FacilitiesService from "../services/facilities.service.js";
import Spinner from "../shared/Spinner";
import { returnDate } from "../items/ItemToPrint";

const FacilityToPrint = forwardRef((props, ref) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  function getData() {
    FacilitiesService.getFacilityFields()
      .then((res) => {
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
                <h4>Inventory and Gap Analysis System (IGA)</h4>
              </div>
              <div>
                <h4>
                  Country:{" "}
                  {JSON.parse(localStorage.getItem("country"))?.country}
                </h4>
              </div>
            </div>
            <h2 className="mb-4">
              <Trans>
                {" "}
                {`${
                  JSON.parse(localStorage.getItem("user"))?.facility_name
                } Facility information:`}
              </Trans>
            </h2>
            <p> {returnDate()}</p>
            <div className="wrapper">
              <Row>
                {data.map((item) => (
                  <>
                    <div style={{ width: "50%" }}>
                      <h6>{item.name}</h6>
                      <div
                        className="box mb-3"
                        style={{
                          border: "gray 1px solid",
                          padding: "1rem",
                          "border-radius": "5px",
                          marginButtom: "5px",
                        }}
                      >
                        {item.params.map((param) => (
                          <div className="param">
                            <input
                              style={{
                                Background: "white",
                                Border: "1px solid #ababab70",
                                BorderRadius: "5px",
                                Padding: "0.5rem",
                                marginRight: "5px",
                              }}
                              className="m-1"
                              type="checkbox"
                              checked={false}
                              disabled
                            />
                            <span className="mr-3">
                              {param.name || param.describe}
                            </span>
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
