/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";

import { css } from "@emotion/css";
import { Upload as AntdUpload } from "antd";
import PropTypes from "prop-types";

import Button from "../../components/Button";
import Loading from "../../components/Loading";
import Typography from "../../components/Typography";
import { getBase64, getImageUploadCountMessage } from "../../utils/utils";
import { imageUploadValidation } from "../../utils/validations";
import UploadField from "./UploadField";
import DisplayInputImages from "./DisplayInputImages";

const { Dragger } = AntdUpload;

const props = {
  name: "file",
  multiple: true
};

const classes = {
  dragger: {
    background: "none",
    border: "none"
  },
  content: {
    width: 335
  },
  text: {
    color: "#676C75 !important",
    fontSize: "18px !important",
    fontWeight: 500
  },
  button: {
    marginTop: 26
  }
};

const label =
  "Accédez à votre bibliothèque locale de photo et sélectionnez les photos que vous souhaitez utiliser.";

const UploadInput = ({ maxCount = 1, onChangeFiles }) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = async ({ fileList }) => {
    setError("");
    setInfo("");
    setLoading(true);

    const filesArr = [];
    const errors = [];
    for (const file of fileList) {
      const errorMessage = imageUploadValidation(file);

      if (!errorMessage) {
        const base64 = await getBase64(file.originFileObj);
        filesArr.push({
          file,
          url: base64
        });
      } else {
        errors.push(errorMessage);
      }
    }

    if (errors.length > 0) {
      setError(errors[0]);
    }

    // get unique files if it's already uploaded previously
    const uniqueFiles = [
      ...new Map(
        [...filesArr, ...files].map((item) => [item.file.name, item])
      ).values()
    ];
    setFiles(uniqueFiles);

    onChangeFiles(uniqueFiles);

    // if the uploaded files count is lower than the files required
    if (uniqueFiles.length < maxCount) {
      setInfo(getImageUploadCountMessage(maxCount, uniqueFiles.length));
    }

    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Dragger
      {...props}
      style={classes.dragger}
      onChange={onChange}
      showUploadList={false}
      maxCount={maxCount}
    >
      <UploadField error={error} filesCount={files.length}>
        <div css={!info && classes.content} className="flexCenter">
          {info || error || files.length < 1 ? (
            <Typography css={classes.text}>{info || error || label}</Typography>
          ) : (
            // show images with a message with remaining images required
            <div className="flexCenter">
              <DisplayInputImages files={files} />
              {info && <Typography>{info}</Typography>}
            </div>
          )}
          <Button text="Accéder à vos photos" css={classes.button} />
        </div>
      </UploadField>
    </Dragger>
  );
};

UploadInput.propTypes = {
  onChangeFiles: PropTypes.func,
  maxCount: PropTypes.number
};

export default UploadInput;
