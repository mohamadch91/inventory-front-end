import React from "react";
import { useQuery } from "react-query";
import helpService from "../services/help.service";

function Help(props) {
  const { selectedLang, selectedPage } = props;

  const { data: helpData, isLoading: isLoading } = useQuery(
    ["help", selectedLang, selectedPage],
    async () => {
      const res = await helpService.getHelpContent(selectedLang, selectedPage);
      return res.data.length > 0 ? res.data[0] : {};
    },
    {
      staleTime: Infinity,
    }
  );

  return (
    <div className="mt-3">
      <div className="card">
        <div className="card-body">
          <div className="row">{helpData?.abr}</div>
        </div>
      </div>
    </div>
  );
}

export default Help;
