import React, { Fragment } from "react";
import classes from "./DashboardTables.module.css";
import FacilitiesTable from "./facilities/FacilitiesTable";
import SubFacilitiesTable from "./sub-facilities/SubFacilitiesTable";

const DashboardTables = () => {
  return (
    <Fragment>
      <section className={classes.facilities}>
        <FacilitiesTable />
      </section>
      <section className={classes["sub-facilities"]}>
        <SubFacilitiesTable />
      </section>
    </Fragment>
  );
};

export default DashboardTables;
