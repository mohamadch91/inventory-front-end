import { forwardRef, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { Trans } from "react-i18next";
import ItemService from "../services/item.service.js";
import ItemsService from "../services/items.service.js";
import Spinner from "../shared/Spinner";
import "../styles/inputs.scss";

const ItemToPrint = forwardRef((props, ref) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [itemClasses, setItemClasses] = useState([]);
  const [itemTypes, setItemTypes] = useState([]);
  const [FilteredItemTypes, setFilteredItemTypes] = useState([]);
  const [selectedItemClass, setSelectedItemClass] = useState(null);
  const [selectedItemType, setSelectedItemType] = useState(null);

  function getData(itemClass, itemType) {
    ItemService.getItemFields(itemClass, itemType)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
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
      })
      .catch((err) => {
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
      .catch((err) => {
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
      setFilteredItemTypes(filteredItemTypes);
    }
  }, [selectedItemClass]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className="container mb-5">
            <div className="row">
              <h3 className="col-md-2 mb-0 d-flex justify-content-center align-items-center">
                <Trans>Item class:</Trans>
              </h3>
              <select
                name="itemclass"
                className="col-md-3 d-flex justify-content-center"
                onChange={(e) => {
                  setSelectedItemClass(e.target.value);
                }}
                value={selectedItemClass}
              >
                {itemClasses.map((itemClass, index) => (
                  <option key={itemClass.id} value={itemClass.id}>
                    {itemClass.title}
                  </option>
                ))}
              </select>
              <h3 className="col-md-2 mb-0 d-flex justify-content-center align-items-center">
                <Trans>Item type:</Trans>
              </h3>
              <select
                name="itemtype"
                className="col-md-3 d-flex justify-content-center"
                onChange={(e) => {
                  setSelectedItemType(e.target.value);
                }}
                value={selectedItemType}
              >
                {FilteredItemTypes?.map((itemType, index) => (
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
          <div ref={ref}>
            <div className="container">
              <h2 className="mb-4">
                <Trans>Item information:</Trans>
              </h2>
              <div className="wrapper">
                <Row>
                  {data?.map((item, index) => (
                    <>
                      <div style={{ width: "50%" }} md={6}>
                        <h6>{item.field.name}</h6>
                        <div style={{ display: "flex" }} className="box mb-3">
                          {item.field.params.map((param) => (
                            <div className="param">
                              <input
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
        </div>
      )}
    </>
  );
});

export default ItemToPrint;
