import axios from "axios";

/**
 * upload image
 * @returns {Object}
 */
export const uploadImage = async (
  file,
  setPercentage,
  countFiles,
  userId = "uidxxx"
) => {
  const formData = new FormData();
  formData.append("image", file);
  // formData.append("type", "userImage");
  // formData.append("userId", userId);

  const options = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percent = Math.floor((loaded * 100) / total);

      if (percent <= 100) {
        setPercentage(percent / countFiles);
      }
    }
  };

  const { data } = await axios.post(
    "https://nestjs-upload.herokuapp.com/",
    formData,
    options
  );

  if (!data) {
    throw new Error("No image id");
  }

  return data;
};

/**
 * upload image
 * @returns {Object}
 */
export const uploadImage2 = async (file, userId, setPercentage) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("type", "userImage");
  formData.append("userId", userId);

  const options = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percent = Math.floor((loaded * 100) / total);

      if (percent <= 100) {
        setPercentage(percent);
      }
    }
  };

  const { data } = await axios.post(
    "https://nestjs-upload.herokuapp.com/",
    formData,
    options
  );

  if (!data) {
    throw new Error("No image id");
  }

  return data;
};
