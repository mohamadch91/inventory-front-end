import React from "react";
import { useQuery } from "react-query";
import helpService from "../services/help.service";
import API_URL from "../services/APIURL";
import i18n from "../../i18n";
import { useHistory } from "react-router-dom";
import { Trans } from "react-i18next";
/**
 * help component for show help in each page use from nav bar component
 * select help for each language and show it in help page
 * @returns help component
 */
function Help() {
  // get selected language from i18n
  const selectedLang = i18n.language;
  // get page name from url
  const history = useHistory();
  const pathname = history.location.pathname.split("/")[1];
  // query for get help from backend

  const { data: helpData } = useQuery(
    ["help", selectedLang, pathname],
    async () => {
      const res = await helpService.getHelpContent(selectedLang, pathname);
      return res.data.length > 0 ? res.data[0] : {};
    }
  );
  // check if help is exist
  return helpData?.abr ? (
    <div className="row">
      <a
        href={API_URL + helpData.abr}
        target="_blank"
        style={{ width: "fit-content"  }}
      >
        <button className="btn btn-success text-dark " style={{fontSize:"14px"}} type="button">
          <Trans>Help</Trans>
        </button>
      </a>
    </div>
  ) : (
    <></>
  );
}

export default Help;
