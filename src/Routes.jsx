import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import CreateMontage from "./containers/createMontage";
import GetParentLayer from "./containers/GetParentLayer";
import ConfirmModal from "./containers/ConfirmModal";

import UpdateUserImageLayer from "./containers/UpdateUserImageLayer";
import MainRoute from "./MainRoute";
import { ROUTES } from "./utils/constants";
import Upload from "./containers/upload/Upload";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <MainRoute path="/" exact>
          {/* <MainRoute path={ROUTES.createMontage} exact> */}
          <CreateMontage />
        </MainRoute>
        <MainRoute path={ROUTES.upload} exact>
          <Upload />
        </MainRoute>
        <MainRoute path={ROUTES.confirmModal} exact>
          <ConfirmModal />
        </MainRoute>
        {/* <MainRoute path="/" exact>
          <UpdateUserImageLayer />
        </MainRoute> */}
        <MainRoute path={ROUTES.getParentLayer}>
          <GetParentLayer />
        </MainRoute>
        <MainRoute path={ROUTES.updateUserImageLayer}>
          <UpdateUserImageLayer />
        </MainRoute>
      </Switch>
    </Router>
  );
};

export default Routes;
