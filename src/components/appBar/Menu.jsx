/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { cx } from "@emotion/css";
import PropTypes from "prop-types";

import Link from "../Link";
import { desktop, mobileTablet, tabletDesktop } from "../Responsive";

const classes = {
  menu: {
    padding: 0,
    margin: 0
  },
  menuItem: {
    listStyle: "none",
    [mobileTablet]: {
      paddingLeft: 15,
      paddingRight: 15
    },
    [tabletDesktop]: {
      paddingLeft: 10,
      paddingRight: 10
    },
    [desktop]: {
      paddingLeft: 30,
      paddingRight: 30
    }
  },
  link: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 800,
    "&:hover": {
      color: "#fff"
    }
  }
};

const Menu = ({ links, menuActions, className, linkClassName }) => {
  return (
    <ul css={classes.menu} className={cx("flexRow alignCenter", className)}>
      {links.map((link, index) => (
        <li css={classes.menuItem} key={index}>
          <Link href={link.href} css={classes.link} className={linkClassName}>
            {link.text}
          </Link>
        </li>
      ))}
      <li css={classes.menuItem}>{menuActions}</li>
    </ul>
  );
};

Menu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string
    })
  ),
  menuActions: PropTypes.any,
  className: PropTypes.any,
  linkClassName: PropTypes.any
};

export default Menu;
