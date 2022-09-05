import React from "react";
import { useQuery } from "react-query";
import helpService from "../services/help.service";
import API_URL from "../services/APIURL";

function Help(props) {
  const { selectedLang, selectedPage } = props;

  const { data: helpData } = useQuery(
    ["help", selectedLang, selectedPage],
    async () => {
      const res = await helpService.getHelpContent(selectedLang, selectedPage);
      console.log(res);
      return res.data.length > 0 ? res.data[0] : {};
    }
  );

  return (
    helpData?.abr ?(
      <div className="row">
        <a
          href={API_URL + helpData.abr}
          download
          style={{ width: "fit-content" }}
        >
          <button className="btn btn-success" type="button">
            Download Help
          </button>
        </a>
      </div>
    ):(<></>)
  );
}

export default Help;
