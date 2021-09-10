/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";

const classes = {
  imageContainer: {
    width: 177,
    height: 120,
    left: 449,
    top: 659,

    background: "#C4C4C4",
    borderRadius: 15,
    overflow: "hidden",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  },
  img: {
    width: "100%"
  }
};

/* eslint-disable no-nested-ternary */
const DisplayInputImages = ({ files }) => {
  return (
    <div className="flexRow justifyCenter" css={classes.checkboxes}>
      {files.map((file, index) => (
        <div css={classes.imageContainer} key={index}>
          {file.url && (
            <img
              src={file.url}
              alt="miniature"
              width={177}
              height={120}
              objectFit="cover"
            />
          )}
        </div>
      ))}
    </div>
  );
};

DisplayInputImages.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      file: PropTypes.any
    })
  )
};

export default DisplayInputImages;
