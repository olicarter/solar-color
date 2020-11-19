/**
 * Get contrast text from input color
 * @see http://www.w3.org/TR/AERT#color-contrast
 * @returns {string}
 */
export const getContrastText = (r, g, b) => {
  const o = Math.round(
    (parseInt(r) * 299 + parseInt(g) * 587 + parseInt(b) * 114) / 1000
  );
  return o > 125 ? 'black' : 'white';
};
