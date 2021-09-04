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
    padding: "12px 20px",
    borderRadius: 4,
    backgroundColor:
      color === "primary" ? theme.colors.primary : theme.colors.secondary,
    color: color === "primary" ? "#fff" : theme.colors.dark
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
  ...props
}) => {
  const theme = useTheme();

  return (
    <RouterLink to={href} {...props} onClick={onClick} role="presentation">
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
    </RouterLink>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["link", "button"]),
  className: PropTypes.any,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["primary", "secondary", "default"])
};

export default Link;
