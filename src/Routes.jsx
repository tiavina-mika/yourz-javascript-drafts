import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import CreateMontage from "./containers/createMontage";
import GetParentLayer from "./containers/GetParentLayer";
import ConfirmModal from "./containers/ConfirmModal";

import UpdateUserImageLayer from "./containers/UpdateUserImageLayer";
import MainRoute from "./MainRoute";
import { ROUTES } from "./utils/constants";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <MainRoute path="/" exact>
          <ConfirmModal />
        </MainRoute>
        <MainRoute path={ROUTES.createMontage} exact>
          <CreateMontage />
        </MainRoute>
        {/* <MainRoute path="/" exact>
          <UpdateUserImageLayer />
        </MainRoute> */}
        <MainRoute path={ROUTES.getParentLayer} exact>
          <GetParentLayer />
        </MainRoute>
        <MainRoute path={ROUTES.updateUserImageLayer} exact>
          <UpdateUserImageLayer />
        </MainRoute>
      </Switch>
    </Router>
  );
};

export default Routes;
