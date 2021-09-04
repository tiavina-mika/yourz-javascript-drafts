/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { Layout as AntdLayout } from "antd";
import PropTypes from "prop-types";

import AppBar from "./appBar/AppBar";
import AppBarMobile from "./appBar/AppBarMobile";
import Footer from "./Footer";
import { Tablet, MobileTablet } from "./Responsive";

const { Content } = AntdLayout;

const Layout = ({ children }) => {
  return (
    <AntdLayout className="minHeight100">
      <Tablet>
        <AppBar />
      </Tablet>
      <MobileTablet>
        <AppBarMobile />
      </MobileTablet>
      <Content style={{ background: "#fff" }}>{children}</Content>
      <Footer />
    </AntdLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
