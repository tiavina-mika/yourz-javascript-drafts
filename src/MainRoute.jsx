/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { Layout as AntdLayout } from "antd";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import AppBarMobile from "./components/appBar/AppBarMobile";
import Footer from "./components/footer/Footer";

const { Content } = AntdLayout;

const MainRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest}>
      <AntdLayout className="minHeight100">
        <AppBarMobile />
        <Content style={{ background: "#fff" }}>{children}</Content>
        <Footer />
      </AntdLayout>
    </Route>
  );
};

MainRoute.propTypes = {
  component: PropTypes.any
  // rest: PropTypes.any
};

export default MainRoute;
