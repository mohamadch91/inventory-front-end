import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";
import { connect } from "react-redux";
import PrintItem from "./items/PrintItem";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const WarningsTablePage = lazy(() =>
  import("./dashboard/warnings/tables/WarningsTablePage")
);
const LogBookPage = lazy(() =>
  import("./dashboard/warnings/tables/logbook/LogBookPage")
);
const LogBookDetailsPage = lazy(() =>
  import("./dashboard/warnings/tables/logbook/LogBookDetailsPage")
);

const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));
const Typography = lazy(() => import("./basic-ui/Typography"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error403 = lazy(() => import("./error-pages/Error403"));
const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));
const Country = lazy(() => import("./settings/Country"));
const Level = lazy(() => import("./settings/Level"));
const NewLevelList = lazy(() => import("./settings/NewLevel.js"));
const ItemClass = lazy(() => import("./settings/ItemClass"));
const ItemType = lazy(() => import("./settings/ItemType"));
const Parameters = lazy(() => import("./settings/Parameters"));
const Pqs4 = lazy(() => import("./settings/Pqs4"));
const Pqs3 = lazy(() => import("./settings/Pqs3"));
const ParameterDescription = lazy(() =>
  import("./settings/ParameterDescription")
);
const MangeHelp = lazy(() => import("./settings/ManageHelp"));
const FieldsOfItemT = lazy(() => import("./settings/FieldsOfItemT"));
const FacilityFields = lazy(() => import("./settings/FacilityFields"));
const Manufacturer = lazy(() => import("./settings/Manufacturer"));
const HRList = lazy(() => import("./hr/HRList"));
const UsersList = lazy(() => import("./user/usersList"));
const AboutIGA = lazy(() => import("./about-iga"));
const Facility = lazy(() => import("./facilities/Facility"));
const FacilityList = lazy(() => import("./facilities/FacilityList"));
const PrintFacility = lazy(() => import("./facilities/PrintFacility"));
const NewMessage = lazy(() => import("./message/newMessage"));
const MessageList = lazy(() => import("./message/messageList"));
const ItemTypeLevel = lazy(() => import("./settings/ItemTypeLevel"));
const EditLanguage = lazy(() => import("./settings/editLanguage"));
const ReportToExcel = lazy(() => import("./settings/reportToExcel"));
const Item = lazy(() => import("./items/Item"));
const ItemList = lazy(() => import("./items/ItemList"));
const ItemsQR = lazy(() => import("./items/items-qr/ItemsQR"));
const scanQR = lazy(() => import("./items/scan-qr/ScanQR"));
const MtnsSetting = lazy(() => import("./settings/Maintenance"));
const MtnsSettingService = lazy(() => import("./settings/MaintenanceService"));
const MaintenanceServiceGroup = lazy(() =>
  import("./settings/MaintenanceServiceGroup")
);
const MaintenanceGroup = lazy(() => import("./settings/MaintenanceGroup"));

const Map = lazy(() => import("./shared/sharedMap"));

