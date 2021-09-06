/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { cx } from "@emotion/css";
import { useTheme } from "@emotion/react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

const getTextColor = (theme, color) => {
  let defaultColor;
  switch (color) {
    case "secondary":
      defaultColor = theme.colors.dark;
      break;
    case "default":
      defaultColor = "#fff";
      break;
    default:
      defaultColor = theme.colors.primary;
  }
  return defaultColor;
};

const classes = {
  button: ({ theme, color }) => ({
    borderRadius: 15,
    padding: "12px 20px",
    backgroundColor: getTextColor(theme, color),
    cursor: "pointer",
    fontSize: 18,
    color: theme.colors.primary,
    fontStyle: "normal",
    fontWeight: 800,
    border: `1px solid ${theme.colors.primary}`,
    "&:hover": {
      border: `1px solid ${theme.colors.primary}`,
      opacity: 0.8
    },
    "&:disabled": {
      backgroundColor: "rgba(46, 46, 46, 0.16)",
      color: "#fff"
    }
  }),
  text: ({ theme, color }) => ({
    color: getTextColor(theme, color)
  })
};

const Link = ({
  href,
  children,
  className,
  type = "link",
  color = "primary",
  onClick,
  isNative = false,
  ...props
}) => {
  const theme = useTheme();

  const Component = isNative ? "a" : RouterLink;
  const otherProps = isNative ? { href } : { to: href };

  return (
    <Component {...otherProps} {...props} onClick={onClick} role="presentation">
      <span
        css={
          type === "button"
            ? classes.button({ theme, color })
            : classes.text({ theme, color })
        }
        className={cx(className, "link")}
      >
        {children}
      </span>
    </Component>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["link", "button"]),
  className: PropTypes.any,
  onClick: PropTypes.func,
  isNative: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "secondary", "default"])
};

export default Link;
