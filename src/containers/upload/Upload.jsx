/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import UploadInput from "./UploadInput";

const classes = {
  upload: {}
};

const Upload = () => {
  const [files, setFiles] = useState();

  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible((prev) => !prev);

  const onConfirm = () => {
    console.log("confirmed !");
    toggle();
  };

  const handleFilesChange = (selectedFiles) => {
    setFiles(selectedFiles);
  };

  return (
    <div className="flexRow justifyCenter" css={classes.upload}>
      <UploadInput maxCount={1} onChangeFiles={handleFilesChange} />
      <div className="m-y-20">
        <div className="flexCenter" onClick={() => setVisible(true)}>
          <Button text="Confimer" />
        </div>
        <Modal
          open={visible}
          title="Tout est bon ?"
          content="Pensez à bien vérifier vos photos et à les recadrer si besoin"
          buttonOkText="C'est tout bon !"
          buttonCancelText="Je vérifie"
          onCancel={toggle}
          onOk={onConfirm}
        />
      </div>
    </div>
  );
};

export default Upload;
