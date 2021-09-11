export const EDITOR_PROPERTIES = ["police", "textSize", "textColor", "crop"];
export const FONTS = [
  "Montserrat",
  "AmaticSC",
  "Courgette",
  "DelaGothicOne",
  "Neucha",
  "Parisienne",
  "PlayfairDisplay"
];

export const COLORS = [
  { color: "#fff", border: "000" },
  { color: "#000", border: "7885E9" },
  { color: "#79B3F7" },
  { color: "#43C093" },
  { color: "#EEC456" },
  { color: "#EE9919" },
  { color: "#F32840" },
  { color: "#BCBCBC" }
];

export const ROUTES = {
  updateUserImageLayer: "/update-user-image-layer",
  createMontage: "/create-montage",
  upload: "/upload",
  confirmModal: "/confirm modal"
};

export const MENU_LINKS = [
  {
    text: "Mettre à jour l'image d'un calque user image",
    href: ROUTES.updateUserImageLayer
  },
  {
    text: "Créer un montage à partir d'un template et des images",
    href: ROUTES.createMontage
  },
  {
    text: "Upload des images avec progressbar [Avec Interface]",
    href: ROUTES.upload
  },
  {
    text: "Modal de confirmation",
    href: ROUTES.confirmModal
  }
];

export const MENU_HEIGHT = 112;
