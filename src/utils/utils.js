/**
 * show this message if uploaded files number is lower than the required number
 * @param {number} max
 * @param {number} count
 * @returns {string}
 */
export const getImageUploadCountMessage = (max, count) => {
  const photoCount = max - count;
  const message = "Sélectionnez encore " + photoCount + " photo";
  return message + (photoCount > 1 ? "s" : "");
};

// to capitalize only first letter
export const capitalizeFirstLetter = (string) => {
  if (
    !string ||
    typeof string !== "string" ||
    (string && string.trim().length === 0)
  )
    return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// to capitalize all first letter of each word
export const capitalizeCase = (string) => {
  if (!string) {
    return "";
  }
  string = string.trim(); // important
  if (!string.length) {
    return "";
  }
  return string
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");
};
// ----------------------------------------- //
// ------------- images upload ------------- //
// ----------------------------------------- //
export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

/**
 * Convert cm to px
 * @param {integer} value
 * @param {integer} dpi
 * @returns
 */
export const cmToPx = (value, dpi = 150) => {
  if (value == null) {
    return value;
  }
  const defaultValueInch = 0.39370079; // default value on Inch
  // round to the nearest integer
  return Math.ceil(value * defaultValueInch * dpi);
};

export const zoom2 = (size, value = 0.4) => {
  return `calc(${size * value}px)`;
};

export const zoom = (template, size) => {
  let value;
  const width = cmToPx(template.width);

  if (width >= 2995) {
    value = 1;
  } else {
    value = 0.8;
  }
  return `calc(${size * value}px)`;
};
