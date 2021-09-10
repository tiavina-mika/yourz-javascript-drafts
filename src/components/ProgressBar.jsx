/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import { Progress } from "antd";
import PropTypes from "prop-types";

const classes = {
  progress: {
    "& .ant-progress-bg": {
      height: "14px !important",
      background: "red"
    }
  }
};

const ProgressBar = ({ showInfo = false, percent = 0 }) => {
  const theme = useTheme();

  return (
    <Progress
      css={classes.progress}
      percent={percent}
      showInfo={showInfo}
      trailColor={theme.colors.primaryLight}
      strokeColor={theme.colors.primary}
    />
  );
};

ProgressBar.propTypes = {
  percent: PropTypes.number,
  showInfo: PropTypes.bool
};

export default ProgressBar;
