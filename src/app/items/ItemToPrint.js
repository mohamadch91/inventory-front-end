import { forwardRef, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { Trans } from "react-i18next";
import ItemService from "../services/item.service.js";
import ItemsService from "../services/items.service.js";
import Spinner from "../shared/Spinner";
import "../styles/inputs.scss";

export const returnDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
};

const ItemToPrint = forwardRef((props, ref) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [itemClasses, setItemClasses] = useState([]);
  const [itemTypes, setItemTypes] = useState([]);
  const [FilteredItemTypes, setFilteredItemTypes] = useState([]);
  const [selectedItemClass, setSelectedItemClass] = useState(null);
  const [selectedItemType, setSelectedItemType] = useState(null);
  const [facility, setFacility] = useState(null);
  const [typename, setTypename] = useState(null);
  function getData(itemClass, itemType) {
    ItemService.getItemFields(itemClass, itemType)
      .then((res) => {
              const Data = [{}];
          setFacility(res.data.facility);  
        setData(res.data.fields);
        setIsLoading(false);
      })
      .catch(() => {
        toast.error("There is a problem loading data");
        setIsLoading(false);
      });
  }

  function getItemTypes(itemClassId) {
    ItemsService.getItemTypes()
      .then((res) => {
        setItemTypes(res.data);
        const filteredItemTypes = res.data.filter(
          (item) => item.itemclass === itemClassId
        );
        setFilteredItemTypes(filteredItemTypes);

        getData(itemClassId, filteredItemTypes[0].id);
        setTypename(filteredItemTypes[0].title);
      })
      .catch(() => {
        toast.error("There is a problem loading data");
        setIsLoading(false);
      });
  }

  function getItemClasses() {
    ItemsService.getItemClasses()
      .then((res) => {
        const data = res.data.filter((item) => item.active === true);
        setItemClasses(data);
        setSelectedItemClass(data[0].id);
        getItemTypes(data[0].id);
      })
      .catch(() => {
        toast.error("There is a problem loading data");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getItemClasses();
  }, []);

  useEffect(() => {
    if (selectedItemClass && itemTypes && itemTypes.length > 0) {
      const filteredItemTypes = itemTypes?.filter((item) => {
        return item.itemclass === parseInt(selectedItemClass);
      });
      setSelectedItemType(filteredItemTypes[0]?.id);
      setTypename(filteredItemTypes[0]?.title);
      setFilteredItemTypes(filteredItemTypes);
    }
  }, [selectedItemClass]);

  const spaceMaker = (
    <div>
      <br />
    </div>
  );
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className="container mb-5">
            <div className="row">
              <h3 className="col-md-2 mb-0 d-flex justify-content-center align-items-center">
                <Trans>Item class</Trans>:
              </h3>
              <select
                name="itemclass"
                className="col-md-3 d-flex justify-content-center"
                onChange={(e) => {
                  setSelectedItemClass(e.target.value);
                }}
                value={selectedItemClass}
              >
                {itemClasses.map((itemClass) => (
                  <option key={itemClass.id} value={itemClass.id}>
                    {itemClass.title}
                  </option>
                ))}
              </select>
              <h3 className="col-md-2 mb-0 d-flex justify-content-center align-items-center">
                <Trans>Items category</Trans>:
              </h3>
              <select
                name="itemtype"
                className="col-md-3 d-flex justify-content-center"
                onChange={(e) => {
                  console.log(e.target.innerText.split("\n"));
                  console.log(e.target.value);
                  FilteredItemTypes.find((item) => {
                    if (item.id === parseInt(e.target.value)) {
                      setTypename(item.title);
                    }
                  });
                  // setTypename(
                  //   e.target.innerText.split("\n")[e.target.value - 1]
                  // );
                  setSelectedItemType(e.target.value);
                }}
                value={selectedItemType}
              >
                {FilteredItemTypes?.map((itemType) => (
                  <option key={itemType.id} value={itemType.id}>
                    {itemType.title}
                  </option>
                ))}
              </select>
              <div className="col-md-2 mr-0 d-flex justify-content-center">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    getData(selectedItemClass, selectedItemType);
                  }}
                >
                  <Trans>Submit</Trans>
                </button>
              </div>
            </div>
          </div>

          <div ref={ref} className={"mx-5 my-5 text-dark bg-muted"}>
            <div className="container">
              <div className={"text-center"}>
                <div>
                  <h4>
                    <Trans>Inventory and Gap Analysis System</Trans> (IGA)
                  </h4>
                </div>
                <div>
                  <h4>
                    Country:
                    {JSON.parse(localStorage.getItem("country"))?.country}
                  </h4>
                </div>
              </div>
              <h2 className="display-4">
                <Trans>
                  <Trans>Facility</Trans>{" "}
                  {JSON.parse(localStorage.getItem("user"))?.facility_name}{" "}
                  <Trans>Item information</Trans>:
                </Trans>
              </h2>
              <p>
                {" "}
                <Trans>Date</Trans>: --------
              </p>
              <div className="wrapper">
                <Row className={"row"}>
                  <div className={"w-50 m-3 col-5 "}>
                    <h6>
                      <Trans>Facility Name</Trans>
                    </h6>
                    <div
                      className={" rounded box h-75"}
                      style={{
                        border: "gray 1px solid",
                      }}
                    >
                      <div className=" col-md-6">{facility?.name}</div>
                    </div>
                  </div>
                  <div className={"w-50 m-3 col-5 "}>
                    <h6>
                      <Trans>Facility code</Trans>
                    </h6>
                    <div
                      className={" rounded box h-75"}
                      style={{
                        border: "gray 1px solid",
                      }}
                    >
                      <div className=" col-md-6">{facility?.code}</div>
                    </div>
                  </div>
                  <div className={"w-50 m-3 col-5 "}>
                    <h6>
                      <Trans>Levels</Trans>
                    </h6>
                    <div
                      className={" rounded box h-75"}
                      style={{
                        border: "gray 1px solid",
                      }}
                    >
                      <div className=" col-md-6">{facility?.level}</div>
                    </div>
                  </div>
                  <div className={"w-50 m-3 col-5 "}>
                    <h6>
                      <Trans>Items category</Trans>
                    </h6>
                    <div
                      className={" rounded box h-75"}
                      style={{
                        border: "gray 1px solid",
                      }}
                    >
                      <div className=" col-md-6">{typename}</div>
                    </div>
                  </div>

                  {data?.map((item) => (
                    <>
                      <div className={"w-50 m-3 col-5 "}>
                        <h6>{item.field.name}</h6>
                        <div
                          className={" rounded box h-100"}
                          style={{
                            border: "gray 1px solid",
                          }}
                        >
                          {item.x}
                          {item.field.params.length !== 0
                            ? item.field.params.map((param) => (
                                <div className="param col-md-6">
                                  <div class="form-check form-check-primary mt-3">
                                    <label className="form-check-label">
                                      <input
                                        className="m-1  "
                                        type="checkbox"
                                        checked={false}
                                        style={{
                                          Background: "white",
                                          Border: "1px solid #ababab70",
                                          BorderRadius: "5px",
                                          Padding: "0.5rem",
                                          marginRight: "5px",
                                        }}
                                      />

                                      <i className="input-helper mt-3">
                                        <span className="mr-3 ml-4">
                                          {param.name || param.describe}
                                        </span>
                                      </i>
                                    </label>
                                  </div>
                                </div>
                              ))
                            : spaceMaker}
                        </div>
                      </div>
                    </>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default ItemToPrint;
