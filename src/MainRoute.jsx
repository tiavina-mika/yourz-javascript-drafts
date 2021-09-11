/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { Layout as AntdLayout } from "antd";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import AppBarMobile from "./components/appBar/AppBarMobile";
import Footer from "./components/footer/Footer";

const { Content } = AntdLayout;

const MainRoute = ({ children, path, ...rest }) => {
  return (
    <Route path={path} {...rest}>
      <AntdLayout className="minHeight100">
        <AppBarMobile />
        <Content style={{ background: "#fff" }} className="p-y-20">
          {children}
        </Content>
        <Footer />
      </AntdLayout>
    </Route>
  );
};

MainRoute.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string
  // rest: PropTypes.any
};

export default MainRoute;
