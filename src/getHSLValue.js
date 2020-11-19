import { getNextClosestTimeFromNow } from './getNextClosestTimeFromNow';
import { getPreviousClosestTimeFromNow } from './getPreviousClosestTimeFromNow';
import { getSolarTimes } from './getSolarTimes';

/**
 * Get dynamic value of hue, saturation or lightness
 * @param {Object} values
 * @param {string} type name of value to get
 */
export const getHSLValue = (values, type) => {
  const now = Date.now();

  const today = getSolarTimes(now, 51.5074, 0.1278);

  if (typeof values[type] === 'number') return values[type];

  const previousKey = getPreviousClosestTimeFromNow(today)[0];
  const nextKey = getNextClosestTimeFromNow(today)[0];

  const previousValue = values[type][previousKey];
  const nextValue = values[type][nextKey];

  const difference = nextValue - previousValue;

  const msInCurrentPeriod =
    getNextClosestTimeFromNow(today)[1] -
    getPreviousClosestTimeFromNow(today)[1];
  const fractionThroughCurrentPeriod =
    (now - getPreviousClosestTimeFromNow(today)[1]) / msInCurrentPeriod;

  return previousValue + difference * fractionThroughCurrentPeriod;
};
