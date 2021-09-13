/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { LoadingOutlined, CheckOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import Modal from "../../components/Modal";
import ProgressBar from "../../components/ProgressBar";
import Typography from "../../components/Typography";

const classes = {
  upload: {},
  loadingButton: (theme) => ({
    backgroundColor: theme.colors.primary,
    padding: "9px 20px 8px 20px",
    borderRadius: 20
  }),
  loadingButtonText: {
    color: "#fff !important",
    textTransform: "uppercase",
    fontSize: "14px !important",
    fontWeight: 600,
    marginLeft: 10
  },
  icon: {
    color: "#fff"
  }
};

const AddToCartModal = ({
  percentage,
  countFilesUploaded,
  open = false,
  filesCount,
  status
}) => {
  // ----------------------------------------- //
  // -- upload images progressbar component -- //
  // ----------------------------------------- //
  const uploadDetails = (
    <div className="stretchSelf">
      <ProgressBar percent={percentage} />
      <Typography
        theme="active"
        className="flexCenter"
        css={classes.countUploadedFiles}
      >
        {countFilesUploaded} / {filesCount}
      </Typography>
    </div>
  );

  // ----------------------------------------- //
  // -------------- modal title -------------- //
  // ----------------------------------------- //
  const addToCartTitle = (
    <div className="flexCenter m-b-20">
      <div className="flexRow alignCenter" css={classes.loadingButton}>
        {status.loading ? (
          <LoadingOutlined style={classes.icon} />
        ) : (
          <CheckOutlined style={classes.icon} />
        )}
        <Typography css={classes.loadingButtonText}>{status.title}</Typography>
      </div>
    </div>
  );

  return (
    <Modal
      open={open}
      content={uploadDetails}
      title={addToCartTitle}
      description={status.message}
      buttonOkText="Continuer vers le panier"
      buttonCancelText="Je vérifie"
      contentAlignment="left"
      disabled={status.loading}
      width={450}
    />
  );
};

AddToCartModal.propTypes = {
  percentage: PropTypes.number,
  filesCount: PropTypes.number,
  countFilesUploaded: PropTypes.number,
  open: PropTypes.bool,
  status: PropTypes.any
};

export default AddToCartModal;
