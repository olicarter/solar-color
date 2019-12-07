import { getContrastText, getHSLValue, HSLToRGB } from "./src";

/**
 * An object containing desired values for hue, saturation and lightness at various times
 * @param {number|Object} hue number for static hue value, or object containing values for different times
 * @param {number} hue.nadir hue at nadir
 * @param {number} hue.dawn hue at dawn
 * @param {number} hue.sunriseEnd hue at sunriseEnd
 * @param {number} hue.solarNoon hue at solarNoon
 * @param {number} hue.sunsetStart hue at sunsetStart
 * @param {number} hue.dusk hue at dusk
 * @param {number|Object} saturation number for static saturation value, or object containing values for different times
 * @param {number} saturation.min minimum saturation value
 * @param {number} saturation.max maximum saturation value
 * @param {number} saturation.nadir saturation at nadir
 * @param {number} saturation.dawn saturation at dawn
 * @param {number} saturation.sunriseEnd saturation at sunriseEnd
 * @param {number} saturation.solarNoon saturation at solarNoon
 * @param {number} saturation.sunsetStart saturation at sunsetStart
 * @param {number} saturation.dusk saturation at dusk
 * @param {number|Object} lightness number for static lightness value, or object containing values for different times
 * @param {number} lightness.min minimum lightness value
 * @param {number} lightness.max maximum lightness value
 * @param {number} lightness.nadir lightness at nadir
 * @param {number} lightness.dawn lightness at dawn
 * @param {number} lightness.sunriseEnd lightness at sunriseEnd
 * @param {number} lightness.solarNoon lightness at solarNoon
 * @param {number} lightness.sunsetStart lightness at sunsetStart
 * @param {number} lightness.dusk lightness at dusk
 * @returns {Object} returns object with color and contrastText properties
 */
export default ({
  hue = 210,
  saturation = {
    min: 10,
    max: 90,
    nadir: 33,
    dawn: 66,
    sunriseEnd: 100,
    solarNoon: 33,
    sunsetStart: 100,
    dusk: 66
  },
  lightness = {
    min: 10,
    max: 90,
    nadir: 0,
    dawn: 0,
    sunriseEnd: 66,
    solarNoon: 100,
    sunsetStart: 66,
    dusk: 0
  }
}) => {
  /**
   * Get hue, saturation and lightness values
   */
  const hue = getHSLValue("hue");

  const saturation =
    (getHSLValue("saturation") / 100) *
      (hslValues.saturation.max - hslValues.saturation.min) +
    hslValues.saturation.min;

  const lightness =
    (getHSLValue("lightness") / 100) *
      (hslValues.lightness.max - hslValues.lightness.min) +
    hslValues.lightness.min;

  const { r, g, b } = HSLToRGB(hue, saturation, lightness);

  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const contrastText = getContrastText(r, g, b);

  return { color, contrastText };
};
