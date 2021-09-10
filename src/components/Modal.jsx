/** @jsxRuntime classic /
/* @jsx jsx */
import { cx } from "@emotion/css";
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
  description: {
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
  buttonCancelText = "Annuler",
  disabled = false,
  contentAlignment = "left",
  description,
  contentClassName
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
            disabled={disabled}
          />
          {onCancel && (
            <Button
              text={buttonCancelText}
              onClick={onCancel}
              htmlType="button"
              css={classes.cancelButton}
              fullWidth
              type="default"
            />
          )}
        </div>
      }
    >
      {description && (
        <Typography
          // gutterBottom={false}
          variant="paragraph"
          alignment={contentAlignment}
          css={classes.description}
        >
          {description}
        </Typography>
      )}
      {content && (
        <div className={cx("flexCenter", contentClassName)}>{content}</div>
      )}
    </AntdModal>
  );
};

Modal.propTypes = {
  contentAlignment: PropTypes.oneOf(["center", "left", "right"]),
  title: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  className: PropTypes.any,
  contentClassName: PropTypes.any,
  open: PropTypes.bool,
  width: PropTypes.number,
  content: PropTypes.any,
  description: PropTypes.string,
  buttonOkText: PropTypes.string,
  buttonCancelText: PropTypes.string,
  disabled: PropTypes.bool
};

export default Modal;
