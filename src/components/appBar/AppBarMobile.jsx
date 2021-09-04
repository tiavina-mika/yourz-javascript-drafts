/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";

import { cx } from "@emotion/css";
import { Layout } from "antd";
// import { useRouter } from 'next/router';
import PropTypes from "prop-types";

import { MENU_HEIGHT } from "../../utils/constants";
import Button from "../Button";
import { MENU_LINKS } from "./AppBar";
// import Icons from './Icons';
import Menu from "./Menu";

const { Header } = Layout;

const classes = {
  appBar: (theme) => ({
    padding: "0 20px",
    minHeight: MENU_HEIGHT,
    background: theme.colors.primary
  }),
  logo: {
    marginLeft: 50
  },
  menu: (theme) => ({
    background: theme.colors.primary,
    position: "absolute",
    top: MENU_HEIGHT,
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: 2000,

    WebkitTransition: "all 0.4s ease-in",
    MozTransition: "all 0.4s ease-in",
    OTransition: "all 0.4s ease-in",
    transition: "all 0.4s ease-in"
  }),
  menuCollapse: {
    position: "absolute",
    overflow: "hidden",
    top: MENU_HEIGHT,
    height: 0,
    WebkitTransition: "all 0.4s cubic-bezier(0, 1, 0.5, 1)",
    MozTransition: "all 0.4s cubic-bezier(0, 1, 0.5, 1)",
    OTransition: "all 0.4s cubic-bezier(0, 1, 0.5, 1)",
    transition: "all 0.4s cubic-bezier(0, 1, 0.5, 1)"
  },
  menuItem: {
    transition: "opacity 0.4s ease-in-out",
    opacity: 1
  },
  menuItemCollapse: {
    opacity: 0,
    transition: "opacity 0.4s ease-in-out"
  }
};

const AppBarMobile = ({ className }) => {
  const [open, setOpen] = useState(false);

  const downloadButton = <Button text="Télécharger l'app" type="default" />;

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <Header
      css={classes.appBar}
      className={cx("flexRow alignCenter spaceBetween", className)}
    >
      <div className="flexRow alignCenter">
        <button type="button" className="clickableText" onClick={toggleMenu}>
          <img alt="menu" src="/icons/humberger-menu.svg" />
        </button>
        <div css={classes.logo} className="flexCenter">
          <img src="/logo.png" alt="logo yourz" width="84" height="32" />
        </div>
      </div>
      {/* <div className="flexRow alignCenter justifyEnd flex1">
        {isHomePage ? downloadButton : <Icons />}
      </div> */}
      {/* use array to avoid this issue: https://github.com/morellodev/react-awesome-reveal/issues/57 */}
      <div css={[open ? classes.menu : classes.menuCollapse]}>
        <Menu
          links={MENU_LINKS}
          className="flexColumn flexStart"
          css={[open ? classes.menuItem : classes.menuItemCollapse]}
        />
      </div>
    </Header>
  );
};

AppBarMobile.propTypes = {
  className: PropTypes.any
};
export default AppBarMobile;
