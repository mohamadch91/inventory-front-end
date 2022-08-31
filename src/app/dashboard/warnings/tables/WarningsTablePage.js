import React, { Fragment } from "react";
import WarningsTable from "./WarningsTable";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import Spinner from "../../../shared/Spinner";
import DashboardService from "../../../services/dashboard.service";

const WarningsTablePage = () => {
  const params = useParams();

  const { data, isLoading: warningData } = useQuery(
    [],
    async () => {
      const res = await DashboardService.getWarningsInfo("?" + params.wType);
      return res.data;
    },
    {
      refetchOnMount: true,
    }
  );

  if (warningData || data.length === 0) {
    return <Spinner />;
  }

  console.log(data);

  return <Fragment>{data && <WarningsTable data={data} />}</Fragment>;
};

export default WarningsTablePage;
