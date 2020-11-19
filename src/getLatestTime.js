import { getTimestamp } from './getTimestamp';

/**
 * Get latest time
 * @param {Object} obj Object with Date properties
 */
export const getLatestTime = obj =>
  Object.entries(obj).reduce((prev, curr) => {
    const prevTime = getTimestamp(prev);
    const currTime = getTimestamp(curr[1]);
    return currTime > prevTime ? curr : prev;
  });