const FacilitySegmentationReport = lazy(() =>
  import("./reports/FacilitySegmentationReport")
);
const SubFacilityPopulationDataReport = lazy(() =>
  import("./reports/SubFacilityPopulationDataReport")
);
const FacilityMapBasedReport = lazy(() =>
  import("./reports/FacilityMapBasedReport")
);
const ItemGroupReport = lazy(() => import("./reports/ItemGroupReport"));
const ItemFacilityReport = lazy(() => import("./reports/ItemFacilityReport"));
const ProfileOfFacility = lazy(() => import("./reports/ProfileOfFacility"));
const ProfileOfColdChain = lazy(() => import("./reports/ProfileOfColdChain"));
const GapItemReport = lazy(() => import("./reports/GapItemReport"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/hr/list" component={HRList} />

          <Route exact path="/user/list" component={UsersList} />

          <Route exact path="/message/new" component={NewMessage} />
          <Route exact path="/message/list" component={MessageList} />

          <Route exact path="/settings/country" component={Country} />
          <Route exact path="/settings/level" component={Level} />
          <Route exact path="/settings/item-class" component={ItemClass} />
          <Route exact path="/settings/item-type" component={ItemType} />
          <Route exact path="/settings/params" component={Parameters} />
          <Route exact path="/settings/manufacturer" component={Manufacturer} />
          <Route exact path="/settings/pqs4" component={Pqs4} />
          <Route exact path="/settings/pqs3" component={Pqs3} />
          <Route
            exact
            path="/settings/reports/excel"
            component={ReportToExcel}
          />
          <Route
            exact
            path="/settings/language/edit"
            component={EditLanguage}
          />
          <Route
            exact
            path="/settings/params/:id"
            component={ParameterDescription}
          />
          <Route
            exact
            path="/settings/item-t-level"
            component={ItemTypeLevel}
          />
          <Route exact path="/settings/item-fields" component={FieldsOfItemT} />
          <Route
            exact
            path="/settings/facility-fields"
            component={FacilityFields}
          />
          <Route
            exact
            path="/settings/new-level-list"
            component={NewLevelList}
          />
          <Route exact path="/settings/manage-help" component={MangeHelp} />

          <Route exact path="/settings/mtns_setting" component={MtnsSetting} />
          <Route
            exact
            path="/settings/mtns_setting1"
            component={MtnsSettingService}
          />
          <Route
            exact
            path="/settings/mtns_setting2"
            component={MaintenanceServiceGroup}
          />
          <Route
            exact
            path="/settings/mtns_setting3"
            component={MaintenanceGroup}
          />

          <Route exact path="/about-iga" component={AboutIGA} />
          <Route exact path="/map" component={Map} />

          <Route exact path="/facilities/info/:id" component={Facility} />
          <Route exact path="/facilities/list" component={FacilityList} />
          <Route exact path="/facilities/print" component={PrintFacility} />

          <Route exact path="/items/info/:id" component={Item} />
          <Route exact path="/items/list" component={ItemList} />
          <Route exact path="/items/print" component={PrintItem} />
          <Route exact path="/items/qr" component={ItemsQR} />
          <Route exact path="/items/scan-qr" component={scanQR} />

          <Route
            exact
            path="/reports/fac-seg"
            component={FacilitySegmentationReport}
          />
          <Route
            exact
            path="/reports/subfac-pop-data"
            component={SubFacilityPopulationDataReport}
          />
          <Route
            exact
            path="/reports/fac-map-based"
            component={FacilityMapBasedReport}
          />
          <Route exact path="/reports/item-gp" component={ItemGroupReport} />
          <Route
            exact
            path="/reports/item-fac"
            component={ItemFacilityReport}
          />
          <Route exact path="/reports/fac-prof" component={ProfileOfFacility} />
          <Route exact path="/reports/gap-item" component={GapItemReport} />
          <Route
            exact
            path="/reports/prof-cold-chain"
            component={ProfileOfColdChain}
          />

          <Route exact path="/dashboard" component={Dashboard} />
          <Route
            exact
            path="/dashboard/maintenanceLog"
            component={LogBookPage}
          />
          <Route
            exact
            path="/dashboard/maintenanceLog/:id"
            component={LogBookDetailsPage}
          />
          <Route
            exact
            path="/dashboard/warnings-info/:wType"
            component={WarningsTablePage}
          />

          <Route path="/basic-ui/buttons" component={Buttons} />
          <Route path="/basic-ui/dropdowns" component={Dropdowns} />
          <Route path="/basic-ui/typography" component={Typography} />

          <Route path="/tables/basic-table" component={BasicTable} />

          <Route
            path="/form-Elements/basic-elements"
            component={BasicElements}
          />

          <Route path="/icons/mdi" component={Mdi} />

          <Route path="/charts/chart-js" component={ChartJs} />

          <Route path="/" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />

          <Route path="/error-pages/error-403" component={Error403} />
          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />

          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  }
}
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}
export default connect(mapStateToProps)(AppRoutes);
