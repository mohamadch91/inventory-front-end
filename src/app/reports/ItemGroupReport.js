import React, { useState } from "react";
import { Translation, Trans } from "react-i18next";
import { useQuery } from "react-query";
import { Form } from "react-bootstrap";
import ReportService from "../services/report.service";
import "./form.scss";
import Spinner from "../shared/Spinner";
import SharedTable from "../shared/SharedTable";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../styles/table.scss";
import { toast } from "react-hot-toast";

const defaultValues = {
  name: "",
  code: "",
  level: "-1",
  type: "-1",
  power: "-1",
  item_class: "-1",
  item_type: "-1",
  physical: "-1",
  financial: "-1",
  working: "-1",
  item_power: "-1",
  manufacturer: "-1",
  pqs: "",
  year_from: "-1",
  year_to: "-1",
  capacity_from: "",
  capacity_to: "",
};

function ItemGroupReport() {
  const [filterValues, setFilterValues] = useState(defaultValues);
  const [selectedItem, setSelectedItem] = useState(null);

  const { data: itemGpHelper, isLoading: isItemGpHelperLoading } = useQuery(
    ["item-gp-helper"],
    async () => {
      const res = await ReportService.getItemGp({ help: true });
      return res.data;
    }
  );

  const {
    data: reports,
    isLoading: isReportsLoading,
    refetch: fetchReports,
  } = useQuery(
    ["item-gp-report"],
    async () => {
      const params = {
        help: false,
      };
      for (const key in filterValues) {
        const filter = filterValues[key];
        if (filter.length > 0 && filter !== "-1") {
          params[key] = filter;
        }
      }
      const res = await ReportService.getItemGp(params);
        if (res.data.length === 0) {
                   toast.error(<Trans>No data found</Trans>);

        }
      return res.data;
    },
    {
      refetchOnMount: false,
      enabled: false,
    }
  );

  if (isItemGpHelperLoading || isReportsLoading) {
    return <Spinner />;
  }
  const printFilterValues = () => {
    let filter = "";
    for (const key in filterValues) {
      const value = filterValues[key];
      if (value.length > 0 && value !== "-1") {
        if (key === "level"){
          filter += `Level : ${value}- ${itemGpHelper.level.find((level) => level.id === parseInt(value)).name} `;
        }
        else if (key === "type"){
          filter += `${key} : ${itemGpHelper.type.find((type) => type.id === parseInt(value)).name} `;
        }
        else if (key === "power"){
          filter += `Power source : ${
            itemGpHelper.power.find((power) => power.id === parseInt(value))
              .name
          } `;
        }
        else if (key === "item_class"){
           const item_class = selectedItem.item_class_name;
           filter += `Item class: ${item_class}, `;
        }
        else if (key === "item_type"){
          const item_type = selectedItem.item_type.filter(
            (item) => item.id === parseInt(value)
          );
          filter += `Items category: ${item_type[0]?.name}, `;
        }
        else if (key === "physical"){
          filter += `Physical = ${itemGpHelper.physical.find((physical) => physical.id === parseInt(value)).name}, `;
        }
        else if (key === "financial"){

          filter += `Financial : ${
            itemGpHelper.financial.find(
              (financial) => financial.id === parseInt(value)
            ).name
          } `;
        }
        else if (key === "working"){
          filter += `Working : ${
            itemGpHelper.working.find(
              (working) => working.id === parseInt(value)
            ).name
          } ,`;
        }
        else if (key === "item_power"){
          filter += `Item Power source : ${
            itemGpHelper.item_power.find(
              (item_power) => item_power.id === parseInt(value)
            ).name
          }, `;
        }
        else if (key === "manufacturer") {
          const item_type = selectedItem.manufacturer.filter(
            (item) => item.id === parseInt(value)
          );
          filter += `Manufacturer: ${item_type[0]?.name}, `;
        } else if (key === "year_from") {
          filter += `From year :${value} ,`;
        } else if (key === "year_to") {
          filter += `To year =${value}, `;
        } else if (key === "capacity_from") {
          filter += `From capaciti :${value} ,`;
        } else if (key === "capacity_to") {
          filter += `To capacity :${value}, `;
        } else if (key === "pqs") {
          filter += `PQS Code:${value}, `;
        } else {
          filter += `${key}=${value}, `;
        }
      }
    }
    return filter;
  }
  const country = JSON.parse(localStorage.getItem("country")) || {};

  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Item grouped report</Trans>
      </h3>
      <div className="mt-3">
        <div className="card">
          <div className="card-body py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                fetchReports();
              }}
            >
              <h4>
                <Trans>Filters</Trans>
              </h4>
              <div className="row mt-5">
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>Facility Name</Trans>:
                    </label>
                    <Form.Control
                      className="form-control col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          name: value,
                        }));
                      }}
                      value={filterValues.name}
                    />
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>Code</Trans>:
                    </label>
                    <Form.Control
                      className="form-control col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          code: value,
                        }));
                      }}
                      value={filterValues.code}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>Levels</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          level: value,
                        }));
                      }}
                      value={filterValues.level}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {itemGpHelper?.level.map((lev) => (
                        <option key={lev.id} value={lev.id}>
                          {`${lev.id} - ${lev.name}`}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>Type</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          type: value,
                        }));
                      }}
                      value={filterValues.type}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {itemGpHelper?.type.map((ty) => (
                        <option key={ty.id} value={ty.id}>
                          {ty.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>Power source</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          power: value,
                        }));
                      }}
                      value={filterValues.power}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {itemGpHelper?.power.map((pow) => (
                        <option key={pow.id} value={pow.id}>
                          {pow.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <h4 className="mt-1">
                <Trans>Item Options</Trans>
              </h4>
              <div className="row mt-5">
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>Item class</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          item_class: value,
                          item_type: "-1",
                          manufacturer: "-1",
                        }));
                        setSelectedItem(
                          itemGpHelper.item.find(
                            (i) => i.item_class_id === +value
                          )
                        );
                      }}
                      value={filterValues.item_class}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {itemGpHelper?.item?.map((i) => (
                        <option key={i.item_class_id} value={i.item_class_id}>
                          {i.item_class_name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>Items category</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      disabled={!selectedItem}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          item_type: value,
                        }));
                      }}
                      value={filterValues.item_type}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {selectedItem?.item_type.map((i) => (
                        <option key={i.id} value={i.id}>
                          {i.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>Physical condition</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          physical: value,
                        }));
                      }}
                      value={filterValues.physical}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {itemGpHelper?.physical?.map((i) => (
                        <option key={i.id} value={i.id}>
                          {i.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>Working condition</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          working: value,
                        }));
                      }}
                      value={filterValues.working}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {itemGpHelper?.working?.map((i) => (
                        <option key={i.id} value={i.id}>
                          {i.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>Financial source</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          financial: value,
                        }));
                      }}
                      value={filterValues.financial}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {itemGpHelper?.financial?.map((i) => (
                        <option key={i.id} value={i.id}>
                          {i.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>Energy source for cold chain equipment</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          item_power: value,
                        }));
                      }}
                      value={filterValues.item_power}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {itemGpHelper?.item_power?.map((i) => (
                        <option key={i.id} value={i.id}>
                          {i.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>PQS/PIS Code</Trans>:
                    </label>
                    <Form.Control
                      className="form-control col-sm-8"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          pqs: value,
                        }));
                      }}
                      value={filterValues.pqs}
                    />
                  </Form.Group>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>Manufacturer</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-8"
                      disabled={!selectedItem}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          manufacturer: value,
                        }));
                      }}
                      value={filterValues.manufacturer}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {selectedItem?.manufacturer?.map((i) => (
                        <option key={i.id} value={i.id}>
                          {i.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-sm-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>Year installed</Trans>:
                    </label>
                    <label className="label col-sm-2">
                      <Trans>from</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-2"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          year_from: value,
                        }));
                      }}
                      value={filterValues.year_from}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {Array.from({ length: 35 }).map((_, i) => {
                        const year = new Date().getUTCFullYear() - i;
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </Form.Control>
                    <label className="label col-sm-2">
                      <Trans>to</Trans>:
                    </label>
                    <Form.Control
                      className="form-select col-sm-2"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          year_to: value,
                        }));
                      }}
                      value={filterValues.year_to}
                      as="select"
                    >
                      <Translation>
                        {(t, { i18n }) => (
                          <option i18n value="-1" selected>
                            {t("Please select")}
                          </option>
                        )}
                      </Translation>
                      {Array.from({
                        length:
                          new Date().getUTCFullYear() -
                          filterValues.year_from +
                          1,
                      }).map((_, i) => {
                        const year = new Date().getUTCFullYear() - i;
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group className="row">
                    <label className="label col-sm-4">
                      <Trans>Capacity</Trans>:
                    </label>
                    <label className="label col-sm-2">
                      <Trans>from</Trans>:
                    </label>
                    <Form.Control
                      className="form-control col-sm-2"
                      type="number"
                      min={0}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          capacity_from: value,
                        }));
                      }}
                      value={filterValues.capacity_from}
                    />

                    <label className="label col-sm-2">
                      <Trans>to</Trans>:
                    </label>
                    <Form.Control
                      className="form-control col-sm-2"
                      onChange={(e) => {
                        const value = e.target.value;
                        setFilterValues((preValues) => ({
                          ...preValues,
                          capacity_to: value,
                        }));
                      }}
                      value={filterValues.capacity_to}
                      type="number"
                      min={0}
                    />
                  </Form.Group>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-sm-2">
                  <button type="submit" className="btn btn-primary fs-5">
                    <Trans>Reports</Trans>
                  </button>
                </div>
                <div className="col-sm-3">
                  <button
                    type="button"
                    className="btn btn-primary fs-5"
                    onClick={() => {
                      setFilterValues(defaultValues);
                      window.location.reload();
                    }}
                  >
                    <Trans>Clear Filter</Trans>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="card">
          <div className="card-body py-3">
            <h4>
              <Trans>Report</Trans> : <Trans>Item grouped report</Trans> (
              {country?.country})
            </h4>
            <h6>
              <Trans>Filter</Trans> : {""} {printFilterValues()}
            </h6>

            <h6>
              <Trans>Date</Trans>: {new Date().toLocaleDateString("en-GB")}
            </h6>
            <div className="mt-3 table-container">
              <SharedTable>
                <TableHead>
                  <TableRow>
                    <TableCell className="col-sm-2">
                      <Trans>Type</Trans>
                    </TableCell>
                    <TableCell className="col-sm-2">
                      <Trans>Model</Trans>
                    </TableCell>
                    <TableCell className="col-sm-1">
                      <Trans>Manufacturer</Trans>
                    </TableCell>
                    <TableCell className="col-sm-2">
                      <Trans>PQS/PIS Code</Trans>
                    </TableCell>
                    <TableCell className="col-sm-1">
                      <Trans>Count</Trans>
                    </TableCell>
                    <TableCell className="col-sm-4">
                      <Trans>Facility list</Trans>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reports?.map((report, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell className="col-sm-2">
                          {report.item_type ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-2">
                          {report.model ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-1">
                          {report.manufacturer ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-2">
                          {report.pqs ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-1">
                          {report.count ?? "-"}
                        </TableCell>
                        <TableCell className="col-sm-4">
                          {report.facility?.map(
                            (fac, i) =>
                              `${fac.name}${
                                i === report.facility.length - 1 ? "" : ", "
                              }`
                          ) ?? "-"}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </SharedTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemGroupReport;
