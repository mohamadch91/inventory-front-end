import { Language } from "@mui/icons-material";
import React from "react";
import Help from "../components/Help";
import i18n from "../../i18n";

/**
 * Component for the About IGA page.
 * @returns {JSX.Element} The About IGA page.
 * use the Help component to display the help text
 */
function AboutIGA() {
  // GET THE LANGUAGE FROM THE i18n
  
  const language= i18n.language;
  return (
    <div>
      {/* help component  */}
      <Help selectedLang={language} selectedPage="admin_guide" />
    </div>
  );
}

export default AboutIGA;
