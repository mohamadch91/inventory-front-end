import React from "react";
import Help from "../components/Help";
/**
 * Component for the About IGA page.
 * @returns {JSX.Element} The About IGA page.
 * use the Help component to display the help text
 */
function AboutIGA() {
  return (
    <div>
      <Help selectedLang="english" selectedPage="admin_guide" />
    </div>
  );
}

export default AboutIGA;
