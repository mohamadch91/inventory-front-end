import React, { Fragment, useEffect, useState } from "react";
import classes from "./DashboardTables.module.css";
import SubFacilitiesTable from "./sub-facilities/SubFacilitiesTable";
import useHttp from "../../shared/custom-hooks/use-http";
import { getTablesData } from "../dashboard-api";
import LevelsTable from "./level/LevelsTable";

const DashboardTables = () => {
  const { sendRequest, status, data, err } = useHttp(getTablesData);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    sendRequest();
  }, []);
  // TODO: add loading spinner
  if (status === "pending") {
    return (
      <div className={"centered"}>
        <h1> --PLACE LOADING SPINNER-- </h1>
      </div>
    );
  }
  // TODO: add ERR css
  if (err) {
    return <div>{err}</div>;
  }

  if (status === "completed" && !dataLoaded) {
    setDataLoaded(true);
  }

  return (
    <Fragment>
      <section className={classes.levels}>
        {dataLoaded && <LevelsTable data={data.level_table} />}
      </section>
      <section className={classes["sub-facilities"]}>
        {dataLoaded && <SubFacilitiesTable data={data.facility_table} />}
      </section>
    </Fragment>
  );
};

export default DashboardTables;
