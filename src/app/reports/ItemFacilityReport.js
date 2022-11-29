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
};

const tableData = [
  {
    headTitle: "Facility Name",
    group: "facility",
    valueKey: "fac_name",
  },
  {
    headTitle: "Parent facility",
    group: "facility",
    valueKey: "fac_parent",
  },
  {
    headTitle: "Levels",
    group: "facility",
    valueKey: "fac_level",
  },
  {
    headTitle: "Type",
    group: "facility",
    valueKey: "fac_type",
  },
  {
    headTitle: "Item class",
    group: "item",
    valueKey: "item_class",
  },
  {
    headTitle: "Items category",
    group: "item",
    valueKey: "item_type",
  },
  {
    headTitle: "Item code",
    group: "item",
    valueKey: "code",
  },
  {
    headTitle: "PQS",
    group: "item",
    valueKey: "pqs",
  },
  {
    headTitle: "Model",
    group: "item",
    valueKey: "model",
  },
  {
    headTitle: "Manufacturer",
    group: "item",
    valueKey: "manufac",
  },
  {
    headTitle: "Capacity",
    group: "item",
    valueKey: "capacity",
  },
  {
    headTitle: "Year installed",
    group: "item",
    valueKey: "year",
  },
  {
    headTitle: "Power source",
    group: "item",
    valueKey: "power",
  },
  {
    headTitle: "Financial",
    group: "item",
    valueKey: "financial",
  },
  {
    headTitle: "Physical",
    group: "item",
    valueKey: "physical",
  },
  {
    headTitle: "Working condition",
    group: "item",
    valueKey: "working",
  },
];

function ItemFacilityReport() {
  const [filterValues, setFilterValues] = useState(defaultValues);
  const [selectedItem, setSelectedItem] = useState(null);

  const country = JSON.parse(localStorage.getItem("country")) || {};

  const { data: itemFacHelper, isLoading: isItemFacHelperLoading } = useQuery(
    ["item-fac-helper"],
    async () => {
      const res = await ReportService.getItemFac({ help: true });
      return res.data;
    }
  );

  const {
    data: reports,
    isLoading: isReportsLoading,
    refetch: fetchReports,
  } = useQuery(
    ["item-fac-report"],
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
      const res = await ReportService.getItemFac(params);
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
    const printFilterValues = () => {
    let filterString = "";
    for (const key in filterValues) {
      const filter = filterValues[key];
      if (filter.length > 0 && filter !== "-1") {
        if(key==='item_class'){
          const item_class=selectedItem.item_class_name;
          filterString += `Item class: ${item_class}, `;
        }
        else if(key==='item_type'){
          const item_type=selectedItem.item_type.filter((item)=>item.id===parseInt(filter));
          filterString += `Items category: ${item_type[0]?.name}, `;
        }
          else if(key==='level'){
          const level=itemFacHelper.level.filter((item)=>item.id===parseInt(filter));
          filterString += `Level : ${level[0]?.name}, `;
        }else if(key==='type'){
          // find the type name by id
          const type=itemFacHelper.type.filter((item)=>item.id===parseInt(filter));
          filterString += `Type : ${type[0]?.name}, `;
        }else if(key==='power'){
          // find the power name by id
          const power=itemFacHelper.power.filter((item)=>item.id===parseInt(filter));
          filterString += `Power source: ${power[0]?.name}, `;
        }else if(key==='physical'){
          // find the physical name by id
          const physical=itemFacHelper.physical.filter((item)=>item.id===parseInt(filter));
          filterString += `Physical condition : ${physical[0]?.name}, `;
        }else if(key==='financial'){
          // find the financial name by id
          const financial=itemFacHelper.financial.filter((item)=>item.id===parseInt(filter));
          filterString += `Financial : ${financial[0]?.name}, `;
        }else if(key==='working'){
          // find the working name by id
          const working=itemFacHelper.working.filter((item)=>item.id===parseInt(filter));
          filterString += `Working condition : ${working[0]?.name}, `;
        }else if(key==='item_power'){
          // find the item_power name by id
          const item_power=itemFacHelper.item_power.filter((item)=>item.id===parseInt(filter));
          filterString += `Item power : ${item_power[0]?.name}, `;
        }
        else if (key==='name'){
        filterString += `Facility name: ${filter}, `;}

        
         else if (key==='code'){
        filterString += `Code: ${filter}, `;
      }

        
        else{

        filterString += `${key}: ${filter}, `;}
      }
    }
    return filterString;
  };
  if (isItemFacHelperLoading || isReportsLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="page-title mb-3">
        <Trans>Item report by facility</Trans>
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
                <Trans>Filter</Trans>
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
                      {itemFacHelper?.level.map((lev) => (
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
                      {itemFacHelper?.type.map((ty) => (
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
                      {itemFacHelper?.power.map((pow) => (
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
                        }));
                        setSelectedItem(
                          itemFacHelper.item.find(
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
                      {itemFacHelper?.item?.map((i) => (
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
                      {itemFacHelper?.physical?.map((i) => (
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
                      <Trans>Working conditions</Trans>:
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
                      {itemFacHelper?.working?.map((i) => (
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
                      {itemFacHelper?.financial?.map((i) => (
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
                      <Trans>Power source</Trans>:
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
                      {itemFacHelper?.item_power?.map((i) => (
                        <option key={i.id} value={i.id}>
                          {i.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-sm-2">
                  <button type="submit" className="btn btn-primary fs-5">
                    <Trans>Reports</Trans>
                  </button>
                </div>
                <div className="col-sm-2 ">
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
              <Trans>Report</Trans>: <Trans>Item report by facility</Trans> (
              {country?.country})
            </h4>
            <h6>
              <Trans>Filter</Trans> : {""} {printFilterValues()}
            </h6>

            <h6>
              <Trans>Date</Trans>: {new Date().toLocaleDateString("en-GB")}
            </h6>
            <div className="mt-3 table-container ">
              <SharedTable stickyHeader>
                <TableHead>
                  <TableRow>
                    {tableData.map((data) => (
                      <TableCell key={data.headTitle}>
                        <Trans>{data.headTitle}</Trans>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reports?.map((report, index) => {
                    return (
                      <TableRow key={index}>
                        {tableData.map((data) => (
                          <TableCell key={data.valueKey}>
                            {report[data.group][data.valueKey] ?? "-"}
                          </TableCell>
                        ))}
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

export default ItemFacilityReport;
