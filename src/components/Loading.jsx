/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { cx } from "@emotion/css";
import { Spin } from "antd";
import PropTypes from "prop-types";

const classes = {
  loading: {
    height: 300
  }
};
const Loading = ({ className }) => {
  return (
    <div className={cx("flexCenter", className)} css={classes.loading}>
      <Spin />
    </div>
  );
};

Loading.propTypes = {
  className: PropTypes.any
};

export default Loading;
