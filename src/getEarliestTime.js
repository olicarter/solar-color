import { getTimestamp } from './getTimestamp';

/**
 * Get earliest time
 * @param {Object} obj Object with Date properties
 */
export const getEarliestTime = obj =>
  Object.entries(obj).reduce((prev, curr) => {
    const prevTime = getTimestamp(prev);
    const currTime = getTimestamp(curr[1]);
    return currTime < prevTime ? curr : prev;
  });
