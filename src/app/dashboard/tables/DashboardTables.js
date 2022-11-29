import React, { Fragment, useEffect, useState } from "react";
import classes from "./DashboardTables.module.css";
import SubFacilitiesTable from "./sub-facilities/SubFacilitiesTable";
import useHttp from "../../shared/custom-hooks/use-http";
import { getTablesData } from "../dashboard-api";
import LevelsTable from "./level/LevelsTable";
import toast from "react-hot-toast";
/**
 * component for show two tables in dashboard page
 */
const DashboardTables = () => {
  const { sendRequest, status, data, error: err } = useHttp(getTablesData);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    sendRequest();
  }, []);
  if (status === "pending") {
    return (
      <div className={"spinner-wrapper"} style={{ position: "relative" }}>
        <div className={"donut"} />
      </div>
    );
  }
  if (err) {
    toast.error("There was a problem loading data");
    return <p>{err}</p>;
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
