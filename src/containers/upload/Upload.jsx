/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import ProgressBar from "../../components/ProgressBar";
import UploadInput from "./UploadInput";

const classes = {
  upload: {}
};

const Upload = () => {
  const [files, setFiles] = useState();

  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [openProgressDialog, setOpenProgressDialog] = useState(false);

  const toggleConfirmationDialog = () =>
    setOpenConfirmationDialog((prev) => !prev);
  const toggleProgressDialog = () => setOpenProgressDialog((prev) => !prev);

  const onConfirm = () => {
    toggleConfirmationDialog();
    toggleProgressDialog();
  };

  const handleFilesChange = (selectedFiles) => {
    setFiles(selectedFiles);
  };

  return (
    <div className="flexRow justifyCenter" css={classes.upload}>
      <UploadInput maxCount={1} onChangeFiles={handleFilesChange} />
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
          content={<ProgressBar percent={80} />}
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
