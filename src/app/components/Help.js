import React from "react";
import { useQuery } from "react-query";
import helpService from "../services/help.service";
import API_URL from "../services/APIURL";
import i18n from "../../i18n";
import { useHistory } from "react-router-dom";

function Help() {
  const selectedLang = i18n.language;

  const history = useHistory();
  const pathname = history.location.pathname.split("/")[1];

  const { data: helpData } = useQuery(
    ["help", selectedLang, pathname],
    async () => {
      const res = await helpService.getHelpContent(selectedLang, pathname);
      return res.data.length > 0 ? res.data[0] : {};
    }
  );

  return helpData?.abr ? (
    <div className="row">
      <a
        href={API_URL + helpData.abr}
        target="_blank"
        style={{ width: "fit-content" }}
      >
        <button className="btn btn-primary" type="button">
          Download Help
        </button>
      </a>
    </div>
  ) : (
    <></>
  );
}

export default Help;
