import { forwardRef, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { Trans } from "react-i18next";
import FacilitiesService from "../services/facilities.service.js";
import Spinner from "../shared/Spinner";

const ItemToPrint = forwardRef((props, ref) => {
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
                          <div
                            style={{ display: "inline-block" }}
                            className="param"
                          >
                            <span style={{ color: "blue" }}>{param.name}</span>
                            <input
                              style={{
                                Background: "white",
                                Border: "1px solid #ababab70",
                                BorderRadius: "5px",
                                Padding: "0.5rem",
                                marginRight: "5px",
                              }}
                              className="m-1 mr-3"
                              type="checkbox"
                              checked={param.enabled}
                              disabled
                            />
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

export default ItemToPrint;
