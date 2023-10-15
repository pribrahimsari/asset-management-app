export const slugify = (str: string) => {
  return String(str)
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
};

/**
 * Example generated color: #acdddf
 * ref: https://helderesteves.com/generating-random-colors-js/
 * @param mode default is light
 */
export const generateRandomColorHex = (mode?: "light" | "dark") => {
  let color = "#";

  if (mode === "dark") {
    for (let i = 0; i < 3; i++)
      color += ("0" + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
  } else {
    // light
    for (let i = 0; i < 3; i++)
      color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
  }

  return color;
};

/**
 * easy hex to rgba conversion
 * Examples:
 *  - hex2rgba('FF0000');// rgb(255, 0, 0)
 *  - hex2rgba('#FF0000');// rgb(255, 0, 0)
 *  - hex2rgba('#FF0000', 1);// rgba(255, 0, 0, 1)
 *  - hex2rgba('F00');// rgb(255, 0, 0)
 *  - hex2rgba('#F00');// rgb(255, 0, 0)
 *  - hex2rgba('#F00', 1);// rgba(255, 0, 0, 1)
 * @param hex
 * @param alpha
 */
export const hex2rgba = (hex: string, alpha?: number) => {
  hex = hex.replace("#", "");
  const r = parseInt(hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
  const g = parseInt(hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
  const b = parseInt(hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

// @author: me :)
export const generateRandomRgbAColor = (mode?: "light" | "dark", alpha?: number) => {
  const hex = generateRandomColorHex(mode);
  return hex2rgba(hex, alpha);
};
