/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";

import { mq } from "../../styles/styles";

const classes = {
  upload: ({ error, filesCount }) => (theme) =>
    mq({
      marginTop: 90,
      marginBottom: 228,
      background: error ? theme.colors.errorSecondary : "#E7FDEF",
      border: `2px dashed ${error ? theme.colors.errorPrimary : "#4752D8"}`,
      boxSizing: "border-box",
      borderRadius: 15,
      height: filesCount > 5 ? 409 : 281,
      width: ["90vw", false, false, false, 1201]
    })
};

const UploadField = ({ children, error, filesCount = 1 }) => {
  return (
    <div css={classes.upload({ error, filesCount })} className="flexCenter">
      {children}
    </div>
  );
};

UploadField.propTypes = {
  children: PropTypes.node,
  error: PropTypes.string,
  filesCount: PropTypes.number
};

export default UploadField;
