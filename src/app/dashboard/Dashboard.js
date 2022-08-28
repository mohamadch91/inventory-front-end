import React from "react";

import Facilities from "./chart-card/Facilities";
import ItemsCard from "./chart-card/ItemsCard";
import Warnings from "./warnings/Warnings";

import classes from "./Dashbord.module.css";
import SubFacilitiesTable from "./sub-facilities/SubFacilitiesTable";
import FacilitiesTable from "./facilities/FacilitiesTable";

const Dashboard = () => {
  return (
    <main>
      <section className={classes.charts}>
        <ItemsCard />
        <Facilities />
      </section>

      <section className={classes.warning}>
        <Warnings />
      </section>
      <section className={classes.facilities}>
        <FacilitiesTable />
      </section>
      <section className={classes["sub-facilities"]}>
        <SubFacilitiesTable />
      </section>
    </main>
  );
};

export default Dashboard;
