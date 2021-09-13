/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import UploadInput from "./UploadInput";
import { uploadImages } from "../../actions/images";
import AddToCartModal from "./AddToCartModal";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [countFilesUploaded, setCountFilesUploaded] = useState(0);

  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [openProgressDialog, setOpenProgressDialog] = useState(false);
  const [addToCartStatus, setAddToCartStatus] = useState({
    message:
      "Vos photos sont en train d`'être téléchargées. Cela peut prendre quelques minutes...",
    loading: true,
    title: "Ajout au panier"
  });

  const toggleConfirmationDialog = () =>
    setOpenConfirmationDialog((prev) => !prev);
  const toggleProgressDialog = () => setOpenProgressDialog((prev) => !prev);

  const uploadFile = async () => {
    try {
      const newFiles = await uploadImages(
        files,
        setPercentage,
        setCountFilesUploaded
      );

      return newFiles;
      // toggleProgressDialog();
    } catch (err) {
      console.log("error", err.response);
      setPercentage(0);
    }
  };

  const onConfirm = async () => {
    toggleConfirmationDialog();
    toggleProgressDialog();
    const files = await uploadFile();
    setFiles(files);

    setAddToCartStatus((prev) => ({
      ...prev,
      message: "Votre création a été envoyée avec succès",
      loading: false,
      title: "Produit ajouté au panier"
    }));
    toggleProgressDialog();
  };

  const handleFilesChange = (selectedFiles) => {
    setFiles(selectedFiles);
  };

  return (
    <div className="flexCenter">
      <UploadInput maxCount={2} onChangeFiles={handleFilesChange} />
      <div className="m-y-20 stretchSelf flex1">
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
        {/* <Modal
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
        /> */}
        <AddToCartModal
          // open={true}
          open={openProgressDialog}
          percentage={percentage}
          countFilesUploaded={countFilesUploaded}
          filesCount={files.length}
          status={addToCartStatus}
        />
      </div>
    </div>
  );
};

export default Upload;
