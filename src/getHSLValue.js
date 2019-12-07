import { getNextClosestTimeFromNow, getPreviousClosestTimeFromNow } from ".";

/**
 * Get dynamic value of hue, saturation or lightness
 * @param {string} type name of value to get
 */
export default type => {
  const now = Date.now();

  const today = getSolarTimes(now, 51.5074, 0.1278);

  if (typeof hslValues[type] === "number") return hslValues[type];

  const previousKey = getPreviousClosestTimeFromNow(today)[0];
  const nextKey = getNextClosestTimeFromNow(today)[0];

  const previousValue = hslValues[type][previousKey];
  const nextValue = hslValues[type][nextKey];

  const difference = nextValue - previousValue;

  const msInCurrentPeriod =
    getNextClosestTimeFromNow(today)[1] -
    getPreviousClosestTimeFromNow(today)[1];
  const fractionThroughCurrentPeriod =
    (now - getPreviousClosestTimeFromNow(today)[1]) / msInCurrentPeriod;

  return previousValue + difference * fractionThroughCurrentPeriod;
};
