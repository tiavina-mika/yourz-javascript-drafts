/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useState } from "react";

import Button from "../components/Button";
import Modal from "../components/Modal";

const ConfirmModal = () => {
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible((prev) => !prev);

  const onConfirm = () => {
    console.log("confirmed !");
    toggle();
  };

  return (
    <>
      <div className="flexCenter m-y-20" onClick={() => setVisible(true)}>
        <Button text="Open Modal" />
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
    </>
  );
};

export default ConfirmModal;
