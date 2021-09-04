/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";

import { css, cx } from "@emotion/css";
import { Layout } from "antd";
import PropTypes from "prop-types";

import Button from "../Button";
import { tabletDesktop } from "../Responsive";
// import Icons from './Icons';
import Menu from "./Menu";

const { Header } = Layout;

export const MENU_LINKS = [
  {
    text: "Nos produits",
    href: "/"
  },
  {
    text: "Vos avantages",
    href: "/"
  },
  {
    text: "Comment ça marche?",
    href: "/"
  },
  {
    text: "Vos avis",
    href: "/"
  }
];

const classes = {
  appBar: (theme) => ({
    padding: "0 20px",
    minHeight: 112,
    background: theme.colors.primary
  }),
  logo: {
    marginLeft: 50,
    [tabletDesktop]: {
      marginLeft: 0
    }
  },
  link: css({
    textTransform: "uppercase",
    fontWeight: 600
  }),
  downloadButton: {
    [tabletDesktop]: {
      padding: "25px 10px"
    }
  }
};

const AppBar = ({ className }) => {
  const downloadButton = (
    <Button
      text="Télécharger l'app"
      type="default"
      css={classes.downloadButton}
    />
  );

  return (
    <Header
      css={classes.appBar}
      className={cx("flexRow alignCenter spaceBetween", className)}
    >
      <div css={classes.logo} className="flexCenter">
        <img src="/logo.png" alt="logo yourz" width="84" height="32" />
      </div>
      <div className="flexRow alignCenter justifyEnd flex1">
        <Menu
          links={MENU_LINKS}
          // menuActions={isHomePage ? downloadButton : <Icons />}
          // linkClassName={!isHomePage ? classes.link : ''}
        />
      </div>
    </Header>
  );
};

AppBar.propTypes = {
  className: PropTypes.any
};
export default AppBar;
