/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import Bloc from "../components/Bloc";

// const files = [
//   { id: "f1", file: "f1.jpg", imageId: "imageId1" },
//   { id: "f2", file: "f2.jpg", imageId: "imageId2" },
//   { id: "f3", file: "f3.jpg", imageId: "imageId3" }
// ];

const files = [
  { id: "f1", file: "f1.jpg" },
  { id: "f2", file: "f2.jpg" },
  { id: "f3", file: "f3.jpg" }
];

// ------------------------------- //
// ------------ template --------- //
// ------------------------------- //
const template = {
  name: "template1",
  layers: [
    {
      id: "m1",
      type: "mask",
      layers: [
        {
          id: "ui1",
          type: "userImage",
          width: 200,
          height: 200,
          file: { id: "f1", file: "/f1.jpg" }
        },
        {
          id: "ui2",
          type: "userImage",
          width: 300,
          height: 200,
          file: { id: "f1", file: "/f1.jpg" }
        },
        { id: "ut1", type: "userText", text: "coool", color: "#fff" },
        { id: "i1", type: "image" }
      ]
    },
    { id: "i2", type: "image" },
    { id: "ut2", type: "userText", text: "coool2", color: "#000" },
    {
      id: "ui12",
      type: "userImage",
      width: 300,
      height: 500,
      file: { id: "f2", file: "/f2.jpg" }
    }
  ]
};

/**
 * simulate file upload
 * @param {*} files
 */
const uploadImages = (files) => {
  const newFiles = [];
  // simulate ajax request for image upload
  // the request return a image Id
  for (const file of files) {
    newFiles.push({ ...file, imageId: "imageId_" + file.id });
  }
  return newFiles;
};

/**
 * create montage by template
 */
const createMontage = (template, uploadedFiles) => {
  const files = uploadImages(uploadedFiles);
  const fileById = new Map();

  files.forEach((file) => {
    fileById.set(file.id, file);
  });

  const montage = { template };

  const montageLayers = [];
  const treatLayers = (layers) => {
    for (const layer of layers) {
      if (layer.type === "userImage") {
        const file = fileById.get(layer.file.id);
        const newLayer = {
          id: layer.id,
          type: layer.type,
          imageHeight: layer.height,
          imageWidth: layer.height,
          imageId: file.imageId
        };
        montageLayers.push(newLayer);
      } else if (layer.type === "userText") {
        const newLayer = {
          id: layer.id,
          type: layer.type,
          text: layer.text,
          color: layer.color
        };
        montageLayers.push(newLayer);
      } else if (layer.type === "mask" && layer.layers) {
        treatLayers(layer.layers);
      }
    }
  };

  treatLayers(template.layers);
  montage.layers = montageLayers;
  console.log(montage);

  return montage;
};

// --------------------------- //
// -------- component -------- //
// --------------------------- //
const CreateMontage = () => {
  return (
    <div className="flexCenter">
      <Bloc
        title="Description"
        description="Créer un montage à partir d'un template et d'image."
      />
      <Bloc title="Template" src={template} />
      <Bloc title="Files to upload" src={files} />
      <Bloc title="Uploaded files" src={uploadImages(files)} />

      <Bloc title="Output" src={createMontage(template, files)} />
    </div>
  );
};

export default CreateMontage;
