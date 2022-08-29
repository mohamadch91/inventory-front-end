import { forwardRef, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { Trans } from "react-i18next";
import FacilitiesService from "../services/facilities.service.js";
import Spinner from "../shared/Spinner";

const FacilityToPrint = forwardRef((props, ref) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  function getData() {
    FacilitiesService.getFacilityFields()
      .then((res) => {
        setData(res.data.related);
        setIsLoading(false);
      })
      .catch((err) => {
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
        <div ref={ref}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4>{window.location.origin}</h4>
              </div>
              <div className="col-md-6">
                <h4>{JSON.parse(localStorage.getItem("country"))?.country}</h4>
              </div>
            </div>
            <h2 className="mb-4">
              <Trans>Facility information:</Trans>
            </h2>
            <div className="wrapper">
              <Row>
                {data.map((item, index) => (
                  <>
                    <div style={{ width: "50%" }}>
                      <h6>{item.name}</h6>
                      <div
                        style={{
                          border: "gray 1px solid",
                          padding: "1rem",
                          "border-radius": "5px",
                          marginButtom: "5px",
                        }}
                        className="box mb-3"
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
                            <span className="mr-3">{param.name}</span>
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
