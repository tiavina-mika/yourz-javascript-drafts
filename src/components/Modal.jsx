/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { Modal as AntdModal } from "antd";
import PropTypes from "prop-types";

import Typography from "../components/Typography";
import Button from "./Button";

const classes = {
  modal: {
    "& .ant-modal-content": {
      borderRadius: 20,
      padding: "20px 20px"
    },

    "& .ant-modal-footer, .ant-modal-header": {
      border: "none",
      padding: 0
    },
    "& .ant-modal-body": {
      paddingTop: 15,
      paddingBottom: 20
    },
    "& .ant-modal-close-x": {
      display: "none"
    }
  },
  cancelButton: (theme) => ({
    marginTop: 9,
    color: "grey",
    border: "1px solid " + theme.colors.dark
  }),
  content: {
    fontSize: "18px !important"
  }
};

const Modal = ({
  title,
  onOk,
  onCancel,
  open,
  buttonOkText = "Confirmer",
  width = 390,
  className,
  content,
  buttonCancelText = "Annuler"
}) => {
  return (
    <AntdModal
      css={classes.modal}
      title={
        <Typography
          gutterBottom={false}
          alignment="center"
          variant="title"
          level={3}
        >
          {title}
        </Typography>
      }
      centered
      visible={open}
      onOk={onOk}
      onCancel={onCancel}
      width={width}
      className={className}
      footer={
        <div className="flexCenter">
          <Button
            text={buttonOkText}
            onClick={onOk}
            htmlType="button"
            type="primary"
            fullWidth
          />
          <Button
            text={buttonCancelText}
            onClick={onCancel}
            htmlType="button"
            css={classes.cancelButton}
            fullWidth
            type="default"
          />
        </div>
      }
    >
      {typeof content === "string" ? (
        <Typography
          // gutterBottom={false}
          variant="paragraph"
          alignment="center"
          css={classes.content}
        >
          {content}
        </Typography>
      ) : (
        content
      )}
    </AntdModal>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  className: PropTypes.any,
  open: PropTypes.bool,
  width: PropTypes.number,
  content: PropTypes.any,
  buttonOkText: PropTypes.string,
  buttonCancelText: PropTypes.string
};

export default Modal;
