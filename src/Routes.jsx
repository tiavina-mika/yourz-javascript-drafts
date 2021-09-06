import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import GetParentLayer from "./containers/GetParentLayer";

import UpdateUserImageLayer from "./containers/UpdateUserImageLayer";
import MainRoute from "./MainRoute";
import { ROUTES } from "./utils/constants";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <MainRoute path="/" exact>
          <GetParentLayer />
        </MainRoute>
        {/* <MainRoute path="/" exact>
          <UpdateUserImageLayer />
        </MainRoute> */}
        <MainRoute path={ROUTES.updateUserImageLayer} exact>
          <UpdateUserImageLayer />
        </MainRoute>
      </Switch>
    </Router>
  );
};

export default Routes;
