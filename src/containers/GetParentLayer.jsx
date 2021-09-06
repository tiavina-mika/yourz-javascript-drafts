/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import Bloc from "../components/Bloc";

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
        { id: "ui1", type: "userImage", file: { file: "/ui1.jpg" } },
        { id: "ui11", type: "userImage", file: { file: "/ui11.jpg" } },
        { id: "ut1", type: "userText" },
        { id: "i1", type: "image" }
      ]
    },
    { id: "i2", type: "image" },
    { id: "ui12", type: "userImage", file: { file: "/ui12.jpg" } }
  ]
};

// the selected layer to change image
const selectedLayer = {
  id: "ui11",
  type: "userImage",
  file: { file: "/ui11.jpg" }
};

/**
 * update the template with new updated layers
 */
const getLayerWithMask = ({ selectedTemplate, selectedLayer }) => {
  const template = { ...selectedTemplate };

  let newLayer;

  for (const layer of template.layers) {
    if (layer.type === "mask" && layer.layers) {
      for (const subLayer of layer.layers) {
        if (subLayer.id === selectedLayer.id) {
          delete layer.layers;
          newLayer = {
            maskLayer: layer,
            userImageLayer: selectedLayer
          };
        }
      }
    } else {
      if (layer.id === selectedLayer.id) {
        newLayer = { userImageLayer: selectedLayer };
      }
    }
  }

  return newLayer;
};

// --------------------------- //
// -------- component -------- //
// --------------------------- //
const GetParentLayer = () => {
  return (
    <div className="flexCenter">
      <Bloc
        title="Description"
        description="If the selected layer is a level 2 layer, get its layer parent with the current selected children."
      />
      <Bloc title="Template" src={template} />
      <Bloc
        title="Selected Layer"
        description="Layer to update"
        src={selectedLayer}
      />
      <Bloc
        title="Output"
        src={getLayerWithMask({
          selectedLayer,
          selectedTemplate: template
        })}
      />
    </div>
  );
};

export default GetParentLayer;
