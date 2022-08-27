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
                    <Col md={6}>
                      <h6>{item.name}</h6>
                      <div className="box mb-3">
                        {item.params.map((param) => (
                          <div className="param">
                            <span>{param.name}</span>
                            <input
                              className="m-1 mr-3"
                              type="checkbox"
                              checked={param.enabled}
                              disabled
                            />
                          </div>
                        ))}
                      </div>
                    </Col>
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
