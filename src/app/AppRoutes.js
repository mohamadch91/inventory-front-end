import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";
import { connect } from "react-redux";
const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));
const Typography = lazy(() => import("./basic-ui/Typography"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));
const Home = lazy(() => import("./home/Home"));
const Country = lazy(() => import("./settings/Country"));
const Level = lazy(() => import("./settings/Level"));
const NewLevelList = lazy(() => import("./settings/NewLevel.js"));
const ItemClass = lazy(() => import("./settings/ItemClass"));
const ItemType = lazy(() => import("./settings/ItemType"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/settings/country" component={Country} />
          <Route exact path="/settings/level" component={Level} />
          <Route exact path="/settings/item-class" component={ItemClass} />
          <Route exact path="/settings/item-type" component={ItemType} />
          <Route
            exact
            path="/settings/new-level-list"
            component={NewLevelList}
          />

          <Route exact path="/dashboard" component={Dashboard} />

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

          <Route path="/login" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />

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
