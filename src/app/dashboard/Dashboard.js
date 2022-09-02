import React from "react";

import Facilities from "./chart-card/Facilities";
import ItemsCard from "./chart-card/ItemsCard";
import Warnings from "./warnings/Warnings";

import classes from "./Dashbord.module.css";

import DashboardTables from "./tables/DashboardTables";

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

      <DashboardTables />
    </main>
  );
};

export default Dashboard;
