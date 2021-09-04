/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { Layout as AntdLayout } from "antd";
import PropTypes from "prop-types";

import AppBarMobile from "./appBar/AppBarMobile";
import Footer from "./Footer";

const { Content } = AntdLayout;

const Layout = ({ children }) => {
  return (
    <AntdLayout className="minHeight100">
      <AppBarMobile />
      <Content style={{ background: "#fff" }}>{children}</Content>
      <Footer />
    </AntdLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
