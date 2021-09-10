/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";

const classes = {
  displayInputImages: {
    margin: -5
  },
  imgContainer: {
    background: "#C4C4C4",
    borderRadius: 15,
    overflow: "hidden",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    objectFit: "cover",
    width: 177,
    height: 120,
    margin: 5
  },
  img: {
    width: "100%"
  }
};

/* eslint-disable no-nested-ternary */
const DisplayInputImages = ({ files }) => {
  return (
    <div
      css={classes.displayInputImages}
      className="flexRow justifyCenter alignCenter stretchSelf flex1"
    >
      {files.map(
        (file, index) =>
          file.url && (
            <div css={classes.imgContainer} key={index}>
              <img src={file.url} alt="miniature" css={classes.img} />
            </div>
          )
      )}
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
