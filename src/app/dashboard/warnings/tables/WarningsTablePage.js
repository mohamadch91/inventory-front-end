import React, { Fragment } from "react";
import WarningsTable from "./WarningsTable";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "react-query";

import Spinner from "../../../shared/Spinner";
import DashboardService from "../../../services/dashboard.service";

import toast from "react-hot-toast";
/**
 * page include warning table
 */
const WarningsTablePage = () => {
  const [selectedAsDone, setSelectedAsDone] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const params = useParams();
  const history = useHistory();

  const { data: tableData, isLoading: warningDataIsLoading } = useQuery(
    [],
    async () => {
      const res = await DashboardService.getWarningsInfo("?" + params.wType);
      return res.data;
    },
    {
      refetchOnMount: true,
    }
  );
  /**
   * send API reqeuest when maintance done
   */
  const onMarkAsDoneHandler = async () => {
    const payload = [];
    selectedAsDone.map((el) => {
      payload.push({ id: el, done: true });
    });
    try {
      setIsLoading(true);
      const res = await DashboardService.postWarningsAsDone(payload);
      if (res.status === 200) {
        setIsLoading(false);
        toast.success("Done like a charm Boss! 😉");
        history.push("/dashboard");
      }
    } catch (e) {
      toast.error(
        "There was a problem reaching server, try again in a moment pls"
      );
    }
  };

  if (warningDataIsLoading || tableData.length === 0 || isLoading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      {tableData && (
        <WarningsTable
          data={tableData}
          setState={setSelectedAsDone}
          state={selectedAsDone}
          onSubmit={onMarkAsDoneHandler}
        />
      )}
    </Fragment>
  );
};

export default WarningsTablePage;
