/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import ProgressBar from "../../components/ProgressBar";
import UploadInput from "./UploadInput";
import { uploadImage } from "../../actions/images";
import Typography from "../../components/Typography";

const classes = {
  upload: {},
  countUploadedFiles: {
    fontSize: "18px !important",
    marginTop: 6
  }
};

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [countFilesUploaded, setCountFilesUploaded] = useState(0);

  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [openProgressDialog, setOpenProgressDialog] = useState(false);

  const toggleConfirmationDialog = () =>
    setOpenConfirmationDialog((prev) => !prev);
  const toggleProgressDialog = () => setOpenProgressDialog((prev) => !prev);

  const uploadFile = async () => {
    try {
      const newFiles = [];
      let totalPercentage = 0;
      let filesUploaded = 0;
      // let newPercent =
      for (const file of files) {
        const { data, progressPercent } = await uploadImage(
          file.file.originFileObj
        );
        // setPercentage(progressPercent);
        totalPercentage = progressPercent;
        filesUploaded++;
        newFiles.push({ ...files, data });
      }
      totalPercentage = (files.length - 1) * totalPercentage;
      setPercentage(totalPercentage);
      setCountFilesUploaded(filesUploaded);

      // console.log('newFiles', newFiles)
      setFiles(newFiles);
      // await uploadFile(formData, setPercentage);
      // setPercentage(0);
    } catch (err) {
      console.log("error", err.response);
      setPercentage(0);
    }
  };

  console.log("files", files);

  const onConfirm = () => {
    toggleConfirmationDialog();
    uploadFile();
    toggleProgressDialog();
  };

  const handleFilesChange = (selectedFiles) => {
    setFiles(selectedFiles);
  };

  const uploadDetails = (
    <div className="stretchSelf">
      <ProgressBar percent={percentage} />
      <Typography
        theme="active"
        className="flexCenter"
        css={classes.countUploadedFiles}
      >
        {countFilesUploaded} / {files.length}
      </Typography>
    </div>
  );

  return (
    <div className="flexRow justifyCenter" css={classes.upload}>
      <UploadInput maxCount={2} onChangeFiles={handleFilesChange} />
      <div className="m-y-20">
        <div className="flexCenter" onClick={toggleConfirmationDialog}>
          <Button text="Confimer" />
        </div>
        <Modal
          open={openConfirmationDialog}
          title="Tout est bon ?"
          description="Pensez à bien vérifier vos photos et à les recadrer si besoin"
          buttonOkText="C'est tout bon !"
          buttonCancelText="Je vérifie"
          onCancel={toggleConfirmationDialog}
          onOk={onConfirm}
        />
        <Modal
          open={openProgressDialog}
          content={uploadDetails}
          title="Faîtes vous plaisir"
          description="Vos photos sont en train d'être téléchargées. Cela peut prendre quelques minutes..."
          buttonOkText="Continuer vers le pariner"
          buttonCancelText="Je vérifie"
          // onOk={onUpload}
          contentAlignment="left"
          disabled
          width={450}
        />
      </div>
    </div>
  );
};

export default Upload;
