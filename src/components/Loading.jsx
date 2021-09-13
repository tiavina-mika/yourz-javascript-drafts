/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import { cx } from "@emotion/css";
import { LoadingOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import { mobile } from "./Responsive";

const classes = {
  loading: {
    height: 500,
    [mobile]: {
      height: 300
    }
  },
  icon: ({ theme, size }) => ({
    color: theme.colors.dark,
    fontSize: size
  })
};
const Loading = ({ className, size = 30 }) => {
  const theme = useTheme();

  return (
    <div className={cx("flexCenter", className)} css={classes.loading}>
      <LoadingOutlined style={classes.icon({ theme, size })} />
    </div>
  );
};

Loading.propTypes = {
  className: PropTypes.any,
  size: PropTypes.number
};

export default Loading;
